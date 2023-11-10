// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountList, withdrawAmount} = props
  const {value} = amountList

  const amountUpdate = () => {
    withdrawAmount(value)
  }
  return (
    <li className="list">
      <button className="button" type="button" onClick={amountUpdate}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
