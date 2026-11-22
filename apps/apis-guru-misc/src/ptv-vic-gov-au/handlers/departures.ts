import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3DeparturesRouteTypeRouteTypeStopStopIdRoute,
  getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const departuresHandler = app
  .openapi(getV3DeparturesRouteTypeRouteTypeStopStopIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
