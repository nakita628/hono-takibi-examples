import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkflowsWorkflowIdRoute,
  getWorkflowsRoute,
  getWorkflowsWorkflowIdRoute,
  getWorkflowversionsRoute,
  getWorkflowversionsWorkflowVersionIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postWorkflowsRoute,
  postWorkflowversionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowversionsWorkflowVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
