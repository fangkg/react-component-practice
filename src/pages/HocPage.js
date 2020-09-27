import React, { Component } from "react";


// hoc 是个函数，参数是组件，返回值是新组件

const foo = Comp => props => {
    return (
        <div className="border">
            <Comp { ...props }/>
        </div>
    )
}


function Child(props) {
    return <div>Child - { props.name }</div>
}

const Res = foo(Child)

// 装饰器
@foo
class ClassChild extends Component {
    render() {
        return <div>Child - { this.props.name }</div>
    }
}

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Res name="res"/>
                <ClassChild name="ClassChild"/>
            </div>
        )
    }
}


// 不要在render方法中使用HOC 性能、丢失参数
