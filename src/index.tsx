// Imports
import { render } from "preact";
import "./assets/css/index.css";

// Defines website
function Website() {
	return <>
		<nav>hello</nav>
	</>;
}

// Renders website
render(<Website/>, document.getElementById("website")!);
