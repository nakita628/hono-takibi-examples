import { OpenAPIHono } from '@hono/zod-openapi'
import { postTokenizeRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenizeHandler = app.openapi(postTokenizeRoute, (c) => {
  throw new Error('Not implemented')
})
