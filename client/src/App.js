import React, {useState} from "react";
import "./App.css";
import "./reset.css"
import Header from "./Common/Header";
import SignUpComponent from "./Common/SignUpComponent";
import ConnectWallet from "./Common/ConnectWallet";
import LinkTwiter from "./Common/LinkTwiter";
import ChooseCategory from "./Common/ChooseCategory";
import Questions from "./Common/Questions";
import AddLink from "./Common/AddLink";
import ApplicationSend from "./Common/ApplicationSent";
import CheckStatus from "./Common/CheckStatus";

function App() {

    const [formData, setFormData] = useState({
        walletAddress: "",
        twitter: "",
        category: "",
        questions: "",
        links: ""
    })
    const [steps, setSteps] = useState(1);
    console.log(formData)
    return (<div className="App">
        <Header currentStep={steps} stepSetter={setSteps}/>
        {steps === 1 && <div className="application-start-page">
            <SignUpComponent stepSetter={setSteps} currentStep={steps}/>
        </div>}
        {steps === 2 && <ConnectWallet stepsSetter={setSteps}  currentStep={steps} setData={setFormData} />}
        {steps === 3 && <LinkTwiter stepsSetter={setSteps}  currentStep={steps} setData={setFormData} />}
        {steps === 4 && <ChooseCategory stepsSetter={setSteps}  currentStep={steps} setData={setFormData} />}
        {steps === 5 && <Questions stepsSetter={setSteps}  currentStep={steps} setData={setFormData} /> }
        {steps === 6 && <AddLink stepsSetter={setSteps}  currentStep={steps} setData={setFormData} sendData={formData} />  }
        {steps === 7 && <ApplicationSend stepsSetter={setSteps} Data={formData}  currentStep={steps} setData={setFormData} sendData={formData} />  }
        {steps === 10 && <CheckStatus stepsSetter={setSteps} />  }
    </div>);
}

export default App;