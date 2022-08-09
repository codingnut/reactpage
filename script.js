function Header() {
  return (
    <header>
      <nav className="main-nav">
        <img src="./imgs/react.png" width="100px" />
        <h1> React learning Journey</h1>
      </nav>
    </header>
  );
}
function PageContent() {
  return (
    <ol>
      <li>01-08-2022: Started learning React</li>
      <li>08-08-2022: Created Journey react page | standalone react babel</li>
      <li>09-08-2022: ES6 import export, Created first react app using npx</li>
    </ol>
  );
}
function Footer() {
  return (
    <footer>
         <small>copyright 2022</small>
    </footer>
   
  )
}
function Page() {
  return (
    <div className="container">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
