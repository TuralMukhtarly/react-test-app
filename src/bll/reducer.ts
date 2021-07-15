import { Dispatch } from "redux"
import { api, ResponseType } from "../api/api"
import { addBookmarksType } from "./bookmarksReducer"

type initialStateType = any

const initialState: initialStateType = {
    photos: {
        page:1,
        pages:234,
        perpage:20,
        photo: []
    },
}

type getImagesType = ReturnType<typeof getImagesAC>
export type ActionType = getImagesType | addBookmarksType

export const mainReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "IMAGES/GET_IMAGES":
            return {...state, ...action.images}
        default:
        return {...state}
    }
}

export const getImagesAC = (images: ResponseType) => {
    return {
        type: "IMAGES/GET_IMAGES",
        images  
    } as const
}


export const getImagesTC = () => (dispatch: Dispatch) => {
    api
        .getImages()
        .then((res) => {
            dispatch(getImagesAC(res.data))
        })
        .catch((e) => {
            console.log("Error:", { ...e })
        })
}