import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkflowversionsRoute,
  getWorkflowversionsWorkflowVersionIdRoute,
  postWorkflowversionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowversionsHandler = app
  .openapi(getWorkflowversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowversionsWorkflowVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
