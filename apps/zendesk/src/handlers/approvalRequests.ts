import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ApprovalClarificationFlowMessagesApprovalRequestIdRoute,
  getApiV2ApprovalRequestsRoute,
  getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdRoute,
  patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecisionRoute,
  patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdrawRoute,
  postApiV2ApprovalClarificationFlowMessagesRoute,
  postApiV2ApprovalRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalRequestsHandler = app
  .openapi(postApiV2ApprovalClarificationFlowMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalClarificationFlowMessagesApprovalRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecisionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
