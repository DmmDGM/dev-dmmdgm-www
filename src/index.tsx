// Imports
import { render } from "preact";
import "./assets/css/index.css";

// Defines website
function Website() {
	return <>
		{/* Header */}
		<header>
			<a>World</a>
			<a>About</a>
			<img src="/happi.png"/>
			<a>Projects</a>
			<a>idk what to put here</a>
		</header>

		<main>
			{/* Game */}
			<canvas></canvas>
		</main>
		
		{/* Footer */}
		<footer>
			<span>
				Hand Written :3 <a href="https://github.com/DmmDGM/dev-dmmdgm-www" target="_blank" rel="noopener noreferrer">Source Code</a> (cant believe this is the exception now)
			</span>
			<span>DmmD GM - Coming Soon to Your Nearest Supermarket @ 2026</span>
		</footer>
	</>;
}

// Renders website
render(<Website/>, document.getElementById("website")!);
