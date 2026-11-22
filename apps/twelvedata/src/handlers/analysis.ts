import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalystRatingsLightRoute,
  getAnalystRatingsUsEquitiesRoute,
  getEarningsEstimateRoute,
  getEpsRevisionsRoute,
  getEpsTrendRoute,
  getGrowthEstimatesRoute,
  getPriceTargetRoute,
  getRecommendationsRoute,
  getRevenueEstimateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analysisHandler = app
  .openapi(getAnalystRatingsLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalystRatingsUsEquitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpsTrendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrowthEstimatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRevenueEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
