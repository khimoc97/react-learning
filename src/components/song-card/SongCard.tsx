import { IPlayingSong, ISong, ISongDispatchAction } from "../../models/Song";
import { IconButton, Paper } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PauseIcon from "@material-ui/icons/Pause";
import "./SongCard.css";
import { UpdateSong } from "../../apis/SongApi";
import { useSongContext } from "../../contexts/SongContext";
import ReactPlayer from "react-player";
import { Action } from "../../enums/action.enum";

interface SongCardProps {
  song: ISong,
  playingSong: IPlayingSong,
  toggleSong: (song: ISong) => void
}

export const SongCard = (props: SongCardProps) => {
  const songContext = useSongContext();

  const addLike = async () => {
    try {
      let updatedSong = props.song;
      updatedSong.likes = updatedSong.likes + 1;
      delete updatedSong.createdAt;
      delete updatedSong.updatedAt;

      const result = (await UpdateSong(updatedSong)).data?.updateSong;

      const dispatchAction = {
        action: Action.update,
        payload: result
      } as ISongDispatchAction
      songContext.songDispatch(dispatchAction);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper className="song-card-wrapper" variant="outlined" elevation={2}>
      {console.log(props.song.id)}
      <div className="song-card">
        <IconButton aria-label="play" onClick={() => props.toggleSong(props.song)}>
          {props.playingSong.playingSong.id === props.song.id ? <PauseIcon /> : <PlayArrowIcon />}
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
      {props.playingSong.playingSong.id === props.song.id ? (
        <div className="audio-player">
          <ReactPlayer
            url={props.playingSong.songUrl}
            controls
            playing
            height="50px"
            onPause={() => props.toggleSong(props.song)}
          />
        </div>
      ) : null}
    </Paper>
  );
}
