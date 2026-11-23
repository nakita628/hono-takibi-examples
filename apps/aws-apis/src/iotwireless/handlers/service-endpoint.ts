import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceEndpointHandler = app.openapi(getServiceEndpointRoute, (c) => {
  throw new Error('Not implemented')
})
