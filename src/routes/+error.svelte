<script>
	/** @type {import('./$types').PageData} */
	import { page } from '$app/stores';

	// $: console.log($page);
</script>

<h1>Oops!</h1>
<h2>{$page.status}</h2>
<p>{$page.error?.message}</p>
