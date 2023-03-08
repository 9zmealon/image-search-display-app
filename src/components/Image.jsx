const Image = ({data}) => {
    return (
        <div className="single-image" 
        key={data.id}>
        <a href={data.url}>
            <img
                alt={data.title}
                src={data.thumbnailUrl}
                width="250"
                height= "250"
            />
            <p>{data.title}</p>
        </a>
        </div>
        
    )
};
export default Image; 