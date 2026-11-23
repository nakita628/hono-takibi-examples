import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuoteRoute } from '../routes'

const app = new OpenAPIHono()

export const quoteHandler = app.openapi(getQuoteRoute, (c) => {
  throw new Error('Not implemented')
})
