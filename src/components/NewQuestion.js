import React, { Component } from 'react'

class NewQuestion extends Component{
  render() {
    return (
      <div >

        <form className="form-style-5">
          <legend> Create new question! </legend>
          <p>Would you rather...</p>
          <textarea
            type="text"
            placeholder='Enter option 1'
          />
          <p> OR </p>
          <textarea
            type="text"
            placeholder='Enter option 1'
          />
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default NewQuestion;