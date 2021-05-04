<template>
<div class="container my-4">
	<div v-if="loading" class="p-loader-container">
		<div class="spinner-border p-loader" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
	<div v-else class="row">
		<div class="col-md-4 my-3" v-for="product in products" :key="product.id">
			<div class="card">
				<div class="card-body text-center">
					<img :src="product.image" class="p-img img-fluid" alt="Product image">
					<h5 class="mt-3">{{ product.title }}</h5>
					<div class="my-3 text-muted">$ {{ product.price }}</div>
					<router-link :to="`/products/${product.id}`" class="btn btn-primary btn-block">Detail</router-link>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'

export default {

name: 'Product',

data () {
	return {
		loading: false,
		products: []
	}
},

created() {
	this.loading = true
	axios.get('https://fakestoreapi.com/products')
	.then(res => {
		this.products = res.data
		this.loading = false
	})
}
}
</script>

<style lang="css" scoped>
img.p-img {
    height: 150px;
}
</style>		