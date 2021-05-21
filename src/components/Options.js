import React from 'react';
import Option from './Option'



const Options = (props) => {

  return (
      <div>
          <div className="widget-header">
          <h3 className="widget-header__title"> Your Options</h3>
      <button className="button button--link" 
       onClick={props.handleDeleteAll}>Remove All</button>
          </div>
          {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
      {
          props.options.map((option, index) => (
              <Option 
              key={option} info={option}
              count={index+1}
              handleDeleteOne= {props.handleDeleteOne} />
          ))
      }
      </div>
  )
}

export default Options;