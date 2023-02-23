const Link = ReactRouterDOM.Link, Route = ReactRouterDOM.Route;


//main app
function App(){
    
    return (
        
        <Home />
    )
}


//All screens can be found here.
//Home Screen
function Home(){
    return (
        
            <ReactRouterDOM.HashRouter>
                <div className="mainBody">
                    <Sidebar />
                    {/* <ul>
                        <li><Link to="/">Library</Link></li>
                        <li><Link to="/Feed">Feed</Link></li>
                        <li><Link to="/Player">Player</Link></li>
                        <li><Link to="/Favorites">Favorites</Link></li>
                        <li><Link to="/Trending">Trending</Link></li>
                    </ul> */}

                    <Route path="/" exact component={Library} />
                    <Route path="/Feed" component={Feed} />
                    <Route path="/Player" component={Player} />
                    <Route path="/Favorites" component={Favorites} />
                    <Route path="/Trending" component={Trending} />
                

                </div>
            </ReactRouterDOM.HashRouter>
            
        
    )
}


//Library Screen
function Library(){
    return (
        <div className="screenContainer">Library</div> 
    )
}


//Feed Screen
function Feed(){
    return (
        <div>Feed</div>
    )
}


//Player Screen
function Player(){
    return (
        <div>Player</div>
    )
}

//Favorites Screen
function Favorites(){
    return (
        <div>Favorites</div>
    )
}

//Trending Screen
function Trending(){
    return (
        <div>Trending</div>
    )
}



// All components can be found here.
// Header component
function Header(){
    return (
        <div>
            Header
        </div>
    )
}

// SideBar component
function Sidebar(){
    return (
        <div className="sideBarContainer">
            <img src="./Capture.png" className="profileImage" alt="Profile Image"/>
            <div className="centerGroupedBtn">
                <SideBarButton 
                    className="link"
                    title="Feed" 
                    to="/Feed" 
                    icon= <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M510 486V216h330v270H510ZM120 606V216h330v390H120Zm390 330V546h330v390H510Zm-390 0V666h330v270H120Zm60-390h210V276H180v270Zm390 330h210V606H570v270Zm0-450h210V276H570v150ZM180 876h210V726H180v150Zm210-330Zm180-120Zm0 180ZM390 726Z" fill="#F8D9C0"/></svg>
                />
                <SideBarButton 
                    title="Trending" 
                    to="/Trending" 
                    icon= <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M220 656q0 63 28.5 118.5T328 867q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T740 656q0-54-23-105.5T651 456q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T420 342v-20q-46 33-83 73t-63 83.5q-26 43.5-40 89T220 656Zm260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5q42 0 71-28.5t29-69.5q0-20-7.5-37T551 750l-71-70Zm0-464v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622 398l18-22q74 42 117 117t43 163q0 134-93 227t-227 93q-134 0-227-93t-93-227q0-128 86-246.5T480 216Z" fill="#F8D9C0"/></svg>
                />
                <SideBarButton 
                    title="Player" 
                    to="/Player" 
                    icon= <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" fill="#F8D9C0"/></svg>
                />
                <SideBarButton 
                    title="Favorites" 
                    to="/Favorites" 
                    icon= <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z" fill="#F8D9C0"/></svg>
                />
                <SideBarButton 
                    title="Library" 
                    to="/" 
                    icon= <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M486 723q41 0 70-28.42T585 625V373h116v-60H545v237q-11-9-26.319-14-15.319-5-32.681-5-39.06 0-66.03 27.366t-26.97 67Q393 665 419.97 694T486 723ZM260 856q-24 0-42-18t-18-42V236q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560V236H260v560ZM140 976q-24 0-42-18t-18-42V296h60v620h620v60H140Zm120-740v560-560Z" fill="#F8D9C0"/></svg>
                />
                
                
            </div>
            <SideBarButton 
                    title="Sign-Out" 
                    to="/Feed" 
                    icon= <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z" fill="#F8D9C0"/></svg>
            />
        </div>
    )
}

//SideBarButton component
function SideBarButton(props){
    return (
        <Link to={props.to} className="link">
            <div className="sideBarBtnBody">
                <i className="icon">{props.icon}</i>
                <p className="sideBarBtnTitle">{props.title}</p>
            </div>
        </Link>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


const dashboard = v











