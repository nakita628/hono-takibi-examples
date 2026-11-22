import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3StopsLocationLatitudeLongitudeRoute,
  getV3StopsRouteRouteIdRouteTypeRouteTypeRoute,
  getV3StopsStopIdRouteTypeRouteTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stopsHandler = app
  .openapi(getV3StopsLocationLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StopsRouteRouteIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StopsStopIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
