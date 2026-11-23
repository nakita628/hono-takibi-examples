import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDataEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const getDataEndpointHandler = app.openapi(postGetDataEndpointRoute, (c) => {
  throw new Error('Not implemented')
})
