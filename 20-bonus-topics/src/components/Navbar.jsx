
const Navbar = (props) => {
    const changeTheme=()=>{
        props.setTheme('dark')
        console.log("Theme changed successfully")
    }
  return(
    <div>
      <p>{props.theme}</p>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
};

export default Navbar;