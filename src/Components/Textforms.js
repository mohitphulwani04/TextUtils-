import React,{useState} from 'react'

export default function Textforms(props) {
    const handleUpClick = () => {
        console.log("Uppercase was cliscked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Uppercase has been enabled!' , 'success');
    }

    const handleLoClick = () => {
        console.log("Lowercase was cliscked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Lower has been enabled!' , 'success');
    }

    const handleOnChange = (event) => {
        console.log("Onchange");
        setText(event.target.value);
    }

    const handleOnClear = ( ) => {
        console.log("OnClick");
        setText(" ");
        props.showAlert('Text cleared!' , 'success');
    }

    const handleCopy = () =>{
        console.log("copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!' , 'success');
    }

    // used regex
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been removed!' , 'success');
    }

    const [text, setText] = useState('Enter the text here');
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#2a1212'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <b>
            <button className="btn btn-primary  mx-2 " onClick={handleUpClick} >UPPERCASE</button>
            <button className="btn btn-primary  mx-3" onClick={handleLoClick} >LOWERCASE</button>
            <button className="btn btn-success  mx-3" onClick={handleCopy} >COPY ALL</button>
            <button className="btn btn-secondary  mx-3" onClick={handleExtraSpace} >REMOVE EXTRA SPACE</button>
            <button className="btn btn-danger  mx-3" onClick={handleOnClear} >CLEAR ALL</button>
            </b>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#2a1212'}}>
            <h1>Your text summary</h1>
            <h5>
            <p>{text.split(" ").length} Words and {text.length } Characters </p>
            <p>{0.008 *text.split(" ").length} Minutes to read this Paragraph </p>
            </h5>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>
    </>
    
  )
}
