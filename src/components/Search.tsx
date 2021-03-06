import { Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { ChangeEvent, useEffect } from "react";
import { KeyboardEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponseType } from "../api/api";
import { AppRootStateType } from "../redux/store";
import Images from "./Images";
import { useStyles } from "../styles/styles";
import { getImagesTC } from "../redux/mainReducer";
import { InputBase } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const photos = useSelector<AppRootStateType, ResponseType>(
    (state) => state.reducer
  );

  const [requestText, setRequestText] = useState<string>("");
  const [page, setPage] = React.useState(1);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [state, setState] = useState<string>("");

  useEffect(() => {
    if (requestText !== "") {
      dispatch(getImagesTC(requestText, page));
      setPagesCount(photos.photos.pages);
    }
  }, [requestText, page, photos.photos.pages, dispatch]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };
  const onClickHandler = () => {
    setRequestText(state);
  };
  const onBlurHandler = () => {
    setRequestText(state);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.charCode === 13) {
        setRequestText(state);
        e.stopPropagation();
        e.preventDefault();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Paper className={classes.rootSearch}>
        <InputBase
          onKeyPress={onKeyPressHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          className={classes.input}
          placeholder="Search images"
        />
        <IconButton
          onClick={onClickHandler}
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {!requestText || photos.photos.photo.length < 1 ? (
        <h2 className={classes.title}>
          No images here. Whould you try to search for anything else?
        </h2>
      ) : (
        <>
          <div>
            <Pagination
              className={classes.paginator}
              count={Math.ceil(pagesCount / 15)}
              page={page}
              shape="rounded"
              onChange={handleChange}
              color={"primary"}
            />
          </div>
          <div className={classes.imagesBlock}>
            <Images />
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
