import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallsRoute, postCallsRoute } from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(getCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
