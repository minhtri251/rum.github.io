import React, { Component } from 'react'
import { connect } from 'react-redux';

import Item from './Item';

function List(notes,item) {
    return (
        <div className="list">
            {notes.map((item, index) => (<Item item={item} key={index}/>))}
        </div>
    )
}


const mapStateToProps = (state) => ({
    notes: state.notes
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,mapDispatchToProps)(List);