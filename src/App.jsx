import logo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import message from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import pro from './assets/rocket.svg';

// import './App.css'


const App = () => {
    return (
        <div className='App'>
            <div className="sideBar">
                <div className="upperSide">
                    <div className="upperSideTop">
                        <img src={logo} alt="logo" className="logo" />
                        <span className="brand">ChatGPT</span>
                    </div>
                    <button className="midBtn">
                        <img src={addBtn} alt="" className="addBtn" />
                        New Chat
                    </button>
                    <div className="upperSideBottom">
                        <button className="query"><img src={message} alt="" />What is programming ?</button>
                        <button className="query"><img src={message} alt="" />How to use an API ?</button>
                    </div>
                </div>
                <div className="lowerSide">
                    <div className="listItems"><img src={home} alt="" className="listItemImg" />Home</div>
                    <div className="listItems"><img src={saved} alt="" className="listItemImg" />Saved</div>
                    <div className="listItems"><img src={pro} alt="" className="listItemImg" />Upgrade to pro</div>
                </div>
            </div>
            <div className="main">

            </div>
        </div>
    );
};

export default App;