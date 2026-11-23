import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionHandler,
  connectHandler,
  connectionHandler,
  connectionsHandler,
  environmentHandler,
  environmentsHandler,
  environmentVariablesHandler,
  functionsHandler,
  integrationsHandler,
  providersHandler,
  proxyHandler,
  recordsHandler,
  scriptsHandler,
  syncHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', providersHandler)
  .route('/', integrationsHandler)
  .route('/', connectionHandler)
  .route('/', connectionsHandler)
  .route('/', scriptsHandler)
  .route('/', functionsHandler)
  .route('/', recordsHandler)
  .route('/', syncHandler)
  .route('/', actionHandler)
  .route('/', environmentsHandler)
  .route('/', environmentVariablesHandler)
  .route('/', environmentHandler)
  .route('/', proxyHandler)
  .route('/', connectHandler)

export default app
