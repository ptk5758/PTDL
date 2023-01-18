import { useState } from 'react';
import './App.css';
import checkIcon from './source/img/check-icon.png';

function App() {
  // 항목을 관리하는 State Object[]
  const [ list, setList ] = useState([]); 

  // 항목을 추가하는 함수
  function addList(){
    const temp = { // list 안에 설계해둔 Object가 들어가기때문에 temp 오브젝트 생성
      isComplete : false, // 항목이 check 가 되있는지 안되있는지
      text : "" // 항목의 텍스트 (contents)
    }
    setList([...list, temp]);
  }
  
  /**
   * 삭제하려는 항목의 index를 받아 list 변수에 접근하여    
   * 해당 Index 에 항복 삭제
   */
  function removeItem(index) {    
    const temp = [...list];
    temp.splice(index,1);
    // console.log(temp);
    setList(temp);    
  }

  /**
   * 항목 체크박스 기능 함수
   * 선택한 항목의 인덱스를 가져와서
   * 해당 list의 인덱스에 접근해서 object를 갈아끼우기?   
   */
  function checkToggle(index) {    
    const tlist = [...list]; // type Object[]
    const otemp = { ...tlist[index], isComplete : !tlist[index].isComplete };
    tlist[index] = otemp; // 수정한 Object 객체를 tlist 에넣고 state변수 교체
    setList(tlist);
  }

  /**
   * 항목의 텍스트를 수정할때 함수
   */
  function valueChange(e, index) {    
    const tlist = [...list];
    const otemp = { ...tlist[index], text : e.target.value };    
    tlist[index] = otemp;
    setList(tlist);
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
          return <List key={index} list={obj} remove={removeItem} index={index} checkToggle={checkToggle} valueChange={valueChange} />
        }) }      
        <div className='list'>
          <p onClick={addList}> 항목 추가하기 </p>
        </div>
      </div>
    </div>
  );
}

function List(props) {  
  return(
    <div className='list'>
      <div className='left'>
        <span className={props.list.isComplete ? "chk-box on" : "chk-box"} onClick={()=>{props.checkToggle(props.index)}}>
          <img src={checkIcon}/>
        </span>
      </div>
      <div className='middle'><input className='insert' placeholder='Content' value={props.list.text} onChange={(e)=>{props.valueChange(e, props.index)}}/></div>
      <div className='right'>
        {/* <p onClick={function(){console.log(item)}}>수정</p> */}
        <p onClick={()=>{props.remove(props.index)}}>삭제</p>
      </div>
    </div>
  );
}

export default App;
