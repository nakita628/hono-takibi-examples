import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaxRatesRoute,
  getTaxRatesTaxTypeRoute,
  postTaxRatesRoute,
  putTaxRatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(getTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesTaxTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
