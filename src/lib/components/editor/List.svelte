<script lang="ts">
    export let links: Array<{
        id: string;
        name: string;
    }>;

    import Create from '$lib/components/editor/Create.svelte';
    import Update from '$lib/components/editor/Update.svelte';
    import Delete from '$lib/components/editor/Delete.svelte';


	let name = '';
	let i = 0;

</script>


<header class="header">
<Create />


    <ul>     
        {#each links as item}
            <li><a href="/{item.id}" key="{item.id}">{item.name}</a> 
            

<span class="buttons">
    <Update />
    <Delete />
</span>
            </li>
        {/each}
    </ul>
</header>


