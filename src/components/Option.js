import React from 'react';

const Option = (props)=> {

  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.info}</p>
  <button className="button button--link" 
  onClick={(e) => {
    props.handleDeleteOne(props.info)
  }}>Delete</button>
    </div>
  )
}

export default Option;