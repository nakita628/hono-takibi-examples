import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisApiIdRoute,
  deleteApisApiIdVersionsApiVersionIdRoute,
  deleteCollectionsCollectionUidRoute,
  deleteEnvironmentsEnvironmentUidRoute,
  deleteMocksMockUidRoute,
  deleteMocksMockUidUnpublishRoute,
  deleteMonitorsMonitorUidRoute,
  deleteWorkspacesWorkspaceIdRoute,
  getApisApiIdRoute,
  getApisApiIdVersionsApiVersionIdContracttestRoute,
  getApisApiIdVersionsApiVersionIdDocumentationRoute,
  getApisApiIdVersionsApiVersionIdEnvironmentRoute,
  getApisApiIdVersionsApiVersionIdIntegrationtestRoute,
  getApisApiIdVersionsApiVersionIdMonitorRoute,
  getApisApiIdVersionsApiVersionIdRelationsRoute,
  getApisApiIdVersionsApiVersionIdRoute,
  getApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute,
  getApisApiIdVersionsApiVersionIdTestsuiteRoute,
  getApisApiIdVersionsRoute,
  getApisRoute,
  getCollectionsCollectionUidRoute,
  getCollectionsRoute,
  getEnvironmentsEnvironmentUidRoute,
  getEnvironmentsRoute,
  getMeRoute,
  getMocksMockUidRoute,
  getMocksRoute,
  getMonitorsMonitorUidRoute,
  getMonitorsRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceIdRoute,
  postApisApiIdVersionsApiVersionIdRelationsRoute,
  postApisApiIdVersionsApiVersionIdSchemasRoute,
  postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRoute,
  postApisApiIdVersionsRoute,
  postApisRoute,
  postCollectionsForkCollectionUidRoute,
  postCollectionsMergeRoute,
  postCollectionsRoute,
  postEnvironmentsRoute,
  postImportExportedRoute,
  postImportOpenapiRoute,
  postMocksMockUidPublishRoute,
  postMocksRoute,
  postMonitorsMonitorUidRunRoute,
  postMonitorsRoute,
  postWebhooksRoute,
  postWorkspacesRoute,
  putApisApiIdRoute,
  putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRoute,
  putApisApiIdVersionsApiVersionIdRoute,
  putApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute,
  putCollectionsCollectionUidRoute,
  putEnvironmentsEnvironmentUidRoute,
  putMocksMockUidRoute,
  putMonitorsMonitorUidRoute,
  putWorkspacesWorkspaceIdRoute,
} from './routes'
import {
  deleteApisApiIdRouteHandler,
  deleteApisApiIdVersionsApiVersionIdRouteHandler,
  deleteCollectionsCollectionUidRouteHandler,
  deleteEnvironmentsEnvironmentUidRouteHandler,
  deleteMocksMockUidRouteHandler,
  deleteMocksMockUidUnpublishRouteHandler,
  deleteMonitorsMonitorUidRouteHandler,
  deleteWorkspacesWorkspaceIdRouteHandler,
  getApisApiIdRouteHandler,
  getApisApiIdVersionsApiVersionIdContracttestRouteHandler,
  getApisApiIdVersionsApiVersionIdDocumentationRouteHandler,
  getApisApiIdVersionsApiVersionIdEnvironmentRouteHandler,
  getApisApiIdVersionsApiVersionIdIntegrationtestRouteHandler,
  getApisApiIdVersionsApiVersionIdMonitorRouteHandler,
  getApisApiIdVersionsApiVersionIdRelationsRouteHandler,
  getApisApiIdVersionsApiVersionIdRouteHandler,
  getApisApiIdVersionsApiVersionIdSchemasSchemaIdRouteHandler,
  getApisApiIdVersionsApiVersionIdTestsuiteRouteHandler,
  getApisApiIdVersionsRouteHandler,
  getApisRouteHandler,
  getCollectionsCollectionUidRouteHandler,
  getCollectionsRouteHandler,
  getEnvironmentsEnvironmentUidRouteHandler,
  getEnvironmentsRouteHandler,
  getMeRouteHandler,
  getMocksMockUidRouteHandler,
  getMocksRouteHandler,
  getMonitorsMonitorUidRouteHandler,
  getMonitorsRouteHandler,
  getWorkspacesRouteHandler,
  getWorkspacesWorkspaceIdRouteHandler,
  postApisApiIdVersionsApiVersionIdRelationsRouteHandler,
  postApisApiIdVersionsApiVersionIdSchemasRouteHandler,
  postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRouteHandler,
  postApisApiIdVersionsRouteHandler,
  postApisRouteHandler,
  postCollectionsForkCollectionUidRouteHandler,
  postCollectionsMergeRouteHandler,
  postCollectionsRouteHandler,
  postEnvironmentsRouteHandler,
  postImportExportedRouteHandler,
  postImportOpenapiRouteHandler,
  postMocksMockUidPublishRouteHandler,
  postMocksRouteHandler,
  postMonitorsMonitorUidRunRouteHandler,
  postMonitorsRouteHandler,
  postWebhooksRouteHandler,
  postWorkspacesRouteHandler,
  putApisApiIdRouteHandler,
  putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRouteHandler,
  putApisApiIdVersionsApiVersionIdRouteHandler,
  putApisApiIdVersionsApiVersionIdSchemasSchemaIdRouteHandler,
  putCollectionsCollectionUidRouteHandler,
  putEnvironmentsEnvironmentUidRouteHandler,
  putMocksMockUidRouteHandler,
  putMonitorsMonitorUidRouteHandler,
  putWorkspacesWorkspaceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisRoute, getApisRouteHandler)
  .openapi(postApisRoute, postApisRouteHandler)
  .openapi(deleteApisApiIdRoute, deleteApisApiIdRouteHandler)
  .openapi(getApisApiIdRoute, getApisApiIdRouteHandler)
  .openapi(putApisApiIdRoute, putApisApiIdRouteHandler)
  .openapi(getApisApiIdVersionsRoute, getApisApiIdVersionsRouteHandler)
  .openapi(postApisApiIdVersionsRoute, postApisApiIdVersionsRouteHandler)
  .openapi(
    deleteApisApiIdVersionsApiVersionIdRoute,
    deleteApisApiIdVersionsApiVersionIdRouteHandler,
  )
  .openapi(getApisApiIdVersionsApiVersionIdRoute, getApisApiIdVersionsApiVersionIdRouteHandler)
  .openapi(putApisApiIdVersionsApiVersionIdRoute, putApisApiIdVersionsApiVersionIdRouteHandler)
  .openapi(
    getApisApiIdVersionsApiVersionIdContracttestRoute,
    getApisApiIdVersionsApiVersionIdContracttestRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdDocumentationRoute,
    getApisApiIdVersionsApiVersionIdDocumentationRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdEnvironmentRoute,
    getApisApiIdVersionsApiVersionIdEnvironmentRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdIntegrationtestRoute,
    getApisApiIdVersionsApiVersionIdIntegrationtestRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdMonitorRoute,
    getApisApiIdVersionsApiVersionIdMonitorRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdRelationsRoute,
    getApisApiIdVersionsApiVersionIdRelationsRouteHandler,
  )
  .openapi(
    postApisApiIdVersionsApiVersionIdRelationsRoute,
    postApisApiIdVersionsApiVersionIdRelationsRouteHandler,
  )
  .openapi(
    postApisApiIdVersionsApiVersionIdSchemasRoute,
    postApisApiIdVersionsApiVersionIdSchemasRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute,
    getApisApiIdVersionsApiVersionIdSchemasSchemaIdRouteHandler,
  )
  .openapi(
    putApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute,
    putApisApiIdVersionsApiVersionIdSchemasSchemaIdRouteHandler,
  )
  .openapi(
    postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRoute,
    postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRouteHandler,
  )
  .openapi(
    getApisApiIdVersionsApiVersionIdTestsuiteRoute,
    getApisApiIdVersionsApiVersionIdTestsuiteRouteHandler,
  )
  .openapi(
    putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRoute,
    putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRouteHandler,
  )
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(postCollectionsForkCollectionUidRoute, postCollectionsForkCollectionUidRouteHandler)
  .openapi(postCollectionsMergeRoute, postCollectionsMergeRouteHandler)
  .openapi(deleteCollectionsCollectionUidRoute, deleteCollectionsCollectionUidRouteHandler)
  .openapi(getCollectionsCollectionUidRoute, getCollectionsCollectionUidRouteHandler)
  .openapi(putCollectionsCollectionUidRoute, putCollectionsCollectionUidRouteHandler)
  .openapi(getEnvironmentsRoute, getEnvironmentsRouteHandler)
  .openapi(postEnvironmentsRoute, postEnvironmentsRouteHandler)
  .openapi(deleteEnvironmentsEnvironmentUidRoute, deleteEnvironmentsEnvironmentUidRouteHandler)
  .openapi(getEnvironmentsEnvironmentUidRoute, getEnvironmentsEnvironmentUidRouteHandler)
  .openapi(putEnvironmentsEnvironmentUidRoute, putEnvironmentsEnvironmentUidRouteHandler)
  .openapi(postImportExportedRoute, postImportExportedRouteHandler)
  .openapi(postImportOpenapiRoute, postImportOpenapiRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMocksRoute, getMocksRouteHandler)
  .openapi(postMocksRoute, postMocksRouteHandler)
  .openapi(deleteMocksMockUidRoute, deleteMocksMockUidRouteHandler)
  .openapi(getMocksMockUidRoute, getMocksMockUidRouteHandler)
  .openapi(putMocksMockUidRoute, putMocksMockUidRouteHandler)
  .openapi(postMocksMockUidPublishRoute, postMocksMockUidPublishRouteHandler)
  .openapi(deleteMocksMockUidUnpublishRoute, deleteMocksMockUidUnpublishRouteHandler)
  .openapi(getMonitorsRoute, getMonitorsRouteHandler)
  .openapi(postMonitorsRoute, postMonitorsRouteHandler)
  .openapi(deleteMonitorsMonitorUidRoute, deleteMonitorsMonitorUidRouteHandler)
  .openapi(getMonitorsMonitorUidRoute, getMonitorsMonitorUidRouteHandler)
  .openapi(putMonitorsMonitorUidRoute, putMonitorsMonitorUidRouteHandler)
  .openapi(postMonitorsMonitorUidRunRoute, postMonitorsMonitorUidRunRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(getWorkspacesRoute, getWorkspacesRouteHandler)
  .openapi(postWorkspacesRoute, postWorkspacesRouteHandler)
  .openapi(deleteWorkspacesWorkspaceIdRoute, deleteWorkspacesWorkspaceIdRouteHandler)
  .openapi(getWorkspacesWorkspaceIdRoute, getWorkspacesWorkspaceIdRouteHandler)
  .openapi(putWorkspacesWorkspaceIdRoute, putWorkspacesWorkspaceIdRouteHandler)

export default app
