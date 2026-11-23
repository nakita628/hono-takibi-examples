import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  addressesHandler,
  daemonsHandler,
  domainsHandler,
  inputsHandler,
  integrationsHandler,
  sendHandler,
  triggersHandler,
  userHandler,
  verificationsHandler,
  workflowsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', addressesHandler)
  .route('/', daemonsHandler)
  .route('/', domainsHandler)
  .route('/', inputsHandler)
  .route('/', integrationsHandler)
  .route('/', sendHandler)
  .route('/', triggersHandler)
  .route('/', userHandler)
  .route('/', verificationsHandler)
  .route('/', workflowsHandler)
  .route('/', workspacesHandler)

export default app
