function TagList({tags}){
    return(
        <div className="tag-list">
            {tags.map((tag, index) =>(
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
    
};

export default TagList;