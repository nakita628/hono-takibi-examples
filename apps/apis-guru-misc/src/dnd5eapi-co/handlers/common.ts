import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiEndpointRoute, getApiRoute } from '../routes'

const app = new OpenAPIHono()

export const commonHandler = app
  .openapi(getApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
