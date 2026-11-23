import { OpenAPIHono } from '@hono/zod-openapi'
import { getCurrenciesRoute, putCurrenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
  .openapi(getCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
