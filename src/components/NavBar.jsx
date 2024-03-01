import { Link, useNavigate } from "react-router-dom";


function NavBar() {
// TODO - not generating new random number 
// TODO, instead of generating random numbers 1-5, use the 'players' state, use map() to get an array of 'ids' and choose a random element from that array when the button clicked

  const navigate = useNavigate();
  // const id = Math.floor(Math.random() * 5 + 1);
  return (
    <header>
      <h1>Block 29</h1>
      <h2>PuppyBowl React</h2>
      <Link to="/">All Players</Link>
      <button onClick={() => {
        navigate(`player/${Math.floor(Math.random() * 5 + 1)}`)}}>
        Random Player
      </button>
    </header>
  );
}

export default NavBar