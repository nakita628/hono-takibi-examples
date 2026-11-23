import { OpenAPIHono } from '@hono/zod-openapi'
import {
  contextHandler,
  deployHandler,
  insightsHandler,
  jobsHandler,
  meHandler,
  organizationHandler,
  organizationsHandler,
  orgHandler,
  otelHandler,
  ownerHandler,
  pipelineHandler,
  projectHandler,
  projectsHandler,
  scheduleHandler,
  userHandler,
  webhookHandler,
  workflowHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', insightsHandler)
  .route('/', jobsHandler)
  .route('/', meHandler)
  .route('/', organizationHandler)
  .route('/', pipelineHandler)
  .route('/', projectHandler)
  .route('/', scheduleHandler)
  .route('/', userHandler)
  .route('/', workflowHandler)
  .route('/', orgHandler)
  .route('/', ownerHandler)
  .route('/', contextHandler)
  .route('/', organizationsHandler)
  .route('/', projectsHandler)
  .route('/', deployHandler)
  .route('/', webhookHandler)
  .route('/', otelHandler)

export default app
