import logo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import message from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import pro from './assets/rocket.svg';
import send from './assets/send.svg';
import user from './assets/user-icon.png';
import chatGPT from './assets/chatgptLogo.svg';

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
                <div className="chats">
                    <div className="chat">
                        <img className='chatImg' src={user} alt="" />
                        <p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, eum. Id accusantium unde ullam itaque reprehenderit in consequatur quod. Cum id minus iste quod inventore voluptate corrupti vel nemo corporis!</p>
                    </div>
                    <div className="chat bot">
                        <img className='chatImg' src={chatGPT} alt="" />
                        <p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, eum. Id accusantium unde ullam itaque reprehenderit in consequatur quod. Cum id minus iste quod inventore voluptate corrupti vel nemo corporis!</p>
                    </div>
                </div>
                <div className="chatFooter">
                    <div className="inp">
                        <input type="text" name='' id='' placeholder='Send a message...' />
                        <button className='send'>
                            <img src={send} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;