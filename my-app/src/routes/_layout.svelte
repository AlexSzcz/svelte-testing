<script>
	import Nav from '../components/Nav.svelte';
	import Bio from '../components/_Bio.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 105em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>


<main>
	<slot></slot>
</main>