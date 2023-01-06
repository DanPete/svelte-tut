<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	// $: console.log(data, form);
</script>

<h1>Login</h1>

<div>
	<form method="POST" action="?/login">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />

		<label for="password">Password</label>
		<input type="password" name="password" id="password" />

		<button type="submit">Login</button>
	</form>
</div>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back, {data.user?.user.name}</p>
{/if}
