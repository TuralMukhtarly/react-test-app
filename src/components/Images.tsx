import { Paper } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { ResponseType } from "../api/api";
import { AppRootStateType } from "../redux/store";
import { useStyles } from "../styles/styles";

function Images() {
  const classes = useStyles();
  const images = useSelector<AppRootStateType, ResponseType>(
    (state) => state.reducer
  );

  const [tag, setTag] = useState<string>("");
  const [ids, setIds] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.currentTarget.value);
  };

  const setValues = (
    farm: number,
    server: string,
    id: string,
    secret: string,
    title: string
  ) => {
    localStorage.setItem(
      id,
      JSON.stringify({ farm, server, id, secret, title })
    );
    setIds(id);
  };

  return (
    <div className={classes.rootList}>
      {images.photos.photo.map((e) => {
        const srcPath =
          "https://farm" +
          e.farm +
          ".staticflickr.com/" +
          e.server +
          "/" +
          e.id +
          "_" +
          e.secret +
          ".jpg";
        return (
          <ul key={e.id}>
            <Paper>
            <img
              src={srcPath}
              alt="#"
              width="230px"
              height="240px"
              
            />
            <TextField
              variant="outlined"
              label="some tag?"
              onChange={onChangeHandler}
              className={classes.field}
            />
            <div>
            {!!localStorage.getItem(e.id) ? (
              <Button
                variant="outlined"
                size="medium"
                color="secondary"
                style={{ float: "right" }}
                onClick={() => {
                  localStorage.removeItem(e.id);
                  setIds(e.secret);
                }}
              >
                Remove it
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                style={{ float: "right" }}
                onClick={() =>
                  setValues(e.farm, e.server, e.id, e.secret, e.title)
                }
              >
                Bookmark it
              </Button>
            )}
            </div>
            </Paper>
          </ul>
        );
      })}
    </div>
  );
}

export default Images;
