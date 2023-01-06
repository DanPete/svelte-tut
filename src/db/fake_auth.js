import { v4 as uuidv4 } from 'uuid';
import { serialize } from 'cookie';

const users = [
	{
		id: 123,
		name: 'Dan',
		email: 'dan@dan.com',
		password: 'insecure',
		roles: ['admin']
	}
];

/** @type {{ id: string, user: any}[]} */
let sessions = [];

export function auth() {
	return {
		id: 123,
		name: 'Dan',
		email: 'dan@dan.com',
		roles: ['admin']
	};
}

/** @param {string} sessionid */
export function getUserFromSession(sessionid) {
	const session = sessions.find((session) => session.id === sessionid);
	if (!session) return Promise.resolve(null);
	return Promise.resolve(session);
	// if (!sessionid) return null;
	// return {
	// 	id: 123,
	// 	name: 'Dan',
	// 	email: 'dan@dan.com',
	// 	roles: ['admin']
	// };
}

/** @param {string} email */
export function getUser(email) {
	const existingUser = users.find((user) => user.email === email);
	if (!existingUser) return Promise.resolve(null);
	return Promise.resolve(existingUser);
}

/** @param {Object} user */
export const createSession = (user) => {
	const session = {
		id: uuidv4(),
		user
	};
	sessions.push(session);
	return Promise.resolve(session);
};

/** @param {string} id */
export const removeSession = (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};
