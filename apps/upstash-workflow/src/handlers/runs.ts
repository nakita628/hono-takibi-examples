import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WorkflowsRunsRoute,
  deleteV2WorkflowsRunsWorkflowRunIdRoute,
  postV2BatchTriggerRoute,
  postV2MessagesMessageIdRetryRoute,
  postV2TriggerWorkflowUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runsHandler = app
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
