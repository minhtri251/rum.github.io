import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './List';
import * as act from '../Action/action';

class Timestamped extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            detail: ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addNote = (e) => {
        e.preventDefault();
        const { addNote, notes } = this.props;
        const { title, detail } = this.state;
        const date = new Date();
        if(!title || !detail) {
            alert("Pls input")
        }
        else {
            const note = {id: notes.length, title, detail, recorded: date.toDateString()}
            addNote(note);
        }
        this.setState({
            title: "",
            detail: ""
        })
    }
    render() {
        const { title, detail } = this.state
        return (
            <div className="timeStamped">
                <h1>Timestamped Notes App</h1>
                <form>
                    <input type="text" name="title" placeholder="Note Title" onChange={this.onChange} value={title}/><br/>
                    <input type="text" name="detail" placeholder="Note Detail" onChange={this.onChange} value={detail}/><br/>
                    <button onClick={this.addNote}>Add Note</button>
                </form>
                <List/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    notes: state.notes
})

const mapDispatchToProps = dispatch => ({
    addNote: note => {
        dispatch(act.addNote(note))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Timestamped)