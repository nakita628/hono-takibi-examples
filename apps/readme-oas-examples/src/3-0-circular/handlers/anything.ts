import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingRoute } from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app.openapi(getAnythingRoute, (c) => {
  throw new Error('Not implemented')
})
