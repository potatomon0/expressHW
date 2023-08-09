import React from 'react'

function Tip() {
  let newTotal = parseInt(req.query.total)
  let newTip = parseInt(req.params.tipPercentage)
  let tipAmount = (newTotal/newTip)
  return (
    <div>{tipAmount}</div>
  )
}

export default Tip