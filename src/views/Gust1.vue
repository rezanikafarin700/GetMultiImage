<template>
	<div>
		<div class="container container-fluid">
			<div class="row">
				<div v-for="n in 10" :key="n" class=" item col-12 col-sm-6 col-md-4 col-lg-3 col-xs-3">
					<div class="content">{{n}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Gust"
    }
</script>

<style scoped lang="scss">
	.item {
		height: 200px;
		padding: .5rem;

		.content{
			background-color: green;
			height: 100%;
		}
	}

	.container{
		background-color: pink;
	}
</style>
