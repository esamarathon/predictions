<template>
	<div class="container">
		<h2 class="title">Audience Predictions</h2>
		<div class="usernames">
			<span
				v-for="([username, percentage], index) in percentages"
				:key="username"
				:class="['username', index % 2 ? 'username--right' : 'username--left']"
				:style="{ width: `${percentage}%` }"
			>
				{{ username }}
			</span>
		</div>
		<percentage-bar :percentages="percentages" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import PercentageBar from './PercentageBar.vue'

export default Vue.extend({
	name: 'audience-predictions',
	props: ['votes'],
	components: {
		PercentageBar,
	},
	computed: {
		percentages(): [string, number][] {
			const entries = Object.entries(this.votes as { [x: string]: number })
			const total = entries.reduce((total, [_, next]) => total + next, 0)

			return entries.map<[string, number]>(([username, percentage]) => [
				username,
				(percentage / total) * 100,
			])
		},
	},
})
</script>

<style scoped>
.container {
	background: #18181c;
	color: #fff;
	text-align: center;
	width: 700px;
	font-size: 18px;
	margin-top: 3rem;
}

.title {
	font-weight: 600;
	color: #f4e676;
	margin: 0;
	padding: 1rem 0;
	font-size: 1.6em;
}

.usernames {
	display: flex;
	margin-bottom: 0.5rem;
}

.username {
	color: rgba(255, 255, 255, 0.85);
	font-size: 1.4em;
	white-space: nowrap;
	padding: 0 0.4em;
	box-sizing: border-box;
	transition: width 0.2s;
}

.username--right {
	direction: rtl;
}
</style>
