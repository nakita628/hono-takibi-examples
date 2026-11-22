import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3RoutesRoute, getV3RoutesRouteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app
  .openapi(getV3RoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
