import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesIdOrNameRoute,
  deleteZonesIdOrNameRrsetsRrNameRrTypeRoute,
  getZonesActionsIdRoute,
  getZonesActionsRoute,
  getZonesIdOrNameActionsActionIdRoute,
  getZonesIdOrNameActionsRoute,
  getZonesIdOrNameRoute,
  getZonesIdOrNameRrsetsRoute,
  getZonesIdOrNameRrsetsRrNameRrTypeRoute,
  getZonesIdOrNameZonefileRoute,
  getZonesRoute,
  postZonesIdOrNameActionsChangePrimaryNameserversRoute,
  postZonesIdOrNameActionsChangeProtectionRoute,
  postZonesIdOrNameActionsChangeTtlRoute,
  postZonesIdOrNameActionsImportZonefileRoute,
  postZonesIdOrNameRrsetsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRoute,
  postZonesRoute,
  putZonesIdOrNameRoute,
  putZonesIdOrNameRrsetsRrNameRrTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zonesHandler = app
  .openapi(getZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameZonefileRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getZonesIdOrNameRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameRrsetsRrNameRrTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesIdOrNameRrsetsRrNameRrTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesIdOrNameRrsetsRrNameRrTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
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
