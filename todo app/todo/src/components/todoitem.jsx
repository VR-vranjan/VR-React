import React from 'react';

const Todoitem = (props) => {
    return (
        <>
            <div className='full'>
                <div className='two'>
                    <input className='box' type='checkbox' />
                    <span className='text'>{ props.text}</span>
                </div>
                <span className='icons'>...</span>
            </div>
            
        </>
      
      
  )
}

export default Todoitem;