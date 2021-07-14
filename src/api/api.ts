import axios from "axios"

const instance = axios.create({
    baseURL: "https://www.flickr.com/",
})

export const api = {
    getImages(){
        return instance.get<ResponseType>(`services/rest/?method=flickr.photos.search&api_key=a8cd496275e5274e52baf05bc8bd08e3&tags=${"minsk"}&format=json&nojsoncallback=1`)
    }
}

export type ResponseType = {
    photos: PhotosType
    stat:string
}

export type PhotosType = {
    page:number
    pages:number
    perpage:number
    total:number
    photo:Array<PhotoType>
}

export type PhotoType = {
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