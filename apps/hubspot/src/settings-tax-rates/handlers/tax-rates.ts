import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaxRates202609TaxRatesRoute,
  getTaxRates202609TaxRatesTaxRateGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(getTaxRates202609TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRates202609TaxRatesTaxRateGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
