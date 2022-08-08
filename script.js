function Header() {
    return (
        <header>
            <nav className="main-nav">
            <img src="./imgs/react.png" width="100px"/>
            <h1> React learning Journey</h1>
            </nav>
        </header>
         
    )
}
function PageContent() { 
    return (
    <div className="container">
        <Header />
        <ul>
            <li>
                01-08-2022: Started learning React
            </li>
            <li>
                08-08-2022: Created Journey react page 
            </li>
        </ul>
    </div>
    )
}

ReactDOM.render(<PageContent />, document.getElementById("root"))