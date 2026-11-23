import { OpenAPIHono } from '@hono/zod-openapi'
import { getResolveIndexNameRoute } from '../routes'

const app = new OpenAPIHono()

export const resolveHandler = app.openapi(getResolveIndexNameRoute, (c) => {
  throw new Error('Not implemented')
})
