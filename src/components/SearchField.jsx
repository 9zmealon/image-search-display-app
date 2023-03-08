import { useState } from "react";



const SearchField = ({photos, searchClick}) => {
    const [searchValue, setSearchValue] = useState("");
    let temp = photos;

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleButtonSearch = (e) => {
        setSearchValue(e.target.value);

        //Search data        
        let a = temp.filter(photos => photos.title.indexOf(searchValue) !== -1);
       
        searchClick(a);
    }
    return (
        <>
            <input
                type="search"
                placeholder="Search Anything...."    
                value={searchValue}
                onChange={handleInputChange}        
            />
            <button
                onClick={handleButtonSearch}
                disabled={!searchValue}
            >Search</button>
        </>
    )
};
export default SearchField; 
