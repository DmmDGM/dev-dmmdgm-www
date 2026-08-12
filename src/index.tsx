// Imports
import { render } from "preact";
import { useState } from "preact/hooks";
import About from "./compos/about";
import Shade from "./compos/shade";
import "./assets/css/index.css";

// Defines website
function Website() {
	const [ inPopup, setInPopup ] = useState<boolean>(false);

	return <>
		{/* Header */}
		<header>
			<button onClick={() => setInPopup(true)}>About</button>
			<button>{inPopup ? "yes" :"no"}</button>
			<img src="/happi.png"/>
			<button>Roadmaps</button>
			<button>Updates</button>
		</header>

		{/* Main */}
		<main>
			<iframe src="https://game.dmmdgm.dev/game.html" width="100%" height="100%"></iframe>
		</main>

		{/* Popup */}
		<Shade toggle={inPopup}/>
		<About close={() => setInPopup(false)}/>
		
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
