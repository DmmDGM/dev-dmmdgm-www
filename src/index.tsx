// Imports
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import close from "./assets/svg/close-button.svg";
import About from "./comps/about";
import Projects from "./comps/projects";
import Roadmaps from "./comps/roadmaps";
import Updates from "./comps/updates";
import "./assets/css/index.css";
import "./assets/css/main.css";
import "./assets/css/game.css";

// Defines website
function Website() {
	// Defines states
	const [ banner, setBanner ] = useState<string>("");

	// Registers events
	useEffect(() => {
		// Defines events
		const keydown = (event: KeyboardEvent) => {
			if(banner !== "" && event.key === "Escape") setBanner("");
		};

		// Listens events
		document.body.addEventListener("keydown", keydown);

		// Defines cleanups
		return () => {
			document.body.removeEventListener("keydown", keydown);
		};
	}, [ banner ]);

	// Creates html
	return <>
		{/* Header */}
		<header>
			<button onClick={() => { setBanner("about"); }}>About</button>
			<button onClick={() => { setBanner("projects"); }}>Projects</button>
			<img src="/happi.png"/>
			<button onClick={() => { setBanner("roadmaps"); }}>Roadmaps</button>
			<button onClick={() => { setBanner("updates"); }}>Updates</button>
		</header>

		{/* Main */}
		<main>
			<iframe id="game" src="https://game.dmmdgm.dev/game.html" width="100%" height="100%"></iframe>
		</main>
		
		{/* Footer */}
		<footer>
			<div>
				Hand Written <a href="https://github.com/DmmDGM/dev-dmmdgm-www" target="_blank" rel="noopener noreferrer">Source Code</a> :3
			</div>
			<div>
				DmmD GM (2026) @ Acting Cute Since '06 &lt;3
			</div>
		</footer>

		{/* Shade */}
		<div id="shade" onClick={() => { setBanner(""); }} className={banner !== "" ? "enabled" : "disabled"}></div>
		
		{/* Popup */}
		<div id="popup" className={banner !== "" ? "enabled" : "disabled"}>
			<button id="close" onClick={() => { setBanner(""); }}><img src={close}/></button>
			<div id="banner">
				{ banner === "about" && <About/> }
				{ banner === "projects" && <Projects/> }
				{ banner === "roadmaps" && <Roadmaps/> }
				{ banner === "updates" && <Updates/> }
			</div>
		</div>
	</>;
}

// Renders website
render(<Website/>, document.getElementById("website")!);
