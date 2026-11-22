import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute,
  postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute,
  putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userWorkflowsHandler = app
  .openapi(getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
