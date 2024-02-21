<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-center">
    <div v-if="$pinia.state.value.startup.isLoading" class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div class="spinner"></div>
    </div>
    <div class="flex flex-col mx-auto max-w-6xl relative shadow-md rounded-md ">
      <div class="mb-6">
        <h1 class="text-white text-4xl font-bold">Pronto para criar startups usando a inteligência artificial</h1>
        <p class="text-white font-medium">Use a API do ChatGPT para conversar com modelos treinados em diferentes domínios e obter ideias de negócios originais e viáveis.</p>
      </div>
      <div class="flex">
        <div class="w-full">
          <div class="mt-2">
            <input
                type="text"
                name="name"
                id="name"
                class="bg-transparent bg-gray-300 bg-opacity-35 block w-full rounded-full border-0 px-4 py-1.5 text-white shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="digite um conceito de startups"
                @keyup.enter="handleEnter"
                v-model="searchTerm"
            />
          </div>
        </div>
      </div>
      <div class="mt-6">
        <h2 class="text-sm font-medium text-gray-500">Resultados</h2>
        <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          <li v-for="project in $pinia.state.value.startup.startups" :key="project.name" class="col-span-1 flex flex-col rounded-md shadow-sm">
            <div :class="[project.bgColor, 'flex w-full flex-shrink-0 items-center justify-center rounded-t-md text-sm font-medium text-white']">{{ project.initials }}</div>
            <div class="flex flex-col flex-1 justify-between border border-gray-200 bg-white">
              <div class="flex flex-col flex-1 p-4">
                <a :href="project.href" class="font-medium text-gray-900 hover:text-gray-600">{{ project.name }}</a>
                <p class="text-gray-500 flex-1">{{ project.text }}</p>
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


const searchTerm = ref('')

const getStartups = async () => {
  const response = await startup.fetchStartups(searchTerm.value, 'startup tecnologia')
  console.log('response-componente', response)
}

const handleEnter = () => {
  getStartups()
}

</script>
<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
