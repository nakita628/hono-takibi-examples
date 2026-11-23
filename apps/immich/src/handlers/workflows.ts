import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkflowsIdRoute,
  getWorkflowsIdLogsRoute,
  getWorkflowsIdRoute,
  getWorkflowsIdShareRoute,
  getWorkflowsRoute,
  getWorkflowsTriggersRoute,
  postWorkflowsRoute,
  putWorkflowsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
