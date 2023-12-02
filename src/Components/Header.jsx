import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useRecoilState } from "recoil";
import { searchQueryState } from "../../atoms/atom.js";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

function Header() {
    const [localSearchQuery, setLocalSearchQuery] = useState("");
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);

    const handleSearch = () => {
        // Update the Recoil state only when someone clicks the "Search" button
        setSearchQuery(localSearchQuery);
    };
    const handleClear = () => {
        setLocalSearchQuery("");
        setSearchQuery("");
    };
    
    return (
        <div>
            <div className="flex justify-between mb-3">
                <div className="flex">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search"
                        className="p-2 border border-gray-400 w-[300px]"
                        value={localSearchQuery}
                        onChange={(e) => setLocalSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className="border border-gray-500 p-2 bg-slate-400 text-white"><IoSearch /></button>
                    <button onClick={handleClear} className="border border-gray-500 px-1  text-red-600"><MdOutlineClear size={30}/></button>
                </div>
                <button
                    className="p-2 bg-pink-300 hover:bg-pink-400 rounded"
                >
                    <MdDelete size={25} className="text-white rounded-sm h-full" />
                </button>
            </div>
        </div>
    );
}

export default Header;
