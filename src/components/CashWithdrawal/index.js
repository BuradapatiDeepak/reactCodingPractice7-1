// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {total: 2000}

  withdrawAmount = props => {
    const value = props
    this.setState(prevState => ({total: prevState.total - value}))
  }

  render() {
    const {total} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="container">
          <div className="profile">
            <p className="profile-picture">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="paragraph">Your Balance</p>
            <p className="amount">{total}</p>
          </div>
          <p className="paragraph1">In Rupees</p>
          <p className="amount">Withdraw</p>
          <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="upper-list">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                withdrawAmount={this.withdrawAmount}
                key={eachAmount.id}
                amountList={eachAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
