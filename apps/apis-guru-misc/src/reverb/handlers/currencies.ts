import { OpenAPIHono } from '@hono/zod-openapi'
import { getCurrenciesDisplayRoute, getCurrenciesListingRoute } from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
  .openapi(getCurrenciesDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurrenciesListingRoute, (c) => {
    throw new Error('Not implemented')
  })
