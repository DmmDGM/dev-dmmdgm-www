// Imports
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import close from "./assets/svg/close-button.svg";
import About from "./comps/about";
import Projects from "./comps/projects";
import Roadmaps from "./comps/roadmaps";
import Updates from "./comps/updates";
import "./assets/css/index.css";

// Defines website
function Website() {
	// Defines states
	const [ inPopup, setInPopup ] = useState<boolean>(false);
	const [ banner, setBanner ] = useState<string>("");

	// Registers events
	useEffect(() => {
		// Defines events
		const keydown = (event: KeyboardEvent) => {
			if(inPopup && event.key === "Escape") {
				setInPopup(false);
				setBanner("");
			}
		};

		// Listens events
		document.body.addEventListener("keydown", keydown);

		// Defines cleanups
		return () => {
			document.body.removeEventListener("keydown", keydown);
		};
	}, [ inPopup ]);

	// Creates html
	return <>
		{/* Header */}
		<header>
			<button onClick={() => { setInPopup(true); setBanner("about"); }}>About</button>
			<button onClick={() => { setInPopup(true); setBanner("projects"); }}>Projects</button>
			<img src="/happi.png"/>
			<button onClick={() => { setInPopup(true); setBanner("roadmaps"); }}>Roadmaps</button>
			<button onClick={() => { setInPopup(true); setBanner("updates"); }}>Updates</button>
		</header>

		{/* Main */}
		<main>
			<iframe id="game" src="https://game.dmmdgm.dev/game.html" width="100%" height="100%"></iframe>
		</main>
		
		{/* Footer */}
		<footer>
			<div>
				<span>
					Hand Written <a href="https://github.com/DmmDGM/dev-dmmdgm-www" target="_blank" rel="noopener noreferrer">Source Code</a> :3
				</span>
			</div>
			<div>
				<span>
					DmmD GM (2026) @ Acting Cute Since '06 &lt;3
				</span>
			</div>
		</footer>

		{/* Shade */}
		<div id="shade" onClick={() => { setInPopup(false); setBanner(""); }} className={inPopup ? "enabled" : "disabled"}></div>
		
		{/* Popup */}
		<div id="popup" className={inPopup ? "enabled" : "disabled"}>
			<button id="close" onClick={() => { setInPopup(false); setBanner(""); }}><img src={close}/></button>
			<div id="board">
				{ banner === "about" && <About/>}
				{ banner === "projects" && <Projects/>}
				{ banner === "roadmaps" && <Roadmaps/>}
				{ banner === "updates" && <Updates/>}
			</div>
		</div>
	</>;
}

// Renders website
render(<Website/>, document.getElementById("website")!);
