<script>
    let date = new Date();
    let locations = []

    const fireSearch = async function (e) {
        const params = new URLSearchParams({
            searchString: e.target.value
        })
        const response = await fetch('/api/stopFinder?' + params.toString(), )
        const result = await response.json()
        locations = result.locations
    };
</script>

<input name="searchString" id="searchString" value="" on:change={fireSearch} />

<ul>
    {#each locations as location}
    <li>{location.name}</li>
    {/each}
</ul>


<style lang="scss">
    p {
        display: block;
    }
    input {
        font-size: 1.5rem;
    }
</style>