import tape from 'tape'
import { hello } from '../src/hello.js'

tape('Prints out a hello with name', t => {
  t.plan(1)

  const greeting = hello('deadbeef')

  t.equal(greeting, 'Hello deadbeef!')
})