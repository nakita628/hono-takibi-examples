import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneRRSetActionsHandler = app
  .openapi(postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
