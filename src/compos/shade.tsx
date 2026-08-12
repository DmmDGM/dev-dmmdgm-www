// Imports
import "../assets/css/shade.css"

// Exports
export default function({ toggle }: { toggle: boolean; }) {
    return <>
        <div id="shade" className={toggle ? "enabled" : "disabled"}></div>
    </>;
}
