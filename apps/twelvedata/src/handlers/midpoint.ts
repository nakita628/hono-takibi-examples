import { OpenAPIHono } from '@hono/zod-openapi'
import { getMidpointRoute } from '../routes'

const app = new OpenAPIHono()

export const midpointHandler = app.openapi(getMidpointRoute, (c) => {
  throw new Error('Not implemented')
})
