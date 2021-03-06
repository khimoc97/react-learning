import Amplify, { } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import { SongProivder } from "./contexts/SongContext";
import { SongList } from "./components/song-list/SongList";
import { Add, Cancel } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useState } from "react";
import { AddSong } from "./components/add-song/AddSong";
import React from 'react';

Amplify.configure(awsconfig);

const App = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My Ai Tun</h2>
      </header>
      <div className="song-list-wrapper">
        <SongProivder>
          <SongList />
          {isAdding
            ?
            <React.Fragment>
              <AddSong finishUpload={() => setIsAdding(false)} />
              <IconButton onClick={() => setIsAdding(false)}>
                <Cancel />
              </IconButton>
            </React.Fragment>
            : <IconButton onClick={() => setIsAdding(true)}>
              <Add />
            </IconButton>}
        </SongProivder>
      </div>
    </div>
  );
};

export default withAuthenticator(App);
