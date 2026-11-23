import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMutualFundsFamilyRoute,
  getMutualFundsListRoute,
  getMutualFundsTypeRoute,
  getMutualFundsWorldCompositionRoute,
  getMutualFundsWorldPerformanceRoute,
  getMutualFundsWorldPurchaseInfoRoute,
  getMutualFundsWorldRatingsRoute,
  getMutualFundsWorldRiskRoute,
  getMutualFundsWorldRoute,
  getMutualFundsWorldSummaryRoute,
  getMutualFundsWorldSustainabilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mutualFundsHandler = app
  .openapi(getMutualFundsFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldCompositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldPurchaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMutualFundsWorldSustainabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
