import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aliasesHandler,
  artifactsHandler,
  authenticationHandler,
  certsHandler,
  checksHandler,
  deploymentsHandler,
  dnsHandler,
  domainsHandler,
  edgeConfigHandler,
  integrationsHandler,
  logDrainsHandler,
  projectsHandler,
  secretsHandler,
  teamsHandler,
  userHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', edgeConfigHandler)
  .route('/', authenticationHandler)
  .route('/', checksHandler)
  .route('/', dnsHandler)
  .route('/', integrationsHandler)
  .route('/', logDrainsHandler)
  .route('/', projectsHandler)
  .route('/', teamsHandler)
  .route('/', userHandler)
  .route('/', webhooksHandler)
  .route('/', deploymentsHandler)
  .route('/', aliasesHandler)
  .route('/', secretsHandler)
  .route('/', domainsHandler)
  .route('/', certsHandler)
  .route('/', artifactsHandler)

export default app
