import React from "react"
import CommentBox from "components/CommentBox"
import { mount } from "enzyme"

let wrapped 
beforeEach(()=>{
     wrapped = mount(<CommentBox />)
})
afterEach(()=>{
    wrapped.unmount()
})
it("has a textarea and a button",()=>{
    
    expect(wrapped.find("textarea").length).toEqual(1)
    expect(wrapped.find("button").length).toEqual(1)

})

it("has a text area that users can type in",() => {
    wrapped.find("textarea").simulate("change",{
        target:{
            value:"new comment"
        }
    })
    //there is setState so component will update async (so will have delayed update)
    wrapped.update();// force update
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
})