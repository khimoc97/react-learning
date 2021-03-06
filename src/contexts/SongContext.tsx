import { useMemo } from "react";
import { createContext, useContext, useReducer } from "react";
import { songContextDefaultValue, SongContextType } from "../models/Song";
import { SongReducer } from "../reducer/SongReducer";

const SongContext = createContext<SongContextType>(songContextDefaultValue);

function SongProivder(props: any): any {
  const [songList, songDispatch] = useReducer(SongReducer, {});

  const values = useMemo(() => ({ songList, songDispatch }), [songList]);

  return (
    <SongContext.Provider value={values}>{props.children}</SongContext.Provider>
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
