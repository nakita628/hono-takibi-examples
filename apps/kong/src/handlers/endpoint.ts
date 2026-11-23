import { OpenAPIHono } from '@hono/zod-openapi'
import { headEndpointRoute, optionsEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const endpointHandler = app
  .openapi(headEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
