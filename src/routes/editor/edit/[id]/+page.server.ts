/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from '@sveltejs/kit';
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


		const query = `query MyQuery {
			planets(where: {id: {_eq: ${params.id}}}) {
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



export const actions = {
		updateFull: async ({ request, locals, params }) => {
			const formData = await request.formData();

		
			const geology_source = formData.get("geology_source") as string;
			const geology_content = formData.get("geology_content") as string;
			const created_at = formData.get("created_at") as string;
			const name = formData.get("name") as string;
			const overview_content = formData.get("overview_content") as string;
			const overview_source = formData.get("overview_source") as string;
			const radius = (formData.get("radius") as string);
			const revolution = (formData.get("revolution") as string);
			const rotation = (formData.get("rotation") as string);
			const structure_content = formData.get("structure_content") as string;
			const structure_source = formData.get("structure_source") as string;
			const temperature = (formData.get("temperature") as string);
			const updated_at = formData.get("updated_at") as string;

			console.log('updateFull');
			console.log(name);
			console.log(geology_source, geology_content, created_at, name, overview_content, overview_source, radius, revolution, rotation, structure_content, structure_source, temperature, updated_at);
			





			try {
				
				
				const query = `
				mutation MyMutation {
					update_planets(
						where: { id: { _eq: ${params.id} } },
						_set: {
						  geology_source: "${geology_source}",
						  geology_content: "${geology_content}",
						  created_at: "${created_at}",
						  name: "${name}",
						  overview_content: "${overview_content}",
						  overview_source: "${overview_source}",
						  radius: ${radius},
						  revolution: ${revolution},
						  rotation: ${rotation},
						  structure_content: "${structure_content}",
						  structure_source: "${structure_source}",
						  temperature: ${temperature},
						  updated_at: "${updated_at}"
						}
					  ) {
						affected_rows
						returning {
							name
							id
						  }
					  }
					}`;
		
	
		
		
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
		
				let ww = await response.json();
				
				console.log('update_planets');
				console.log(ww);

				// throw redirect(302, '/editor');
				
				return ww;
		
		
		
		
			} catch (err) {
				if (err instanceof Error) {
					error(400, err.message);
				}
				error(404, 'ERR update -- Not found!');
			}
		











		}
}