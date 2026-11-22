import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1TaxRatesRateIdRoute, getV1TaxRatesRateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const taxRatesRateIdHandler = app
  .openapi(deleteV1TaxRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
