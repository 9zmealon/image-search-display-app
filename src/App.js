import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './galleryState';



import SearchField from './components/SearchField';
import Images from './components/Images';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.gallery.photos)

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);



  //search
  const [searchDatas, setSearchDatas] = useState("");
  const searchClick = (b) => {
    setSearchDatas(b) 
  }

  return (
    <div className="App">
      <>
      <SearchField photos={photos} searchClick={searchClick}/>
      </>
    <h1>Photo Gallery</h1>
    <hr/>
      <div className='Gallery'>

        <>



        <Images photos={ searchDatas ? searchDatas : photos}/>
       
       
        </>
      
      
      </div>
      <button>View More</button>    
    </div>
  );
}

export default App;
