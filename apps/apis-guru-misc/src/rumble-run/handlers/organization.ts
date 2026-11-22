import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgAgentsAgentIdRoute,
  deleteOrgAssetsAssetIdRoute,
  deleteOrgKeyRoute,
  deleteOrgServicesServiceIdRoute,
  deleteOrgSitesSiteIdRoute,
  deleteOrgWirelessWirelessIdRoute,
  getOrgAgentsAgentIdRoute,
  getOrgAgentsRoute,
  getOrgAssetsAssetIdRoute,
  getOrgAssetsRoute,
  getOrgKeyRoute,
  getOrgRoute,
  getOrgServicesRoute,
  getOrgServicesServiceIdRoute,
  getOrgSitesRoute,
  getOrgSitesSiteIdRoute,
  getOrgTasksRoute,
  getOrgTasksTaskIdChangesRoute,
  getOrgTasksTaskIdDataRoute,
  getOrgTasksTaskIdLogRoute,
  getOrgTasksTaskIdRoute,
  getOrgWirelessRoute,
  getOrgWirelessWirelessIdRoute,
  patchOrgAgentsAgentIdRoute,
  patchOrgAssetsAssetIdCommentsRoute,
  patchOrgAssetsAssetIdTagsRoute,
  patchOrgAssetsBulkTagsRoute,
  patchOrgKeyRotateRoute,
  patchOrgRoute,
  patchOrgSitesSiteIdRoute,
  patchOrgTasksTaskIdRoute,
  postOrgAgentsAgentIdUpdateRoute,
  postOrgAssetsBulkClearTagsRoute,
  postOrgTasksTaskIdHideRoute,
  postOrgTasksTaskIdStopRoute,
  putOrgSitesRoute,
  putOrgSitesSiteIdImportNessusRoute,
  putOrgSitesSiteIdImportRoute,
  putOrgSitesSiteIdScanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgAgentsAgentIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgAssetsBulkClearTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgAssetsBulkTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgAssetsAssetIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgAssetsAssetIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgKeyRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgSitesSiteIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgSitesSiteIdImportNessusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgSitesSiteIdScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgTasksTaskIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgTasksTaskIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgTasksTaskIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgTasksTaskIdLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgTasksTaskIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgWirelessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgWirelessWirelessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgWirelessWirelessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
