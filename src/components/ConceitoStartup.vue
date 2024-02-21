<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-center">
    <div class="flex flex-col mx-auto max-w-6xl relative shadow-md rounded-md ">
      <div class="mb-6"> <!-- Adicionando margem na parte inferior -->
        <h1 class="text-white text-4xl font-bold">Ready to create Shorts in seconds?</h1>
        <p class="text-white font-medium">Start by pasting your YouTube video link below</p>
      </div>
      <div class="flex">
        <div class="w-full">
          <div class="mt-2">
            <input
                type="text"
                name="name"
                id="name"
                class="bg-transparent bg-gray-200 bg-opacity-25 block w-full rounded-full border-0 px-4 py-1.5 text-white shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="digite um conceito de startups"
                @keyup.enter="handleEnter"
                v-model="searchTerm"
            />
          </div>
        </div>
      </div>
      <div class="mt-6">
        <h2 class="text-sm font-medium text-gray-500">Pinned Projects</h2>
        <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          <li v-for="project in $pinia.state.value.startup.startups" :key="project.name" class="col-span-1 flex flex-col rounded-md shadow-sm">
            <div :class="[project.bgColor, 'flex w-full flex-shrink-0 items-center justify-center rounded-t-md text-sm font-medium text-white']">{{ project.initials }}</div>
            <div class="flex flex-col flex-1 justify-between border border-gray-200 bg-white">
              <div class="flex flex-col flex-1 p-4">
                <a :href="project.href" class="font-medium text-gray-900 hover:text-gray-600">{{ project.name }}</a>
                <p class="text-gray-500 flex-1">{{ project.text }}</p>
                <p class="text-gray-500">{{ project.members }} Members</p>
              </div>
              <div class="flex-shrink-0 px-4 py-2">
                <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Open options</span>
                  <!-- Your ellipsis icon here -->
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { startups } from '@/store/startups.js'

const startup = startups()

const projects = [
  { name: '1. **Plataforma de Ensino Online Personalizado**', initials: 'PEOP', href: '#', text: 'Uma startup que utiliza tecnologia para personalizar o ensino e a aprendizagem de forma individualizada, oferecendo cursos e materiais de estudo adaptados às necessidades de cada aluno, com o uso de inteligência artificial e análise de dados.', bgColor: 'bg-pink-600', members: 10 },
]

const searchTerm = ref('')

const getStartups = async () => {
  const response = await startup.fetchStartups(searchTerm.value, 'startup tecnologia')
  console.log('response-componente', response)
}

const handleEnter = () => {
  getStartups()
}

</script>
