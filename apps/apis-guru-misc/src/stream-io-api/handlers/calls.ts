import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsCallIdRoute, postCallsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(postCallsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
