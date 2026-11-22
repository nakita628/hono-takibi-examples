import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3PatternRunRunRefRouteTypeRouteTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const patternsHandler = app.openapi(getV3PatternRunRunRefRouteTypeRouteTypeRoute, (c) => {
  throw new Error('Not implemented')
})
