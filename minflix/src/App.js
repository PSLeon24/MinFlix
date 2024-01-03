import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>rating: {rating}/5.0</h4>
      <img src={picture} width="200" alt={name}/>
      <hr />
    </div>
  );
}

const foodILike = [
{
  id: 1,
  name: "Kimchi",
  image: "https://ssarijai.hgodo.com/5824/001.jpg",
  rating: 5
}, {
  id: 2,
  name: "Samgyeopsal",
  image: "https://static.megamart.com/product/image/0385/03854808/03854808_1_960.jpg",
  rating: 4.9
}, {
  id: 3,
  name: "Bibimbap",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
  rating: 4.8
}, {
  id: 4,
  name: "Doncasu",
  image: "https://recipe1.ezmember.co.kr/cache/recipe/2022/10/24/0f16eff9ca4f07a1db05024a6c18a6841.jpg",
  rating: 4.7
}, {
  id: 5,
  name: "Kimbap",
  image: "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
  rating: 4.6
} ];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
