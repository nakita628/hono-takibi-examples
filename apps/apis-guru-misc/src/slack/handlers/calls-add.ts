import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const callsAddHandler = app.openapi(postCallsAddRoute, (c) => {
  throw new Error('Not implemented')
})
