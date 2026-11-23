import { OpenAPIHono } from '@hono/zod-openapi'
import { getExchangeReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const exchangeReasonsHandler = app.openapi(getExchangeReasonsRoute, (c) => {
  throw new Error('Not implemented')
})
