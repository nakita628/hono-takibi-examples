import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinearregslopeRoute } from '../routes'

const app = new OpenAPIHono()

export const linearregslopeHandler = app.openapi(getLinearregslopeRoute, (c) => {
  throw new Error('Not implemented')
})
