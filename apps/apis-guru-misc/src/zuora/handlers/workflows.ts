import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkflowsWorkflowIdRoute,
  getWorkflowsMetricsJsonRoute,
  getWorkflowsRoute,
  getWorkflowsTasksRoute,
  getWorkflowsTasksTaskIdRoute,
  getWorkflowsWorkflowIdExportRoute,
  getWorkflowsWorkflowIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postWorkflowsImportRoute,
  postWorkflowsTasksTaskIdRerunRoute,
  postWorkflowsWorkflowIdRunRoute,
  putWorkflowsTasksBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsMetricsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkflowsTasksBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsTasksTaskIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsWorkflowIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsWorkflowIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
