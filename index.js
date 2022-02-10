// Part 1: Create a page of your own using a custom Page component

// It should return an ordered list with the reasons why you're
// excited to be learning React :)

// Render your list to the page


function MyPage() {
    return(
        <div>
            <ol>
            <li>I love it</li>
            <li>I want to be a fullstack dev</li>
            <li>I need money</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<MyPage/>, document.getElementById("root"))