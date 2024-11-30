import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import imgSrc from "./image/hackImg1.jpeg";
import "./App.css";
import { Spinner } from "flowbite-react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div class='item'>
        <img src={imgSrc} alt='' />
        <div class='form'>
          <form onSubmit={handleSubmit}>
            <p className='verify'>Verify your Transaction ID here</p>
            <div class='form-id'>
              <input type='text' placeholder='Transaction ID' required />

              <button
                className='btn'
                onClick={() => setLoading(true)}
                disabled={loading}>
                {loading ? (
                  <>
                    <span>Checking...</span>
                  </>
                ) : (
                  "Check"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
