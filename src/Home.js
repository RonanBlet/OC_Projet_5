import React from "react";
import Banner from "./Components/Banner";
import data from './data/data.json';
import Card from "./Components/Card";


function Home(){
    return (
        <div className="divHome">
            <Banner 
            image='../Images/IMG.png' 
            text='Chez vous, partout et ailleurs' 
            showOverlay={true} 
            />
            <div class = "cardList">
                {data.map(item =>(
                    <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </div>
        </div>
    );
};

export default Home;