import { TextField } from "@material-ui/core";
import React, {ChangeEvent, useEffect} from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponseType } from "../api/api";
import { getImagesTC } from "../bll/reducer";
import { AppRootStateType } from "../bll/store";
import s from "./Photos.module.css"

function Photos() {
    
   const dispatch = useDispatch()
   const photos = useSelector<AppRootStateType, ResponseType>((state) => state.reducer)
   
   useEffect(()=>{
    dispatch(getImagesTC())
    },[dispatch])

   const [state, setState] = useState<string>()

   const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
   }
   
    return(
        <div className={s.mainApp}>
            <TextField onChange={onChangeHandler} id="outlined-search" label="Find Images" type="search" variant="outlined"  />
            {photos.photos.photo.map((e)=>{
                var srcPath = 'https://farm'+e.farm+'.staticflickr.com/'+e.server+'/'+e.id+'_'+e.secret+'.jpg';
                return(
                  <div key={`${e.id}+${e.secret}`} className={s.photos}>
                      <img alt="dogs" src={srcPath}></img>
                  </div>
                )
            })}
        </div>
    )
}
export default Photos