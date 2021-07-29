import { ISong } from "../models/song";

export function SongReducer(songList: ISong[], action: string): any {
  switch (action) {
    case "fetch":
      console.log("data", songList);
      return {};
    case "decrement":
      return {};
    default:
      throw new Error();
  }
}
