import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdManagedHeadersRoute,
  getZonesZoneIdManagedHeadersRoute,
  patchZonesZoneIdManagedHeadersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedTransformsHandler = app
  .openapi(deleteZonesZoneIdManagedHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdManagedHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdManagedHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
