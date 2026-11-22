import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesActionsIdRoute,
  getZonesActionsRoute,
  getZonesIdOrNameActionsActionIdRoute,
  getZonesIdOrNameActionsRoute,
  postZonesIdOrNameActionsChangePrimaryNameserversRoute,
  postZonesIdOrNameActionsChangeProtectionRoute,
  postZonesIdOrNameActionsChangeTtlRoute,
  postZonesIdOrNameActionsImportZonefileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneActionsHandler = app
  .openapi(getZonesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameActionsChangePrimaryNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameActionsChangeTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameActionsImportZonefileRoute, (c) => {
    throw new Error('Not implemented')
  })
