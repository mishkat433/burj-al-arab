import React from 'react';
import Room from '../Room/Room';


import "./Home.css"

const Home = () => {
    const rooms= [
        {
            title: "Standard Single Room",
            description: "Standard Single Rooms are designed in open place",
            imgUrl: "https://www.hotelscombined.com/himg/f6/0c/18/leonardo-1125824-Burj_Al_Arab-Diplomatic_3_Bedroom_Suite-Master_Bedroom_O-085288.jpg",
            bad: 1,
            capacity: 1,
            badType: "Single",
            avatar: "S",
            price: 199
        },
        {
            title: "Couple Power Room",
            description: "Standard Couple Rooms are designed protected place",
            imgUrl: "https://i.pinimg.com/originals/2b/19/ca/2b19cac91cd3d8e7cd78e78f70af96cf.jpg",
            bad: 1,
            capacity: 2,
            badType: "Double",
            avatar: "C",
            price: 120
        },
        {
            title: "Family Capacity Room",
            description: "Standard Family Rooms are designed in open place",
            imgUrl: "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/4190725563792441-30187aff_z.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg",
            bad: 2,
            capacity: 4,
            badType: "Family",
            avatar: "F",
            price: 256
        }

    ]
    return (
        <div className="home">
           {
               rooms.map(res=> <Room key={res.badType}  room={res}></Room> )
           }
        </div>
    );
};

export default Home;