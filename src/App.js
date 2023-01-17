import { useState } from 'react';
import './App.css';
import checkIcon from './source/img/check-icon.png';

function App() {
  const tempData = [
    {
      isComplete : false,
      text : "1"
    },
    {
      isComplete : false,
      text : "2"
    },
    {
      isComplete : false,
      text : "3"
    },
    {
      isComplete : false,
      text : "4"
    },
  ]
  const [ list, setList ] = useState(tempData);
  function addList(){
    const temp = {
      isComplete : false,
      text : "Content"
    }
    setList([...list, temp]);
  }
  function removeItem(index) {    
    const temp = [...list];
    temp.splice(index,1);
    console.log(temp);
    setList(temp);    
  }
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
          return <List key={index} list={obj} remove={removeItem} index={index} />
        }) }      
        <div className='list'>
          <p onClick={addList}> 항목 추가하기 </p>
        </div>
      </div>
    </div>
  );
}

function List(props) {  
  const [ item, setItem ] = useState(props.list);
  function valueChange(e) {
    const temp = {...item};
    temp.text = e.target.value;
    setItem(temp);    
  }  

  function checkToggle() {    
    setItem({...item, isComplete:!item.isComplete});    
  }
  return(
    <div className='list'>
      <div className='left'>
        <span className={item.isComplete ? "chk-box on" : "chk-box"} onClick={checkToggle}>
          <img src={checkIcon}/>
        </span>
      </div>
      <div className='middle'><input className='insert' value={item.text} onChange={valueChange}/></div>
      <div className='right'>
        {/* <p onClick={function(){console.log(item)}}>수정</p> */}
        <p onClick={()=>{props.remove(props.index)}}>삭제</p>
      </div>
    </div>
  );
}

export default App;
