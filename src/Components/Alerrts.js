import React from 'react'


export default function Alerrts(props) {
    const capitalize = (word) =>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">

            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    
  ) 
}


