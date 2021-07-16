import { Dispatch } from "redux";
import { api, ResponseType } from "../api/api";

type initialStateType = ResponseType
const initialState: initialStateType = {
  photos: {
    page: 1,
    pages: 234,
    perpage: 20,
    total:12,
    photo: [],
  },
  stat:"ok"
};

type getImagesType = ReturnType<typeof getImagesAC>;
export type ActionType = getImagesType;

export const mainReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "IMAGES/GET_IMAGES":
      return { ...state, ...action.images };
    default:
      return { ...state };
  }
};

export const getImagesAC = (images: ResponseType) => {
  return {
    type: "IMAGES/GET_IMAGES",
    images,
  } as const;
};

export const getImagesTC =
  (searchText: string, pageNumber: number) => (dispatch: Dispatch) => {
    api
      .getImages(searchText, pageNumber)
      .then((res) => {
        dispatch(getImagesAC(res));
      })
      .catch((e) => {
        console.log("Error:", { ...e });
      });
  };
