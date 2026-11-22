import { OpenAPIHono } from '@hono/zod-openapi'
import { getExchangeReasonsRoute, getRateRoute, postExchangeRoute } from '../routes'

const app = new OpenAPIHono()

export const foreignExchangeHandler = app
  .openapi(getRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExchangeReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
