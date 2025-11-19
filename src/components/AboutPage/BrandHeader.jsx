import React from "react";
import NameLogo from "../MainPage/NameLogo";
import Status from "./Status";

const BrandHeader = () => {
    return (
        <div className="absolute top-0 left-0 p-12">
            <NameLogo />
            <div className="mt-3 ml-1">
                <Status status="Ready to Work" />
            </div>
        </div>
    );
};

export default BrandHeader;
