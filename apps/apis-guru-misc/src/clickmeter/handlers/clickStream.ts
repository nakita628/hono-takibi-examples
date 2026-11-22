import { OpenAPIHono } from '@hono/zod-openapi'
import { getClickstreamRoute } from '../routes'

const app = new OpenAPIHono()

export const clickStreamHandler = app.openapi(getClickstreamRoute, (c) => {
  throw new Error('Not implemented')
})
