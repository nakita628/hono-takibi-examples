import { OpenAPIHono } from '@hono/zod-openapi'
import { getRouteInfoRoute, getRouteRoute, postRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const routingAPIHandler = app
  .openapi(getRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
