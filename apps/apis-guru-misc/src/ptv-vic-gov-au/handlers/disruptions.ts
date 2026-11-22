import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3DisruptionsDisruptionIdRoute,
  getV3DisruptionsModesRoute,
  getV3DisruptionsRoute,
  getV3DisruptionsRouteRouteIdRoute,
  getV3DisruptionsRouteRouteIdStopStopIdRoute,
  getV3DisruptionsStopStopIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disruptionsHandler = app
  .openapi(getV3DisruptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsRouteRouteIdStopStopIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsStopStopIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsDisruptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
