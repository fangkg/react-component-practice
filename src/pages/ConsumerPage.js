import React, { Component } from "react";
import { ThemeConsumer, UserConsumer } from "../Context";

export default class ConsumerPage extends Component {
    render() {
        return (
            <div>
                <h3>ConsumerPage</h3>
                <ThemeConsumer>
                    { themeContext => <div className={themeContext.themeColor}>
                        omg
                        <UserConsumer>
                            {/* { userContext => <p>{userContext.name}</p>} */}
                            {userContext => <Child {...userContext}/>}
                        </UserConsumer>
                        </div> }
                </ThemeConsumer>
            </div>
        )
    }
}

// 封装为组件
function Child(props) {
    return <div>{props.name}</div>
}