import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const updateStreamHandler = app.openapi(postUpdateStreamRoute, (c) => {
  throw new Error('Not implemented')
})
