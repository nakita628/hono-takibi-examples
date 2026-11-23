import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsEndRoute } from '../routes'

const app = new OpenAPIHono()

export const callsEndHandler = app.openapi(postCallsEndRoute, (c) => {
  throw new Error('Not implemented')
})
