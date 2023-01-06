import { getUserFromSession, getUser, createSession } from '$db/fake_auth.js';

export async function load({ cookies }) {
	const user = await getUserFromSession(cookies.get('sessionid'));
	return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		// console.log(data);
		const email = data.get('email')?.toString();
		const password = data.get('password');
		console.log({ email, password });

		if (!email || !password) return { success: false };
		const user = await getUser(email);
		if (!user) return { success: false };
		const { id } = await createSession(user);

		cookies.set('sessionid', id);

		return { success: true };
	}
};
