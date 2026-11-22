import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  appHandler,
  authHandler,
  cameraHandler,
  chatHandler,
  classificationHandler,
  eventsHandler,
  exportHandler,
  hardwareHandler,
  mediaHandler,
  motionSearchHandler,
  noticesHandler,
  notificationsHandler,
  previewHandler,
  recordingsHandler,
  reviewHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', analyticsHandler)
  .route('/', authHandler)
  .route('/', cameraHandler)
  .route('/', chatHandler)
  .route('/', classificationHandler)
  .route('/', reviewHandler)
  .route('/', appHandler)
  .route('/', previewHandler)
  .route('/', notificationsHandler)
  .route('/', exportHandler)
  .route('/', hardwareHandler)
  .route('/', noticesHandler)
  .route('/', eventsHandler)
  .route('/', mediaHandler)
  .route('/', motionSearchHandler)
  .route('/', recordingsHandler)

export default app
