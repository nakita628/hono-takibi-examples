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
} from './routes'
import {
  getNumbersBaseBinaryRouteHandler,
  getNumbersBaseHexRouteHandler,
  getNumbersBaseOctalRouteHandler,
  getNumbersBaseRouteHandler,
  getNumbersCardinalRouteHandler,
  getNumbersCurrencyRouteHandler,
  getNumbersFactRouteHandler,
  getNumbersIsCubeRouteHandler,
  getNumbersIsPalindromeRouteHandler,
  getNumbersIsSquareRouteHandler,
  getNumbersIsTriangleRouteHandler,
  getNumbersNodRouteHandler,
  getNumbersNumeralChineseRouteHandler,
  getNumbersNumeralEgyptianRouteHandler,
  getNumbersNumeralRomanRouteHandler,
  getNumbersOrdinalRouteHandler,
  getNumbersPiRouteHandler,
  getNumbersPrimeFactorsRouteHandler,
  getNumbersPrimeIsFermatPrimeRouteHandler,
  getNumbersPrimeIsFibonacciPrimeRouteHandler,
  getNumbersPrimeIsMersennePrimeRouteHandler,
  getNumbersPrimeIsPartitionPrimeRouteHandler,
  getNumbersPrimeIsPellPrimeRouteHandler,
  getNumbersPrimeIsPerfectRouteHandler,
  getNumbersPrimeIsPrimeRouteHandler,
  getNumbersRandomRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getNumbersBaseRoute, getNumbersBaseRouteHandler)
  .openapi(getNumbersBaseBinaryRoute, getNumbersBaseBinaryRouteHandler)
  .openapi(getNumbersBaseHexRoute, getNumbersBaseHexRouteHandler)
  .openapi(getNumbersBaseOctalRoute, getNumbersBaseOctalRouteHandler)
  .openapi(getNumbersCardinalRoute, getNumbersCardinalRouteHandler)
  .openapi(getNumbersCurrencyRoute, getNumbersCurrencyRouteHandler)
  .openapi(getNumbersFactRoute, getNumbersFactRouteHandler)
  .openapi(getNumbersIsCubeRoute, getNumbersIsCubeRouteHandler)
  .openapi(getNumbersIsPalindromeRoute, getNumbersIsPalindromeRouteHandler)
  .openapi(getNumbersIsSquareRoute, getNumbersIsSquareRouteHandler)
  .openapi(getNumbersIsTriangleRoute, getNumbersIsTriangleRouteHandler)
  .openapi(getNumbersNodRoute, getNumbersNodRouteHandler)
  .openapi(getNumbersNumeralChineseRoute, getNumbersNumeralChineseRouteHandler)
  .openapi(getNumbersNumeralEgyptianRoute, getNumbersNumeralEgyptianRouteHandler)
  .openapi(getNumbersNumeralRomanRoute, getNumbersNumeralRomanRouteHandler)
  .openapi(getNumbersOrdinalRoute, getNumbersOrdinalRouteHandler)
  .openapi(getNumbersPiRoute, getNumbersPiRouteHandler)
  .openapi(getNumbersPrimeFactorsRoute, getNumbersPrimeFactorsRouteHandler)
  .openapi(getNumbersPrimeIsFermatPrimeRoute, getNumbersPrimeIsFermatPrimeRouteHandler)
  .openapi(getNumbersPrimeIsFibonacciPrimeRoute, getNumbersPrimeIsFibonacciPrimeRouteHandler)
  .openapi(getNumbersPrimeIsMersennePrimeRoute, getNumbersPrimeIsMersennePrimeRouteHandler)
  .openapi(getNumbersPrimeIsPartitionPrimeRoute, getNumbersPrimeIsPartitionPrimeRouteHandler)
  .openapi(getNumbersPrimeIsPellPrimeRoute, getNumbersPrimeIsPellPrimeRouteHandler)
  .openapi(getNumbersPrimeIsPerfectRoute, getNumbersPrimeIsPerfectRouteHandler)
  .openapi(getNumbersPrimeIsPrimeRoute, getNumbersPrimeIsPrimeRouteHandler)
  .openapi(getNumbersRandomRoute, getNumbersRandomRouteHandler)

export default app
