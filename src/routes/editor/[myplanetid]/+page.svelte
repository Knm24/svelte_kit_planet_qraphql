<script lang="ts">
    import List from '$lib/components/editor/List.svelte';

    export let data;
    


import { page } from '$app/stores';
let slug = $page.params.myplanetid;

</script>

   

<List links={data.data.planets} />
