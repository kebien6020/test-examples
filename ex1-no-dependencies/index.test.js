const main = require('./index')

console.red = str => console.error('\x1b[31m%s\x1b[0m', str)

const test1 = () => {
  console.log('Test: ./index has a default export')

  if (main === undefined || typeof main === 'object') {
    console.red('./index does not have a default export')
    return
  }
}

const test2 = () => {
  console.log('Test: main is a function')

  if (!(typeof main === 'function')) {
    console.red('main is not a function')
    return
  }
}

const test3 = () => {
  console.log('Test: main returns a string')

  const ret = main()
  if (!(typeof ret === 'string')) {
    console.red('main does not return a string')
    return
  }
}

const test4 = () => {
  console.log('Test: main returns the expected string')

  const ret = main()
  if (!(ret === 'Hello, World!')) {
    console.red('main does not return "Hello, World!"')
    return
  }
}

try {
  test1()
  test2()
  test3()
  test4()
} catch (err) {
  console.red('One or more test failed')
}
