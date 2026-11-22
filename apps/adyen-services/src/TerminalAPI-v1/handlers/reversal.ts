import { OpenAPIHono } from '@hono/zod-openapi'
import { postReversalRoute } from '../routes'

const app = new OpenAPIHono()

export const reversalHandler = app.openapi(postReversalRoute, (c) => {
  throw new Error('Not implemented')
})
