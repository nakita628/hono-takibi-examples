import { OpenAPIHono } from '@hono/zod-openapi'
import { getPortingRoute } from '../routes'

const app = new OpenAPIHono()

export const portingHandler = app.openapi(getPortingRoute, (c) => {
  throw new Error('Not implemented')
})
