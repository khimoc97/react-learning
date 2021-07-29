export interface ISong {
  id: string;
  title: string;
  description: string;
  filePath: string;
  likes: number;
  owner: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type SongContextType = {
  songList: ISong[];
  dispatch: Dispatch;
};

export enum DispatchAction {
  'Fetch',
  'Add',
  'Update',
  'Delete'
}

type Dispatch = (action: string) => void;
