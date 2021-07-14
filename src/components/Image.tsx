import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitPhoto, ResponseType } from "../api/api";
import { getImagesTC } from "../bll/reducer";
import { AppRootStateType } from "../bll/store";
import Img from "./Imgs";

function Images() {
   const dispatch = useDispatch()
   const photos = useSelector<AppRootStateType, ResponseType>((state) => state.reducer)
   console.log(photos);
    
   useEffect(()=>{
        dispatch(getImagesTC())
   },[])
    return(
        <div>
            {photos.photos.photo.map((e)=>{
                var srcPath = 'https://farm'+e.farm+'.staticflickr.com/'+e.server+'/'+e.id+'_'+e.secret+'.jpg';
                return(
                  <img alt="dogs" src={srcPath}></img>
                )
            })}
        </div>
    )
}
export default Images