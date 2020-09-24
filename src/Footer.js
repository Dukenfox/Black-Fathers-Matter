import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <h1 className= "header">
        Copyright © {currentYear}
    </h1>
}
export default Footer;