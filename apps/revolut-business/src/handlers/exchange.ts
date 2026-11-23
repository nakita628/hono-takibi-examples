import { OpenAPIHono } from '@hono/zod-openapi'
import { postExchangeRoute } from '../routes'

const app = new OpenAPIHono()

export const exchangeHandler = app.openapi(postExchangeRoute, (c) => {
  throw new Error('Not implemented')
})
