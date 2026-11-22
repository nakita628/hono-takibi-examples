import { OpenAPIHono } from '@hono/zod-openapi'
import {
  consentHandler,
  dataFlowHandler,
  discoveryHandler,
  identificationHandler,
  linkHandler,
  monitoringHandler,
  profileHandler,
  subscriptionsHandler,
  userAuthHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', discoveryHandler)
  .route('/', consentHandler)
  .route('/', dataFlowHandler)
  .route('/', monitoringHandler)
  .route('/', linkHandler)
  .route('/', identificationHandler)
  .route('/', profileHandler)
  .route('/', subscriptionsHandler)
  .route('/', userAuthHandler)

export default app
