import { OpenAPIHono } from '@hono/zod-openapi'
import {
  consentFlowHandler,
  dataFlowHandler,
  gatewayHandler,
  identificationHandler,
  monitoringHandler,
  subscriptionsHandler,
  userAuthHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', gatewayHandler)
  .route('/', consentFlowHandler)
  .route('/', dataFlowHandler)
  .route('/', monitoringHandler)
  .route('/', identificationHandler)
  .route('/', subscriptionsHandler)
  .route('/', userAuthHandler)

export default app
