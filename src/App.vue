<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const transcript = ref('')
const isRecording = ref(false)
const isMic = ref(false)

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

const addTodo = () => {
	if (input_content.value.trim() === '' || input_category.value === null) {
		return
	}

	todos.value.push({
		content: input_content.value,
		category: input_category.value,
		done: false,
		editable: false,
		createdAt: new Date().getTime()
	})
}

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
	name.value = localStorage.getItem('name') || ''
	todos.value = JSON.parse(localStorage.getItem('todos')) || []

	sr.continuous = true
	sr.interimResults = true

	sr.onstart = () => {
		console.log("Speech recog started")
		isMic.value = true
		isRecording.value = true
	}
	sr.onend = () => {
		console.log("Speech recog stopped")
		isMic.value = false
		isRecording.value = false
	}
	sr.onresult = (event) => {
		const t = Array.from(event.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('')

		transcript.value = t
		input_content.value = transcript.value
	}
})

const toggleButton = () => {
	if (isRecording.value) {
		sr.stop()
	} else {
		sr.start()
	}
}

</script>

<template>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,400;1,500;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <main class="app">

		<section class="greeting">
			<h2 class="title">
				Hi, <input type="text" id="name" placeholder="Name here" v-model="name">
			</h2>
		</section>
		<div class="container">
			<section class="create-todo">
				<h3>CREATE A TODO</h3>
				<h4>Type or click the mic to speak</h4>
					<form id="new-todo-form" @submit.prevent="addTodo">
						<input 
							type="text" 
							name="content" 
							id="content" 
							placeholder="e.g. make a video"
							v-model="input_content" />
						
						<div class="transcript" v-text="transcript" hidden></div>
						
						<h4>Pick a category</h4>
						<div class="options">

							<label>
								<input 
									type="radio" 
									name="category" 
									id="category1" 
									value="business"
									v-model="input_category" />
								<span class="bubble business"></span>
								<div>Business</div>
							</label>

							<label>
								<input 
									type="radio" 
									name="category" 
									id="category2" 
									value="personal"
									v-model="input_category" />
								<span class="bubble personal"></span>
								<div>Personal</div>
							</label>

						</div>

						<input type="submit" value="Add todo" />
					</form>
			</section>
			<button class="icon-voice" @click="toggleButton()" v-if="!isMic">
				<font-awesome-icon icon="fa-solid fa-microphone-lines" size="2xl" style="color: #cfcfc4;" />
			</button>
			<button class="icon-voice" @click="toggleButton()" v-if="isMic">
				<font-awesome-icon icon="fa-solid fa-microphone-lines-slash" size="2xl" style="color: #cfcfc4;" />
			</button>
		</div>

		<section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.category == 'business' 
								? 'business' 
								: 'personal'
						}`"></span>
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.content" />
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>
				</div>

			</div>
		</section>

	</main>
</template>