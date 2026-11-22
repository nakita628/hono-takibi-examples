import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1WorkflowsKeyCancelRoute, postV1WorkflowsKeyTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(postV1WorkflowsKeyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkflowsKeyTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
