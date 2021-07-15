import React from "react";
import { useSelector } from "react-redux";
import { ResponseType } from "../api/api";
import { AppRootStateType } from "../bll/store";

function Bookmarks() {
    const ppp = useSelector<AppRootStateType, ResponseType>((state) => state.bookmarks)
    console.log(ppp);

    return (
        <div>
           
        </div>
    )
}
export default Bookmarks