import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../api/playersSlice";

function SinglePlayer() {

  const { id } = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(id);
  const player = data?.data?.player;


  // id = random number in the URL 
  return (
  <>
  <h2>Single Player Component</h2>
  {isLoading ? (
    <p>Loading...</p> ) : (
      <div>
        <h3>{player.name}</h3>
        <h4>{player.breed}</h4>
        {/* TODO = expand to show more player details */}
      </div>
  )}
  </>
  );
}

export default SinglePlayer
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// when we destructure something, we unpack values from arrays, or properties from objects, into distinct variables
//   const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// // is equivalent to:
// // const a = obj.a;
// // const b = obj.b;

