import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdEnvironmentsEnvironmentIdRoute,
  getZonesZoneIdEnvironmentsRoute,
  patchZonesZoneIdEnvironmentsRoute,
  postZonesZoneIdEnvironmentsEnvironmentIdRollbackRoute,
  postZonesZoneIdEnvironmentsRoute,
  putZonesZoneIdEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneEnvironmentsHandler = app
  .openapi(getZonesZoneIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEnvironmentsEnvironmentIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
