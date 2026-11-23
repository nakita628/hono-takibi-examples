import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appClientsHandler,
  assetsHandler,
  datasetsHandler,
  deploymentEnvironmentsHandler,
  documentsHandler,
  logsHandler,
  modelsHandler,
  organizationsHandler,
  paymentMethodsHandler,
  plansHandler,
  predictionsHandler,
  profilesHandler,
  secretsHandler,
  signupHandler,
  transitionsHandler,
  usersHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appClientsHandler)
  .route('/', assetsHandler)
  .route('/', datasetsHandler)
  .route('/', deploymentEnvironmentsHandler)
  .route('/', documentsHandler)
  .route('/', logsHandler)
  .route('/', modelsHandler)
  .route('/', organizationsHandler)
  .route('/', paymentMethodsHandler)
  .route('/', plansHandler)
  .route('/', predictionsHandler)
  .route('/', profilesHandler)
  .route('/', secretsHandler)
  .route('/', signupHandler)
  .route('/', transitionsHandler)
  .route('/', usersHandler)
  .route('/', workflowsHandler)

export default app
