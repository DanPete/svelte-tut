import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth.js';

/** @type {import('@sveltejs/kit').Handle} */
async function logger({ event, resolve }) {
	const start_time = Date.now();
	const res = await resolve(event);

	console.log(
		`${Date.now() - start_time}ms ${event.request.method} ${event.url.pathname} ${res.status}`
	);
	return res;
}

/** @type {import('@sveltejs/kit').Handle} */
function authorize({ event, resolve }) {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}

export const handle = sequence(logger, authorize);

// /** @type {import('@sveltejs/kit').HandleFetch} */
// export function handleFetch({ request, fetch }) {
// 	return fetch(request);
// }

// /** @type {import('@sveltejs/kit').HandleServerError} */
// export function handleError({ error, event }) {
// 	return {
// 		message: 'Something went wrong',
// 		code: error.code
// 	};
// }
