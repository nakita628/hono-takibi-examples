import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aclHandler,
  allocationHandler,
  allocationsHandler,
  deploymentHandler,
  deploymentsHandler,
  evaluationHandler,
  evaluationsHandler,
  jobHandler,
  jobsHandler,
  metricsHandler,
  namespaceHandler,
  namespacesHandler,
  nodeHandler,
  nodesHandler,
  operatorHandler,
  pluginHandler,
  pluginsHandler,
  quotaHandler,
  quotasHandler,
  regionsHandler,
  scalingHandler,
  searchHandler,
  statusHandler,
  systemHandler,
  validateHandler,
  varHandler,
  varsHandler,
  volumeHandler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aclHandler)
  .route('/', allocationHandler)
  .route('/', allocationsHandler)
  .route('/', deploymentHandler)
  .route('/', deploymentsHandler)
  .route('/', evaluationHandler)
  .route('/', evaluationsHandler)
  .route('/', jobHandler)
  .route('/', jobsHandler)
  .route('/', metricsHandler)
  .route('/', namespaceHandler)
  .route('/', namespacesHandler)
  .route('/', nodeHandler)
  .route('/', nodesHandler)
  .route('/', operatorHandler)
  .route('/', pluginHandler)
  .route('/', pluginsHandler)
  .route('/', quotaHandler)
  .route('/', quotasHandler)
  .route('/', regionsHandler)
  .route('/', scalingHandler)
  .route('/', searchHandler)
  .route('/', statusHandler)
  .route('/', systemHandler)
  .route('/', validateHandler)
  .route('/', varHandler)
  .route('/', varsHandler)
  .route('/', volumeHandler)
  .route('/', volumesHandler)

export default app
