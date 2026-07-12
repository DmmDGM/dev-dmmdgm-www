<!-- Container -->
<div id="container">
	<a href="/" id="home">DmmD GM</a>
	<div id="inputs">
		<button on:click={() => { view = (view + 1) % views.length; }} id="view">
			{@html views[view]}
		</button>
		<button id="back">{@html leftArrowSvg}</button>
		<button id="parent">{@html upArrowSvg}</button>
		<button id="forward">{@html rightArrowSvg}</button>
		<input placeholder="/" id="path">
		<input placeholder="Search" id="search">
	</div>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/styles/rgb.scss";
	import "$lib/styles/reset.scss";
	import bulletViewSvg from "$lib/svg/bulletView.svg?raw";
	import gridViewSvg from "$lib/svg/gridView.svg?raw";
	import leftArrowSvg from "$lib/svg/leftArrow.svg?raw";
	import rightArrowSvg from "$lib/svg/rightArrow.svg?raw";
	import upArrowSvg from "$lib/svg/upArrow.svg?raw";

	// Defines views
	const views = [ bulletViewSvg, gridViewSvg ];
	let view = 0;

	// Defines history
	let history = [];
</script>

<!-- Style -->
<style lang="scss">
	// Container
	#container {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 25px 0px;
		height: 100%;
		justify-content: center;
		width: 100%;
	}

	// Inputs
	#inputs {
		display: flex;
		width: 75%;

		*:first-child {
			border-radius: 5px 0px 0px 5px;
		}

		*:last-child {
			border-radius: 0px 5px 5px 0px;
		}

		button {
			background-color: var(--rgb-bright-black);
			cursor: pointer;
			padding: 5px;
			transition: background 0.2s ease;

			&:focus-visible, &:hover {
				background-color: var(--rgb-light-black);
			}

			:global(svg) {
				display: block;
				height: 20px;
				stroke: var(--rgb-white);
				width: 20px;

				:global(path) {
					fill: var(--rgb-white);
				}
			}
		}

		input {
			background-color: var(--rgb-bright-black);
			flex: 1;
			padding: 5px 10px;
			transition: background 0.2s ease, flex 0.2s ease;

			&:focus-visible {
				flex: 3;
			}

			&:focus-visible, &:hover {
				background-color: var(--rgb-light-black);
			}
		}
	}
</style>