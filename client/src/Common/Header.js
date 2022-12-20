import React from "react";

const Header = ({currentStep, stepSetter}) => {
    return(
        <header className="header">
            <a href="/"><img src="https://ducksvegas.com/static/media/logo-beta.39b359c6dd109ab0cabd.png" className="logo" alt="logo" /></a>
            {currentStep === 1 ? <button className="check-status-btn" onClick={() => stepSetter(10)}>Check Status</button> : <a href="/" style={{marginTop: "0px !important", color: "#66CAC8"}} className="go-to-home-page">Restart Application</a>}
        </header>
    )
}

export default Header