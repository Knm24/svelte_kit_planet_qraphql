
<script lang="ts">
import { error } from '@sveltejs/kit';

	async function update() {
        console.log('update');



	try {

		const queryMyMutation = `mutation MyMutation {
  update_planets(where: {id: {_eq: 1}}, _set: {name: "Mut121"}) {
    affected_rows
  }
}
`;

		  console.log('queryMyMutation');
		  console.log(queryMyMutation);




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








	
</script>

	
<label><input  placeholder="new name" /></label>
<button on:click={update} >update</button>

