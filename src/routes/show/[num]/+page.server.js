import { error, redirect } from '@sveltejs/kit';
import { LUT_API } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, setHeaders, locals }) {
	console.log(LUT_API);

	if (!locals?.user?.id) throw redirect(307, '/');

	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data = await res.json();
	if (data.message) {
		throw error(404, {
			message: data.message
		});
	}

	setHeaders({
		'Cache-Control': `max-age=3600` // 1 week
	});

	return {
		episode: data,
		user: locals.user
	};
}
