<template>
	<div class="text-center">
		<v-dialog v-model="active" width="500">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
					Github <v-icon>mdi-github-circle</v-icon>
				</v-btn>
			</template>

			<v-card>
				<v-card-title class="headline grey lighten-2">
					Github Repositories
				</v-card-title>

				<div class="repos-container">
					<a
						href="https://github.com/RezaYazdi87/itrap1test/tree/Resnet110"
						target="_blank"
						><v-btn
							><v-icon>mdi-language-python</v-icon>Backend</v-btn
						></a
					>
					<a
						href="https://github.com/parsagholipour/simple-classifier-backend"
						target="_blank"
						><v-btn
							><v-icon>mdi-language-php</v-icon>Backend</v-btn
						></a
					>
					<a
						href="https://github.com/parsagholipour/simple-classifier-frontend"
						target="_blank"
						><v-btn><v-icon>mdi-vuejs</v-icon>Frontend</v-btn></a
					>
				</div>
				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="active = false">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
export default {
	props: {
		activeDefault: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			active: this.activeDefault,
		};
	},
};
</script>
<style scoped>
.repos-container {
	display: flex;
	justify-content: center;
	padding-top: 31px;
	padding-bottom: 30px;
}

.repos-container a {
    text-decoration: none;
    flex: 0.2 0.3 2%;
    margin: 0 1%;
}
</style>