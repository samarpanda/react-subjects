////////////////////////////////////////////////////////////////////////////////
// Exercise
//
// - When the checkbox is checked, automatically fill in the shipping fields
//   you can get the value from `event.target.checked`
// - When the checkbox is checked disable the the shipping fields
// - When the fields in the billing address change, make sure the shipping
//   address fields stay up to date.
// - When the form is submits, console.log the values
//
// Got extra time?
//
// - If there are more than two characters in the "state" field, let the user
//   know they should use the two-character abbreviation
// - If the user types something into shipping, then clicked the checkbox, then
//   unchecks the checkbox, ensure the field has the information from
//   before clicking the checkbox a second time

import React from 'react'
import { render } from 'react-dom'
import serializeForm from 'form-serialize'

const CheckoutForm = React.createClass({
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form>
          <fieldset>
            <legend>Billing Address</legend>
            <p>
              <label>Billing Name: <input type="text"/></label>
            </p>
            <p>
              <label>Billing State: <input type="text" size="2"/></label>
            </p>
          </fieldset>

          <br/>

          <fieldset>
            <label><input type="checkbox"/> Same as billing</label>
            <legend>Shipping Address</legend>
            <p>
              <label>Shipping Name: <input type="text"/></label>
            </p>
            <p>
              <label>Shipping State: <input type="text" size="2"/></label>
            </p>
          </fieldset>
        </form>
      </div>
    )
  }
})

render(<CheckoutForm/>, document.getElementById('app'))
