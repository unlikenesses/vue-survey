<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h1>Complete</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam voluptatum at. Labore molestiae ducimus neque, rem, dolorum quasi? Maiores nostrum mollitia nobis. Maiores excepturi, sapiente labore consequatur officia corporis!</p>
				</div>
				<div class="col-md-6">
					<graph :data={graphData} />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import graph from './Graph.js';
	import store from './store.js';

	export default {
		components: {
			graph
		},
		computed: {
			labels: function() {
				return this.store.questions.map((item, index) => {
					return item.name;
				});
			},
			answers: function() {
				return this.store.questions.map((item, index) => {
					var total = 0;
					for (var i = 0; i < item.questions.length; i++) {
						var question = item.questions[i];
						total += question.answer;
					}
					return (total / item.questions.length).toFixed(2);
				});				
			},
			graphData: function() {
				return {
					labels: this.labels,
					datasets: [
						{
						  label: 'Results',
						  data: this.answers,
						  borderColor: '#ff0000',
						  pointBackgroundColor: '#ff0000',
						  pointBorderColor: '#efefef',
						  pointRadius: 4
						}
					]
				}
			}
		},
		data: function() {
			return {
				store: store
			}
		}
	}
</script>