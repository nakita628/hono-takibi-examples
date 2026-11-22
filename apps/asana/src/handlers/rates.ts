import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRatesRateGidRoute,
  getRatesRateGidRoute,
  getRatesRoute,
  postRatesRoute,
  putRatesRateGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ratesHandler = app
  .openapi(getRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRatesRateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRatesRateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRatesRateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
