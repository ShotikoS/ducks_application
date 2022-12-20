import React, {useState} from "react";
import back from '../icons/24.svg';
import done from "../icons/32.svg";
import rightGray from "../icons/right.svg";

const ChooseCategory = ({stepsSetter, currentStep, setData}) => {
    const [categories, setCategories] = useState(
        [
            {
                id: 11,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: true
            },
            {
                id: 12,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 13,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 14,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 15,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 16,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 17,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 18,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 19,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            },
            {
                id: 20,
                title: "Builder/Founder",
                text: "You like to build things from scratch. You want to connect with other founders, devs, designers.",
                selected: false
            }
        ]
    )
    return (<div className="connect-wallet-step-container">
        <div className="back">
            <button className="back-icon" onClick={() => stepsSetter(currentStep - 1)}>
                <img src={back} alt="back"/>
            </button>
            <p>Back</p>
        </div>
        <div className="connect-wallet-block" style={{height: "1081px"}}>
            <ul className="show-progress">
                <li>
                    <div className={currentStep >= 2 ? "each-step active" : "each-step"}>{currentStep >= 3 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title active-text">Wallet</p>
                </li>
                <div className="hr-line"></div>
                <li>
                    <div className={currentStep >= 3 ? "each-step active" : "each-step"}>{currentStep >= 4 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Social</p>
                </li>
                <div className="hr-line"></div>
                <li>
                    <div className={currentStep >= 4 ? "each-step active" : "each-step"}>{currentStep >= 5 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Categories</p>
                </li>
                <div className="hr-line"></div>
                <li>
                    <div className={currentStep >= 5 ? "each-step active" : "each-step"}>{currentStep >= 6 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Questions</p>
                </li>
            </ul>
            <p className="block-title">Choose the category that fits you</p>
            <p className="block-sub-title">Don't worry about it too much. Just pick one & roll with it.</p>

            <div className="categories-list">
                {
                    categories.map((category) => {
                        return (
                            <div key={category.id} className={category.selected === true ? "category-item selected" : "category-item"} onClick={
                                () => {
                                    const selected = category;
                                    const showSelected = categories.map((c) => {
                                        if(c.id === category.id) return {...c, selected: true};
                                        c.selected = false
                                        return c
                                    })
                                    setCategories(showSelected)
                                    setData((prev) => {
                                        return {...prev, category: selected.title}
                                    })
                                    stepsSetter(currentStep + 1)
                                }
                            }>
                                <div>
                                    <p className="category-title">Builder/Founder</p>
                                    <p className="category-description">You like to build things from scratch. You want to connect with other founders, devs, designers.</p>
                                </div>
                                <img src={rightGray} className="right-image" alt="right" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>)
}

export default ChooseCategory