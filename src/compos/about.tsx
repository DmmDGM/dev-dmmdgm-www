// Imports
import "../assets/css/about.css";

export default function({ close }: { close: () => void; }) {
    return <>
        <div id="about">
            Hello World
            <button onClick={() => close()}>Close</button>

        </div>
    </>;
}
