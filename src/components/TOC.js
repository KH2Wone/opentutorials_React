import React, {Component} from 'react';

class TOC extends Component {
    state = {activeBtn: false};
    handleClick = () => {
        this.setState({
            activeBtn: !this.state.activeBtn
        })
    }
    render() {
        const data = this.props.data;
        let lists = data.map(v => {
            return (
                <li key={v.id} className={`list_content ${this.state.activeBtn ? 'on' : ''}`}>
                    <a href={`/content/${v.id}`} data-id={v.id} onClick={function(e) {
                        e.preventDefault();
                        this.handleClick();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>
                        {v.title}
                    </a>
                </li>
            )
        })
        return (
            <nav>
            <ul>
                {lists}
            </ul>
            </nav>
        );
    }
}

export default TOC;