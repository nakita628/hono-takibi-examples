import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  deleteWorkflowsWorkflowIdRoute,
  getWorkflowsRoute,
  getWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  getWorkflowsWorkflowIdExecutionsRoute,
  getWorkflowsWorkflowIdRoute,
  optionsWorkflowsRoute,
  optionsWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  optionsWorkflowsWorkflowIdExecutionsRoute,
  optionsWorkflowsWorkflowIdRoute,
  patchWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postWorkflowsRoute,
  postWorkflowsWorkflowIdExecutionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsWorkflowIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWorkflowsWorkflowIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsWorkflowIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsWorkflowIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsWorkflowIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWorkflowsWorkflowIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkflowsWorkflowIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
