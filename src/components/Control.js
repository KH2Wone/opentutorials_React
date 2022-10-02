import React, {Component} from 'react';

class Control extends Component {
    render() {
        return (
            <ul className="controls">
                <li><a href="/create" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}><img src="./img/create.png" alt="create" />create</a></li>
                <li><a href="/update" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}><img src="./img/update.png" alt="update" />update</a></li>
                <li><input type="image" src="./img/delete.png" alt="delete" value="delete" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)} /></li>
            </ul>
        );
    }
}

export default Control;