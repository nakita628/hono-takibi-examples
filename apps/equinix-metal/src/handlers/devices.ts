import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesIdRoute,
  getDevicesIdBandwidthRoute,
  getDevicesIdBgpNeighborsRoute,
  getDevicesIdBgpSessionsRoute,
  getDevicesIdCustomdataRoute,
  getDevicesIdDiagnosticsHealthRollupRoute,
  getDevicesIdFirmwareSetsRoute,
  getDevicesIdIpsRoute,
  getDevicesIdMetadataRoute,
  getDevicesIdRoute,
  getDevicesIdTrafficRoute,
  getDevicesIdUserdataRoute,
  getDevicesInstanceIdIpsIdCustomdataRoute,
  getOrganizationsIdDevicesRoute,
  getProjectsIdDevicesRoute,
  postDevicesIdActionsRoute,
  postDevicesIdBgpSessionsRoute,
  postDevicesIdIpsRoute,
  postProjectsIdDevicesRoute,
  putDevicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(deleteDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdBgpNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdBgpSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIdBgpSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdDiagnosticsHealthRollupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdFirmwareSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdUserdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesInstanceIdIpsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
