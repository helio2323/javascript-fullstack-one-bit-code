<script setup>
import {reactive, onMounted, onUpdated, onUnmounted} from 'vue';

const state = reactive({
  searchInput: '',
  automations: [],
});

async function fetchScrapyData (automation) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    automation_id: automation
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch('http://127.0.0.1:5000/api/workflowlist/read', requestOptions)
  const data = await res.json()

  state.automations = data[0]

  console.log(data)

}

// ...

onMounted(() => {
  console.log("O componente foi montado.")
})

onUpdated(() => {
  console.log("O componente foi atualizado.")
})

onUnmounted(() => {
  console.log("O componente foi desmontado.")
})

// ...

</script>

<template>
  <div>
    <h1>Scrapy BD</h1>
    <input type="text" v-model="state.searchInput" />
    <button v-on:click="fetchScrapyData(state.searchInput)">Carregar</button>
    <p>You typed: {{ state.searchInput }}</p>

    <h2>Lista de Automacoes: {{ state.searchInput }}</h2>
    
    <section>
      <article v-for="data of state.automations" >
        <p>{{data.scrapy_action }}</p>
        <p>{{ data.tag }}</p>
        <p>{{ data.automation_id }}</p>
      </article>
    </section>

  </div>
</template>


<style>
</style>
