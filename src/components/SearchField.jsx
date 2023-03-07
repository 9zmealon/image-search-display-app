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
        <div>
            <input
                type="search"
                placeholder="search aything..."    
                value={searchValue}
                onChange={handleInputChange}        
            />
            <button
                onClick={handleButtonSearch}
                disabled={!searchValue}
            >search</button>
        </div>
    )
};
export default SearchField; 
