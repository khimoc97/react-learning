import { Storage } from "aws-amplify";
import { useState } from "react";
import { useEffect } from "react";
import { FetchSongList } from "../../apis/SongApi";
import { useSongContext } from "../../contexts/SongContext";
import { Action } from "../../enums/action.enum";
import { IPlayingSong, ISong, ISongDispatchAction, playingSongDefaultValue } from "../../models/Song";
import { SongCard } from "../song-card/SongCard";

export function SongList() {
  const [playingSong, setPlayingSong] = useState<IPlayingSong>(playingSongDefaultValue);
  const songContext = useSongContext();

  useEffect(() => {
    fetchSong();
    // eslint-disable-next-line
  }, []);

  const fetchSong = async () => {
    try {
      const result = (await FetchSongList()).data?.listSongs.items;

      const dispatchAction = {
        action: Action.fetch,
        payload: result
      } as ISongDispatchAction

      songContext.songDispatch(dispatchAction);
    } catch (error) {
      console.log(error);
    }
  }

  const handleToggleSong = async (song: ISong) => {
    if (song.id === playingSong.playingSong.id) {
      setPlayingSong(playingSongDefaultValue);
      return;
    }

    try {
      const songUrl = await Storage.get(song.filePath, { expires: 60 }) as string;

      if (songUrl) {
        setPlayingSong({
          playingSong: song,
          songUrl: songUrl
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="song-list">
      {songContext.songList.length > 0 && songContext.songList.map((song: ISong) => {
        return (
          <SongCard song={song} playingSong={playingSong} toggleSong={handleToggleSong} key={song.id} />
        );
      })}
    </div>
  );
}
