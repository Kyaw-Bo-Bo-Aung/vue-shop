<template>
<div class="container mt-5">
	<div v-if="loading" class="p-loader-container">
		<div class="spinner-border p-loader" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
	<div v-else class="row">
		<div class="col-md-4 align-self-center">
			<img :src="product.image" alt="product image" class="img-fluid">
		</div>
		<div class="col-md-8 px-5">
			<h1 class="display-4">{{ product.title }}</h1>
			<div class="h3 text-primary my-4">$ {{ product.price }}</div>
			<div> {{ product.description }}</div>
			<div class="my-5">
				<router-link to="/product" class="btn btn-outline-secondary">Go Back</router-link>
				<button class="btn btn-primary float-right">Add to Cart</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>

import axios from 'axios'

export default {

name: 'ProductDetail',

data () {
	return {
		loading: false,
		product: {}
	}
},
created () {
	this.loading = true
	axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
	.then(res => {
		this.product = res.data
		this.loading = false
		})
}
}
</script>

<style lang="css" scoped>
img.img-fluid.pd-img {
    max-height: 400px;
}
</style>