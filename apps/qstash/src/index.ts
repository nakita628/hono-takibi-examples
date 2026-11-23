import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DlqDlqIdRoute,
  deleteV2DlqRoute,
  deleteV2MessagesMessageIdRoute,
  deleteV2MessagesRoute,
  deleteV2QueuesQueueNameRoute,
  deleteV2SchedulesScheduleIdRoute,
  deleteV2TopicsUrlGroupNameEndpointsRoute,
  deleteV2TopicsUrlGroupNameRoute,
  getV2BulkActionsActionIdRoute,
  getV2BulkActionsRoute,
  getV2DlqDlqIdRoute,
  getV2DlqRoute,
  getV2FlowControlFlowControlKeyRoute,
  getV2FlowControlRoute,
  getV2GlobalParallelismRoute,
  getV2KeysRoute,
  getV2LogsRoute,
  getV2MessagesMessageIdRoute,
  getV2QueuesQueueNameRoute,
  getV2QueuesRoute,
  getV2SchedulesRoute,
  getV2SchedulesScheduleIdRoute,
  getV2TopicsRoute,
  getV2TopicsUrlGroupNameRoute,
  postV2BatchRoute,
  postV2DlqRetryDlqIdRoute,
  postV2DlqRetryRoute,
  postV2EnqueueQueueNameDestinationRoute,
  postV2FlowControlFlowControlKeyPauseRoute,
  postV2FlowControlFlowControlKeyPinRoute,
  postV2FlowControlFlowControlKeyResetRateRoute,
  postV2FlowControlFlowControlKeyResumeRoute,
  postV2FlowControlFlowControlKeyUnpinRoute,
  postV2KeysRotateRoute,
  postV2MessagesMessageIdRetryRoute,
  postV2PublishDestinationRoute,
  postV2QueuesQueueNamePauseRoute,
  postV2QueuesQueueNameResumeRoute,
  postV2QueuesRoute,
  postV2SchedulesDestinationRoute,
  postV2SchedulesScheduleIdPauseRoute,
  postV2SchedulesScheduleIdResumeRoute,
  postV2TopicsUrlGroupNameEndpointsRoute,
} from './routes'
import {
  deleteV2DlqDlqIdRouteHandler,
  deleteV2DlqRouteHandler,
  deleteV2MessagesMessageIdRouteHandler,
  deleteV2MessagesRouteHandler,
  deleteV2QueuesQueueNameRouteHandler,
  deleteV2SchedulesScheduleIdRouteHandler,
  deleteV2TopicsUrlGroupNameEndpointsRouteHandler,
  deleteV2TopicsUrlGroupNameRouteHandler,
  getV2BulkActionsActionIdRouteHandler,
  getV2BulkActionsRouteHandler,
  getV2DlqDlqIdRouteHandler,
  getV2DlqRouteHandler,
  getV2FlowControlFlowControlKeyRouteHandler,
  getV2FlowControlRouteHandler,
  getV2GlobalParallelismRouteHandler,
  getV2KeysRouteHandler,
  getV2LogsRouteHandler,
  getV2MessagesMessageIdRouteHandler,
  getV2QueuesQueueNameRouteHandler,
  getV2QueuesRouteHandler,
  getV2SchedulesRouteHandler,
  getV2SchedulesScheduleIdRouteHandler,
  getV2TopicsRouteHandler,
  getV2TopicsUrlGroupNameRouteHandler,
  postV2BatchRouteHandler,
  postV2DlqRetryDlqIdRouteHandler,
  postV2DlqRetryRouteHandler,
  postV2EnqueueQueueNameDestinationRouteHandler,
  postV2FlowControlFlowControlKeyPauseRouteHandler,
  postV2FlowControlFlowControlKeyPinRouteHandler,
  postV2FlowControlFlowControlKeyResetRateRouteHandler,
  postV2FlowControlFlowControlKeyResumeRouteHandler,
  postV2FlowControlFlowControlKeyUnpinRouteHandler,
  postV2KeysRotateRouteHandler,
  postV2MessagesMessageIdRetryRouteHandler,
  postV2PublishDestinationRouteHandler,
  postV2QueuesQueueNamePauseRouteHandler,
  postV2QueuesQueueNameResumeRouteHandler,
  postV2QueuesRouteHandler,
  postV2SchedulesDestinationRouteHandler,
  postV2SchedulesScheduleIdPauseRouteHandler,
  postV2SchedulesScheduleIdResumeRouteHandler,
  postV2TopicsUrlGroupNameEndpointsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2PublishDestinationRoute, postV2PublishDestinationRouteHandler)
  .openapi(postV2EnqueueQueueNameDestinationRoute, postV2EnqueueQueueNameDestinationRouteHandler)
  .openapi(postV2BatchRoute, postV2BatchRouteHandler)
  .openapi(getV2MessagesMessageIdRoute, getV2MessagesMessageIdRouteHandler)
  .openapi(deleteV2MessagesMessageIdRoute, deleteV2MessagesMessageIdRouteHandler)
  .openapi(postV2MessagesMessageIdRetryRoute, postV2MessagesMessageIdRetryRouteHandler)
  .openapi(deleteV2MessagesRoute, deleteV2MessagesRouteHandler)
  .openapi(getV2BulkActionsRoute, getV2BulkActionsRouteHandler)
  .openapi(getV2BulkActionsActionIdRoute, getV2BulkActionsActionIdRouteHandler)
  .openapi(postV2QueuesRoute, postV2QueuesRouteHandler)
  .openapi(getV2QueuesRoute, getV2QueuesRouteHandler)
  .openapi(getV2QueuesQueueNameRoute, getV2QueuesQueueNameRouteHandler)
  .openapi(deleteV2QueuesQueueNameRoute, deleteV2QueuesQueueNameRouteHandler)
  .openapi(postV2QueuesQueueNamePauseRoute, postV2QueuesQueueNamePauseRouteHandler)
  .openapi(postV2QueuesQueueNameResumeRoute, postV2QueuesQueueNameResumeRouteHandler)
  .openapi(postV2SchedulesDestinationRoute, postV2SchedulesDestinationRouteHandler)
  .openapi(getV2SchedulesRoute, getV2SchedulesRouteHandler)
  .openapi(getV2SchedulesScheduleIdRoute, getV2SchedulesScheduleIdRouteHandler)
  .openapi(deleteV2SchedulesScheduleIdRoute, deleteV2SchedulesScheduleIdRouteHandler)
  .openapi(postV2SchedulesScheduleIdPauseRoute, postV2SchedulesScheduleIdPauseRouteHandler)
  .openapi(postV2SchedulesScheduleIdResumeRoute, postV2SchedulesScheduleIdResumeRouteHandler)
  .openapi(getV2TopicsRoute, getV2TopicsRouteHandler)
  .openapi(getV2TopicsUrlGroupNameRoute, getV2TopicsUrlGroupNameRouteHandler)
  .openapi(deleteV2TopicsUrlGroupNameRoute, deleteV2TopicsUrlGroupNameRouteHandler)
  .openapi(postV2TopicsUrlGroupNameEndpointsRoute, postV2TopicsUrlGroupNameEndpointsRouteHandler)
  .openapi(
    deleteV2TopicsUrlGroupNameEndpointsRoute,
    deleteV2TopicsUrlGroupNameEndpointsRouteHandler,
  )
  .openapi(getV2DlqRoute, getV2DlqRouteHandler)
  .openapi(deleteV2DlqRoute, deleteV2DlqRouteHandler)
  .openapi(getV2DlqDlqIdRoute, getV2DlqDlqIdRouteHandler)
  .openapi(deleteV2DlqDlqIdRoute, deleteV2DlqDlqIdRouteHandler)
  .openapi(postV2DlqRetryDlqIdRoute, postV2DlqRetryDlqIdRouteHandler)
  .openapi(postV2DlqRetryRoute, postV2DlqRetryRouteHandler)
  .openapi(getV2FlowControlRoute, getV2FlowControlRouteHandler)
  .openapi(getV2FlowControlFlowControlKeyRoute, getV2FlowControlFlowControlKeyRouteHandler)
  .openapi(
    postV2FlowControlFlowControlKeyPauseRoute,
    postV2FlowControlFlowControlKeyPauseRouteHandler,
  )
  .openapi(
    postV2FlowControlFlowControlKeyResumeRoute,
    postV2FlowControlFlowControlKeyResumeRouteHandler,
  )
  .openapi(postV2FlowControlFlowControlKeyPinRoute, postV2FlowControlFlowControlKeyPinRouteHandler)
  .openapi(
    postV2FlowControlFlowControlKeyUnpinRoute,
    postV2FlowControlFlowControlKeyUnpinRouteHandler,
  )
  .openapi(
    postV2FlowControlFlowControlKeyResetRateRoute,
    postV2FlowControlFlowControlKeyResetRateRouteHandler,
  )
  .openapi(getV2GlobalParallelismRoute, getV2GlobalParallelismRouteHandler)
  .openapi(getV2KeysRoute, getV2KeysRouteHandler)
  .openapi(postV2KeysRotateRoute, postV2KeysRotateRouteHandler)
  .openapi(getV2LogsRoute, getV2LogsRouteHandler)

export default app
