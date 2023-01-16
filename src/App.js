import './App.css';

function App() {
  return (
    <div className='content'>
      <div className='title'>
        <p>To Do List</p>
      </div>
      <div className='board'>
        <div className='head'>
          <div className='left'>
            <p>Checked</p>
          </div>
          <div className='right'>
            <p>Content</p>
            <p>Option</p>
          </div>
        </div>
        <div className='list'>
          <div className='left'>
            <p>ㅁ</p>
          </div>
          <div className='right'>
            <p>ㅡㅡ</p>
            <div className='opt'>
              <p>수정</p>
              <p>삭제</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
