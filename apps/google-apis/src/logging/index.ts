import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LogNameRoute,
  deleteV2MetricNameRoute,
  deleteV2NameRoute,
  deleteV2SinkNameRoute,
  getV2MetricNameRoute,
  getV2MonitoredResourceDescriptorsRoute,
  getV2NameCmekSettingsRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2NameSettingsRoute,
  getV2ParentBucketsRoute,
  getV2ParentExclusionsRoute,
  getV2ParentLinksRoute,
  getV2ParentLogsRoute,
  getV2ParentMetricsRoute,
  getV2ParentRecentQueriesRoute,
  getV2ParentSavedQueriesRoute,
  getV2ParentSinksRoute,
  getV2ParentViewsRoute,
  getV2SinkNameRoute,
  patchV2NameCmekSettingsRoute,
  patchV2NameRoute,
  patchV2NameSettingsRoute,
  patchV2SinkNameRoute,
  postV2EntriesCopyRoute,
  postV2EntriesListRoute,
  postV2EntriesTailRoute,
  postV2EntriesWriteRoute,
  postV2NameCancelRoute,
  postV2NameUndeleteRoute,
  postV2NameUpdateAsyncRoute,
  postV2ParentBucketsCreateAsyncRoute,
  postV2ParentBucketsRoute,
  postV2ParentExclusionsRoute,
  postV2ParentLinksRoute,
  postV2ParentMetricsRoute,
  postV2ParentSavedQueriesRoute,
  postV2ParentSinksRoute,
  postV2ParentViewsRoute,
  putV2MetricNameRoute,
  putV2SinkNameRoute,
} from './routes'
import {
  deleteV2LogNameRouteHandler,
  deleteV2MetricNameRouteHandler,
  deleteV2NameRouteHandler,
  deleteV2SinkNameRouteHandler,
  getV2MetricNameRouteHandler,
  getV2MonitoredResourceDescriptorsRouteHandler,
  getV2NameCmekSettingsRouteHandler,
  getV2NameLocationsRouteHandler,
  getV2NameOperationsRouteHandler,
  getV2NameRouteHandler,
  getV2NameSettingsRouteHandler,
  getV2ParentBucketsRouteHandler,
  getV2ParentExclusionsRouteHandler,
  getV2ParentLinksRouteHandler,
  getV2ParentLogsRouteHandler,
  getV2ParentMetricsRouteHandler,
  getV2ParentRecentQueriesRouteHandler,
  getV2ParentSavedQueriesRouteHandler,
  getV2ParentSinksRouteHandler,
  getV2ParentViewsRouteHandler,
  getV2SinkNameRouteHandler,
  patchV2NameCmekSettingsRouteHandler,
  patchV2NameRouteHandler,
  patchV2NameSettingsRouteHandler,
  patchV2SinkNameRouteHandler,
  postV2EntriesCopyRouteHandler,
  postV2EntriesListRouteHandler,
  postV2EntriesTailRouteHandler,
  postV2EntriesWriteRouteHandler,
  postV2NameCancelRouteHandler,
  postV2NameUndeleteRouteHandler,
  postV2NameUpdateAsyncRouteHandler,
  postV2ParentBucketsCreateAsyncRouteHandler,
  postV2ParentBucketsRouteHandler,
  postV2ParentExclusionsRouteHandler,
  postV2ParentLinksRouteHandler,
  postV2ParentMetricsRouteHandler,
  postV2ParentSavedQueriesRouteHandler,
  postV2ParentSinksRouteHandler,
  postV2ParentViewsRouteHandler,
  putV2MetricNameRouteHandler,
  putV2SinkNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2EntriesCopyRoute, postV2EntriesCopyRouteHandler)
  .openapi(postV2EntriesListRoute, postV2EntriesListRouteHandler)
  .openapi(postV2EntriesTailRoute, postV2EntriesTailRouteHandler)
  .openapi(postV2EntriesWriteRoute, postV2EntriesWriteRouteHandler)
  .openapi(getV2MonitoredResourceDescriptorsRoute, getV2MonitoredResourceDescriptorsRouteHandler)
  .openapi(deleteV2LogNameRoute, deleteV2LogNameRouteHandler)
  .openapi(deleteV2MetricNameRoute, deleteV2MetricNameRouteHandler)
  .openapi(getV2MetricNameRoute, getV2MetricNameRouteHandler)
  .openapi(putV2MetricNameRoute, putV2MetricNameRouteHandler)
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameCmekSettingsRoute, getV2NameCmekSettingsRouteHandler)
  .openapi(patchV2NameCmekSettingsRoute, patchV2NameCmekSettingsRouteHandler)
  .openapi(getV2NameLocationsRoute, getV2NameLocationsRouteHandler)
  .openapi(getV2NameOperationsRoute, getV2NameOperationsRouteHandler)
  .openapi(getV2NameSettingsRoute, getV2NameSettingsRouteHandler)
  .openapi(patchV2NameSettingsRoute, patchV2NameSettingsRouteHandler)
  .openapi(postV2NameCancelRoute, postV2NameCancelRouteHandler)
  .openapi(postV2NameUndeleteRoute, postV2NameUndeleteRouteHandler)
  .openapi(postV2NameUpdateAsyncRoute, postV2NameUpdateAsyncRouteHandler)
  .openapi(getV2ParentBucketsRoute, getV2ParentBucketsRouteHandler)
  .openapi(postV2ParentBucketsRoute, postV2ParentBucketsRouteHandler)
  .openapi(postV2ParentBucketsCreateAsyncRoute, postV2ParentBucketsCreateAsyncRouteHandler)
  .openapi(getV2ParentExclusionsRoute, getV2ParentExclusionsRouteHandler)
  .openapi(postV2ParentExclusionsRoute, postV2ParentExclusionsRouteHandler)
  .openapi(getV2ParentLinksRoute, getV2ParentLinksRouteHandler)
  .openapi(postV2ParentLinksRoute, postV2ParentLinksRouteHandler)
  .openapi(getV2ParentLogsRoute, getV2ParentLogsRouteHandler)
  .openapi(getV2ParentMetricsRoute, getV2ParentMetricsRouteHandler)
  .openapi(postV2ParentMetricsRoute, postV2ParentMetricsRouteHandler)
  .openapi(getV2ParentRecentQueriesRoute, getV2ParentRecentQueriesRouteHandler)
  .openapi(getV2ParentSavedQueriesRoute, getV2ParentSavedQueriesRouteHandler)
  .openapi(postV2ParentSavedQueriesRoute, postV2ParentSavedQueriesRouteHandler)
  .openapi(getV2ParentSinksRoute, getV2ParentSinksRouteHandler)
  .openapi(postV2ParentSinksRoute, postV2ParentSinksRouteHandler)
  .openapi(getV2ParentViewsRoute, getV2ParentViewsRouteHandler)
  .openapi(postV2ParentViewsRoute, postV2ParentViewsRouteHandler)
  .openapi(deleteV2SinkNameRoute, deleteV2SinkNameRouteHandler)
  .openapi(getV2SinkNameRoute, getV2SinkNameRouteHandler)
  .openapi(patchV2SinkNameRoute, patchV2SinkNameRouteHandler)
  .openapi(putV2SinkNameRoute, putV2SinkNameRouteHandler)

export default app
