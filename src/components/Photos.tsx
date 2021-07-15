import { TextField } from "@material-ui/core";
import React, {ChangeEvent, useEffect} from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhotoType, ResponseType } from "../api/api";
import { addBookmarksAC } from "../bll/bookmarksReducer";
import { getImagesTC } from "../bll/reducer";
import { AppRootStateType } from "../bll/store";
import s from "./Photos.module.css"

function Photos() {
    
   const dispatch = useDispatch()
   const photos = useSelector<AppRootStateType, ResponseType>((state) => state.reducer)

   useEffect(()=>{
    dispatch(getImagesTC())
    },[])

   const [state, setState] = useState<string>()

   const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
   }
   const [book, setBook] = useState<any>([])
   
   const onAdd = (obj:any) => {
        setBook({...obj})
        dispatch(addBookmarksAC(book))
   }
   console.log(book);
   
   
    return(
        <div className={s.mainApp}>
            <TextField onChange={onChangeHandler} id="outlined-search" label="Find Images" type="search" variant="outlined"  />
            {photos.photos.photo.map((e)=>{
                let obj = {
                "id":e.id,
                "farm":e.farm,
                "owner":e.owner,
                "secret":e.secret,
                "title":e.title,
                "isfamily":e.isfamily,
                "ispublic":e.ispublic,
                "server":e.server,
                "isfriend":e.isfriend}
                var srcPath = 'https://farm'+e.farm+'.staticflickr.com/'+e.server+'/'+e.id+'_'+e.secret+'.jpg';
                return(
                  <div key={`${e.id}+${e.secret}`} className={s.photos}>
                      <img alt="dogs" src={srcPath}></img>
                      <button onClick={()=>onAdd(obj)}>add</button>
                  </div>
                )
            })}
        </div>
    )
}

export default Photos