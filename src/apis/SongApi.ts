import { updateSong, createSong } from './../graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API, graphqlOperation } from "aws-amplify";
import { listSongs } from "../graphql/queries";
import { ISong } from "../models/Song";

interface IAddSongResult {
  createSong: ISong
}

interface IFetchSongResult {
  listSongs: {
    items: ISong[]
  }
}

interface IUpdateSongResult {
  updateSong: ISong
}

export function CreateSong(song: ISong): Promise<GraphQLResult<IAddSongResult>> {
  return API.graphql(graphqlOperation(createSong, { input: song })) as Promise<GraphQLResult<IAddSongResult>>;
}

export function FetchSongList(): Promise<GraphQLResult<IFetchSongResult>> {
  return API.graphql(graphqlOperation(listSongs)) as Promise<GraphQLResult<IFetchSongResult>>;
}

export function UpdateSong(song: ISong): Promise<GraphQLResult<IUpdateSongResult>> {
  return API.graphql(graphqlOperation(updateSong, { input: song })) as Promise<GraphQLResult<IUpdateSongResult>>;
}