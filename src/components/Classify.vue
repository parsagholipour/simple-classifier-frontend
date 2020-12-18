<template>
	<v-container>
		<v-row class="text-center">
			<v-col class="mb-4">
				<h1 class="display-2 font-weight-bold mb-3">
					Welcome to simple image classifier
				</h1>
				<div>
					<p class="subheading font-weight-regular">
						Choose an image to start classifying<v-icon
							>mdi-image-search</v-icon
						>
					</p>
					<vue-typed-js
						:curLoop="2"
						v-if="!processing && !result"
						class="text-center"
						:loop="true"
						:loopCount="2"
						:strings="['Horse', 'Fly', 'Zebra', 'Lemon']"
					>
						<h1 class="ma-auto">
							It is a <span class="typing"></span>
						</h1>
					</vue-typed-js>
					<h1 v-else-if="!processing">It is a {{ result.object }} ({{ result.possibility}}%)</h1>
					<processing :string="processingStatus" v-else class="text-center">
					</processing>
					<p v-if="!processing && result">Time: {{ result.time }} sec</p>
				</div>
			</v-col>

			<v-col class="mb-5" cols="12">
				<v-row class="justify-center" no-gutters>
					<v-col
					cols="3"
						class="mr-2 ml-2 mb-4 position-relative"
						v-for="i in 8"
						:key="i"
					>
						<v-hover>
							<template v-slot:default="{ hover }">
								<v-img
									:class="getClass(hover, i)"
									class="test-image transition-swing"
									@click="process(i)"
									v-ripple
									width="300"
									:lazy-src="
										require('../assets/images/tests/' +
											i +
											'.jpg')
									"
									:src="
										require('../assets/images/tests/' +
											i +
											'.jpg')
									"
									:key="i"
								></v-img>
							</template>
						</v-hover>
						<v-progress-circular
							class="test-loading"
							v-if="beingProcessed == i"
							:size="70"
							:width="8"
							color="green"
							indeterminate
						></v-progress-circular>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import "./Processing";
import Processing from "./Processing.vue";
export default {
	components: { Processing },
	name: "Classify",
	methods: {
		process(imageName) {
			if (this.processing == true) {
				this.$root.notif.text = "Please wait for current process";
				this.$root.notif.active = true;
				return;
			}
			this.processing = true;
			this.beingProcessed = imageName;
			this.processingStatus = 'Connecting'
			var evtSource = new EventSource(
				"http://10.75.48.204/script.php?image_name=" + imageName
			);
			evtSource.onopen = () => {
				console.log("Connection to server opened.");
				this.processingStatus = "Connected"
			};
			evtSource.onmessage = (e) => {
				let data = JSON.parse(e.data);
				console.log(data.event == 'start')
				if (data.event == 'start') {
					this.processingStatus = 'Processing'
				} else {
					console.log(data)
					this.result = data.result
					this.processing = false
					this.beingProcessed = false;
				}
				
			};
			evtSource.onerror = () => {
				evtSource.close();
				console.log("EventSource failed.");
			};
		},
		getClass(hover, i) {
			let key = `elevation-${hover ? 6 : 3}`;
			let obj = {
				"lower-opacity": this.processing && i != this.beingProcessed,
			};
			obj[key] = true;

			return obj;
		},
	},
	data: () => ({
		processing: false,
		result: false,
		beingProcessed: null,
		processingStatus: 'Connecting'
	}),
};
</script>
<style scoped>
.test-image {
	cursor: pointer;
}

.test-loading {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>