import { useRoute } from "preact-iso";

export function Home() {
    console.log(useRoute());

    return (
        <div class="test">
            ok
        </div>
    );
}
