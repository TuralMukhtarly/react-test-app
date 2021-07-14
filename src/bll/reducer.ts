import { Dispatch } from "redux"
import { api, ResponseType } from "../api/api"

type initialStateType = any

const initialState: initialStateType = {
    photos: {
        page:1,
        pages:234,
        perpage:20,
        photo: [{
            farm: 66,
            id: "51312027305",
            isfamily: 0,
            isfriend: 0,
            ispublic: 1,
            owner: "29372296@N00",
            secret: "75d7c95f86",
            server: "65535",
            title: "Dry dock & lock - Milford Haven Marina aerial image - Pembrokeshire in Wales"
        },
        {
            farm: 66,
            id: "51312027305",
            isfamily: 0,
            isfriend: 0,
            ispublic: 1,
            owner: "29372296@N00",
            secret: "75d7c95f86",
            server: "65535",
            title: "Dry dock & lock - Milford Haven Marina aerial image - Pembrokeshire in Wales"
        }
    ]
    }
}
type getImagesType = ReturnType<typeof getImagesAC>
type ActionType = getImagesType

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
            const error = e.res ? e.res.data.error : e.message + ", more details in the console"
            console.log("Error:", { ...e })
        })
}