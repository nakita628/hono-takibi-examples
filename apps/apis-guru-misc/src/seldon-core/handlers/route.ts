import { OpenAPIHono } from '@hono/zod-openapi'
import { getRouteRoute, postRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const routeHandler = app
  .openapi(getRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
