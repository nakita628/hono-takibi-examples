import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aclHandler,
  allocationsHandler,
  deploymentsHandler,
  enterpriseHandler,
  evaluationsHandler,
  jobsHandler,
  metricsHandler,
  namespacesHandler,
  nodesHandler,
  operatorHandler,
  pluginsHandler,
  regionsHandler,
  scalingHandler,
  searchHandler,
  statusHandler,
  systemHandler,
  variablesHandler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aclHandler)
  .route('/', allocationsHandler)
  .route('/', deploymentsHandler)
  .route('/', evaluationsHandler)
  .route('/', jobsHandler)
  .route('/', metricsHandler)
  .route('/', namespacesHandler)
  .route('/', nodesHandler)
  .route('/', operatorHandler)
  .route('/', pluginsHandler)
  .route('/', enterpriseHandler)
  .route('/', regionsHandler)
  .route('/', scalingHandler)
  .route('/', searchHandler)
  .route('/', statusHandler)
  .route('/', systemHandler)
  .route('/', variablesHandler)
  .route('/', volumesHandler)

export default app
