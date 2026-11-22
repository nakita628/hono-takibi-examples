import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3DirectionsDirectionIdRoute,
  getV3DirectionsDirectionIdRouteTypeRouteTypeRoute,
  getV3DirectionsRouteRouteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directionsHandler = app
  .openapi(getV3DirectionsRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DirectionsDirectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DirectionsDirectionIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
