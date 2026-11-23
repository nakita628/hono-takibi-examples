import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentRunsIdRoute,
  deleteBatchesIdRoute,
  deleteMonitorsIdRoute,
  deleteV0ImportsIdRoute,
  deleteV0MonitorsIdRoute,
  deleteV0WebhooksIdRoute,
  deleteV0WebsetsIdRoute,
  deleteV0WebsetsWebsetEnrichmentsIdRoute,
  deleteV0WebsetsWebsetItemsIdRoute,
  getAgentRunsIdEventsRoute,
  getAgentRunsIdRoute,
  getAgentRunsRoute,
  getBatchesIdRoute,
  getBatchesRoute,
  getMonitorsIdRoute,
  getMonitorsIdRunsRoute,
  getMonitorsIdRunsRunIdRoute,
  getMonitorsRoute,
  getV0EventsIdRoute,
  getV0EventsRoute,
  getV0ImportsIdRoute,
  getV0ImportsRoute,
  getV0MonitorsIdRoute,
  getV0MonitorsMonitorRunsIdRoute,
  getV0MonitorsMonitorRunsRoute,
  getV0MonitorsRoute,
  getV0TeamsMeRoute,
  getV0WebhooksIdAttemptsRoute,
  getV0WebhooksIdRoute,
  getV0WebhooksRoute,
  getV0WebsetsIdRoute,
  getV0WebsetsRoute,
  getV0WebsetsWebsetEnrichmentsIdRoute,
  getV0WebsetsWebsetItemsIdRoute,
  getV0WebsetsWebsetItemsRoute,
  getV0WebsetsWebsetSearchesIdRoute,
  patchMonitorsIdRoute,
  patchV0ImportsIdRoute,
  patchV0MonitorsIdRoute,
  patchV0WebhooksIdRoute,
  patchV0WebsetsWebsetEnrichmentsIdRoute,
  postAgentRunsIdCancelRoute,
  postAgentRunsIdStopRoute,
  postAgentRunsRoute,
  postAnswerRoute,
  postBatchesIdCancelRoute,
  postBatchesRoute,
  postContentsRoute,
  postFindSimilarRoute,
  postMonitorsBatchRoute,
  postMonitorsIdTriggerRoute,
  postMonitorsRoute,
  postSearchRoute,
  postV0ImportsRoute,
  postV0MonitorsRoute,
  postV0WebhooksRoute,
  postV0WebsetsIdCancelRoute,
  postV0WebsetsIdRoute,
  postV0WebsetsPreviewRoute,
  postV0WebsetsRoute,
  postV0WebsetsWebsetEnrichmentsIdCancelRoute,
  postV0WebsetsWebsetEnrichmentsRoute,
  postV0WebsetsWebsetSearchesIdCancelRoute,
  postV0WebsetsWebsetSearchesRoute,
} from './routes'
import {
  deleteAgentRunsIdRouteHandler,
  deleteBatchesIdRouteHandler,
  deleteMonitorsIdRouteHandler,
  deleteV0ImportsIdRouteHandler,
  deleteV0MonitorsIdRouteHandler,
  deleteV0WebhooksIdRouteHandler,
  deleteV0WebsetsIdRouteHandler,
  deleteV0WebsetsWebsetEnrichmentsIdRouteHandler,
  deleteV0WebsetsWebsetItemsIdRouteHandler,
  getAgentRunsIdEventsRouteHandler,
  getAgentRunsIdRouteHandler,
  getAgentRunsRouteHandler,
  getBatchesIdRouteHandler,
  getBatchesRouteHandler,
  getMonitorsIdRouteHandler,
  getMonitorsIdRunsRouteHandler,
  getMonitorsIdRunsRunIdRouteHandler,
  getMonitorsRouteHandler,
  getV0EventsIdRouteHandler,
  getV0EventsRouteHandler,
  getV0ImportsIdRouteHandler,
  getV0ImportsRouteHandler,
  getV0MonitorsIdRouteHandler,
  getV0MonitorsMonitorRunsIdRouteHandler,
  getV0MonitorsMonitorRunsRouteHandler,
  getV0MonitorsRouteHandler,
  getV0TeamsMeRouteHandler,
  getV0WebhooksIdAttemptsRouteHandler,
  getV0WebhooksIdRouteHandler,
  getV0WebhooksRouteHandler,
  getV0WebsetsIdRouteHandler,
  getV0WebsetsRouteHandler,
  getV0WebsetsWebsetEnrichmentsIdRouteHandler,
  getV0WebsetsWebsetItemsIdRouteHandler,
  getV0WebsetsWebsetItemsRouteHandler,
  getV0WebsetsWebsetSearchesIdRouteHandler,
  patchMonitorsIdRouteHandler,
  patchV0ImportsIdRouteHandler,
  patchV0MonitorsIdRouteHandler,
  patchV0WebhooksIdRouteHandler,
  patchV0WebsetsWebsetEnrichmentsIdRouteHandler,
  postAgentRunsIdCancelRouteHandler,
  postAgentRunsIdStopRouteHandler,
  postAgentRunsRouteHandler,
  postAnswerRouteHandler,
  postBatchesIdCancelRouteHandler,
  postBatchesRouteHandler,
  postContentsRouteHandler,
  postFindSimilarRouteHandler,
  postMonitorsBatchRouteHandler,
  postMonitorsIdTriggerRouteHandler,
  postMonitorsRouteHandler,
  postSearchRouteHandler,
  postV0ImportsRouteHandler,
  postV0MonitorsRouteHandler,
  postV0WebhooksRouteHandler,
  postV0WebsetsIdCancelRouteHandler,
  postV0WebsetsIdRouteHandler,
  postV0WebsetsPreviewRouteHandler,
  postV0WebsetsRouteHandler,
  postV0WebsetsWebsetEnrichmentsIdCancelRouteHandler,
  postV0WebsetsWebsetEnrichmentsRouteHandler,
  postV0WebsetsWebsetSearchesIdCancelRouteHandler,
  postV0WebsetsWebsetSearchesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSearchRoute, postSearchRouteHandler)
  .openapi(postContentsRoute, postContentsRouteHandler)
  .openapi(postAnswerRoute, postAnswerRouteHandler)
  .openapi(postFindSimilarRoute, postFindSimilarRouteHandler)
  .openapi(postMonitorsRoute, postMonitorsRouteHandler)
  .openapi(getMonitorsRoute, getMonitorsRouteHandler)
  .openapi(postMonitorsBatchRoute, postMonitorsBatchRouteHandler)
  .openapi(getMonitorsIdRoute, getMonitorsIdRouteHandler)
  .openapi(patchMonitorsIdRoute, patchMonitorsIdRouteHandler)
  .openapi(deleteMonitorsIdRoute, deleteMonitorsIdRouteHandler)
  .openapi(postMonitorsIdTriggerRoute, postMonitorsIdTriggerRouteHandler)
  .openapi(getMonitorsIdRunsRoute, getMonitorsIdRunsRouteHandler)
  .openapi(getMonitorsIdRunsRunIdRoute, getMonitorsIdRunsRunIdRouteHandler)
  .openapi(postAgentRunsRoute, postAgentRunsRouteHandler)
  .openapi(getAgentRunsRoute, getAgentRunsRouteHandler)
  .openapi(getAgentRunsIdRoute, getAgentRunsIdRouteHandler)
  .openapi(deleteAgentRunsIdRoute, deleteAgentRunsIdRouteHandler)
  .openapi(postAgentRunsIdCancelRoute, postAgentRunsIdCancelRouteHandler)
  .openapi(postAgentRunsIdStopRoute, postAgentRunsIdStopRouteHandler)
  .openapi(getAgentRunsIdEventsRoute, getAgentRunsIdEventsRouteHandler)
  .openapi(postBatchesRoute, postBatchesRouteHandler)
  .openapi(getBatchesRoute, getBatchesRouteHandler)
  .openapi(getBatchesIdRoute, getBatchesIdRouteHandler)
  .openapi(deleteBatchesIdRoute, deleteBatchesIdRouteHandler)
  .openapi(postBatchesIdCancelRoute, postBatchesIdCancelRouteHandler)
  .openapi(getV0TeamsMeRoute, getV0TeamsMeRouteHandler)
  .openapi(postV0WebsetsRoute, postV0WebsetsRouteHandler)
  .openapi(getV0WebsetsRoute, getV0WebsetsRouteHandler)
  .openapi(getV0WebsetsIdRoute, getV0WebsetsIdRouteHandler)
  .openapi(postV0WebsetsIdRoute, postV0WebsetsIdRouteHandler)
  .openapi(deleteV0WebsetsIdRoute, deleteV0WebsetsIdRouteHandler)
  .openapi(postV0WebsetsIdCancelRoute, postV0WebsetsIdCancelRouteHandler)
  .openapi(postV0WebsetsWebsetSearchesRoute, postV0WebsetsWebsetSearchesRouteHandler)
  .openapi(getV0WebsetsWebsetSearchesIdRoute, getV0WebsetsWebsetSearchesIdRouteHandler)
  .openapi(
    postV0WebsetsWebsetSearchesIdCancelRoute,
    postV0WebsetsWebsetSearchesIdCancelRouteHandler,
  )
  .openapi(postV0WebsetsWebsetEnrichmentsRoute, postV0WebsetsWebsetEnrichmentsRouteHandler)
  .openapi(patchV0WebsetsWebsetEnrichmentsIdRoute, patchV0WebsetsWebsetEnrichmentsIdRouteHandler)
  .openapi(getV0WebsetsWebsetEnrichmentsIdRoute, getV0WebsetsWebsetEnrichmentsIdRouteHandler)
  .openapi(deleteV0WebsetsWebsetEnrichmentsIdRoute, deleteV0WebsetsWebsetEnrichmentsIdRouteHandler)
  .openapi(
    postV0WebsetsWebsetEnrichmentsIdCancelRoute,
    postV0WebsetsWebsetEnrichmentsIdCancelRouteHandler,
  )
  .openapi(getV0WebsetsWebsetItemsIdRoute, getV0WebsetsWebsetItemsIdRouteHandler)
  .openapi(deleteV0WebsetsWebsetItemsIdRoute, deleteV0WebsetsWebsetItemsIdRouteHandler)
  .openapi(getV0WebsetsWebsetItemsRoute, getV0WebsetsWebsetItemsRouteHandler)
  .openapi(postV0WebsetsPreviewRoute, postV0WebsetsPreviewRouteHandler)
  .openapi(postV0MonitorsRoute, postV0MonitorsRouteHandler)
  .openapi(getV0MonitorsRoute, getV0MonitorsRouteHandler)
  .openapi(getV0MonitorsIdRoute, getV0MonitorsIdRouteHandler)
  .openapi(patchV0MonitorsIdRoute, patchV0MonitorsIdRouteHandler)
  .openapi(deleteV0MonitorsIdRoute, deleteV0MonitorsIdRouteHandler)
  .openapi(getV0MonitorsMonitorRunsRoute, getV0MonitorsMonitorRunsRouteHandler)
  .openapi(getV0MonitorsMonitorRunsIdRoute, getV0MonitorsMonitorRunsIdRouteHandler)
  .openapi(postV0ImportsRoute, postV0ImportsRouteHandler)
  .openapi(getV0ImportsRoute, getV0ImportsRouteHandler)
  .openapi(getV0ImportsIdRoute, getV0ImportsIdRouteHandler)
  .openapi(patchV0ImportsIdRoute, patchV0ImportsIdRouteHandler)
  .openapi(deleteV0ImportsIdRoute, deleteV0ImportsIdRouteHandler)
  .openapi(postV0WebhooksRoute, postV0WebhooksRouteHandler)
  .openapi(getV0WebhooksRoute, getV0WebhooksRouteHandler)
  .openapi(getV0WebhooksIdRoute, getV0WebhooksIdRouteHandler)
  .openapi(patchV0WebhooksIdRoute, patchV0WebhooksIdRouteHandler)
  .openapi(deleteV0WebhooksIdRoute, deleteV0WebhooksIdRouteHandler)
  .openapi(getV0WebhooksIdAttemptsRoute, getV0WebhooksIdAttemptsRouteHandler)
  .openapi(getV0EventsRoute, getV0EventsRouteHandler)
  .openapi(getV0EventsIdRoute, getV0EventsIdRouteHandler)

export default app
