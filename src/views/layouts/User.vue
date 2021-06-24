<template>
	<div id="user">
<!--		<header>Header</header>-->
		<div class="content">
			<router-view/>
		</div>
<!--		<footer>Footer</footer>-->
	</div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped lang="scss">

	#user{
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		header{
			background-color: red;
			height: 100px;
		}

		.content{

		}

		footer{
			background-color: blue;
			height: 100px;
			margin-top: auto;
		}
	}
</style>
