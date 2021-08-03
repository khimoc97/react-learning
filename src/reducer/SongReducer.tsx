import { Action } from '../enums/action.enum';
import { ISong, ISongDispatchAction } from '../models/Song';

export function SongReducer(songList: ISong[], action: ISongDispatchAction): any {
  switch (action.action) {
    case Action.create:
      return [...songList, action.payload];

    case Action.fetch:
      return action.payload;

    case Action.update:
      if (action.payload) {
        const idx = songList.findIndex(song => song.id === (action.payload as ISong).id);
        const newList = [...songList]
        newList[idx] = action.payload as ISong;
        return newList;
      }
      return;

    default:
      throw new Error();
  }
}
