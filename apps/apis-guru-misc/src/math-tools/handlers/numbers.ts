import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumbersBaseBinaryRoute,
  getNumbersBaseHexRoute,
  getNumbersBaseOctalRoute,
  getNumbersBaseRoute,
  getNumbersCardinalRoute,
  getNumbersCurrencyRoute,
  getNumbersFactRoute,
  getNumbersIsCubeRoute,
  getNumbersIsPalindromeRoute,
  getNumbersIsSquareRoute,
  getNumbersIsTriangleRoute,
  getNumbersNodRoute,
  getNumbersNumeralChineseRoute,
  getNumbersNumeralEgyptianRoute,
  getNumbersNumeralRomanRoute,
  getNumbersOrdinalRoute,
  getNumbersPiRoute,
  getNumbersPrimeFactorsRoute,
  getNumbersPrimeIsFermatPrimeRoute,
  getNumbersPrimeIsFibonacciPrimeRoute,
  getNumbersPrimeIsMersennePrimeRoute,
  getNumbersPrimeIsPartitionPrimeRoute,
  getNumbersPrimeIsPellPrimeRoute,
  getNumbersPrimeIsPerfectRoute,
  getNumbersPrimeIsPrimeRoute,
  getNumbersRandomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numbersHandler = app
  .openapi(getNumbersBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersBaseBinaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersBaseHexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersBaseOctalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersCardinalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersFactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsCubeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsPalindromeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsSquareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsTriangleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersNodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersNumeralChineseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersNumeralEgyptianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersNumeralRomanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersOrdinalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersPiRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getNumbersRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
