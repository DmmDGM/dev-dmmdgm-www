// Imports
import { render } from "preact";
import { Route, Link, Switch } from "wouter-preact";
import "./assets/css/index.css";

// Defines website
function Website() {
	return <>
		{/* Header */}
		<header>
			<Link href="/">World</Link>
			<Link href="/about">About</Link>
			<img src="/happi.png"/>
			<Link href="/projects">Projects</Link>
			<Link href="/roadmaps">Roadmaps</Link>
		</header>

		<main>
			<Switch>
				<Route path="/">
					<canvas></canvas>
				</Route>
				<Route>Coming Soon</Route>
			</Switch>
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
