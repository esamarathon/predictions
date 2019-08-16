<template>
	<div class="percentage-bar">
		<span
			v-for="([username, percentage], index) in percentages"
			:key="username"
			:class="[
				'percentage-slice',
				index % 2 ? 'percentage-slice--yellow' : 'percentage-slice--purple',
			]"
			:style="{ flex: percentage }"
		>
			<span v-if="percentage > 5">{{ Math.round(percentage) }}%</span>
		</span>
	</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'percentage-bar',
	props: ['percentages'],
})
</script>

<style scoped>
.percentage-bar {
	height: 2em;
	line-height: 2em;
	font-size: 1.6rem;
	font-weight: 600;
	display: flex;
	background: #18181c;
}

.percentage-slice {
	text-align: center;
	transition: all 0.2s;
}

.percentage-slice--purple {
	background: #432a5b;
	color: #fcdb6b;
}

.percentage-slice--yellow {
	background: #e1bc3c;
	color: #31134f;
}
</style>
