import React from "react"
import {mount} from "enzyme"

import CommentList from "components/CommentList"
import Root from "Root"
let wrapped
beforeEach(()=>{
    const initialState = {
        comments:["c1","c2"]
    }
    wrapped = mount(
    <Root initialState={initialState}>
        <CommentList/>
    </Root>
    )
})

afterEach(()=>{
    wrapped.unmount()
})

it("creates one LI per comment",()=>{
 const length = wrapped.find("li").length
 expect(length).toEqual(2)
})

it("shows text for each comment",()=>{
    expect(wrapped.render().text()).toContain("c2")
    expect(wrapped.render().text()).toContain("c1")
})