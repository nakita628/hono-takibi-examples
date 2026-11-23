import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecdefRoute } from '../routes'

const app = new OpenAPIHono()

export const secdefHandler = app.openapi(getSecdefRoute, (c) => {
  throw new Error('Not implemented')
})
