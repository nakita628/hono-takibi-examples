import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3RouteTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const routeTypesHandler = app.openapi(getV3RouteTypesRoute, (c) => {
  throw new Error('Not implemented')
})
