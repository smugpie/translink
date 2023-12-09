<script>
  let date = new Date();
  let locations = [];
  let result;

  const fireSearch = async function (e) {
    const params = new URLSearchParams({
      searchString: e.target.value,
    });
    const response = await fetch("/api/stopFinder?" + params.toString());
    result = await response.json();
    locations = result.locations;
  };
</script>

<input name="searchString" id="searchString" value="" on:change={fireSearch} />

{JSON.stringify(result)}
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
