import { OpenAPIHono } from '@hono/zod-openapi'
import { getResolveRoute } from '../routes'

const app = new OpenAPIHono()

export const resolveHandler = app.openapi(getResolveRoute, (c) => {
  throw new Error('Not implemented')
})
