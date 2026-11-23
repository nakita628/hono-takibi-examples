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
} from './routes'
import {
  deleteV2WorkflowsDlqCallbackDlqIdRouteHandler,
  deleteV2WorkflowsDlqDlqIdRouteHandler,
  deleteV2WorkflowsDlqRouteHandler,
  deleteV2WorkflowsRunsRouteHandler,
  deleteV2WorkflowsRunsWorkflowRunIdRouteHandler,
  getV2FlowControlFlowControlKeyRouteHandler,
  getV2FlowControlRouteHandler,
  getV2GlobalParallelismRouteHandler,
  getV2KeysRotateRouteHandler,
  getV2KeysRouteHandler,
  getV2WaitersEventIdRouteHandler,
  getV2WorkflowsBulkActionsActionIdRouteHandler,
  getV2WorkflowsBulkActionsRouteHandler,
  getV2WorkflowsDlqDlqIdRouteHandler,
  getV2WorkflowsDlqRouteHandler,
  getV2WorkflowsLogsRouteHandler,
  postV2BatchTriggerRouteHandler,
  postV2FlowControlFlowControlKeyPauseRouteHandler,
  postV2FlowControlFlowControlKeyPinRouteHandler,
  postV2FlowControlFlowControlKeyResetRateRouteHandler,
  postV2FlowControlFlowControlKeyResumeRouteHandler,
  postV2FlowControlFlowControlKeyUnpinRouteHandler,
  postV2KeysRotateRouteHandler,
  postV2MessagesMessageIdRetryRouteHandler,
  postV2NotifyEventIdRouteHandler,
  postV2NotifyWorkflowRunIdEventIdRouteHandler,
  postV2TriggerWorkflowUrlRouteHandler,
  postV2WorkflowsDlqCallbackDlqIdRouteHandler,
  postV2WorkflowsDlqRestartDlqIdRouteHandler,
  postV2WorkflowsDlqRestartRouteHandler,
  postV2WorkflowsDlqResumeDlqIdRouteHandler,
  postV2WorkflowsDlqResumeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2TriggerWorkflowUrlRoute, postV2TriggerWorkflowUrlRouteHandler)
  .openapi(postV2BatchTriggerRoute, postV2BatchTriggerRouteHandler)
  .openapi(deleteV2WorkflowsRunsWorkflowRunIdRoute, deleteV2WorkflowsRunsWorkflowRunIdRouteHandler)
  .openapi(deleteV2WorkflowsRunsRoute, deleteV2WorkflowsRunsRouteHandler)
  .openapi(postV2MessagesMessageIdRetryRoute, postV2MessagesMessageIdRetryRouteHandler)
  .openapi(getV2WorkflowsBulkActionsRoute, getV2WorkflowsBulkActionsRouteHandler)
  .openapi(getV2WorkflowsBulkActionsActionIdRoute, getV2WorkflowsBulkActionsActionIdRouteHandler)
  .openapi(getV2WorkflowsLogsRoute, getV2WorkflowsLogsRouteHandler)
  .openapi(getV2WorkflowsDlqRoute, getV2WorkflowsDlqRouteHandler)
  .openapi(deleteV2WorkflowsDlqRoute, deleteV2WorkflowsDlqRouteHandler)
  .openapi(getV2WorkflowsDlqDlqIdRoute, getV2WorkflowsDlqDlqIdRouteHandler)
  .openapi(deleteV2WorkflowsDlqDlqIdRoute, deleteV2WorkflowsDlqDlqIdRouteHandler)
  .openapi(postV2WorkflowsDlqResumeDlqIdRoute, postV2WorkflowsDlqResumeDlqIdRouteHandler)
  .openapi(postV2WorkflowsDlqResumeRoute, postV2WorkflowsDlqResumeRouteHandler)
  .openapi(postV2WorkflowsDlqRestartDlqIdRoute, postV2WorkflowsDlqRestartDlqIdRouteHandler)
  .openapi(postV2WorkflowsDlqRestartRoute, postV2WorkflowsDlqRestartRouteHandler)
  .openapi(postV2WorkflowsDlqCallbackDlqIdRoute, postV2WorkflowsDlqCallbackDlqIdRouteHandler)
  .openapi(deleteV2WorkflowsDlqCallbackDlqIdRoute, deleteV2WorkflowsDlqCallbackDlqIdRouteHandler)
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
  .openapi(getV2KeysRotateRoute, getV2KeysRotateRouteHandler)
  .openapi(postV2NotifyEventIdRoute, postV2NotifyEventIdRouteHandler)
  .openapi(postV2NotifyWorkflowRunIdEventIdRoute, postV2NotifyWorkflowRunIdEventIdRouteHandler)
  .openapi(getV2WaitersEventIdRoute, getV2WaitersEventIdRouteHandler)

export default app
