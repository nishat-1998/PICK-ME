import React from 'react';
import Ride from '../Ride/Ride';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rides = [
        {
            title: 'BIKE',
            imgUrl: 'https://th.bing.com/th/id/OIP.DfEjCMUIWWjAOJS5u8Sd_gHaFm?w=241&h=182&c=7&o=5&dpr=1.25&pid=1.7',
            capacity: 1,
            avatar: 'B',
            price: 1000
        },
        {
            title: 'CAR',
            imgUrl: 'https://www.jing.fm/clipimg/detail/30-303436_drive-car-png-5-png-image-car.png',
            capacity: 4,
            avatar: 'C',
            price: 1500
        },
        {
          title: 'BUS',
          imgUrl: 'https://th.bing.com/th/id/OIP.ewUWGorAIHhWk4uqNq9OZQFcCz?pid=ImgDet&rs=1',
          bed: 2,
          capacity: 4,
          avatar: 'B',
          price: 1400
      },
        {
          title: 'TRAIN',
          imgUrl: 'https://image.shutterstock.com/image-vector/train-260nw-104147417.jpg',
          bed: 2,
          capacity: 4,
          avatar: 'T',
          price: 2000
      }
    ]
    return (
        <div style={style}>
            {
                rides.map(ride=> <Ride key={ride.title} ride={ride}></Ride>)
            }
        </div>
    );
};

export default Home;