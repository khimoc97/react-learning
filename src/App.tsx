import Amplify, { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { listSongs } from "./graphql/queries";
import { useEffect } from "react";
import { ISong } from "./models/song";
import "./App.css";
import { SongCard } from "./components/song-card/SongCard";
import { useState } from "react";
import { SongProivder } from "./context/SongContext";

Amplify.configure(awsconfig);

const App = () => {
  const [songList, setSongList] = useState<ISong[]>([]);

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSongs = async () => {
    try {
      const response = (await API.graphql(
        graphqlOperation(listSongs)
      )) as GraphQLResult<{ listSongs: { items: ISong[] } }>;
      const result = response.data?.listSongs.items
        ? response.data?.listSongs.items
        : [];

      setSongList(result);
      console.log(songList);
    } catch (error) {}
  };

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My App Content</h2>
      </header>
      <div className="songList">
        {songList.map((song: ISong, idx: number) => (
          <SongProivder  key={song.id}>
            <SongCard song={song} idx={idx} />
          </SongProivder>
        ))}
      </div>
    </div>
  );
};

export default withAuthenticator(App);
