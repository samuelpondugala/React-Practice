
const App = () => {
  // const user = {name:"samuel david", age:23}
  // localStorage.setItem("user", JSON.stringify(user))
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      <h1> {user.name}, {user.age} </h1>
    </div>
  );
};

export default App;