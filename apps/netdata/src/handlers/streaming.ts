import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3StreamInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const streamingHandler = app.openapi(getApiV3StreamInfoRoute, (c) => {
  throw new Error('Not implemented')
})
