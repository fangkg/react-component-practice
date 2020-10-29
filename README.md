# 组件化优点
1、增强代码重用性，提高开发效率
2、简化调试步骤，提升整个项目可维护性
3、便于协同开发
4、降低耦合性

# 组件跨层级通信 Context
一个React应用中，数据是通过props属性自上而下(由父及子)进行传递，这种做法对某些类型的属性及其繁琐(地区偏好、UI主题)，这些属性是程序中许多组件都需要的。Context提供了一种在组件之间共享此类值的方式，而不必显示地通过组件树的逐层传递props。React中使用Context实现祖代组件向后代组件跨层级传值。

React.createContext() 创建一个Context对象，当React渲染一个订阅了这个Context对象的组件，这个组件会从组件树中离自身最近的那个匹配的Provider中读取当前context的值。

Context.Provider() Provider接收一个value属性，传递给消费组件，允许消费组件订阅context的变化。一个Provider可以和多个消费组件有对应关系。多个Provider也可以嵌套使用，里层的会覆盖外层的数据。当Provider的value值发生变化时，它内部的所有消费组件都会重新渲染。Provider及其内部consumer组件都不受制于shouldComponentUpdate函数，因此当consumer组件在其祖先组件退出更新的情况下也能更新。

Class.contextType 挂载在class上的contextType属性会被重新赋值为一个由React.createContext()创建的Context对象。这能让使用者使用this.context来消费最近Context上的那个值。可以在任何声明周期中访问到它，包括render函数中。

Context.Consumer() React组件可以订阅到context变更。这能让使用者在函数式编程中完成订阅context。这个函数接收当前的context值，返回一个React节点。传递给函数的value值等同于往上组件树离这个context最近的Provider提供的value值。如果没有对应的Provider,value参数等同于传递给createContext()的defaultValue。

useContext() 接收一个context对象(React.createContext的返回值)并返回该context的当前值。当前的context值由上层组件中距离当前组件最近的<MyContext.Provider>的value prop决定。只能用在function组件中。

使用context  创建Context=>获取Provider和Consumer=>Provider提供值=>Consumer消费值

# 高阶组件 HOC
高阶组件是参数为组件，返回值为新组件的函数
为了提高组件复用率，可测试性，就要保证组件功能单一性；但是若要满足复杂需求就需要扩展功能单一的组件。
组件是将props转换为UI
不要再render方法中使用HOC,每次调用render函数都会创建一个EnhancedComponent，这将导致子树每次渲染都会进行卸载和重新挂载操作，这不仅仅是性能问题，重新挂载组件会导致该组件及其所有子组件的状态丢失。



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
