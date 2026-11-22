import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WorkflowRecipientRunsIdRoute, getV1WorkflowRecipientRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowRecipientRunsHandler = app
  .openapi(getV1WorkflowRecipientRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowRecipientRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
