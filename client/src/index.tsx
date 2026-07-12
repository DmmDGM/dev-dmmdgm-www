// Imports
import { render } from "preact";
import { LocationProvider, Route, Router, useLocation } from "preact-iso";
import { Blank } from "./pages/blank";
import { Home } from "./pages/home";
import { Privacy } from "./pages/privacy";
import { Terms } from "./pages/terms";
import "./styles/soda.css";
import "./styles/app.css"

// Defines logo
export function Logo() {
    // Creates logo
    return (
        <div id="logo">
            <img src="/dmmdgm.png" alt="DmmD GM"/>
            DmmD GM
        </div>
    );
}

// Defines shortcut
export function Shortcut({ children, href }) {
    // Creates shortcut
    const { path } = useLocation();
    const url = new URL(href, location.origin);
    const external = url.origin === location.origin ? {} : {
        rel: "noopener noreferrer",
        target: "_blank"
    };
    return (
        <a 
            href={ href }
            class={ [ "shortcut", path === href && "active" ].join(" ") }
            { ...external }
        >
            { children }
        </a>
    );
}

// Defines category
export function Category({ children, title }) {
    // Creates category
    return (
        <div>
            <p>{ title }</p>
            { children }
        </div>
    );
}

// Defines app
export function App() {
    // Creates app
	return (
		<LocationProvider>
            <header>
                <Logo/>
                <nav>
                    <Shortcut href="/">Home</Shortcut>
                    <Shortcut href="/about">About</Shortcut>
                    <Shortcut href="/catalog">Catalog</Shortcut>
                    <Shortcut href="/extra">Extra</Shortcut>
                </nav>
            </header>
			<main>
				<Router>
					<Route path="/" component={Home}/>
					<Route path="/terms" component={Terms}/>
					<Route path="/privacy" component={Privacy}/>
					<Route default component={Blank}/>
				</Router>
			</main>
            <footer>
                <nav>
                    <Category title="Socials">
                        <Shortcut href="https://github.com/DmmDGM">GitHub</Shortcut>
                        <Shortcut href="https://youtube.com/@DmmDGM">YouTube</Shortcut>
                    </Category>
                    <Category title="Services">
                        <Shortcut href="https://gsmc.dmmdgm.dev/">Geesecraft</Shortcut>
                    </Category>
                    <Category title="Details">
                        <Shortcut href="/terms">Terms of Service</Shortcut>
                        <Shortcut href="/privacy">Privacy Policy</Shortcut>
                        <Shortcut href="https://github.com/DmmDGM/website">Source Code</Shortcut>
                    </Category>
                    <Category title="Frens">
                        <Shortcut href="https://iipython.dev">iiPython</Shortcut>
                        <Shortcut href="https://k4ffu.dev">K4ffu</Shortcut>
                    </Category>
                </nav>
                <div id="watermark">Made by DmmD GM @ 2025 .w.</div>
            </footer>
		</LocationProvider>
	);
}

// Renders page
render(<App/>, document.getElementById("app"));
