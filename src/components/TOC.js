import React, {Component} from 'react';

class TOC extends Component {
    state = { showMenu: false };
    toggleMenu = (a) => {
        this.setState({
          showMenu: !this.state.showMenu
        })
      }

    render() {
        const menuVis = this.state.showMenu ? 'on' : '';
        const data = this.props.data;
        let lists = data.map(v => {
            return (
                <li key={v.id}>
                    <a href={`/content/${v.id}`} className={`list_content ${menuVis}`} data-id={v.id} onClick={function(e) {
                        e.preventDefault();
                        this.toggleMenu();
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