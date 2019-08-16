<template>
	<div>
		<audience-predictions :votes="{ 'flippy o': 52, Taggo3435: 47 }" />
		<audience-predictions :votes="{ 'flippy o': 45, Taggo3435: 5 }" />
		<audience-predictions :votes="{ 'flippy o': 5, Taggo3435: 95 }" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import AudiencePredictions from './components/AudiencePredictions.vue'

export default {
	name: 'app',
	components: {
		AudiencePredictions,
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext,vietnamese');

body {
	font-family: 'Barlow Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin: 3rem 0;
	display: flex;
	justify-content: center;
	align-content: center;
	background: #e5e5e5;
}
</style>
