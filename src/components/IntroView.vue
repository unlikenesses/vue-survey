<template>
	<div>
		<h1>Introduction</h1>
		<p>Enter your details to continue:</p>
		<div class="form-group">
			<input type="text" v-model="firstName" class="form-control" placeholder="First name">
		</div>
		<div class="form-group">
			<input type="text" v-model="lastName" class="form-control" placeholder="Last name">
		</div>
		<div class="form-group">
			<input type="email" v-model="email" class="form-control" placeholder="Email address">
		</div>
		<div class="form-group">
			<input type="text" v-model="companyName" class="form-control" placeholder="Company name">
		</div>
		<div class="form-group">
			<input type="text" v-model="companySize" class="form-control" placeholder="Company size">
		</div>
		<div class="form-group">
			<router-link v-if="true" to="/questions/1" class="btn btn-info">Submit</router-link>
		</div>
		<p>{{ this.store.details }}</p>
	</div>
</template>

<script>
	import store from './store.js';

	export default {
		beforeCreate: function() {
			document.body.className = 'intro';
		},
		data: function() {
			return {
				store: store,
				firstName: store.details.firstName,
				lastName: store.details.lastName,
				email: store.details.email,
				companyName: store.details.companyName,
				companySize: store.details.companySize,
			}
		},
		watch: {
			firstName: function(newValue) {
				this.store.details.firstName = newValue;
			},
			lastName: function(newValue) {
				this.store.details.lastName = newValue;
			},
			email: function(newValue) {
				this.store.details.email = newValue;
			},
			companyName: function(newValue) {
				this.store.details.companyName = newValue;
			},
			companySize: function(newValue) {
				this.store.details.companySize = newValue;
			}
		}
	}
</script>

<style>
</style>