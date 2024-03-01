// useParams returns an object so we are reconstructing the object using the key defined in the <Route> element and creating a local variable in this component with the same name 

import { useGetPlayersQuery, useCreatePlayerMutation } from "../api/playersSlice";
import { useState } from "react";

function NewPlayerForm() {

// const { id } = useParams()
// id = random number generated in the <NavBar> component

const [name, setName] = useState("");
const [breed, setBreed] = useState("");
const [imageUrl, setImageUrl] = useState("");

// returns a tuple [function, resultObj]
// https://redux-toolkit.js.org/rtk-query/usage/mutations#shared-mutation-results

const [createPlayer, result] = useCreatePlayerMutation();

const { refetch } = useGetPlayersQuery();

async function handleSubmit(event) {
  e.preventDefault();

  // use a random image if none provided in the form 

  const newPlayerObj = { name, breed };
  if (imageUrl === "") {
    // use https://placedog.net/
    newPlayerObj.imageUrl =  `https://placedog.net/800/${Math.floor(
      Math.random() * 1000 + 1)}`;
  } else {
    newPlayerObj.imageUrl = imageUrl;
  }

  await createPlayer(newPlayerObj);
  refetch();
  clearForm();
}

  function clearForm() {
    setName("");
    setBreed("");
    setImageUrl("");
}

  return (
  <>
  <h2>New Player Form Component</h2>
    <form>
    <label>
          Name:
          <input
            type="text"
            name="player-name"
            id="player-name"
            placeholder="Lucky"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Breed:
          <input
            type="text"
            name="player-breed"
            id="player-breed"
            placeholder="dalmatian"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="player-image"
            id="player-image"
            placeholder="https://placedog.net/640/480?random"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          </label>

        <button>Submit</button>

      </form>
  </>
  );
}

export default NewPlayerForm