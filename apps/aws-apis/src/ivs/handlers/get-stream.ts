import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const getStreamHandler = app.openapi(postGetStreamRoute, (c) => {
  throw new Error('Not implemented')
})
