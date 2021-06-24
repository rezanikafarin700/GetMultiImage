<template>
	<div>
		<div class="btn btn-success" v-on:click="inc(2,$event)">Click</div>
		<h1>{{ count }}</h1>
		<div class="container">
			<div class="btn btn-success">
				<div class="content">{{ s }}</div>
				<div class="content">:</div>
				<div class="content">{{ m }}</div>
			</div>
			<table class="table  table-striped table-primary">
				<thead>
				<tr>
					<th scope="col">شماره</th>
					<th scope="col">اول</th>
					<th scope="col">آخر</th>
					<th scope="col">دستگیره</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                m: 59,
                s: 59,
                count: 0,
            }
        },

        methods: {
            inc(step, $event) {
                return this.count += step;
                window.console.log($event);
            },
            timer() {

                setInterval(() => {
                    if (this.s > 0) {
                        this.s--;
                    } else {
                        this.s = 59;
                    }
                    if (this.s == 0) {
                        this.m--;
                    }
                }, 100)
            }

        },
        mounted() {
            this.timer();
        },
    }
</script>

<style scoped>
	.container {
		direction: rtl;
		text-align: right;
	}

	.content {
		width: 15px;
		display: inline-block;
		text-align: center;
	}
</style>
