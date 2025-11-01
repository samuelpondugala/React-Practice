

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form is submitted", e.target.value)
  }
  return (
    <div>
      <form onSubmit={ (e)=>{
        submitHandler(e)
      }} >
        <input type="text" placeholder="Enter your Name"/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;