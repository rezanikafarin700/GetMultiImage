<template>
	<div>
		<div class="wrapper">
			<get-multi-image v-model="myData.images"/>
		</div>

	</div>
</template>

<script>
    import GetMultiImage from "../components/GetMultiImage";

    export default {
        name: "test",

        components: {
            GetMultiImage
        },


        data() {
            return {
                myData : {}
            }
        }
    }
</script>

<style scoped>

</style>
