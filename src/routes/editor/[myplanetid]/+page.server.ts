/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type PlanetInfo = {
	geology: {
		content: 'string';
		source: 'string';
	};
	id: 'string';
	name: 'string';
	overview: {
		content: 'string';
		source: 'string';
	};
	radius: number;
	revolution: number;
	rotation: number;
	structure: {
		content: 'string';
		source: 'string';
	};
	temperature: number;
};

export const load: PageServerLoad = async ({ params }) => {
	try {

		/* --  planets(where: {id: {_eq: ${params.myplanetid}}}) {    -- */
		const query = `query MyQuery {
			planets {
			  id
			  geology_source
			  geology_content
			  created_at
			  name
			  overview_content
			  overview_source
			  radius
			  revolution
			  rotation
			  structure_content
			  structure_source
			  temperature
			  updated_at
			}
		  }`;

		  console.log('query');
		  console.log(query);




		  const response = await fetch(`http://localhost:8088/v1/graphql`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'x-hasura-admin-secret': 'adminsecret'
			},
     		body: JSON.stringify({query})
		});
    
		if (!response.ok) {
			await Promise.reject(new Error(`${response.status} - ${response.statusText}`));
		}

		return await response.json();




	} catch (err) {
		if (err instanceof Error) {
			error(400, err.message);
		}
		error(404, 'ERR -- Not found!');
	}
};
