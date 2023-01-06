import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	return json({ message: 'Testing from login' }, { status: 200 });
}
