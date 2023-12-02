import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";


function TableRow({ name, email, role }) {
    const [selected, setSelected] = useState(false);
    const [editable, setEditable] = useState(false);
    const [inputs, setInputs] = useState({
        name: name,
        email: email,
        role: role
    });

    const handleEdit = () => {
        setEditable(!editable);
    };

    const handleSelect = () => {
        setSelected(!selected);
    };

    const style = selected ? "bg-gray-400" : "";
    const inputStyle = selected ? "bg-gray-400" : "";
    const editButtonStyle = editable ? "bg-gray-400" : ""
    return (
        <div className={`border border-gray-200 ${style}`}>
            <div className="flex justify-start gap-6 m-3">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className=""
                    onClick={handleSelect}
                />
                <div className="flex w-full text-gray-600 font-semibold">
                    <input
                        onChange={(e) =>
                            setInputs({ ...inputs, name: e.target.value })
                        }
                        className={`flex-1 ${inputStyle}`}
                        value={inputs.name}
                        readOnly={!editable}
                    />
                    <input
                        onChange={(e) =>
                            setInputs({ ...inputs, email: e.target.value })
                        }
                        className={`flex-1 ${inputStyle}`}
                        value={inputs.email}
                        readOnly={!editable}
                    />
                    <input
                        onChange={(e) =>
                            setInputs({ ...inputs, role: e.target.value })
                        }
                        className={`flex-1 ${inputStyle}`}
                        value={inputs.role}
                        readOnly={!editable}
                    />
                    <div className="flex-1">
                        <div className="flex gap-2">
                            <button
                                className={`border border-gray-400 rounded p-1.5 ${editButtonStyle}`}
                                onClick={handleEdit}
                            >
                                <FaEdit />
                            </button>
                            <button className="border border-gray-400 rounded p-1.5 text-red-500">
                                <MdOutlineDeleteOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableRow;
