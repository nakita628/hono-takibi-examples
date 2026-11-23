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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2PublishDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EnqueueQueueNameDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MessagesMessageIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BulkActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BulkActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2QueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QueuesQueueNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QueuesQueueNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesScheduleIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesScheduleIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsUrlGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsUrlGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopicsUrlGroupNameEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsUrlGroupNameEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DlqRetryDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DlqRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FlowControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FlowControlFlowControlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyResetRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlobalParallelismRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KeysRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
