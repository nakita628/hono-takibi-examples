import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumbersPrimeFactorsRoute,
  getNumbersPrimeIsFermatPrimeRoute,
  getNumbersPrimeIsFibonacciPrimeRoute,
  getNumbersPrimeIsMersennePrimeRoute,
  getNumbersPrimeIsPartitionPrimeRoute,
  getNumbersPrimeIsPellPrimeRoute,
  getNumbersPrimeIsPerfectRoute,
  getNumbersPrimeIsPrimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const primeHandler = app
  .openapi(getNumbersPrimeFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsFermatPrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsFibonacciPrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsMersennePrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsPartitionPrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsPellPrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsPerfectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPrimeIsPrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
