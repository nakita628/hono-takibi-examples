import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetStreamSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const getStreamSessionHandler = app.openapi(postGetStreamSessionRoute, (c) => {
  throw new Error('Not implemented')
})
