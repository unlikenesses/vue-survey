<template>
	<div>
		<h2>Questions (Page {{ id }} of {{ numPages }})</h2>
		<h3>Group Name: {{ groupName }}</h3>
		<div class="container">
			<question 
				v-for="question in store.questions[questionsIndex].questions" 
				:key="question.id" 
				:id="question.id"
				:question="question.question" 
				:answer="question.answer"
				:questionsIndex="questionsIndex">
			</question>
		</div>
		<p>
			<router-link v-if="!firstPage" :to="'/questions/' + questionsIndex" class="btn btn-info">Previous</router-link>
			<router-link v-if="!lastPage" :to="'/questions/' + nextPageId" class="btn btn-info">Next</router-link>
			<router-link v-if="lastPage" to="/complete/" class="btn btn-info">Finish</router-link>
		</p>
		{{ this.store.questions }}
	</div>
</template>

<script>
	import question from './Question.vue';
	import store from './store.js';

	export default {
		props: ['id'],
		computed: {
			questionsIndex: function() {
				return this.id - 1;
			},
			nextPageId: function() {
				return parseInt(this.id) + 1;
			},
			firstPage: function() {
				return this.id == 1;
			},
			lastPage: function() {
				return this.id == this.store.questions.length;
			},
			numPages: function() {
				return this.store.questions.length;
			},
			groupName: function() {
				return this.store.questions[this.questionsIndex].name;
			}
		},
		components: {
			question
		},
		data: function() {
			return {
				store: store
			}
		}
	}
</script>