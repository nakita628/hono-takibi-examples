import { OpenAPIHono } from '@hono/zod-openapi'
import { getEndpointsMessagingSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const endpointsHandler = app.openapi(getEndpointsMessagingSessionRoute, (c) => {
  throw new Error('Not implemented')
})
