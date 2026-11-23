import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingRoute } from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app.openapi(postAnythingRoute, (c) => {
  throw new Error('Not implemented')
})
