import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { PhotoType } from "../api/api";
import { useStyles } from "../styles/styles";

function Bookmarks() {
  const [ids, setIds] = useState<string>("");
  const classes = useStyles();

  const storage = () => {
    let pictures: Array<PhotoType> = [];
    let keys: Array<string> = Object.keys(localStorage);
    for (let i = keys.length; i--; ) {
      // @ts-ignore
      pictures.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return pictures;
  };
  return (
    <div className={classes.rootList}>
      {storage().map((e) => {
        const srcPath ="https://farm" + e.farm + ".staticflickr.com/" + e.server + "/" + e.id + "_" + e.secret + ".jpg";
        return (
          <ul key={e.id}>
            <div>
              <img
                src={srcPath}
                width="230px"
                height="240px"
                style={{ border: "5px solid lightblue" }}
              />
              <div>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  style={{ float: "right" }}
                  onClick={() => {
                    localStorage.removeItem(e.id);
                    setIds(e.id);
                  }}
                >
                  Remove it
                </Button>
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
}
export default Bookmarks;
