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
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1CallbackGenerateTokenRouteHandler,
  getV1ConnectorPlatformRegionsEnumerateRouteHandler,
  getV1NameDownloadRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAuthConfigsRouteHandler,
  getV1ParentCertificatesRouteHandler,
  getV1ParentClientmetadataRouteHandler,
  getV1ParentClientsRouteHandler,
  getV1ParentConnectionsRouteHandler,
  getV1ParentExecutionsRouteHandler,
  getV1ParentIntegrationsRouteHandler,
  getV1ParentRuntimeActionSchemasRouteHandler,
  getV1ParentRuntimeEntitySchemasRouteHandler,
  getV1ParentSfdcChannelsRouteHandler,
  getV1ParentSfdcInstancesRouteHandler,
  getV1ParentSuspensionsRouteHandler,
  getV1ParentVersionsRouteHandler,
  patchV1NameRouteHandler,
  postV1IntegrationVersionTakeoverEditLockRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameExecuteRouteHandler,
  postV1NameLiftRouteHandler,
  postV1NamePublishRouteHandler,
  postV1NameResolveRouteHandler,
  postV1NameScheduleRouteHandler,
  postV1NameTestRouteHandler,
  postV1NameUnpublishRouteHandler,
  postV1ParentAppsScriptProjectsLinkRouteHandler,
  postV1ParentAppsScriptProjectsRouteHandler,
  postV1ParentAuthConfigsRouteHandler,
  postV1ParentCertificatesRouteHandler,
  postV1ParentClientsDeprovisionRouteHandler,
  postV1ParentClientsProvisionRouteHandler,
  postV1ParentClientsSwitchRouteHandler,
  postV1ParentCloudFunctionsRouteHandler,
  postV1ParentSfdcChannelsRouteHandler,
  postV1ParentSfdcInstancesRouteHandler,
  postV1ParentVersionsRouteHandler,
  postV1ParentVersionsUploadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1CallbackGenerateTokenRoute, getV1CallbackGenerateTokenRouteHandler)
  .openapi(
    getV1ConnectorPlatformRegionsEnumerateRoute,
    getV1ConnectorPlatformRegionsEnumerateRouteHandler,
  )
  .openapi(
    postV1IntegrationVersionTakeoverEditLockRoute,
    postV1IntegrationVersionTakeoverEditLockRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1NameDownloadRoute, getV1NameDownloadRouteHandler)
  .openapi(postV1NameExecuteRoute, postV1NameExecuteRouteHandler)
  .openapi(postV1NameLiftRoute, postV1NameLiftRouteHandler)
  .openapi(postV1NamePublishRoute, postV1NamePublishRouteHandler)
  .openapi(postV1NameResolveRoute, postV1NameResolveRouteHandler)
  .openapi(postV1NameScheduleRoute, postV1NameScheduleRouteHandler)
  .openapi(postV1NameTestRoute, postV1NameTestRouteHandler)
  .openapi(postV1NameUnpublishRoute, postV1NameUnpublishRouteHandler)
  .openapi(postV1ParentAppsScriptProjectsRoute, postV1ParentAppsScriptProjectsRouteHandler)
  .openapi(postV1ParentAppsScriptProjectsLinkRoute, postV1ParentAppsScriptProjectsLinkRouteHandler)
  .openapi(getV1ParentAuthConfigsRoute, getV1ParentAuthConfigsRouteHandler)
  .openapi(postV1ParentAuthConfigsRoute, postV1ParentAuthConfigsRouteHandler)
  .openapi(getV1ParentCertificatesRoute, getV1ParentCertificatesRouteHandler)
  .openapi(postV1ParentCertificatesRoute, postV1ParentCertificatesRouteHandler)
  .openapi(getV1ParentClientmetadataRoute, getV1ParentClientmetadataRouteHandler)
  .openapi(getV1ParentClientsRoute, getV1ParentClientsRouteHandler)
  .openapi(postV1ParentClientsDeprovisionRoute, postV1ParentClientsDeprovisionRouteHandler)
  .openapi(postV1ParentClientsProvisionRoute, postV1ParentClientsProvisionRouteHandler)
  .openapi(postV1ParentClientsSwitchRoute, postV1ParentClientsSwitchRouteHandler)
  .openapi(postV1ParentCloudFunctionsRoute, postV1ParentCloudFunctionsRouteHandler)
  .openapi(getV1ParentConnectionsRoute, getV1ParentConnectionsRouteHandler)
  .openapi(getV1ParentExecutionsRoute, getV1ParentExecutionsRouteHandler)
  .openapi(getV1ParentIntegrationsRoute, getV1ParentIntegrationsRouteHandler)
  .openapi(getV1ParentRuntimeActionSchemasRoute, getV1ParentRuntimeActionSchemasRouteHandler)
  .openapi(getV1ParentRuntimeEntitySchemasRoute, getV1ParentRuntimeEntitySchemasRouteHandler)
  .openapi(getV1ParentSfdcChannelsRoute, getV1ParentSfdcChannelsRouteHandler)
  .openapi(postV1ParentSfdcChannelsRoute, postV1ParentSfdcChannelsRouteHandler)
  .openapi(getV1ParentSfdcInstancesRoute, getV1ParentSfdcInstancesRouteHandler)
  .openapi(postV1ParentSfdcInstancesRoute, postV1ParentSfdcInstancesRouteHandler)
  .openapi(getV1ParentSuspensionsRoute, getV1ParentSuspensionsRouteHandler)
  .openapi(getV1ParentVersionsRoute, getV1ParentVersionsRouteHandler)
  .openapi(postV1ParentVersionsRoute, postV1ParentVersionsRouteHandler)
  .openapi(postV1ParentVersionsUploadRoute, postV1ParentVersionsUploadRouteHandler)

export default app
