<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" :class="{ active: $route.path == '/' }">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item" :class="{ active: $route.path == '/product' }">
        <router-link class="nav-link" to="/product">Product</router-link>
      </li>
      <li class="nav-item" :class="{ active: $route.path == '/about' }">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li v-if="auth" class="nav-item" :class="{ active: $route.path == '/profile' }">
        <router-link class="nav-link" to="/profile">Profile</router-link>
      </li>
        <li v-if="!auth" class="nav-item" :class="{ active: $route.path == '/login' }">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li v-if="auth" class="nav-item">
          <a @click="logout" class="nav-link" style="cursor: pointer;">Logout</a>
        </li>
    </ul>
  </div>
</nav>

</template>

<script>

import { bus } from '../main.js'  
export default {

  name: "MenuBar",

  data() {
    return {
      auth: null
    }
  },

  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.auth = false
    }
  },

  created() {
    bus.$on('signout', (res) => this.auth = res)
  }


  


}
</script>

