import React from 'react';
export const Question=()=>{
    return(
        <>
        <h1 className="alert-info">Add question</h1>
        <div className="form-group">
            <label>Name</label>
            <textarea cols="20" placeholder="Type Question here"></textarea>
        </div>
        </>
    )
}