<script lang="ts">


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

    export let links: PlanetInfo;

    import Create from '$lib/components/editor/Create.svelte';
    //import Update from '$lib/components/editor/Update.svelte';
   // import Delete from '$lib/components/editor/Delete.svelte';

    //<Update />
    //<Delete />

	let name = '';
	let i = 0;

</script>


<header class="header">
<Create />


    <ul>     
        {#each links as item}
            <li><a href="/{item.id}" key="{item.id}">{item.name}</a> 
            
                <span class="buttons"> -
                    <a href="/editor/edit/{item.id}" key="{item.id}">Edit</a> |
                    <a href="/editor/delete/{item.id}" key="{item.id}">Delete</a> 
                </span>
            </li>
        {/each}
    </ul>
</header>


