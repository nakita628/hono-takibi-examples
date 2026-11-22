import { OpenAPIHono } from '@hono/zod-openapi'
import { getRouteRoute, postRouteBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const routeHandler = app
  .openapi(getRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
