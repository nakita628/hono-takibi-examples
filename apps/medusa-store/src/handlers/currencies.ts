import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreCurrenciesCodeRoute, getStoreCurrenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
  .openapi(getStoreCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCurrenciesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
