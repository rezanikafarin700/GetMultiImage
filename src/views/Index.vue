<template>
	<div>
		<div class="container">
			<carousel  class="carousel" :paginationEnabled="false" per-page="4" :navigate-to="someLocalProperty" :mouse-drag="true">
				<slide v-for="n in 12" :key="n">
					<div class="image">
						<img :src="`images/${n}.jpg`" alt="Not Found">
					</div>
				</slide>
			</carousel>
		</div>
	</div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: "Index",
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped lang="scss">

	.carousel{
		padding: 2rem;
	}
	.image {
		width: 200px;
		height: 200px;

		img {
			width: 100%;
			height: 100%;
		}
	}

</style>
