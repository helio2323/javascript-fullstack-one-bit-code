

<script setup>
import UserInfo from './UserInfo.vue'
import { reactive } from 'vue';

const state = reactive({
  login: '',
  name: '',
  bio: '',
  company: '',
  avatar_url: '',
  repos:  [],
  searchInput: ''
})

async function fetchGithubUser() {
  const res = await fetch(`https://api.github.com/users/${state.searchInput}`)
  const { login, name, bio, company, avatar_url } = await res.json()

  state.login = login
  state.name = name
  state.bio = bio
  state.company = company
  state.avatar_url = avatar_url
  state.repos = []

	fetchUserRepositores(login)
}

async function fetchUserRepositores(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await res.json()

  state.repos = repos
}
</script>

<template>
  <h1>GitHub User Data</h1>
  <input type="text" v-model="state.searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuário</button>

  <UserInfo :login="state.login" :name="state.name" :bio="state.bio" :company="state.company" :avatar_url="state.avatar_url" />

    <section v-if="state.repos.length > 0">
      <article v-for="repo of state.repos">
        <h3>{{ repo.full_name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank">Ver no GitHub</a>
      </article>
    </section>
</template>
