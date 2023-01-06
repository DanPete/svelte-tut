<script>
	import { PUBLIC_LUT_PUB_API } from '$env/static/public';
	console.log(PUBLIC_LUT_PUB_API);

	import { browser, building, dev, version } from '$app/environment';
	import { navigating } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import './styles.css';
	import Episodes from './Episodes.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;

	console.log(browser, building, dev, version);

	$: ({ all_episodes } = data);
</script>

<Header />

{#if $navigating}
	<div class="loading {$navigating && 'active'}">Loading...</div>
{/if}

<main>
	<div class="main">
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<Footer />

<style>
	main {
		background: #efefef;
		padding: 1rem;
	}

	main {
		display: grid;
		grid-template-columns: 1fr 300px;
		grid-gap: 1rem;
	}

	.loading {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: lightblue;
		color: white;
		transition: background-color 1s ease;
		z-index: 2;
	}

	.active {
		background-color: blue;
	}
</style>
