import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const callsUpdateHandler = app.openapi(postCallsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
