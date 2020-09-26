import React, { Component } from "react";
import { ThemeProvider } from "../Context";
import ConsumerPage  from "./ConsumerPage"
import { UserProvider } from "../Context";
import UserContextPage from "./UseContextPage"
 
export default class ContextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                themeColor: "red"
            },
            user: {
                name: "xiaoming"
            }
        }
    }
    render() {
        const { theme, user } = this.state;
        return (
            <div>
                <h3>ContextPage</h3>
                {/* ConsumerPage组件使用theme */}
                <ThemeProvider value={theme}>
                    <UserProvider value={user}>
                        <ConsumerPage/>
                        <UserContextPage/>
                    </UserProvider>
                </ThemeProvider>
            </div>
        )
    }
}