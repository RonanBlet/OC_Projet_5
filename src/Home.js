import React from "react";
import Banner from "./Components/Banner";
import data from './data/data.json';
import Card from "./Components/Card";
import image from './Images/IMG.png'


function Home(){
    return (
        <div className="divHome">
            <Banner 
            image={image}
            text='Chez vous, partout et ailleurs' 
            showOverlay={true} 
            />
            <div className="home-background">
                <div className = "cardList">
                    {data.map(item =>(
                        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;