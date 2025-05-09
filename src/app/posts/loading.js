import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function loading() {
    return (
        <div className="flex justify-center items-center min-h-[300px]">
            <ClipLoader color="#3B82F6" size={50} />
        </div>
    );
}
