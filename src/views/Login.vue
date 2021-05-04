<template>
<div class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-md-4">
			<div class="card">
				<div class="card-body">
					<div v-if="loginfailmsg" class="alert alert-danger alert-dismissible fade show" role="alert">
						{{ loginfailmsg }}
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<h3 class="mb-3">Login</h3>
					<form>
						<div class="form-group">
							<input v-model="email" class="form-control" type="email" name="" placeholder="Email">
						</div>
						<div class="form-group">
							<input v-model="password" class="form-control" type="password" name="" placeholder="Password">
						</div>
						<button @click.prevent="login" class="btn btn-primary btn-block">Login</button>
					</form>
				</div>
				<div class="card-footer">
					<small><span class="text-muted">Don't have an account? </span><a href="">Register</a></small>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {

	name: 'Login',

	data () {
		return {
			email: '',
			password: '',
			loginfailmsg: ''
		}
	},

	methods: {
		login(){
			if(this.email === "admin@gmail.com" && this.password === "password"){
				localStorage.setItem('auth', this.email)
				this.$router.push('/profile')
			}else {
				this.loginfailmsg = "Email or password is invalid."
			}
			
		}
	}

}
</script>

<style lang="css" scoped>
</style>