import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    //Clear text
    const handleClear = () => {
        let newText = "";
        setText(newText)
    }

    //Code to Remove Extra spaces

    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }

    //remove all the symbols
    const handletextExtract = () => {
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
    };

    //to extract only the numbers in the text:
    const handleNumExtract = () => {
        const regex = /[0-9/ /]/g;

        const digits = text.match(regex);
        const res = digits.join('');
        setText(res)
    };

    //Copy text
    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        // console.log("onChange")
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handletextExtract} >Remove Symbol</button>
                <button className="btn btn-primary mx-1" onClick={handleNumExtract} >Extract Number</button>
                <button className="btn btn-primary mx-1" onClick={handleClear} >Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>

            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
