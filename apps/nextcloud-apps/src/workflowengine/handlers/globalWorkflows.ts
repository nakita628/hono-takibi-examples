import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute,
  postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute,
  putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalWorkflowsHandler = app
  .openapi(getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
