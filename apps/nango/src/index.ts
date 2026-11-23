import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionConnectionIdRoute,
  deleteConnectionsConnectionIdRoute,
  deleteConnectSessionRoute,
  deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
  deleteEnvironmentsEnvironmentUuidRoute,
  deleteIntegrationsUniqueKeyFunctionsNameRoute,
  deleteIntegrationsUniqueKeyRoute,
  deleteProxyAnyPathRoute,
  deleteSyncNameVariantVariantRoute,
  getActionActionIdRoute,
  getConnectionConnectionIdRoute,
  getConnectionRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsRoute,
  getConnectSessionRoute,
  getEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
  getEnvironmentsEnvironmentUuidApiKeysRoute,
  getEnvironmentsEnvironmentUuidRoute,
  getEnvironmentsRoute,
  getEnvironmentVariablesRoute,
  getFunctionsDeploymentsIdRoute,
  getFunctionsDryrunsIdRoute,
  getIntegrationsRoute,
  getIntegrationsUniqueKeyFunctionsNameCodeRoute,
  getIntegrationsUniqueKeyFunctionsNameRoute,
  getIntegrationsUniqueKeyFunctionsRoute,
  getIntegrationsUniqueKeyRoute,
  getProvidersProviderRoute,
  getProvidersProviderTemplatesRoute,
  getProvidersRoute,
  getProxyAnyPathRoute,
  getRecordsRoute,
  getScriptsConfigRoute,
  getSyncStatusRoute,
  patchConnectionConnectionIdMetadataRoute,
  patchConnectionMetadataRoute,
  patchConnectionsConnectionIdRoute,
  patchConnectionsMetadataRoute,
  patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
  patchEnvironmentsEnvironmentUuidRoute,
  patchIntegrationsUniqueKeyRoute,
  patchProxyAnyPathRoute,
  patchRecordsPruneRoute,
  postActionTriggerRoute,
  postConnectionConnectionIdMetadataRoute,
  postConnectionMetadataRoute,
  postConnectionRoute,
  postConnectionsConnectionIdToolsNameCallsRoute,
  postConnectionsMetadataRoute,
  postConnectionsRoute,
  postConnectSessionsReconnectRoute,
  postConnectSessionsRoute,
  postEnvironmentsEnvironmentUuidApiKeysRoute,
  postEnvironmentsRoute,
  postEnvironmentWebhookSigningKeyRotateRoute,
  postFunctionsCompileRoute,
  postFunctionsDeploymentsRoute,
  postFunctionsDryrunsRoute,
  postIntegrationsQuickstartRoute,
  postIntegrationsRoute,
  postProxyAnyPathRoute,
  postSyncNameVariantVariantRoute,
  postSyncPauseRoute,
  postSyncStartRoute,
  postSyncTriggerRoute,
  putProxyAnyPathRoute,
  putSyncUpdateConnectionFrequencyRoute,
} from './routes'
import {
  deleteConnectionConnectionIdRouteHandler,
  deleteConnectionsConnectionIdRouteHandler,
  deleteConnectSessionRouteHandler,
  deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRouteHandler,
  deleteEnvironmentsEnvironmentUuidRouteHandler,
  deleteIntegrationsUniqueKeyFunctionsNameRouteHandler,
  deleteIntegrationsUniqueKeyRouteHandler,
  deleteProxyAnyPathRouteHandler,
  deleteSyncNameVariantVariantRouteHandler,
  getActionActionIdRouteHandler,
  getConnectionConnectionIdRouteHandler,
  getConnectionRouteHandler,
  getConnectionsConnectionIdRouteHandler,
  getConnectionsRouteHandler,
  getConnectSessionRouteHandler,
  getEnvironmentsEnvironmentUuidApiKeysKeyUuidRouteHandler,
  getEnvironmentsEnvironmentUuidApiKeysRouteHandler,
  getEnvironmentsEnvironmentUuidRouteHandler,
  getEnvironmentsRouteHandler,
  getEnvironmentVariablesRouteHandler,
  getFunctionsDeploymentsIdRouteHandler,
  getFunctionsDryrunsIdRouteHandler,
  getIntegrationsRouteHandler,
  getIntegrationsUniqueKeyFunctionsNameCodeRouteHandler,
  getIntegrationsUniqueKeyFunctionsNameRouteHandler,
  getIntegrationsUniqueKeyFunctionsRouteHandler,
  getIntegrationsUniqueKeyRouteHandler,
  getProvidersProviderRouteHandler,
  getProvidersProviderTemplatesRouteHandler,
  getProvidersRouteHandler,
  getProxyAnyPathRouteHandler,
  getRecordsRouteHandler,
  getScriptsConfigRouteHandler,
  getSyncStatusRouteHandler,
  patchConnectionConnectionIdMetadataRouteHandler,
  patchConnectionMetadataRouteHandler,
  patchConnectionsConnectionIdRouteHandler,
  patchConnectionsMetadataRouteHandler,
  patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRouteHandler,
  patchEnvironmentsEnvironmentUuidRouteHandler,
  patchIntegrationsUniqueKeyRouteHandler,
  patchProxyAnyPathRouteHandler,
  patchRecordsPruneRouteHandler,
  postActionTriggerRouteHandler,
  postConnectionConnectionIdMetadataRouteHandler,
  postConnectionMetadataRouteHandler,
  postConnectionRouteHandler,
  postConnectionsConnectionIdToolsNameCallsRouteHandler,
  postConnectionsMetadataRouteHandler,
  postConnectionsRouteHandler,
  postConnectSessionsReconnectRouteHandler,
  postConnectSessionsRouteHandler,
  postEnvironmentsEnvironmentUuidApiKeysRouteHandler,
  postEnvironmentsRouteHandler,
  postEnvironmentWebhookSigningKeyRotateRouteHandler,
  postFunctionsCompileRouteHandler,
  postFunctionsDeploymentsRouteHandler,
  postFunctionsDryrunsRouteHandler,
  postIntegrationsQuickstartRouteHandler,
  postIntegrationsRouteHandler,
  postProxyAnyPathRouteHandler,
  postSyncNameVariantVariantRouteHandler,
  postSyncPauseRouteHandler,
  postSyncStartRouteHandler,
  postSyncTriggerRouteHandler,
  putProxyAnyPathRouteHandler,
  putSyncUpdateConnectionFrequencyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getProvidersRoute, getProvidersRouteHandler)
  .openapi(getProvidersProviderRoute, getProvidersProviderRouteHandler)
  .openapi(getProvidersProviderTemplatesRoute, getProvidersProviderTemplatesRouteHandler)
  .openapi(getIntegrationsRoute, getIntegrationsRouteHandler)
  .openapi(postIntegrationsRoute, postIntegrationsRouteHandler)
  .openapi(postIntegrationsQuickstartRoute, postIntegrationsQuickstartRouteHandler)
  .openapi(getIntegrationsUniqueKeyRoute, getIntegrationsUniqueKeyRouteHandler)
  .openapi(patchIntegrationsUniqueKeyRoute, patchIntegrationsUniqueKeyRouteHandler)
  .openapi(deleteIntegrationsUniqueKeyRoute, deleteIntegrationsUniqueKeyRouteHandler)
  .openapi(getIntegrationsUniqueKeyFunctionsRoute, getIntegrationsUniqueKeyFunctionsRouteHandler)
  .openapi(
    getIntegrationsUniqueKeyFunctionsNameRoute,
    getIntegrationsUniqueKeyFunctionsNameRouteHandler,
  )
  .openapi(
    deleteIntegrationsUniqueKeyFunctionsNameRoute,
    deleteIntegrationsUniqueKeyFunctionsNameRouteHandler,
  )
  .openapi(
    getIntegrationsUniqueKeyFunctionsNameCodeRoute,
    getIntegrationsUniqueKeyFunctionsNameCodeRouteHandler,
  )
  .openapi(getConnectionRoute, getConnectionRouteHandler)
  .openapi(postConnectionRoute, postConnectionRouteHandler)
  .openapi(getConnectionConnectionIdRoute, getConnectionConnectionIdRouteHandler)
  .openapi(deleteConnectionConnectionIdRoute, deleteConnectionConnectionIdRouteHandler)
  .openapi(postConnectionMetadataRoute, postConnectionMetadataRouteHandler)
  .openapi(patchConnectionMetadataRoute, patchConnectionMetadataRouteHandler)
  .openapi(postConnectionConnectionIdMetadataRoute, postConnectionConnectionIdMetadataRouteHandler)
  .openapi(
    patchConnectionConnectionIdMetadataRoute,
    patchConnectionConnectionIdMetadataRouteHandler,
  )
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(postConnectionsRoute, postConnectionsRouteHandler)
  .openapi(getConnectionsConnectionIdRoute, getConnectionsConnectionIdRouteHandler)
  .openapi(patchConnectionsConnectionIdRoute, patchConnectionsConnectionIdRouteHandler)
  .openapi(deleteConnectionsConnectionIdRoute, deleteConnectionsConnectionIdRouteHandler)
  .openapi(postConnectionsMetadataRoute, postConnectionsMetadataRouteHandler)
  .openapi(patchConnectionsMetadataRoute, patchConnectionsMetadataRouteHandler)
  .openapi(getScriptsConfigRoute, getScriptsConfigRouteHandler)
  .openapi(postFunctionsCompileRoute, postFunctionsCompileRouteHandler)
  .openapi(postFunctionsDryrunsRoute, postFunctionsDryrunsRouteHandler)
  .openapi(getFunctionsDryrunsIdRoute, getFunctionsDryrunsIdRouteHandler)
  .openapi(postFunctionsDeploymentsRoute, postFunctionsDeploymentsRouteHandler)
  .openapi(getFunctionsDeploymentsIdRoute, getFunctionsDeploymentsIdRouteHandler)
  .openapi(getRecordsRoute, getRecordsRouteHandler)
  .openapi(patchRecordsPruneRoute, patchRecordsPruneRouteHandler)
  .openapi(postSyncTriggerRoute, postSyncTriggerRouteHandler)
  .openapi(postSyncStartRoute, postSyncStartRouteHandler)
  .openapi(postSyncPauseRoute, postSyncPauseRouteHandler)
  .openapi(getSyncStatusRoute, getSyncStatusRouteHandler)
  .openapi(postSyncNameVariantVariantRoute, postSyncNameVariantVariantRouteHandler)
  .openapi(deleteSyncNameVariantVariantRoute, deleteSyncNameVariantVariantRouteHandler)
  .openapi(getActionActionIdRoute, getActionActionIdRouteHandler)
  .openapi(putSyncUpdateConnectionFrequencyRoute, putSyncUpdateConnectionFrequencyRouteHandler)
  .openapi(
    postConnectionsConnectionIdToolsNameCallsRoute,
    postConnectionsConnectionIdToolsNameCallsRouteHandler,
  )
  .openapi(postActionTriggerRoute, postActionTriggerRouteHandler)
  .openapi(getEnvironmentsRoute, getEnvironmentsRouteHandler)
  .openapi(postEnvironmentsRoute, postEnvironmentsRouteHandler)
  .openapi(getEnvironmentsEnvironmentUuidRoute, getEnvironmentsEnvironmentUuidRouteHandler)
  .openapi(patchEnvironmentsEnvironmentUuidRoute, patchEnvironmentsEnvironmentUuidRouteHandler)
  .openapi(deleteEnvironmentsEnvironmentUuidRoute, deleteEnvironmentsEnvironmentUuidRouteHandler)
  .openapi(
    getEnvironmentsEnvironmentUuidApiKeysRoute,
    getEnvironmentsEnvironmentUuidApiKeysRouteHandler,
  )
  .openapi(
    postEnvironmentsEnvironmentUuidApiKeysRoute,
    postEnvironmentsEnvironmentUuidApiKeysRouteHandler,
  )
  .openapi(
    getEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
    getEnvironmentsEnvironmentUuidApiKeysKeyUuidRouteHandler,
  )
  .openapi(
    patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
    patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRouteHandler,
  )
  .openapi(
    deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
    deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRouteHandler,
  )
  .openapi(getEnvironmentVariablesRoute, getEnvironmentVariablesRouteHandler)
  .openapi(
    postEnvironmentWebhookSigningKeyRotateRoute,
    postEnvironmentWebhookSigningKeyRotateRouteHandler,
  )
  .openapi(getProxyAnyPathRoute, getProxyAnyPathRouteHandler)
  .openapi(postProxyAnyPathRoute, postProxyAnyPathRouteHandler)
  .openapi(putProxyAnyPathRoute, putProxyAnyPathRouteHandler)
  .openapi(patchProxyAnyPathRoute, patchProxyAnyPathRouteHandler)
  .openapi(deleteProxyAnyPathRoute, deleteProxyAnyPathRouteHandler)
  .openapi(postConnectSessionsRoute, postConnectSessionsRouteHandler)
  .openapi(postConnectSessionsReconnectRoute, postConnectSessionsReconnectRouteHandler)
  .openapi(getConnectSessionRoute, getConnectSessionRouteHandler)
  .openapi(deleteConnectSessionRoute, deleteConnectSessionRouteHandler)

export default app
