import { OpenAPIHono } from '@hono/zod-openapi'
import {
  consentFlowHandler,
  dataFlowHandler,
  dataTransferHandler,
  discoveryHandler,
  gatewayHandler,
  linkHandler,
  monitoringHandler,
  patientNotificationHandler,
  profileHandler,
  userAuthHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', gatewayHandler)
  .route('/', discoveryHandler)
  .route('/', consentFlowHandler)
  .route('/', dataFlowHandler)
  .route('/', dataTransferHandler)
  .route('/', monitoringHandler)
  .route('/', linkHandler)
  .route('/', profileHandler)
  .route('/', patientNotificationHandler)
  .route('/', userAuthHandler)

export default app
