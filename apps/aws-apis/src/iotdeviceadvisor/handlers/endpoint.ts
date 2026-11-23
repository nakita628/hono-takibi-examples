import { OpenAPIHono } from '@hono/zod-openapi'
import { getEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const endpointHandler = app.openapi(getEndpointRoute, (c) => {
  throw new Error('Not implemented')
})
