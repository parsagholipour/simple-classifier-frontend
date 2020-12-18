<template>
	<h1>{{ this.string + this.result }}</h1>
</template>
<script>
export default {
	mounted() {
		setInterval(() => {
			this.currentState = (this.currentState + 1) % 3;
		}, 300);
	},
	props: {
		string: String,
	},
	data() {
		return {
			stats: [".", "..", "..."],
			currentState: 0,
		};
	},
	computed: {
		result() {
			return this.stats[this.currentState];
		},
	},
};
</script>