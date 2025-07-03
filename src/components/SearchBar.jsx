import "./SearchBar.css";
import srchLogo from "../assets/search.svg";

export default function SearchBar() {
    return (
        <div class="srch-bar">
            <input type="text"></input>
            <img src={srchLogo} alt="" />
        </div>
    );
}
