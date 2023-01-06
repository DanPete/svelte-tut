<script>
	import { navigating, page, updated, getStores } from '$app/stores';
	import Test from '$lib/Test.svelte';
	import '$db/start';
	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log($navigating, $page);

	$: ({ latest_episode } = data);
</script>

<h3>{latest_episode.title} - {latest_episode.displayDate}</h3>
