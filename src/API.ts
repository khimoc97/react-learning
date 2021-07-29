/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSongInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  filePath: string,
  likes: number,
  owner: string,
};

export type ModelSongConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  filePath?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  title: string,
  description?: string | null,
  filePath: string,
  likes: number,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  filePath?: string | null,
  likes?: number | null,
  owner?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  filePath?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      description?: string | null,
      filePath: string,
      likes: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    description?: string | null,
    filePath: string,
    likes: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
