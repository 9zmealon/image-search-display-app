import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";

import SearchField from "./components/SearchField";
import Images from "./components/Images";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  // //Pagination
  const imagesPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(photos.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = photos.slice(startIndex, endIndex);

  //search
  const [searchDatas, setSearchDatas] = useState("");
  const searchClick = (b) => {
    setSearchDatas(b);
  };

  return (
    <div className="App">
      <div className="search-container">
        <SearchField photos={photos} searchClick={searchClick} />
      </div>
      <h1>Photo Gallery</h1>
      <hr />
      <>
        <div className="pagination">
          <button className="view-more" onClick={() => setCurrentPage((pervCount) => pervCount + 1)}>
            View More
          </button>
          {currentPage >= 2 ? (
            <button className="previous"
              onClick={() => setCurrentPage((pervCount) => pervCount - 1)}
            >
              Previous
            </button>
          ) : null}
        </div>
      </>
      <div className="Gallery">
        <>
          <Images photos={searchDatas ? searchDatas : currentImages} />
        </>
      </div>
    </div>
  );
}

export default App;
