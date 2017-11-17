const colors = require('colors/safe')

class Trade {
  constructor({ price, time }) {
    this.state = 'open'
    this.enter = { price, time }
    this.exit = null
  }

  close({ price, time }) {
    this.exit = { price, time }
    this.state = 'closed'
  }

  profit() {
    const fee = 0.0025
    const entrance = this.enter.price * (1 + fee)
    const exit = this.exit.price * (1 - fee)
    return exit - entrance
  }

  print() {
    const enter = `Enter: | ${this.enter.price} | ${this.enter.time}`
    const exit = this.exit ? `Exit: | ${this.exit.price} | ${this.exit.time}` :
      ''

    var profit = ''
    if (this.state === 'closed') {
      const pro = `${this.profit()}`
      const colored = this.profit() > 0 ? colors.green(pro) : colors.red(pro)
      profit = `Profit: ${colored}`
    }

    console.log(`${enter} - ${exit} - ${profit}`)
  }
}

module.exports = exports = Trade
