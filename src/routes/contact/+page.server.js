import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	email: async ({ locals, request }) => {
		if (!locals?.user?.roles?.includes('admin')) {
			return fail(401, {
				error_message: 'Not authorized'
			});
		}

		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		console.log({ name, email, message });

		return {
			message: 'Thanks for your message!'
		};
	},
	test: () => {
		console.log('Hit the test action');
	}
};
