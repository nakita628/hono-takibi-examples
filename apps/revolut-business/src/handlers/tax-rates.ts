import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaxRatesTaxRateIdRoute,
  getTaxRatesRoute,
  getTaxRatesTaxRateIdRoute,
  patchTaxRatesTaxRateIdRoute,
  postTaxRatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(postTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
