import axios from "axios"

const instance = axios.create({
    baseURL: "https://www.flickr.com/",
})

export const api = {
    getImages(){
        return instance.get<ResponseType>("services/rest/?method=flickr.photos.search&api_key=1b7eb26a637dc6a6f1ad4c04ded10d39&tags=images&format=json&nojsoncallback=1&auth_token=72157719543797331-b715a90eaff7367a&api_sig=8c1b5b1754497f3cf60a51964a916d2d")
    }
}

export type ResponseType = {
    photos: initImg
    stat:string
}

export type initImg = {
    page:number
    pages:number
    perpage:number
    total:number
    photo:Array<InitPhoto>
}

export type InitPhoto = {
    id:string
    owner:string
    secret:string
    server:string
    farm:number
    title:string
    ispublic:number
    isfriend:number
    isfamily:number
}