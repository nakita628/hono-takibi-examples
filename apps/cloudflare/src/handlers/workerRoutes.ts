import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdWorkersRoutesRouteIdRoute,
  getZonesZoneIdWorkersRoutesRoute,
  getZonesZoneIdWorkersRoutesRouteIdRoute,
  postZonesZoneIdWorkersRoutesRoute,
  putZonesZoneIdWorkersRoutesRouteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerRoutesHandler = app
  .openapi(getZonesZoneIdWorkersRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWorkersRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdWorkersRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWorkersRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdWorkersRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
