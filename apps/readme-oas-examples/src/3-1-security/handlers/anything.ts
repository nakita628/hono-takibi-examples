import { OpenAPIHono } from '@hono/zod-openapi'
import { putAnythingBearerRoute } from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app.openapi(putAnythingBearerRoute, (c) => {
  throw new Error('Not implemented')
})
