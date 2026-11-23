import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1CallbackGenerateTokenRoute,
  getV1ConnectorPlatformRegionsEnumerateRoute,
  getV1NameDownloadRoute,
  getV1NameRoute,
  getV1ParentAuthConfigsRoute,
  getV1ParentCertificatesRoute,
  getV1ParentClientmetadataRoute,
  getV1ParentClientsRoute,
  getV1ParentConnectionsRoute,
  getV1ParentExecutionsRoute,
  getV1ParentIntegrationsRoute,
  getV1ParentRuntimeActionSchemasRoute,
  getV1ParentRuntimeEntitySchemasRoute,
  getV1ParentSfdcChannelsRoute,
  getV1ParentSfdcInstancesRoute,
  getV1ParentSuspensionsRoute,
  getV1ParentVersionsRoute,
  patchV1NameRoute,
  postV1IntegrationVersionTakeoverEditLockRoute,
  postV1NameCancelRoute,
  postV1NameExecuteRoute,
  postV1NameLiftRoute,
  postV1NamePublishRoute,
  postV1NameResolveRoute,
  postV1NameScheduleRoute,
  postV1NameTestRoute,
  postV1NameUnpublishRoute,
  postV1ParentAppsScriptProjectsLinkRoute,
  postV1ParentAppsScriptProjectsRoute,
  postV1ParentAuthConfigsRoute,
  postV1ParentCertificatesRoute,
  postV1ParentClientsDeprovisionRoute,
  postV1ParentClientsProvisionRoute,
  postV1ParentClientsSwitchRoute,
  postV1ParentCloudFunctionsRoute,
  postV1ParentSfdcChannelsRoute,
  postV1ParentSfdcInstancesRoute,
  postV1ParentVersionsRoute,
  postV1ParentVersionsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CallbackGenerateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectorPlatformRegionsEnumerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationVersionTakeoverEditLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLiftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAppsScriptProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAppsScriptProjectsLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAuthConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAuthConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentClientmetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentClientsDeprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentClientsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentClientsSwitchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCloudFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRuntimeActionSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRuntimeEntitySchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSfdcChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSfdcChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSfdcInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSfdcInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSuspensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentVersionsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
