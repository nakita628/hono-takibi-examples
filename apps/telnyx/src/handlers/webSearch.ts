import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const webSearchHandler = app.openapi(postWebSearchRoute, (c) => {
  throw new Error('Not implemented')
})
