import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apIsHandler,
  batchRequestsHandler,
  cacheInvalidationHandler,
  certsHandler,
  debugHandler,
  healthCheckingHandler,
  hotReloadHandler,
  jwkCacheInvalidationHandler,
  keysHandler,
  mcpProxiesHandler,
  oAuthHandler,
  organisationQuotasHandler,
  policiesHandler,
  schemaHandler,
  tykOASAPIsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthCheckingHandler)
  .route('/', apIsHandler)
  .route('/', tykOASAPIsHandler)
  .route('/', mcpProxiesHandler)
  .route('/', cacheInvalidationHandler)
  .route('/', jwkCacheInvalidationHandler)
  .route('/', certsHandler)
  .route('/', debugHandler)
  .route('/', keysHandler)
  .route('/', oAuthHandler)
  .route('/', organisationQuotasHandler)
  .route('/', policiesHandler)
  .route('/', hotReloadHandler)
  .route('/', batchRequestsHandler)
  .route('/', schemaHandler)

export default app
