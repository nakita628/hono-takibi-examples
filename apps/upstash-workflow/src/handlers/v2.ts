import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WorkflowsDlqCallbackDlqIdRoute,
  deleteV2WorkflowsDlqDlqIdRoute,
  deleteV2WorkflowsDlqRoute,
  deleteV2WorkflowsRunsRoute,
  deleteV2WorkflowsRunsWorkflowRunIdRoute,
  getV2FlowControlFlowControlKeyRoute,
  getV2FlowControlRoute,
  getV2GlobalParallelismRoute,
  getV2KeysRotateRoute,
  getV2KeysRoute,
  getV2WaitersEventIdRoute,
  getV2WorkflowsBulkActionsActionIdRoute,
  getV2WorkflowsBulkActionsRoute,
  getV2WorkflowsDlqDlqIdRoute,
  getV2WorkflowsDlqRoute,
  getV2WorkflowsLogsRoute,
  postV2BatchTriggerRoute,
  postV2FlowControlFlowControlKeyPauseRoute,
  postV2FlowControlFlowControlKeyPinRoute,
  postV2FlowControlFlowControlKeyResetRateRoute,
  postV2FlowControlFlowControlKeyResumeRoute,
  postV2FlowControlFlowControlKeyUnpinRoute,
  postV2KeysRotateRoute,
  postV2MessagesMessageIdRetryRoute,
  postV2NotifyEventIdRoute,
  postV2NotifyWorkflowRunIdEventIdRoute,
  postV2TriggerWorkflowUrlRoute,
  postV2WorkflowsDlqCallbackDlqIdRoute,
  postV2WorkflowsDlqRestartDlqIdRoute,
  postV2WorkflowsDlqRestartRoute,
  postV2WorkflowsDlqResumeDlqIdRoute,
  postV2WorkflowsDlqResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2TriggerWorkflowUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsRunsWorkflowRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MessagesMessageIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsBulkActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsBulkActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsDlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsDlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsDlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsDlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqResumeDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqRestartDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqCallbackDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsDlqCallbackDlqIdRoute, (c) => {
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
  .openapi(getV2KeysRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NotifyEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NotifyWorkflowRunIdEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WaitersEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
