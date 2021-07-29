import { createContext, useContext, useReducer } from "react";
import { SongContextType } from "../models/song";
import { SongReducer } from "../reducer/SongReducer";

const SongContext = createContext<SongContextType | undefined>(undefined);

function SongProivder(props: any): any {
  const [songList, dispatch] = useReducer(SongReducer, {});

  const value = { songList, dispatch };

  return (
    <SongContext.Provider value={value}>{props.childern}</SongContext.Provider>
  );
}

function useSongContext(): SongContextType {
  const songContext = useContext(SongContext);
  if (songContext === undefined) {
    throw new Error("SongContext must be use within a SongProvider");
  }

  return songContext;
}

export { SongProivder, useSongContext };
