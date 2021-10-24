import React from 'react'
import classNames from 'classnames'

export default function TextInputGroup(props) {
    return (
        <div>
            <div className="form-group">
                 <label htmlFor={props.name}>{props.label}</label>
                 <input type={props.type} className={classNames('form-control',{
                     'is-invalid':props.error

                 })}
                        name={props.name} 
                        value={props.value}
                        onChange={props.onChange}
                        
                        
                />
                <div className="invalid-feedback">{props.error}</div>
          </div>
        </div>
    )
}
