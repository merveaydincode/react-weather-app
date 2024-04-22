import { useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Selector = () => {
     const [countries, setCountries] = useState(null);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name")
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        });
    }, []);


    return (
    <div className="w-72 font-medium  h-80">
    <div className="bg-white w-full p-2 flex items-center justify-between rounded">Selector Country
    <BiChevronDown size={20} />
    </div>
    <ul className="bg-white mt-2">
        <li className="p-2 text-sm hover:bg-slate-500 hover:text-white">
            Sample
            </li>
            <li className="p-2 text-sm hover:bg-slate-500 hover:text-white">
            Sample
            </li>
            <li className="p-2 text-sm hover:bg-slate-500 hover:text-white">
            Sample
            </li>
            <li className="p-2 text-sm hover:bg-slate-500 hover:text-white">
            Sample
            </li>
            <li className="p-2 text-sm hover:bg-slate-500 hover:text-white">
            Sample
            </li>
    </ul>
    </div>
    );
}

export default Selector;