import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3RunsRouteRouteIdRoute,
  getV3RunsRouteRouteIdRouteTypeRouteTypeRoute,
  getV3RunsRunRefRoute,
  getV3RunsRunRefRouteTypeRouteTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runsHandler = app
  .openapi(getV3RunsRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRouteRouteIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRunRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRunRefRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
