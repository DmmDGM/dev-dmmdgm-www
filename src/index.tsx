// Imports
import { render } from "preact";
import "./assets/css/index.css";

// Defines website
function Website() {
	return <>
		{/* Header */}
		<header>
			<button>About</button>
			<button>Projects</button>
			<img src="/happi.png"/>
			<button>Roadmaps</button>
			<button>Updates</button>
		</header>

		{/* Main */}
		<main>
			<canvas id="canvas"></canvas>
			idfk prob like a game somewhere here ig
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
