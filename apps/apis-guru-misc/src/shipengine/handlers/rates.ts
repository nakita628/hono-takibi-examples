import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1RatesRateIdRoute,
  postV1RatesBulkRoute,
  postV1RatesEstimateRoute,
  postV1RatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ratesHandler = app
  .openapi(postV1RatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RatesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RatesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
