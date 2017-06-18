<template>
	<div class="row">
		<div class="col-md-2">
			{{ question }}
		</div>
		<div class="col-md-10">
			<vue-slider v-model="value" v-bind="sliderSettings"></vue-slider>
		</div>
	</div>
</template>

<script>
	import vueSlider from 'vue-slider-component';
	import store from './store.js';

	export default {
		components: { vueSlider },
		props: ['id', 'question', 'answer', 'questionsIndex'],
		data: function() {
			return {
				value: this.answer,
				sliderSettings: {
					lazy: true,
					interval: 5,
					height: 20,
					piecewise: true,
					dotSize: 30
				},
				store: store
			}
		},
		watch: {
			value: function(newValue) {
				let newQuestions = this.store.questions[this.questionsIndex].questions.map((item, index) => {
					if (item.id === this.id) {
						item.answer = newValue;
					}
					return item;
				});
				this.store.questions[this.questionsIndex].questions = newQuestions;
			}
		}
	}
</script>