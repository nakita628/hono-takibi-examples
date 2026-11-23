import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookmarksIdRoute,
  deleteConnectionsIdRoute,
  deleteDestinationsIdRoute,
  deleteIntegrationsIdRoute,
  deleteIssuesIdRoute,
  deleteIssueTriggersIdRoute,
  deleteSourcesIdRoute,
  deleteTeamsCurrentCustomDomainsDomainIdRoute,
  deleteTransformationsIdRoute,
  getAttemptsIdRoute,
  getAttemptsRoute,
  getBookmarksIdRawBodyRoute,
  getBookmarksIdRoute,
  getBookmarksRoute,
  getBulkEventsRetryIdRoute,
  getBulkEventsRetryPlanRoute,
  getBulkEventsRetryRoute,
  getBulkIgnoredEventsRetryIdRoute,
  getBulkIgnoredEventsRetryPlanRoute,
  getBulkIgnoredEventsRetryRoute,
  getBulkRequestsRetryIdRoute,
  getBulkRequestsRetryPlanRoute,
  getBulkRequestsRetryRoute,
  getConnectionsCountRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  getDestinationsIdRoute,
  getDestinationsRoute,
  getEventsIdRawBodyRoute,
  getEventsIdRoute,
  getEventsRoute,
  getIntegrationsIdRoute,
  getIntegrationsRoute,
  getIssuesCountRoute,
  getIssuesIdRoute,
  getIssuesRoute,
  getIssueTriggersIdRoute,
  getIssueTriggersRoute,
  getRequestsIdEventsRoute,
  getRequestsIdIgnoredEventsRoute,
  getRequestsIdRawBodyRoute,
  getRequestsIdRoute,
  getRequestsRoute,
  getSourcesIdRoute,
  getSourcesRoute,
  getTeamsCurrentCustomDomainsRoute,
  getTransformationsIdExecutionsExecutionIdRoute,
  getTransformationsIdExecutionsRoute,
  getTransformationsIdRoute,
  getTransformationsRoute,
  postBookmarksIdTriggerRoute,
  postBookmarksRoute,
  postBulkEventsRetryIdCancelRoute,
  postBulkEventsRetryRoute,
  postBulkIgnoredEventsRetryIdCancelRoute,
  postBulkIgnoredEventsRetryRoute,
  postBulkRequestsRetryIdCancelRoute,
  postBulkRequestsRetryRoute,
  postConnectionsRoute,
  postDestinationsRoute,
  postEventsIdRetryRoute,
  postIntegrationsRoute,
  postIssueTriggersRoute,
  postRequestsIdRetryRoute,
  postSourcesRoute,
  postTeamsCurrentCustomDomainsRoute,
  postTransformationsRoute,
  putBookmarksIdRoute,
  putConnectionsIdArchiveRoute,
  putConnectionsIdDisableRoute,
  putConnectionsIdEnableRoute,
  putConnectionsIdPauseRoute,
  putConnectionsIdRoute,
  putConnectionsIdUnarchiveRoute,
  putConnectionsIdUnpauseRoute,
  putConnectionsRoute,
  putDestinationsIdArchiveRoute,
  putDestinationsIdDisableRoute,
  putDestinationsIdEnableRoute,
  putDestinationsIdRoute,
  putDestinationsIdUnarchiveRoute,
  putDestinationsRoute,
  putEventsIdMuteRoute,
  putIntegrationsIdAttachSourceIdRoute,
  putIntegrationsIdDetachSourceIdRoute,
  putIntegrationsIdRoute,
  putIssuesIdRoute,
  putIssueTriggersIdDisableRoute,
  putIssueTriggersIdEnableRoute,
  putIssueTriggersIdRoute,
  putIssueTriggersRoute,
  putNotificationsWebhooksRoute,
  putSourcesIdArchiveRoute,
  putSourcesIdDisableRoute,
  putSourcesIdEnableRoute,
  putSourcesIdRoute,
  putSourcesIdUnarchiveRoute,
  putSourcesRoute,
  putTransformationsIdRoute,
  putTransformationsRoute,
  putTransformationsRunRoute,
} from './routes'
import {
  deleteBookmarksIdRouteHandler,
  deleteConnectionsIdRouteHandler,
  deleteDestinationsIdRouteHandler,
  deleteIntegrationsIdRouteHandler,
  deleteIssuesIdRouteHandler,
  deleteIssueTriggersIdRouteHandler,
  deleteSourcesIdRouteHandler,
  deleteTeamsCurrentCustomDomainsDomainIdRouteHandler,
  deleteTransformationsIdRouteHandler,
  getAttemptsIdRouteHandler,
  getAttemptsRouteHandler,
  getBookmarksIdRawBodyRouteHandler,
  getBookmarksIdRouteHandler,
  getBookmarksRouteHandler,
  getBulkEventsRetryIdRouteHandler,
  getBulkEventsRetryPlanRouteHandler,
  getBulkEventsRetryRouteHandler,
  getBulkIgnoredEventsRetryIdRouteHandler,
  getBulkIgnoredEventsRetryPlanRouteHandler,
  getBulkIgnoredEventsRetryRouteHandler,
  getBulkRequestsRetryIdRouteHandler,
  getBulkRequestsRetryPlanRouteHandler,
  getBulkRequestsRetryRouteHandler,
  getConnectionsCountRouteHandler,
  getConnectionsIdRouteHandler,
  getConnectionsRouteHandler,
  getDestinationsIdRouteHandler,
  getDestinationsRouteHandler,
  getEventsIdRawBodyRouteHandler,
  getEventsIdRouteHandler,
  getEventsRouteHandler,
  getIntegrationsIdRouteHandler,
  getIntegrationsRouteHandler,
  getIssuesCountRouteHandler,
  getIssuesIdRouteHandler,
  getIssuesRouteHandler,
  getIssueTriggersIdRouteHandler,
  getIssueTriggersRouteHandler,
  getRequestsIdEventsRouteHandler,
  getRequestsIdIgnoredEventsRouteHandler,
  getRequestsIdRawBodyRouteHandler,
  getRequestsIdRouteHandler,
  getRequestsRouteHandler,
  getSourcesIdRouteHandler,
  getSourcesRouteHandler,
  getTeamsCurrentCustomDomainsRouteHandler,
  getTransformationsIdExecutionsExecutionIdRouteHandler,
  getTransformationsIdExecutionsRouteHandler,
  getTransformationsIdRouteHandler,
  getTransformationsRouteHandler,
  postBookmarksIdTriggerRouteHandler,
  postBookmarksRouteHandler,
  postBulkEventsRetryIdCancelRouteHandler,
  postBulkEventsRetryRouteHandler,
  postBulkIgnoredEventsRetryIdCancelRouteHandler,
  postBulkIgnoredEventsRetryRouteHandler,
  postBulkRequestsRetryIdCancelRouteHandler,
  postBulkRequestsRetryRouteHandler,
  postConnectionsRouteHandler,
  postDestinationsRouteHandler,
  postEventsIdRetryRouteHandler,
  postIntegrationsRouteHandler,
  postIssueTriggersRouteHandler,
  postRequestsIdRetryRouteHandler,
  postSourcesRouteHandler,
  postTeamsCurrentCustomDomainsRouteHandler,
  postTransformationsRouteHandler,
  putBookmarksIdRouteHandler,
  putConnectionsIdArchiveRouteHandler,
  putConnectionsIdDisableRouteHandler,
  putConnectionsIdEnableRouteHandler,
  putConnectionsIdPauseRouteHandler,
  putConnectionsIdRouteHandler,
  putConnectionsIdUnarchiveRouteHandler,
  putConnectionsIdUnpauseRouteHandler,
  putConnectionsRouteHandler,
  putDestinationsIdArchiveRouteHandler,
  putDestinationsIdDisableRouteHandler,
  putDestinationsIdEnableRouteHandler,
  putDestinationsIdRouteHandler,
  putDestinationsIdUnarchiveRouteHandler,
  putDestinationsRouteHandler,
  putEventsIdMuteRouteHandler,
  putIntegrationsIdAttachSourceIdRouteHandler,
  putIntegrationsIdDetachSourceIdRouteHandler,
  putIntegrationsIdRouteHandler,
  putIssuesIdRouteHandler,
  putIssueTriggersIdDisableRouteHandler,
  putIssueTriggersIdEnableRouteHandler,
  putIssueTriggersIdRouteHandler,
  putIssueTriggersRouteHandler,
  putNotificationsWebhooksRouteHandler,
  putSourcesIdArchiveRouteHandler,
  putSourcesIdDisableRouteHandler,
  putSourcesIdEnableRouteHandler,
  putSourcesIdRouteHandler,
  putSourcesIdUnarchiveRouteHandler,
  putSourcesRouteHandler,
  putTransformationsIdRouteHandler,
  putTransformationsRouteHandler,
  putTransformationsRunRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getIssueTriggersRoute, getIssueTriggersRouteHandler)
  .openapi(postIssueTriggersRoute, postIssueTriggersRouteHandler)
  .openapi(putIssueTriggersRoute, putIssueTriggersRouteHandler)
  .openapi(getIssueTriggersIdRoute, getIssueTriggersIdRouteHandler)
  .openapi(putIssueTriggersIdRoute, putIssueTriggersIdRouteHandler)
  .openapi(deleteIssueTriggersIdRoute, deleteIssueTriggersIdRouteHandler)
  .openapi(putIssueTriggersIdDisableRoute, putIssueTriggersIdDisableRouteHandler)
  .openapi(putIssueTriggersIdEnableRoute, putIssueTriggersIdEnableRouteHandler)
  .openapi(getAttemptsRoute, getAttemptsRouteHandler)
  .openapi(getAttemptsIdRoute, getAttemptsIdRouteHandler)
  .openapi(getBookmarksRoute, getBookmarksRouteHandler)
  .openapi(postBookmarksRoute, postBookmarksRouteHandler)
  .openapi(getBookmarksIdRoute, getBookmarksIdRouteHandler)
  .openapi(putBookmarksIdRoute, putBookmarksIdRouteHandler)
  .openapi(deleteBookmarksIdRoute, deleteBookmarksIdRouteHandler)
  .openapi(getBookmarksIdRawBodyRoute, getBookmarksIdRawBodyRouteHandler)
  .openapi(postBookmarksIdTriggerRoute, postBookmarksIdTriggerRouteHandler)
  .openapi(getDestinationsRoute, getDestinationsRouteHandler)
  .openapi(postDestinationsRoute, postDestinationsRouteHandler)
  .openapi(putDestinationsRoute, putDestinationsRouteHandler)
  .openapi(getDestinationsIdRoute, getDestinationsIdRouteHandler)
  .openapi(putDestinationsIdRoute, putDestinationsIdRouteHandler)
  .openapi(deleteDestinationsIdRoute, deleteDestinationsIdRouteHandler)
  .openapi(putDestinationsIdDisableRoute, putDestinationsIdDisableRouteHandler)
  .openapi(putDestinationsIdArchiveRoute, putDestinationsIdArchiveRouteHandler)
  .openapi(putDestinationsIdEnableRoute, putDestinationsIdEnableRouteHandler)
  .openapi(putDestinationsIdUnarchiveRoute, putDestinationsIdUnarchiveRouteHandler)
  .openapi(getBulkEventsRetryRoute, getBulkEventsRetryRouteHandler)
  .openapi(postBulkEventsRetryRoute, postBulkEventsRetryRouteHandler)
  .openapi(getBulkEventsRetryPlanRoute, getBulkEventsRetryPlanRouteHandler)
  .openapi(getBulkEventsRetryIdRoute, getBulkEventsRetryIdRouteHandler)
  .openapi(postBulkEventsRetryIdCancelRoute, postBulkEventsRetryIdCancelRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getEventsIdRoute, getEventsIdRouteHandler)
  .openapi(getEventsIdRawBodyRoute, getEventsIdRawBodyRouteHandler)
  .openapi(postEventsIdRetryRoute, postEventsIdRetryRouteHandler)
  .openapi(putEventsIdMuteRoute, putEventsIdMuteRouteHandler)
  .openapi(getBulkIgnoredEventsRetryRoute, getBulkIgnoredEventsRetryRouteHandler)
  .openapi(postBulkIgnoredEventsRetryRoute, postBulkIgnoredEventsRetryRouteHandler)
  .openapi(getBulkIgnoredEventsRetryPlanRoute, getBulkIgnoredEventsRetryPlanRouteHandler)
  .openapi(getBulkIgnoredEventsRetryIdRoute, getBulkIgnoredEventsRetryIdRouteHandler)
  .openapi(postBulkIgnoredEventsRetryIdCancelRoute, postBulkIgnoredEventsRetryIdCancelRouteHandler)
  .openapi(getIntegrationsRoute, getIntegrationsRouteHandler)
  .openapi(postIntegrationsRoute, postIntegrationsRouteHandler)
  .openapi(getIntegrationsIdRoute, getIntegrationsIdRouteHandler)
  .openapi(putIntegrationsIdRoute, putIntegrationsIdRouteHandler)
  .openapi(deleteIntegrationsIdRoute, deleteIntegrationsIdRouteHandler)
  .openapi(putIntegrationsIdAttachSourceIdRoute, putIntegrationsIdAttachSourceIdRouteHandler)
  .openapi(putIntegrationsIdDetachSourceIdRoute, putIntegrationsIdDetachSourceIdRouteHandler)
  .openapi(getIssuesRoute, getIssuesRouteHandler)
  .openapi(getIssuesCountRoute, getIssuesCountRouteHandler)
  .openapi(getIssuesIdRoute, getIssuesIdRouteHandler)
  .openapi(putIssuesIdRoute, putIssuesIdRouteHandler)
  .openapi(deleteIssuesIdRoute, deleteIssuesIdRouteHandler)
  .openapi(getRequestsRoute, getRequestsRouteHandler)
  .openapi(getRequestsIdRoute, getRequestsIdRouteHandler)
  .openapi(getRequestsIdRawBodyRoute, getRequestsIdRawBodyRouteHandler)
  .openapi(postRequestsIdRetryRoute, postRequestsIdRetryRouteHandler)
  .openapi(getRequestsIdEventsRoute, getRequestsIdEventsRouteHandler)
  .openapi(getRequestsIdIgnoredEventsRoute, getRequestsIdIgnoredEventsRouteHandler)
  .openapi(getBulkRequestsRetryRoute, getBulkRequestsRetryRouteHandler)
  .openapi(postBulkRequestsRetryRoute, postBulkRequestsRetryRouteHandler)
  .openapi(getBulkRequestsRetryPlanRoute, getBulkRequestsRetryPlanRouteHandler)
  .openapi(getBulkRequestsRetryIdRoute, getBulkRequestsRetryIdRouteHandler)
  .openapi(postBulkRequestsRetryIdCancelRoute, postBulkRequestsRetryIdCancelRouteHandler)
  .openapi(getSourcesRoute, getSourcesRouteHandler)
  .openapi(postSourcesRoute, postSourcesRouteHandler)
  .openapi(putSourcesRoute, putSourcesRouteHandler)
  .openapi(getSourcesIdRoute, getSourcesIdRouteHandler)
  .openapi(putSourcesIdRoute, putSourcesIdRouteHandler)
  .openapi(deleteSourcesIdRoute, deleteSourcesIdRouteHandler)
  .openapi(putSourcesIdDisableRoute, putSourcesIdDisableRouteHandler)
  .openapi(putSourcesIdArchiveRoute, putSourcesIdArchiveRouteHandler)
  .openapi(putSourcesIdEnableRoute, putSourcesIdEnableRouteHandler)
  .openapi(putSourcesIdUnarchiveRoute, putSourcesIdUnarchiveRouteHandler)
  .openapi(putNotificationsWebhooksRoute, putNotificationsWebhooksRouteHandler)
  .openapi(postTeamsCurrentCustomDomainsRoute, postTeamsCurrentCustomDomainsRouteHandler)
  .openapi(getTeamsCurrentCustomDomainsRoute, getTeamsCurrentCustomDomainsRouteHandler)
  .openapi(
    deleteTeamsCurrentCustomDomainsDomainIdRoute,
    deleteTeamsCurrentCustomDomainsDomainIdRouteHandler,
  )
  .openapi(getTransformationsRoute, getTransformationsRouteHandler)
  .openapi(postTransformationsRoute, postTransformationsRouteHandler)
  .openapi(putTransformationsRoute, putTransformationsRouteHandler)
  .openapi(getTransformationsIdRoute, getTransformationsIdRouteHandler)
  .openapi(deleteTransformationsIdRoute, deleteTransformationsIdRouteHandler)
  .openapi(putTransformationsIdRoute, putTransformationsIdRouteHandler)
  .openapi(putTransformationsRunRoute, putTransformationsRunRouteHandler)
  .openapi(getTransformationsIdExecutionsRoute, getTransformationsIdExecutionsRouteHandler)
  .openapi(
    getTransformationsIdExecutionsExecutionIdRoute,
    getTransformationsIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(postConnectionsRoute, postConnectionsRouteHandler)
  .openapi(putConnectionsRoute, putConnectionsRouteHandler)
  .openapi(getConnectionsCountRoute, getConnectionsCountRouteHandler)
  .openapi(getConnectionsIdRoute, getConnectionsIdRouteHandler)
  .openapi(putConnectionsIdRoute, putConnectionsIdRouteHandler)
  .openapi(deleteConnectionsIdRoute, deleteConnectionsIdRouteHandler)
  .openapi(putConnectionsIdDisableRoute, putConnectionsIdDisableRouteHandler)
  .openapi(putConnectionsIdArchiveRoute, putConnectionsIdArchiveRouteHandler)
  .openapi(putConnectionsIdEnableRoute, putConnectionsIdEnableRouteHandler)
  .openapi(putConnectionsIdUnarchiveRoute, putConnectionsIdUnarchiveRouteHandler)
  .openapi(putConnectionsIdPauseRoute, putConnectionsIdPauseRouteHandler)
  .openapi(putConnectionsIdUnpauseRoute, putConnectionsIdUnpauseRouteHandler)

export default app
