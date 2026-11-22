import { OpenAPIHono } from '@hono/zod-openapi'
import {
  contextHandler,
  deployHandler,
  groupsHandler,
  insightsHandler,
  jobHandler,
  oidcTokenManagementHandler,
  organizationHandler,
  oTelHandler,
  pipelineDefinitionHandler,
  pipelineHandler,
  policyManagementHandler,
  projectHandler,
  rollbackHandler,
  scheduleHandler,
  triggerHandler,
  usageHandler,
  userHandler,
  webhookHandler,
  workflowHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', insightsHandler)
  .route('/', jobHandler)
  .route('/', userHandler)
  .route('/', organizationHandler)
  .route('/', projectHandler)
  .route('/', pipelineHandler)
  .route('/', scheduleHandler)
  .route('/', workflowHandler)
  .route('/', oidcTokenManagementHandler)
  .route('/', policyManagementHandler)
  .route('/', contextHandler)
  .route('/', groupsHandler)
  .route('/', usageHandler)
  .route('/', pipelineDefinitionHandler)
  .route('/', triggerHandler)
  .route('/', rollbackHandler)
  .route('/', deployHandler)
  .route('/', webhookHandler)
  .route('/', oTelHandler)

export default app
