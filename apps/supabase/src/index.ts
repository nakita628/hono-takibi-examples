import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advisorsHandler,
  analyticsHandler,
  authHandler,
  billingHandler,
  databaseHandler,
  domainsHandler,
  edgeFunctionsHandler,
  environmentsHandler,
  oAuthHandler,
  organizationsHandler,
  profileHandler,
  projectsHandler,
  realtimeHandler,
  restHandler,
  secretsHandler,
  storageHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', environmentsHandler)
  .route('/', projectsHandler)
  .route('/', organizationsHandler)
  .route('/', oAuthHandler)
  .route('/', databaseHandler)
  .route('/', profileHandler)
  .route('/', secretsHandler)
  .route('/', domainsHandler)
  .route('/', restHandler)
  .route('/', authHandler)
  .route('/', billingHandler)
  .route('/', advisorsHandler)
  .route('/', analyticsHandler)
  .route('/', edgeFunctionsHandler)
  .route('/', storageHandler)
  .route('/', realtimeHandler)

export default app
