import { Action } from "../enums/action.enum";

export interface ISong {
  id: string,
  title: string,
  description: string,
  filePath: string,
  likes: number,
  owner: string,
  createdAt?: Date,
  updatedAt?: Date
}

export interface IPlayingSong {
  playingSong: ISong,
  songUrl: string
}

export const playingSongDefaultValue = {
  playingSong: {} as ISong,
  songUrl: ''
} as IPlayingSong

export const songContextDefaultValue = {
  songList: [],
  songDispatch: () => { }
} as SongContextType;

export type SongContextType = {
  songList: ISong[];
  songDispatch: SongDispatch;
};

export interface ISongDispatchAction {
  action: Action;
  payload?: ISong[] | ISong;
}

type SongDispatch = (action: ISongDispatchAction) => void;
