<template>
<div class="jumbotron">
<div class="container">
  <h1 class="display-4">Home Page</h1>
  <p class="lead">This is my 1st Vue Cli demo project. <br> No backend functions </p>
  <hr class="my-4">
  <ul>
    <li>Frontend data are fetched from <a href="https://fakestoreapi.com/" target="_blank">Fake Store API</a></li>
    <li>Vue router</li>
    <li>Navigation guard</li>
    <li>Bootstrap 4.x</li>
  </ul>
  <hr>
  <p>For login: (email: admin@gmail.com, password: password)</p>
</div>
</div>
</template>

<script>
export default {

  name: 'Home',

  data () {
    return {

    }
  }
}
</script>

