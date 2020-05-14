import React from "react"
import {connect} from "react-redux"

class CommentList extends React.Component{
    renderComments(){
        return this.props.comments.map(comment=><li>{comment}</li>)
    }
    render(){
        return(
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}
const mapState = state => (
   { 
       comments:state.comments
    }
)
export default connect(mapState)(CommentList)