import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  addressesHandler,
  daemonHandler,
  domainsHandler,
  inputsHandler,
  integrationsHandler,
  keysHandler,
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
  .route('/', keysHandler)
  .route('/', daemonHandler)
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
