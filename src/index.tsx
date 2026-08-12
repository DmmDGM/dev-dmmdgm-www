// Imports
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import close from "./assets/svg/close-button.svg";
import "./assets/css/index.css";

// Defines website
function Website() {
	// Defines states
	const [ inPopup, setInPopup ] = useState<boolean>(false);

	// Registers events
	useEffect(() => {
		// Defines events
		const keydown = (event: KeyboardEvent) => {
			if(inPopup && event.key === "Escape") setInPopup(false);
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
			<button onClick={() => setInPopup(true)}>About</button>
			<button onClick={() => setInPopup(true)}>Projects</button>
			<img src="/happi.png"/>
			<button onClick={() => setInPopup(true)}>Roadmaps</button>
			<button onClick={() => setInPopup(true)}>Updates</button>
		</header>

		{/* Main */}
		<main>
			<iframe id="game" src="https://game.dmmdgm.dev/game.html" width="100%" height="100%"></iframe>
		</main>
		
		{/* Footer */}
		<footer>
			<span>
				Hand Written :3 <a href="https://github.com/DmmDGM/dev-dmmdgm-www" target="_blank" rel="noopener noreferrer">Source Code</a> (cant believe this is the exception now)
			</span>
			<span>DmmD GM - Coming Soon to Your Nearest Supermarket @ 2026</span>
		</footer>

		{/* Shade */}
		<div id="shade" onClick={() => setInPopup(false)} className={inPopup ? "enabled" : "disabled"}></div>
		
		{/* Popup */}
		<div id="popup" className={inPopup ? "enabled" : "disabled"}>
			<button id="close" onClick={() => setInPopup(false)}><img src={close}/></button>
			<div id="board">
				Hello World!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores illum quod, at rerum omnis distinctio, autem modi recusandae laboriosam, necessitatibus magni. Eos quae expedita aperiam vitae deleniti vel iusto.
			</div>
		</div>
	</>;
}

// Renders website
render(<Website/>, document.getElementById("website")!);
