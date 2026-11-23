import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkflowsWorkflowRoute,
  getWorkflowsRoute,
  postWorkflowsRoute,
  postWorkflowsSetRoute,
  putWorkflowsWorkflowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkflowsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
