import './App.css';

function App() {
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
        <div className='list'>
          <div className='left'><p className='chk-box'>&nbsp;</p></div>
          <div className='middle'><input className='insert'/></div>
          <div className='right'>
            <p>수정</p>
            <p>삭제</p>
          </div>
        </div>
        <div className='list'>
          <div className='left'><p className='chk-box'>&nbsp;</p></div>
          <div className='middle'><input className='insert'/></div>
          <div className='right'>
            <p>수정</p>
            <p>삭제</p>
          </div>
        </div>
        <div className='list'>
          <div className='left'><p className='chk-box'>&nbsp;</p></div>
          <div className='middle'><input className='insert'/></div>
          <div className='right'>
            <p>수정</p>
            <p>삭제</p>
          </div>
        </div>
        <div className='list'>
          <div className='left'><p className='chk-box'>&nbsp;</p></div>
          <div className='middle'><input className='insert'/></div>
          <div className='right'>
            <p>수정</p>
            <p>삭제</p>
          </div>
        </div>
        <div className='list'>
          <p> 항목 추가하기 </p>
        </div>
      </div>
    </div>
  );
}

export default App;
