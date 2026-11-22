import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConvaiAgentTestingTestIdRoute,
  deleteV1ConvaiTriageTicketsAgentqaTicketIdRoute,
  getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsersRoute,
  getV1ConvaiAgentsAgentIdTriageTicketsRoute,
  getV1ConvaiAgentTestingRoute,
  getV1ConvaiAgentTestingTestIdRoute,
  getV1ConvaiTestInvocationsRoute,
  getV1ConvaiTestInvocationsTestInvocationIdRoute,
  getV1ConvaiTriageTicketsAgentqaTicketIdRoute,
  getV1ConvaiTriageTicketsRoute,
  getV1UsageCharacterStatsRoute,
  getV1UserRoute,
  getV1UserSubscriptionRoute,
  patchV1ConvaiTestInvocationsTestInvocationIdRoute,
  patchV1ConvaiTriageTicketsAgentqaTicketIdRoute,
  postV1ConvaiAgentsAgentIdRunTestsRoute,
  postV1ConvaiAgentsAgentIdTriageTicketsRoute,
  postV1ConvaiAgentTestingCreateRoute,
  postV1ConvaiAgentTestingSummariesRoute,
  postV1ConvaiTestInvocationsTestInvocationIdCancelRoute,
  postV1ConvaiTestInvocationsTestInvocationIdResubmitRoute,
  postV1ConvaiTriageTicketsAgentqaTicketIdCommentsRoute,
  postV1ConvaiTriageTicketsAgentqaTicketIdMergeRoute,
  postV1ConvaiTriageTicketsAgentqaTicketIdTurnCommentsRoute,
  postV1ConvaiTriageTicketsRoute,
  postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliverRoute,
  postV1WorkspaceWebhooksWebhookIdTestRoute,
  putV1ConvaiAgentTestingTestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsageCharacterStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentTestingCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentTestingTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConvaiAgentTestingTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentTestingTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentTestingSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentTestingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTestInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdRunTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTestInvocationsTestInvocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiTestInvocationsTestInvocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTestInvocationsTestInvocationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTestInvocationsTestInvocationIdResubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTriageTicketsAgentqaTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiTriageTicketsAgentqaTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiTriageTicketsAgentqaTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsAgentqaTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsAgentqaTicketIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsAgentqaTicketIdTurnCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceWebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliverRoute, (c) => {
    throw new Error('Not implemented')
  })
