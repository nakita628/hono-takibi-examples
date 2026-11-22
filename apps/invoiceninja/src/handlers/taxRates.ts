import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TaxRatesIdRoute,
  getApiV1TaxRatesCreateRoute,
  getApiV1TaxRatesIdEditRoute,
  getApiV1TaxRatesIdRoute,
  getApiV1TaxRatesRoute,
  postApiV1TaxRatesBulkRoute,
  putApiV1TaxRatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(getApiV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaxRatesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
