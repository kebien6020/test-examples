const main = require('./index')

test('./index has a default export', () => {
  expect(main).toBeDefined()
  expect(typeof main).not.toBe('object')
})

test('main is a function', () => {
  expect(typeof main).toBe('function')
})

test('main returns a string', () => {
  const ret = main()
  expect(typeof ret).toBe('string')
})

test('main returns the expeted string', () => {
  const ret = main()
  expect(ret).toBe('Hello, World!')
})

test('main(\'Alice\') returns "Hello, Alice!"', () => {
  const ret = main('Alice')
  expect(ret).toBe('Hello, Alice!')
})
