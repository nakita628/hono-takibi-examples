import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdRoute,
  getZonesRoute,
  getZonesZoneIdRoute,
  patchZonesZoneIdRoute,
  postZonesRoute,
  postZonesZoneIdEnvironmentsEnvironmentIdInvalidateCacheRoute,
  postZonesZoneIdEnvironmentsEnvironmentIdPurgeCacheRoute,
  postZonesZoneIdInvalidateCacheRoute,
  postZonesZoneIdPurgeCacheRoute,
  putZonesZoneIdActivationCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneHandler = app
  .openapi(getZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdActivationCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEnvironmentsEnvironmentIdInvalidateCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEnvironmentsEnvironmentIdPurgeCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdInvalidateCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdPurgeCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
