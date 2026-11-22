import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cmFacingHandler,
  consentFlowHandler,
  dataFlowHandler,
  discoveryHandler,
  hipFacingHandler,
  identificationHandler,
  linkHandler,
  monitoringHandler,
  profileHandler,
  servicesHandler,
  sessionsHandler,
  subscriptionsHandler,
  userAuthHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', sessionsHandler)
  .route('/', discoveryHandler)
  .route('/', consentFlowHandler)
  .route('/', dataFlowHandler)
  .route('/', monitoringHandler)
  .route('/', servicesHandler)
  .route('/', linkHandler)
  .route('/', identificationHandler)
  .route('/', profileHandler)
  .route('/', hipFacingHandler)
  .route('/', cmFacingHandler)
  .route('/', subscriptionsHandler)
  .route('/', userAuthHandler)

export default app
