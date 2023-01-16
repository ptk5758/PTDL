import { useState } from 'react';
import './App.css';

function App() {
  const tempData = [
    {
      isComplete : false,
      text : "내용이다."
    },
    {
      isComplete : false,
      text : "내용이다."
    },
  ]
  const [ list, setList ] = useState(tempData);
  return (
    <div className='content'>
      <div className='title'>
        <p>To Do List</p>
      </div>
      <div className='board'>
        <div className='head'>
          <div className='left'><p>Checked</p></div>
          <div className='middle'><p>Content</p></div>
          <div className='right'><p>option</p></div>
        </div>
        { list && list.map((obj, index)=>{
          return <List key={index} list={obj} />
        }) }      
        <div className='list'>
          <p> 항목 추가하기 </p>
        </div>
      </div>
    </div>
  );
}

function List(props) {
  const list = props.list;
  console.log(list);
  return(
    <div className='list'>
      <div className='left'><p className='chk-box'>&nbsp;</p></div>
      <div className='middle'><input className='insert'/></div>
      <div className='right'>
        <p>수정</p>
        <p>삭제</p>
      </div>
    </div>
  );
}

export default App;
