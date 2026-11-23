import { OpenAPIHono } from '@hono/zod-openapi'
import { getPingRoute } from '../routes'

const app = new OpenAPIHono()

export const pingHandler = app.openapi(getPingRoute, (c) => {
  throw new Error('Not implemented')
})
