import React from "react"
import CommentBox from "components/CommentBox"
import { mount } from "enzyme"
import Root from "Root"
let wrapped 

beforeEach(()=>{
     wrapped = mount(<Root><CommentBox /></Root>)
})
afterEach(()=>{
    wrapped.unmount()
})
it("has a textarea and a button",()=>{
    
    expect(wrapped.find("textarea").length).toEqual(1)
    expect(wrapped.find("button").length).toEqual(1)

})

describe("the text area",()=>{

    beforeEach(()=>{
        wrapped.find("textarea").simulate("change",{
            target:{
                value:"new comment"
            }
        })
        //there is setState so component will update async (so will have delayed update)
        wrapped.update();// force update
    })
it("has a text area that users can type in",() => {
   
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
})

it("submit form so that text of input field get emptied",()=>{
    
    wrapped.find("form").simulate("submit");
    
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
})
})