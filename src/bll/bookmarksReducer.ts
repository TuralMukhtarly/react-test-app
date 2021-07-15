import { Dispatch } from "redux"
import { api, PhotosType, PhotoType, ResponseType } from "../api/api"
import { ActionType } from "./reducer"

type initialStateType = any

const initialState: initialStateType = {
    photos: {
        page:1,
        pages:234,
        perpage:20,
        newPhoto: [
            {   farm: 66,
                id: "51309237977",
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                owner: "33471727@N03",
                secret: "15efb8c185",
                server: "65535",
                title:"HL8A0936"
            }
    ]
}
}
export type addBookmarksType = ReturnType<typeof addBookmarksAC>


export const bookmarksReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "BOOKMARKS/ADD_BOOKMARKS":
            return {...state, newPhoto:[...action.obj]}
        default:
        return {...state}
    }
}
export const addBookmarksAC = (obj:any) => {
    return {
        type: "BOOKMARKS/ADD_BOOKMARKS",
        obj
    } as const
}
