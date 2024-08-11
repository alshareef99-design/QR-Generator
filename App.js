import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");

    // Changing the URL only when the user changes the input
    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&bgcolor=${bgColor}`);
    }, [word, bgColor]);

    // Updating the input word when the user clicks on the generate button
    function handleClick() {
        setWord(temp);
    }

    return (
        <div className="App">
            <h1>QR Code Generator</h1>
            <div className="input-box">
                <div className="gen">
                    <input
                        type="text"
                        onChange={(e) => {setTemp(e.target.value)}}
                        placeholder="Enter URL to encode"
                    />
                    <button className="button" onClick={handleClick}>
                        Generate
                    </button>
                </div>
                <div className="extra">
                    <h5>Background Color:</h5>
                    <input
                        type="color"
                        onChange={(e) => { setBgColor(e.target.value.substring(1)) }}
                    />
                </div>
            </div>
            <div className="output-box">
                <img src={qrCode} alt="QR Code" />
                <a href={qrCode} download="QRCode">
                    <button type="button">Download</button>
                </a>
            </div>
        </div>
    );
}

export default App;
