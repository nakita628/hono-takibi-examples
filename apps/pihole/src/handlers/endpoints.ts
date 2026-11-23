import { OpenAPIHono } from '@hono/zod-openapi'
import { getEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const endpointsHandler = app.openapi(getEndpointsRoute, (c) => {
  throw new Error('Not implemented')
})
