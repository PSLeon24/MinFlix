# MinFlix
The project creating a movie review web service with react

## Learning Notes
### Create a react app
- <code>npx create-react-app minflix</code>
### Run server
- <code>npm start</code>

## Review
- Component: It's similar to a function in javascript. After it take "props" as input, it returns React element describing how it expresses on the screen.
  - Always have to write <code>import React from 'react';</code> on first line in new js file. and write <code>export default Component Name</code> on last line
    - Unless write it above, react can't understand jsx.
  - <code>import Component Name from './ComponentFileName'</code>
  - The first letter of the component's name must start uppercase.
- JSX: Grammar combining JavaScript and HTML
- props: It's data to transfer between components. Using this is efficient to reuse components.
- map()
  - e.g., ```{FoodILike.map(dish => ( <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} /> ))}```
- prop-types
  - reference: http://github.com/facebook/prop-types
- state: 동적 데이터를 다룰 때 사용하는 객체 형태의 데이터 - state는 클래스형 컴포넌트에서 사용할 수 있음(반드시 React.Component를 상속받아야 함)
  - 동적 데이터: 변경될 가능성이 있는 데이터

## Learning Work Records
- React Learning: 01/02/2024/ ~
  - ![스크린샷 2024-01-03 오후 12 33 18](https://github.com/PSLeon24/MinFlix/assets/59058869/9272f2a5-9b63-4cae-87c9-5cff19e19501)
