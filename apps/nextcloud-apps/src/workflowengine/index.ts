import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
  deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute,
  postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute,
  postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute,
  putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
  putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
} from './routes'
import {
  deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRouteHandler,
  deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRouteHandler,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRouteHandler,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRouteHandler,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRouteHandler,
  getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRouteHandler,
  postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRouteHandler,
  postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRouteHandler,
  putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRouteHandler,
  putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute,
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute,
    postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
    putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute,
    deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute,
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute,
    postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
    getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
    putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute,
    deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRouteHandler,
  )

export default app
