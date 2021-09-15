import React, {Component} from 'react';

class TOC extends Component {
    render() {
        const data = this.props.data;
        // let lists = [];
        // let i=0;
        // while (i<data.length) {
        //     lists.push(<li key={data[i].id}><a href={`/content/${data[i].id}`}>{data[i].title}</a></li>)
        //     i++;
        // }
        let lists = data.map(v => {
            return (
                <li key={v.id}>
                    <a href={`/content/${v.id}`} onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangePage();
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