import { Radar } from 'vue-chartjs';

export default Radar.extend({
	props: ['data'],
	mounted() {
		console.log(this.data.graphData);
		this.renderChart(this.data.graphData, {
			scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20
                }
	        }
		});
	}
})