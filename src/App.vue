<template>
	<v-app>
		<v-app-bar app color="black" dark>
			<div class="d-flex align-center">
				<span class="display-2">I-Trap</span>
			</div>

			<v-spacer></v-spacer>

			<!-- <v-btn
				href="https://github.com/vuetifyjs/vuetify/releases/latest"
				target="_blank"
				text
			>
				<span class="mr-2">How it works?</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn> -->
			<Dialog :defaultActive="showDialog" />
		</v-app-bar>

		<v-main>
			<Classify />
		</v-main>
		<SnackBar
			:text="this.$root.notif.text"
			:defaultActive="this.$root.notif.active"
		/>
		<v-card>
			<p class="text-center footer-text">
				Made by Reza Yazdi and Parsa Gholipour
			</p>
		</v-card>
	</v-app>
</template>

<script>
import Classify from "./components/Classify.vue";
import SnackBar from "./components/SnackBar";
import Dialog from "./components/Dialog";

export default {
	name: "App",

	components: {
		Classify,
		SnackBar,
		Dialog,
	},

	data: () => ({
		showDialog: false,
	}),
};
</script>
<style scoped>
.footer-text {
	color: #979797;
}
</style>
<style>
.position-relative {
	position: relative !important;
}
</style>