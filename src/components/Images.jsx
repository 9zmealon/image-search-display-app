import Image from "./Image";

const Images = ({photos}) => {
    return (
        
        photos && photos.map(photo => <Image data={photo}/>)
        
        )
};
export default Images;