import { TextField } from "@material-ui/core";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitPhoto, ResponseType } from "../api/api";
import { getImagesTC } from "../bll/reducer";
import { AppRootStateType } from "../bll/store";
import s from "./Photos.module.css"
import SideBar from "./SideBar";

function Photos() {
   const dispatch = useDispatch()
   const photos = useSelector<AppRootStateType, ResponseType>((state) => state.reducer)
    
   useEffect(()=>{
        dispatch(getImagesTC())
   },[])
    return(
        <div className={s.mainApp}>
            <TextField id="outlined-search" label="Find Images" type="search" variant="outlined" />
            {photos.photos.photo.map((e)=>{
                var srcPath = 'https://farm'+e.farm+'.staticflickr.com/'+e.server+'/'+e.id+'_'+e.secret+'.jpg';
                return(
                  <div className={s.photos}>
                      <img alt="dogs" src={srcPath}></img>
                  </div>
                )
            })}
        </div>
    )
}
export default Photos