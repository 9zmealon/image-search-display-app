const Image = ({data}) => {
    return (
        <>
        <a href={data.url}>
            <>{data.id}. </>
            <img
                key={data.id}
                alt={data.title}
                src={data.thumbnailUrl}
                width="50"
                height= "50"
            />
        <br />
            <>{data.title}</>
        </a>
        <br/>
        </>
        
    )
};
export default Image; 