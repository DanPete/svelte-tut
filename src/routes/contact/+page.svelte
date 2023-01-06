<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;
	$: console.log(form);

	$: loading = false;
	$: show = false;

	const logout = async () => {
		const res = await fetch('/api/sign-out', {
			method: 'POST'
		});
		const data = await res.json();
		console.log(data);
	};

	/** @this {HTMLButtonElement} */
	function testThis() {
		console.log(this);
	}
</script>

<h2>Contact Us</h2>

<!-- <button on:click|preventDefault={logout}>Test</button> -->

<!-- <button on:click|preventDefault={() => (show = !show)}>{show ? 'Hide' : 'Show'}</button> -->

<button on:click|preventDefault={testThis}>This Test </button>

{#if show}
	<div>
		<p>Message</p>
	</div>
{/if}

{#if form?.error_message}
	<p>{form.error_message}</p>
{/if}

{#if form?.message}
	<p>{form.message}</p>
{:else}
	<form
		use:enhance={({ form, data, action, cancel }) => {
			loading = true;
			return async ({ result, update }) => {
				await update({ reset: false });
				loading = false;
			};
		}}
		action="/contact?/email"
		method="POST"
	>
		<label for="name">Name</label>
		<input type="text" name="name" id="name" required value="Dan" />

		<label for="email">Email</label>
		<input type="email" name="email" id="email" required value="Dan@email.com" />

		<label for="message">Message</label>
		<textarea name="message" id="message" cols="30" rows="10" required value="hellllooo!" />

		<button type="submit">Send</button>
	</form>
{/if}

{#if loading}
	<p>Loading...</p>
{/if}

<style>
	label {
		display: block;
	}

	input {
		display: block;
		margin-bottom: 1rem;
	}

	button {
		display: block;
		margin-top: 1rem;
		border-radius: 4px;
		background-color: #000;
		color: #fff;
		padding: 0.5rem 1rem;
		border: 1px solid #000;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		background-color: #fff;
		color: #000;
	}
</style>
