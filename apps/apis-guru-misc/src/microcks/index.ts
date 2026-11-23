import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobsIdRoute,
  deleteSecretsIdRoute,
  deleteServicesIdRoute,
  getExportRoute,
  getFeaturesConfigRoute,
  getJobsCountRoute,
  getJobsIdRoute,
  getJobsRoute,
  getKeycloakConfigRoute,
  getMetricsConformanceAggregateRoute,
  getMetricsConformanceServiceServiceIdRoute,
  getMetricsInvocationsGlobalLatestRoute,
  getMetricsInvocationsGlobalRoute,
  getMetricsInvocationsServiceNameServiceVersionRoute,
  getMetricsInvocationsTopRoute,
  getMetricsTestsLatestRoute,
  getResourcesNameRoute,
  getResourcesServiceServiceIdRoute,
  getSecretsCountRoute,
  getSecretsIdRoute,
  getSecretsRoute,
  getServicesCountRoute,
  getServicesIdRoute,
  getServicesLabelsRoute,
  getServicesRoute,
  getServicesSearchRoute,
  getTestsIdEventsTestCaseIdRoute,
  getTestsIdMessagesTestCaseIdRoute,
  getTestsIdRoute,
  getTestsServiceServiceIdCountRoute,
  getTestsServiceServiceIdRoute,
  postArtifactUploadRoute,
  postImportRoute,
  postJobsIdRoute,
  postJobsRoute,
  postSecretsRoute,
  postTestsIdTestCaseResultRoute,
  postTestsRoute,
  putJobsIdActivateRoute,
  putJobsIdStartRoute,
  putJobsIdStopRoute,
  putSecretsIdRoute,
  putServicesIdMetadataRoute,
  putServicesIdOperationRoute,
} from './routes'
import {
  deleteJobsIdRouteHandler,
  deleteSecretsIdRouteHandler,
  deleteServicesIdRouteHandler,
  getExportRouteHandler,
  getFeaturesConfigRouteHandler,
  getJobsCountRouteHandler,
  getJobsIdRouteHandler,
  getJobsRouteHandler,
  getKeycloakConfigRouteHandler,
  getMetricsConformanceAggregateRouteHandler,
  getMetricsConformanceServiceServiceIdRouteHandler,
  getMetricsInvocationsGlobalLatestRouteHandler,
  getMetricsInvocationsGlobalRouteHandler,
  getMetricsInvocationsServiceNameServiceVersionRouteHandler,
  getMetricsInvocationsTopRouteHandler,
  getMetricsTestsLatestRouteHandler,
  getResourcesNameRouteHandler,
  getResourcesServiceServiceIdRouteHandler,
  getSecretsCountRouteHandler,
  getSecretsIdRouteHandler,
  getSecretsRouteHandler,
  getServicesCountRouteHandler,
  getServicesIdRouteHandler,
  getServicesLabelsRouteHandler,
  getServicesRouteHandler,
  getServicesSearchRouteHandler,
  getTestsIdEventsTestCaseIdRouteHandler,
  getTestsIdMessagesTestCaseIdRouteHandler,
  getTestsIdRouteHandler,
  getTestsServiceServiceIdCountRouteHandler,
  getTestsServiceServiceIdRouteHandler,
  postArtifactUploadRouteHandler,
  postImportRouteHandler,
  postJobsIdRouteHandler,
  postJobsRouteHandler,
  postSecretsRouteHandler,
  postTestsIdTestCaseResultRouteHandler,
  postTestsRouteHandler,
  putJobsIdActivateRouteHandler,
  putJobsIdStartRouteHandler,
  putJobsIdStopRouteHandler,
  putSecretsIdRouteHandler,
  putServicesIdMetadataRouteHandler,
  putServicesIdOperationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postArtifactUploadRoute, postArtifactUploadRouteHandler)
  .openapi(getExportRoute, getExportRouteHandler)
  .openapi(getFeaturesConfigRoute, getFeaturesConfigRouteHandler)
  .openapi(postImportRoute, postImportRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(getJobsCountRoute, getJobsCountRouteHandler)
  .openapi(deleteJobsIdRoute, deleteJobsIdRouteHandler)
  .openapi(getJobsIdRoute, getJobsIdRouteHandler)
  .openapi(postJobsIdRoute, postJobsIdRouteHandler)
  .openapi(putJobsIdActivateRoute, putJobsIdActivateRouteHandler)
  .openapi(putJobsIdStartRoute, putJobsIdStartRouteHandler)
  .openapi(putJobsIdStopRoute, putJobsIdStopRouteHandler)
  .openapi(getKeycloakConfigRoute, getKeycloakConfigRouteHandler)
  .openapi(getMetricsConformanceAggregateRoute, getMetricsConformanceAggregateRouteHandler)
  .openapi(
    getMetricsConformanceServiceServiceIdRoute,
    getMetricsConformanceServiceServiceIdRouteHandler,
  )
  .openapi(getMetricsInvocationsGlobalRoute, getMetricsInvocationsGlobalRouteHandler)
  .openapi(getMetricsInvocationsGlobalLatestRoute, getMetricsInvocationsGlobalLatestRouteHandler)
  .openapi(getMetricsInvocationsTopRoute, getMetricsInvocationsTopRouteHandler)
  .openapi(
    getMetricsInvocationsServiceNameServiceVersionRoute,
    getMetricsInvocationsServiceNameServiceVersionRouteHandler,
  )
  .openapi(getMetricsTestsLatestRoute, getMetricsTestsLatestRouteHandler)
  .openapi(getResourcesServiceServiceIdRoute, getResourcesServiceServiceIdRouteHandler)
  .openapi(getResourcesNameRoute, getResourcesNameRouteHandler)
  .openapi(getSecretsRoute, getSecretsRouteHandler)
  .openapi(postSecretsRoute, postSecretsRouteHandler)
  .openapi(getSecretsCountRoute, getSecretsCountRouteHandler)
  .openapi(deleteSecretsIdRoute, deleteSecretsIdRouteHandler)
  .openapi(getSecretsIdRoute, getSecretsIdRouteHandler)
  .openapi(putSecretsIdRoute, putSecretsIdRouteHandler)
  .openapi(getServicesRoute, getServicesRouteHandler)
  .openapi(getServicesCountRoute, getServicesCountRouteHandler)
  .openapi(getServicesLabelsRoute, getServicesLabelsRouteHandler)
  .openapi(getServicesSearchRoute, getServicesSearchRouteHandler)
  .openapi(deleteServicesIdRoute, deleteServicesIdRouteHandler)
  .openapi(getServicesIdRoute, getServicesIdRouteHandler)
  .openapi(putServicesIdMetadataRoute, putServicesIdMetadataRouteHandler)
  .openapi(putServicesIdOperationRoute, putServicesIdOperationRouteHandler)
  .openapi(postTestsRoute, postTestsRouteHandler)
  .openapi(getTestsServiceServiceIdRoute, getTestsServiceServiceIdRouteHandler)
  .openapi(getTestsServiceServiceIdCountRoute, getTestsServiceServiceIdCountRouteHandler)
  .openapi(getTestsIdRoute, getTestsIdRouteHandler)
  .openapi(getTestsIdEventsTestCaseIdRoute, getTestsIdEventsTestCaseIdRouteHandler)
  .openapi(getTestsIdMessagesTestCaseIdRoute, getTestsIdMessagesTestCaseIdRouteHandler)
  .openapi(postTestsIdTestCaseResultRoute, postTestsIdTestCaseResultRouteHandler)

export default app
