<template>
	<v-snackbar v-model="defaultActive"       color="primary">
		{{ text }}

		<template v-slot:action="{ attrs }">
			<v-btn color="white" text v-bind="attrs" @click="closeSnackBar">
				Close
			</v-btn>
		</template>
	</v-snackbar>
</template>
<script>
export default {
    props: {
        defaultActive: Boolean,
        text: String
    },
    methods: {
        closeSnackBar(){
            this.$root.notif.active = false
        }
    },
    watch: {
        'defaultActive': {
            handler: function (val, oldVal) {
                if (oldVal == true && val == false) {
                    this.$root.notif.active = false;
                    return
                }
            },
            deep: true
        }
    }
}
</script>