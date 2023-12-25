import { useState } from 'react';
import './App.css';
import FileUpload from './Components/FileUpload';
import TopNavigationHeader from './Components/Navigation';
import ListOfIds from './Components/ListOfIds';

function App() {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <TopNavigationHeader setShowList={setShowList} />
    <div className="App">
      {!showList && <FileUpload />}
      {showList && <ListOfIds />}
    </div>
    </>
  );
}

export default App;
