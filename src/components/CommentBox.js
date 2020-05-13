import React from "react"

class CommentBox extends React.Component {
    state = {
        comment: ""
    }
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.setState({ comment: "" })
            }}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} />
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox