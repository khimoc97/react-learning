import { ISong } from "../../models/song";
import { IconButton, Paper } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./SongCard.css";
import { API, graphqlOperation } from "aws-amplify";
import { updateSong } from "../../graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useSongContext } from "../../context/SongContext";
import { useEffect } from "react";

export const SongCard = (props: { song: ISong; idx: number }) => {
  const songContext = useSongContext();

  useEffect(() => {
    songContext.dispatch('fetch');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLike = async () => {
    try {
      let updatedSong = props.song;
      updatedSong.likes = updatedSong.likes + 1;
      delete updatedSong.createdAt;
      delete updatedSong.updatedAt;

      const response = (await API.graphql(
        graphqlOperation(updateSong, { input: updatedSong })
      )) as GraphQLResult<{ updateSong: ISong }>;

      console.log(response.data?.updateSong);
      props.song = response.data?.updateSong
        ? response.data?.updateSong
        : ({} as ISong);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper variant="outlined" elevation={2} key={`song${props.idx}`}>
      <div className="song-card">
        <IconButton aria-label="play">
          <PlayArrowIcon />
        </IconButton>
        <div>
          <div className="song-title">{props.song.title}</div>
          <div className="song-owner">{props.song.owner}</div>
        </div>
        <div>
          <IconButton aria-label="like" onClick={() => addLike()}>
            <FavoriteIcon />
          </IconButton>
          {props.song.likes}
        </div>
        <div className="song-description">{props.song.description}</div>
      </div>
    </Paper>
  );
};
