<script>
	import { afterUpdate } from 'svelte';
	/** @typedef { import("$lib/types").User } User */

	// /** @type {import('./$types').PageData} */
	/** @type {{ episode: any, user: User }}*/
	export let data;

	/** @type {HTMLAudioElement} */
	let player;

	$: ({ episode, user } = data);
	// $: src = episode.url;

	afterUpdate(() => {
		player.load();
		// player.play();
	});
</script>

<small>{user.email}</small>

<h1>{episode.title}</h1>

<div>
	<audio bind:this={player} controls>
		<source src={episode.url} type="audio/mpeg" />
		Your browser does not support the audio element.
	</audio>
</div>

<div class="content">
	{@html episode.html}
</div>

<style>
	.content {
		padding: 0.875rem;
		border: 1px solid #ccc;
	}
</style>
