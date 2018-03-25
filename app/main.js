// import React from 'react';
// import ReactDOM from 'react-dom';
// import { LocaleProvider, DatePicker, message } from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';
//
// moment.locale('zh-cn');
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: '',
//         };
//     }
//     handleChange(date) {
//         message.info('您选择的日期是: ' + date.toString());
//         this.setState({ date });
//     }
//     render() {
//         return (
//             <LocaleProvider locale={zhCN}>
//                 <div style={{ width: 400, margin: '100px auto' }}>
//                     <DatePicker onChange={value => this.handleChange(value)} />
//                     <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
//                 </div>
//             </LocaleProvider>
//         );
//     }
// }
//
//
//
// ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Dropdown, Icon, message } from 'antd';
// 首先我们需要导入一些组件...
import {Route, Link,Switch, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import LoginPanel from './js/login/login-panel.js'

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
function About(props) {
    return <div>I am About</div>;
}
class Inbox extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        message.info("123   &#10; 456");
    }
    render(){
        return <div>I am Inbox<button onClick={this.handleClick}></button></div>;
    }
}

function App(props) {
    return (
        <div>
            <h1>App</h1>
            {/* 把 <a> 变成 <Link> */}
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            {props.children}
        </div>
    )
}


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            {/*<Route path='/' component={App}/>*/}
            {/*<Route exact path='/' component={LoginPanel} />*/}
            <Route exact path='/' component={App} />
            <Route path='/login' component={LoginPanel}/>
            <Route path='/about' component={About}/>
            <Route path='/inbox' component={Inbox}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))