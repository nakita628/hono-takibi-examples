import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3WorkflowEntityIdRoute,
  getRestApi3WorkflowRoute,
  getRestApi3WorkflowSearchRoute,
  postRestApi3WorkflowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getRestApi3WorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
