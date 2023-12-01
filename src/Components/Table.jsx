import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "../../atoms/atom";

function Table() {
    const searchedData = useRecoilValue(searchQueryState);
    const [data, setData] = useState(null);

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
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, []); // empty dependency array means it will run once after the initial render

    // Lowercasing the search query and updating the state if needed
    const lowercasedSearchData = searchedData.toLowerCase();

    const filteredData = data
        ? data.filter(
            (item) =>
                item.name.toLowerCase().includes(lowercasedSearchData) ||
                item.email.toLowerCase().includes(lowercasedSearchData)
        )
        : [];

    return (
        <>
            <TableHeader name={"Name"} email={"Email"} role={"Role"} />
            {searchedData === '' // Only show filtered data when there is a search query
                ? data?.map((item, idx) => (
                    <TableRow key={idx} name={item.name} email={item.email} role={item.role} />
                ))
                : filteredData.map((item, idx) => (
                    <TableRow key={idx} name={item.name} email={item.email} role={item.role} />
                ))}
        </>
    );
}

export default Table;
