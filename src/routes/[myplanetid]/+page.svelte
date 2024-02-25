<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import ExternalIcon from '$lib/components/ExternalIcon.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';

    export let data;
    


    enum TabState {
        Overview = 'overview',
        Structure = 'structure',
        Geology = 'geology',
    }

    $: images = {
      "overview": `/planets/${data.data.planets[slug-1].name.toLowerCase()}.svg`,
      "structure": `/internal_structure/planet-${data.data.planets[slug-1].name.toLowerCase()}-internal.svg`,
      "geology": `/surface_geology/geology-${data.data.planets[slug-1].name.toLowerCase()}.svg`
    }

    let activeTab: TabState = TabState.Overview;

    $: mainImage = images[activeTab];
    $: fullNameContent = `${activeTab}_content`;
    $: fullNameSource = `${activeTab}_source`;

    import '$lib/styles/default.css';
    import '$lib/styles/header.css';
    import '$lib/styles/main.css';
    import '$lib/styles/footer.css';

import { page } from '$app/stores';
let slug = $page.params.myplanetid;

</script>

   

<Header links={data.data.planets} />

<main class="main">
	<div class="wrapper">
        <div class="planet-grid">
            <section class="planet-picture">
                <picture>
                    <img src={mainImage} alt={data.data.planets[slug-1].name} />
                </picture>
                
            </section>
            
            <section class="planet-description">
                <h2 class="planet-description__name">
                    {data.data.planets[slug-1].name}
                </h2>
    
    
                <p class="planet-description__description">
                 {data.data.planets[slug-1][fullNameContent]}

                </p>
        
                <p class="planet-description__source">
                   Source: &nbsp;
                    <a href={data.data.planets[slug-1][fullNameSource]}>
                        Wikipedia &nbsp;
                        <ExternalIcon />
                      </a>
                </p>
            </section>
        
            <section class="planet-buttons">
                {#each Object.values(TabState) as tab, idx}
                    <Button active={activeTab === tab} on:click={() => (activeTab = tab)}>
                        <span>0{idx + 1}</span>
                        &nbsp;{tab.toUpperCase()}
                    </Button>
                {/each}
            </section>
        </div>  
    </div>
</main> 

<Footer statistics={data.data.planets[slug-1]} />