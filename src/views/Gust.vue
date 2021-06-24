<template>
	<div>
		<div class="wrapper">
			<div class="items">
				<div class="item">1</div>
				<div class="item">2</div>
				<div class="item">3</div>
				<div class="item">4</div>
				<div class="item">5</div>
				<div class="item">6</div>
				<div class="item">7</div>
				<div class="item">8</div>
				<div class="item">9</div>
				<div class="item">1</div>
				<div class="item">11</div>
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
	.items {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		flex: 1 1 auto;

		.item {
			width: calc(100% - 1rem);
			height: 200px;
			background-color: green;
			margin: .5rem;
		}
	}

	@media (max-width: 320px){
		.items {
			.item {
				width: calc(100% - 1rem);
			}
		}
	}
	@media (max-width: 375px) and (min-width: 320px){
		.items {
			.item {
				width: calc(100% - 1rem);
			}
		}
	}
	@media (max-width: 425px) and (min-width: 375px){
		.items {
			.item {
				width: calc(100% - 1rem);
			}
		}
	}

	@media (max-width: 768px) and (min-width: 425px){
		.items {
			.item {
				width: calc(50% - 1rem);
			}
		}
	}

	@media (max-width: 1024px) and (min-width: 768px) {
		.items {
			.item {
				width: calc(33.33% - 1rem);
			}
		}
	}

	@media (max-width: 1440px) and (min-width: 1025px) {
		.items {
			.item {
				width: calc(25% - 1rem);
			}
		}
	}
</style>
