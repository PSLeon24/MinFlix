function Food({fav}) {
  return <h3>I like { fav }.</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chocolate" />
    </div>
  );
}

export default App;
