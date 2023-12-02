import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "../../atoms/atom";

function Table() {
    const searchedData = useRecoilValue(searchQueryState);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const lowercasedSearchData = searchedData.toLowerCase();
    console.log(lowercasedSearchData);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                const jsonData = await res.json();
                jsonData.sort((a, b) => a.id - b.id);
                if (jsonData.error) {
                    console.log(jsonData.error);
                }
                setData(jsonData);
                // Call getFilteredData after setting the data
                if(lowercasedSearchData.length>0){
                    setFilteredData(
                        data.filter(
                            (item) =>
                                item.name.toLowerCase().trim().includes(lowercasedSearchData) ||
                                item.email.toLowerCase().trim().includes(lowercasedSearchData) ||
                                item.role.toLowerCase().trim().includes(lowercasedSearchData) 
                        )
                    );
                }else {
                    setFilteredData([])
                }
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [lowercasedSearchData]); // Call useEffect when search query changes
    

    console.log(filteredData);

    return (
        <>
            <TableHeader name={"Name"} email={"Email"} role={"Role"} />
            {lowercasedSearchData === "" &&
                data?.map((item, idx) => <TableRow key={idx} name={item.name} role={item.role} email={item.email} />)}
            {lowercasedSearchData !== "" &&
                filteredData?.map((item, idx) => <TableRow key={idx} name={item.name} role={item.role} email={item.email} />)}
        </>
    );
}

export default Table;
