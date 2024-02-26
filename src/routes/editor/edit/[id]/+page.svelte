
<script lang="ts">
    import List from '$lib/components/editor/List.svelte';

    export let data;
    let formData = {};

    const { planets } = data.data;
    formData = planets[0];


</script>

<a href="/editor/all">List</a>

<form method="POST" action="?/updateFull" enctype="multipart/form-data">

<br><label for="name">Name:</label>
<input type="text" id="name" name="name" bind:value="{formData.name}">

<br><label for="geologySource">Geology Source:</label>
<input type="text" id="geologySource" name="geology_source" bind:value="{formData.geology_source}">
<br>

<br><label for="geologyContent">Geology Content:</label>
<textarea id="geologyContent" name="geology_content" bind:value="{formData.geology_content}"></textarea>
<br>

<br><label for="overviewContent">Overview Content:</label>
<textarea id="overviewContent" name="overview_content" bind:value="{formData.overview_content}"></textarea>
<br>

<br><label for="overviewSource">Overview Source:</label>
<input type="text" id="overviewSource" name="overview_source" bind:value="{formData.overview_source}">
<br>

<br><label for="radius">Radius:</label>
<input type="number" id="radius" name="radius" bind:value="{formData.radius}">
<br>

<br><label for="revolution">Revolution:</label>
<input type="number" id="revolution" name="revolution" bind:value="{formData.revolution}">
<br>

<br><label for="rotation">Rotation:</label>
<input type="number" id="rotation" name="rotation" bind:value="{formData.rotation}">
<br>

<br><label for="structureContent">Structure Content:</label>
<textarea id="structureContent" name="structure_content" bind:value="{formData.structure_content}"></textarea>
<br>

<br><label for="structureSource">Structure Source:</label>
<input type="text" id="structureSource" name="structure_source" bind:value="{formData.structure_source}">
<br>

<br><label for="temperature">Temperature:</label>
<input type="number" id="temperature" name="temperature" bind:value="{formData.temperature}">
<br>

<br><label for="createdAt">Created At:</label>
<input type="text" id="createdAt" name="created_at" readonly bind:value="{formData.created_at}">
<br>

<br><label for="updatedAt">Updated At:</label>
<input type="text" id="updatedAt" name="updated_at" readonly bind:value="{formData.updated_at}">
<br>

  <button type="submit">Update Geology</button>
</form>