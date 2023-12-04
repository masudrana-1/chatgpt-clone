import logo from './assets/chatgpt.svg';

// import './App.css'


const App = () => {
    return (
        <div className='App'>
            <div className="sideBar">
                <div className="upperSide">
                    <div className="upperSideTop">
                        <img src={logo} alt="" className="logo" />
                        <span className="brand">ChatGPT</span>
                    </div>
                    <button className="miBtn">
                        <img src="" alt="" className="addBtn" />
                        New Chat
                    </button>
                    <div className="upperSideBottom">
                        <button className="query"><img src="" alt="" />What is programming?</button>
                        <button className="query"><img src="" alt="" />What is programming?</button>
                    </div>
                </div>
                <div className="lowerSide">

                </div>
            </div>
            <div className="main">

            </div>
        </div>
    );
};

export default App;