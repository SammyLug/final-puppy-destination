import NewPlayerForm from "./NewPlayerForm"
import { useGetPlayersQuery, useDeletePlayerMutation } from "../api/playersSlice"
import { useNavigate } from "react-router";
import { useState } from "react";

function AllPlayers() {
  const [search, setSearch] = useState("");

  const { data, isLoading, refetch } = useGetPlayersQuery();
  console.log(data?.data?.players);

  // Array filter() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 // String includes() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

 let filteredPlayers = 
 data?.data.players.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())) || [];

 // returns a tuple [function, resultObj]
 // https://redux-toolkit.js.org/rtk-query/usage/mutations#shared-mutation-results


    // const dummyPlayers = [
    //   {
    //     id: 2,
    //     name: "Crumpet",
    //     breed: "American Staffordshire Terrier",
    //     status: "field",
    //     imageUrl:
    //       "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg",
    //     createdAt: "2021-06-15T16:21:14.103Z",
    //     updatedAt: "2021-06-15T16:21:14.103Z",
    //     teamId: 1,
    //     cohortId: 1,
    //   },
    //   {
    //     id: 4,
    //     name: "Daphne",
    //     breed: "German Shepherd",
    //     status: "field",
    //     imageUrl:
    //       "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg",
    //     createdAt: "2021-06-15T16:21:14.103Z",
    //     updatedAt: "2021-06-15T16:21:14.103Z",
    //     teamId: 2,
    //     cohortId: 1,
    //   },
    //   {
    //     id: 10,
    //     name: "Kenny",
    //     breed: "Golden Retriever / Boxer",
    //     status: "bench",
    //     imageUrl:
    //       "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg",
    //     createdAt: "2021-06-15T16:21:14.103Z",
    //     updatedAt: "2021-06-15T16:21:14.103Z",
    //     teamId: 2,
    //     cohortId: 1,
    //   },
    // ];

const [deletePlayer, result] = useDeletePlayerMutation();

const navigate = useNavigate();
  
  return (
  <>
  <h2> Puppy Bowl Players!</h2>

  <NewPlayerForm />
    <h3>Roster</h3>
   {/* TODO use `dummy players` to build cards for each player with info + buttons to view details / remove */}
    <label>
      Search:{" "}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Peanuts"
      />
    </label>

    {!isLoading ? (
      filteredPlayers.map((player) => (

        <div key={player.id} className="player-card">
          <h4>{player.name}</h4>
          <p>{player.breed}</p>
          <img src={player.imageUrl} alt={`${player.name}'s image`} />

          <br />
          <br />

          <button onClick={() => navigate(`/players/${player.id}`)}>
            View Details
          </button>

          <button onClick={async () => {
            await deletePlayer(player.id);
            refetch()}}>
            Remove
          </button>

        </div>
      ))) : 
      (<p>Loading...</p>
      )}
  </>
  );
}

export default AllPlayers