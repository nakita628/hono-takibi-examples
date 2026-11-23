import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEarningsRatesEarningsRateIDRoute,
  getEarningsRatesRoute,
  postEarningsRatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const earningsRatesHandler = app
  .openapi(getEarningsRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEarningsRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsRatesEarningsRateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
