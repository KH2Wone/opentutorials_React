import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {title:'Welcome to React', desc: '리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다. 대규모 또는 복잡한 리액트 애플리케이션 개발에는 보통 라우팅, API통신 등의 기능이 요구되는데 리액트에는 기본적으로 제공되지 않기 때문에 추가 라이브러리를 사용해야 한다. 출처: 위키백과'},
      contents: [
        {id: 1, title:'HTML', desc: '하이퍼 텍스트 마크업 언어(Hyper Text Markup Language, HTML, 문화어: 초본문표식달기언어, 하이퍼본문표식달기언어)는 웹 페이지를 위한 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다. HTML은 웹 페이지 콘텐츠 안의 꺾쇠 괄호에 둘러싸인 "태그"로 되어있는 HTML 요소 형태로 작성한다. HTML은 웹 브라우저와 같은 HTML 처리 장치의 행동에 영향을 주는 자바스크립트와 본문과 그 밖의 항목의 외관과 배치를 정의하는 CSS 같은 스크립트를 포함하거나 불러올 수 있다. HTML과 CSS 표준의 공동 책임자인 W3C는 명확하고 표상적인 마크업을 위하여 CSS의 사용을 권장한다. 출처: 위키백과'},
        {id: 2, title:'CSS', desc: '종속형 시트 또는 캐스케이딩 스타일 시트(Cascading Style Sheets, CSS)는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어(style sheet language)로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. 기본 파일 명 W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다.기본 파일명은 style.css이다.마크업 언어(ex: HTML)가 웹사이트의 몸체를 담당한다면 CSS는 옷과 액세서리처럼 꾸미는 역할을 담당한다고 할 수 있다. 즉, HTML 구조는 그대로 두고 CSS 파일만 변경해도 전혀 다른 웹사이트처럼 꾸밀 수 있다.현재 개발 중인 CSS3의 경우 그림자 효과, 그라데이션, 변형 등 그래픽 편집 프로그램으로 제작한 이미지를 대체할 수 있는 기능이 추가되었다. 또한 다양한 애니메이션 기능이 추가되어 어도비 플래시를 어느 정도 대체하고 있다. 출처: 위키백과'},
        {id: 3, title:'JavaScript', desc: '자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 연관성은 약하다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다. 자바스크립트는 ECMA스크립트(ECMAScript)의 표준 사양을 가장 잘 구현한 언어로 인정받고 있으며 ECMAScript 5 (ES5) 까지는 대부분의 브라우저에서 기본적으로 지원되었으나 ECMAScript 6 이후부터는 브라우저 호환성을 위해 트랜스파일러로 컴파일된다. 출처: 위키백과'}
      ]
    }
  }
  getReadContent() {
    for(let i=0; i<this.state.contents.length; i++) {
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) return data;
    }
  }
  getContent() {
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id+1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc}
        );
        if(_title==='' || _desc==='') {
          alert('필수사항인 제목 혹은 설명이 입력되지 않았습니다.');
          this.setState({
            mode: 'create'
          });
        } else {
          this.setState({
            contents: _contents,
            mode: 'read',
            selected_content_id: this.max_content_id
          });
        }
      }.bind(this)}></CreateContent>;
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc) {
        var _contents = Array.from(this.state.contents);
        for(let i=0; i<_contents.length; i++) {
          if(_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
        }
        this.setState({
          contents: _contents,
          mode: 'read'
        });
      }.bind(this)
    }></UpdateContent>;
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage = {function() {
          this.setState({mode: 'welcome'});
        }.bind(this)}></Subject>
        <Control onChangeMode={function(_mode) {
          if(_mode === 'delete') {
            if(window.confirm('정말 삭제하시겠습니까?')) {
              var _contents = Array.from(this.state.contents);
              for(let i=0; i<this.state.contents.length; i++) {
                if(_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
              }
              this.setState({
                mode: 'welcome',
                contents: _contents
              });
              alert('삭제 되었습니다.');
            }
          } else {
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        <TOC data={this.state.contents} onChangePage = {function(id) {this.setState({
          mode: 'read',
          selected_content_id: Number(id)
        })}.bind(this)}></TOC>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
