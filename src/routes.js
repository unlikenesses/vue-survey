import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./components/HomeView.vue')
	},
	{
		path: '/intro',
		component: require('./components/IntroView.vue')
	},
	{
		path: '/questions/:id',
		component: require('./components/QuestionsView.vue'),
		props: true
	},
	{
		path: '/complete',
		component: require('./components/CompleteView.vue')
	},
];

export default new VueRouter({
	routes
});