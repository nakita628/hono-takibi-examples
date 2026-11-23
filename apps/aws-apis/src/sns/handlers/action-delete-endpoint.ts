import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteEndpointRoute, postActionDeleteEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteEndpointHandler = app
  .openapi(getActionDeleteEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
