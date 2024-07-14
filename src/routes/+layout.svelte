<!-- Slot -->
 <slot />

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/soda/grape.scss";
	import "$lib/soda/vanilla.scss";
</script>

<!-- Style -->
<style lang="scss">
	@import "src/lib/soda/apple.scss";

	:global {
		* {
			color: rgb(var(--soda-rgb-white));
			scrollbar-color: rgb(var(--soda-rgb-white)) rgb(var(--soda-rgb-black));
		}

		body {
			background-color: rgb(var(--soda-rgb-black));
		}
	}
</style>