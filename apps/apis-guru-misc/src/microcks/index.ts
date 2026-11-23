import { OpenAPIHono } from '@hono/zod-openapi'
import {
  artifactHandler,
  exportHandler,
  featuresHandler,
  importHandler,
  jobsHandler,
  keycloakHandler,
  metricsHandler,
  resourcesHandler,
  secretsHandler,
  servicesHandler,
  testsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', artifactHandler)
  .route('/', exportHandler)
  .route('/', featuresHandler)
  .route('/', importHandler)
  .route('/', jobsHandler)
  .route('/', keycloakHandler)
  .route('/', metricsHandler)
  .route('/', resourcesHandler)
  .route('/', secretsHandler)
  .route('/', servicesHandler)
  .route('/', testsHandler)

export default app
