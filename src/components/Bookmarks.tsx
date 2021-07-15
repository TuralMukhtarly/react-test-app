import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { PhotoType, ResponseType } from "../api/api";
import { AppRootStateType } from "../bll/store";

function Bookmarks() {
    const storage = () => {
        let pictures: Array<PhotoType> = []
        let keys: Array<string> = Object.keys(localStorage)
        for (let i = keys.length; i--;) {
            // @ts-ignore
            pictures.push(JSON.parse(localStorage.getItem(keys[i])))
        }
        return pictures;
    }
    return (
        <div>
           {storage().map((e)=>{
               var srcPath = 'https://farm'+e.farm+'.staticflickr.com/'+e.server+'/'+e.id+'_'+e.secret+'.jpg';
               return(
                <ul key={e.id}>
                <div>
                    <div className={'title'}>{e.title}</div>
                    <img src={srcPath} width="300px"/>
                    <Button variant="contained"
                            size="small"
                            color="secondary"
                            onClick={() => {
                                localStorage.removeItem(e.id)
                            }}>Remove it</Button>
                </div>
            </ul>
               )
           })}
        </div>
    )
}
export default Bookmarks