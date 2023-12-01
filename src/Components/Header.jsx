import { MdDelete } from "react-icons/md";
import { useRecoilState } from "recoil";
import { searchQueryState } from "../../atoms/atom.js";
function Header() {
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);

    const handleSearch = () => {
        // Update the Recoil state
        setSearchQuery(searchQuery);
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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
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