import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  billingHandler,
  feedbackHandler,
  fileHandler,
  internalHandler,
  jobHandler,
  nodeHandler,
  queueHandler,
  settingsHandler,
  systemHandler,
  taskHandler,
  userHandler,
  workflowHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fileHandler)
  .route('/', apiHandler)
  .route('/', billingHandler)
  .route('/', workflowHandler)
  .route('/', nodeHandler)
  .route('/', feedbackHandler)
  .route('/', queueHandler)
  .route('/', jobHandler)
  .route('/', settingsHandler)
  .route('/', systemHandler)
  .route('/', taskHandler)
  .route('/', userHandler)
  .route('/', workflowsHandler)
  .route('/', internalHandler)

export default app
