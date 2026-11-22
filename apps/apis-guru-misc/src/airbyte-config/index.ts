import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attemptHandler,
  connectionHandler,
  destinationDefinitionHandler,
  destinationDefinitionSpecificationHandler,
  destinationHandler,
  destinationOauthHandler,
  healthHandler,
  jobsHandler,
  logsHandler,
  notificationsHandler,
  openapiHandler,
  operationHandler,
  schedulerHandler,
  sourceDefinitionHandler,
  sourceDefinitionSpecificationHandler,
  sourceHandler,
  sourceOauthHandler,
  stateHandler,
  webBackendHandler,
  workspaceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attemptHandler)
  .route('/', connectionHandler)
  .route('/', destinationDefinitionSpecificationHandler)
  .route('/', destinationDefinitionHandler)
  .route('/', destinationOauthHandler)
  .route('/', destinationHandler)
  .route('/', healthHandler)
  .route('/', jobsHandler)
  .route('/', logsHandler)
  .route('/', notificationsHandler)
  .route('/', openapiHandler)
  .route('/', operationHandler)
  .route('/', schedulerHandler)
  .route('/', sourceDefinitionSpecificationHandler)
  .route('/', sourceDefinitionHandler)
  .route('/', sourceOauthHandler)
  .route('/', sourceHandler)
  .route('/', stateHandler)
  .route('/', webBackendHandler)
  .route('/', workspaceHandler)

export default app
