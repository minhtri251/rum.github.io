import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as act from '../Action/action';


function Item(item) {
    let [check,setCheck] = useState(false)

    const showDetail = () => {
        setCheck(!check)
    }

    const removeNote = (id) => {
        removeNote(id)
    }
        return (
            <div className="item">
                <h2>{item.title}</h2>
                <div className="item-content">
                    <div className="recorded">
                        <p>Recorded: {item.recorded}</p>
                    </div>
                    <div className="link">
                        <a onClick={showDetail}>(Show Detail)</a>
                        <a onClick={() => removeNote(item.id)}>(Remove Note)</a>
                    </div>
                </div>
                <div className={`item-detail ${check ? "active" : ""}`}>
                    {item.detail}
                </div>
            </div>
        )

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    removeNote: id => {
        dispatch(act.removeNote(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)