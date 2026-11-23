import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  authHandler,
  billingHandler,
  checkHandler,
  enterpriseHandler,
  eventsHandler,
  frameworksHandler,
  integrationsHandler,
  keysHandler,
  labelsHandler,
  plansHandler,
  profileHandler,
  resetHandler,
  setpasswordHandler,
  targetActionsHandler,
  targetsHandler,
  usersHandler,
  vulnerabilityDefinitionsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', authHandler)
  .route('/', billingHandler)
  .route('/', checkHandler)
  .route('/', enterpriseHandler)
  .route('/', eventsHandler)
  .route('/', frameworksHandler)
  .route('/', integrationsHandler)
  .route('/', keysHandler)
  .route('/', labelsHandler)
  .route('/', plansHandler)
  .route('/', profileHandler)
  .route('/', resetHandler)
  .route('/', setpasswordHandler)
  .route('/', targetActionsHandler)
  .route('/', targetsHandler)
  .route('/', usersHandler)
  .route('/', vulnerabilityDefinitionsHandler)
  .route('/', webhooksHandler)

export default app
