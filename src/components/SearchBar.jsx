import { useEffect } from "react";
import "./SearchBar.css";
import srchLogo from "../assets/search.svg";

export default function SearchBar() {
    useEffect(() => {
        const srchBtn = document.getElementById("srchBtn");
        const srchInp = document.getElementById("srchInp");
        const srch = () => {
            console.log(srchInp.value);
        };
        srchBtn.addEventListener("click", srch);
        return () => {
            srchBtn?.removeEventListener("click", srch);
        };
    }, []);
    return (
        <div className="srch-bar">
            <input id="srchInp" type="text"></input>
            <img id="srchBtn" src={srchLogo} alt="" />
        </div>
    );
}
