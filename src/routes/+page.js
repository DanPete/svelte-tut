/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent }) {
	// const parentData = await parent();
	// console.log(parentData);

	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();
	return {
		latest_episode: data
	};
}
