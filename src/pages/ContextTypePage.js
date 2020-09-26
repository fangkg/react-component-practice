import React, { Component } from "react";
import { ThemeContext, UserContext } from "../Context";


export default class ContextTypePage extends Component {
    static contextType  = ThemeContext;

    render() {
        const { themeColor, name } = this.context;
        return (
            <div>
                <h3 className={themeColor}>ContextTypePage</h3>
                <p>{name}</p>
            </div>
        )
    }
}

// 使用在类组件上
// 商用单一的context