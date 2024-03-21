const app = Vue.createApp({
template: '',
data() {
  return {
    login: 'helio2323',
    name: 'Helio',
    bio: 'Developer',
    company: 'Modern',
    avatar_url: 'https://unsplash.it/100/100?image=10',
    searchInput: ''

  }
},
methods: {
  async fetchGithubUser() {
    const response = await fetch(`https://api.github.com/users/${this.searchInput}`)
    const {login,name, bio, company, avatar_url} = await response.json()

    this.login = login
    this.name = name
    this.bio = bio
    this.company = company
    this.avatar_url = avatar_url
  }
}
})

app.mount('#app')