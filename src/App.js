import { useState } from "react";
import { OverlayModal } from "./components/OverlayModal/OverlayModal";
import './App.css'
import { ContentModal } from "./components/ContentModal/ContentModal";

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false)
  
  return (
    <div className="App">

        <button
          onClick={() => setIsOpenModal(true)}
        >Open modal</button>

        {
          isOpenModal && 
          <OverlayModal closeModal={setIsOpenModal}>
            <ContentModal />
          </OverlayModal>
        }
    </div>
  );
}

  export default App;
