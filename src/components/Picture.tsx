import { Button,TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux';
import { ResponseType } from '../api/api';
import { AppRootStateType } from '../redux/store';
import { useStyles } from '../styles/styles';


function Picture() {
    const classes = useStyles();
    const [tag, setTag] = useState("")
    const [ids, setIds] = useState<string>("")
    const photos = useSelector<AppRootStateType, ResponseType>((state) => state.reducer)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setTag(e.currentTarget.value)}

    const setValues = (farm: number, server: string, id: string, secret: string, title: string) => {
        localStorage.setItem(id, JSON.stringify({farm, server, id, secret, title}));
        setIds(id)
    }
    
    return (
        <div className={classes.rootList}>
        {photos.photos.photo.map((e)=>{
            var srcPath = 'https://farm'+e.farm+'.staticflickr.com/'+e.server+'/'+e.id+'_'+e.secret+'.jpg';
               return (
                <ul key={e.id}>
               <div>{e.title}</div>
               <img src={srcPath} width="300px" height="300px"/>
               
               {!!localStorage.getItem(e.id) ?
                   <Button variant="contained"     
                           size="medium"
                           color="secondary"
                           onClick={() => {
                           localStorage.removeItem(e.id)
                           setIds(e.secret)
                           }}
                           >Remove it</Button>
                   :
                   <Button variant="contained"
                           size="small"
                           color="primary"
                           onClick={() => setValues(e.farm, e.server, e.id, e.secret, e.title)}>Bookmark it</Button>}
                    <TextField label="some tag?"
                          onChange={onChangeHandler}
               />
           </ul>
               )
           })}
        </div>
    )
}

export default Picture
