function Header() {
    return (
        <header>
            <nav>
                <img src="react.jpg" width="250px"/>
            </nav>
        </header>
    )
}   

function Footer() {
    return (
        <footer>
            <small>© 2022 Prochi. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
        <h1>Reasons i'm excited to learn React</h1>
        <ol>
            <li>It's a popular library</li>
            <li>I'm more likely to get a job as a developer</li>
        </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />

            <MainContent />

            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))