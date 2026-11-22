import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4TokenExchangeRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenExchangeHandler = app.openapi(postApiV4TokenExchangeRoute, (c) => {
  throw new Error('Not implemented')
})
