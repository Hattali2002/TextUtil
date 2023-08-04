import React, { useState } from 'react'

export default function Home(props) {
    const [text, setText] = useState("");
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }
    const upperCaseHandler = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    const lowerCaseHandler = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }
    const clearHandler = () => {
        setText("");
        props.showAlert("Text Cleared ", "success");
    }
    const copyClipboardHandler = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }
    const RemoveExtraSpaceHandler = () => {
        setText(text.replace(/ +/g, " "));
        props.showAlert("ExtraSpace Removed", "success");
    }
    return (
        <>
            <div className={`container text-${props.mode === "black" ? "white" : "black"}`}>

                <h2 className='text-center my-4'>Text Analysis</h2>

                <h4 className='my-2'>{props.title}</h4>
                <textarea cols="150" rows="8" value={text} onChange={onChangeHandler} className={`text-${props.mode === "black" ? "white" : "black"} bg-${props.mode === "black" ? "black" : "light"}`}></textarea>

                <button type="button" className="btn btn-primary my-2 mx-2" onClick={upperCaseHandler}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={lowerCaseHandler}>Convert to LowerCase</button>
                <button type="button" className="btn btn-danger my-2 mx-2" onClick={clearHandler}>Clear</button>
                <button type="button" className="btn btn-success my-2 mx-2" onClick={copyClipboardHandler}>Copy to Clipboard</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={RemoveExtraSpaceHandler}>Remove ExtraSpace</button>

                <h3 className='my-3'>Text Summary</h3>
                <p>Number of words: {text.trim() === "" ? 0 : text.split(" ").length}</p>
                <p>Number of characters: {text.length}</p>
                <p>Reading Time: {0.008 * (text.trim() === "" ? 0 : text.split(" ").length)} Minutes</p>

                <h2 className="my-3 text-center">Preview</h2>
                <textarea cols="150" rows="8" value={text} className={`text-${props.mode === "black" ? "white" : "black"} bg-${props.mode === "black" ? "black" : "light"}`}></textarea>

            </div>
        </>
    )
}
