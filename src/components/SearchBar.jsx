import "./SearchBar.css";
import srchLogo from "../assets/search.svg";

export default function SearchBar() {
    return (
        <div className="srch-bar">
            <input type="text"></input>
            <img src={srchLogo} alt="" />
        </div>
    );
}
