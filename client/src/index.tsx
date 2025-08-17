// Imports
import { render } from "preact";
import { LocationProvider, Route, Router, useLocation } from "preact-iso";
import { Error } from "./pages/error";
import { Home } from "./pages/home";
import "./styles/soda.css";
import "./styles/app.css"

// Defines logo
export function Logo() {
    // Creates logo
    return (
        <div class="logo">
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
                    <Shortcut href="/api">API</Shortcut>
                    <Shortcut href="/catalog">Catalog</Shortcut>
                    <Shortcut href="/account">Account</Shortcut>
                </nav>
            </header>
			<main>
				<Router>
					<Route path="/" component={Home}/>
					<Route path="/abc/:id" component={Home}/>
					<Route default component={Error}/>
				</Router>
			</main>
            <footer>
                <Category title="Navigation">
                    <Shortcut href="/">Home</Shortcut>
                    <Shortcut href="/api">API</Shortcut>
                    <Shortcut href="/catalog">Catalog</Shortcut>
                    <Shortcut href="/account">Account</Shortcut>
                </Category>
                <Category title="Services">
                    <Shortcut href="https://gsmc.dmmdgm.dev/">Geesecraft</Shortcut>
                </Category>
                <Category title="Legal">
                    <Shortcut href="/terms">Terms of Service</Shortcut>
                    <Shortcut href="/privacy">Privacy Policy</Shortcut>
                </Category>
                <Category title="Frens">
                    <Shortcut href="https://iipython.dev">iiPython</Shortcut>
                    <Shortcut href="https://k4ffu.dev">K4ffu</Shortcut>
                </Category>
            </footer>
		</LocationProvider>
	);
}

// Renders page
render(<App/>, document.getElementById("app"));
