import { IconButton, TextField } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadFile } from "../../apis/S3Api";
import { CreateSong } from "../../apis/SongApi";
import { useSongContext } from "../../contexts/SongContext";
import { Action } from "../../enums/action.enum";
import { ISong, ISongDispatchAction } from "../../models/Song";
import './AddSong.css';

interface AddSongProps {
  finishUpload: () => void
}

export function AddSong(props: AddSongProps) {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ISong>(
    {
      mode: "onChange",
      shouldUnregister: true,
      shouldUseNativeValidation: false,
      defaultValues: {
        description: ''
      }
    }
  );
  const [songFile, setSongFile] = useState<File>();
  const songContext = useSongContext();

  const uploadSong = async () => {
    if (songFile) {
      try {
        const fileOnStorage = await UploadFile(songFile);

        const newSong = getValues();
        newSong.filePath = fileOnStorage.key;
        newSong.likes = 0;

        const result = (await CreateSong(newSong)).data?.createSong;

        const dispatchAction = {
          action: Action.create,
          payload: result
        } as ISongDispatchAction
        songContext.songDispatch(dispatchAction);
      } catch (error) {
        console.error(error);
      } finally {
        props.finishUpload();
      }
    }
  }

  const selectedFileChanged = (files: FileList | null) => {
    if (files) setSongFile(files[0]);
  }

  return (
    <form onSubmit={handleSubmit(uploadSong)}>
      <div className="new-song-wrapper">
        <TextField label="Title" {...register("title", { required: "Title is required." })}
          error={errors.title ? true : false}
          helperText={errors.title?.message} />
        <TextField label="Artist" {...register("owner", { required: "Artist is required." })}
          error={errors.owner ? true : false}
          helperText={errors.owner?.message} />
        <TextField label="Description" {...register("description")} />

        <input type="file" accept="audio/*" onChange={(event) => selectedFileChanged(event.target.files)} required/>

        <IconButton type="submit">
          <Publish />
        </IconButton>
      </div>
    </form>
  )
}