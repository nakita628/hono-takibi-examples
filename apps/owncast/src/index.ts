import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  authHandler,
  chatHandler,
  configHandler,
  emojiHandler,
  federationHandler,
  followersHandler,
  integrationsHandler,
  metricsHandler,
  moderationHandler,
  notificationsHandler,
  pingHandler,
  remotefollowHandler,
  socialplatformsHandler,
  statusHandler,
  videoHandler,
  ypHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', statusHandler)
  .route('/', emojiHandler)
  .route('/', chatHandler)
  .route('/', configHandler)
  .route('/', ypHandler)
  .route('/', socialplatformsHandler)
  .route('/', videoHandler)
  .route('/', pingHandler)
  .route('/', remotefollowHandler)
  .route('/', followersHandler)
  .route('/', metricsHandler)
  .route('/', notificationsHandler)
  .route('/', adminHandler)
  .route('/', federationHandler)
  .route('/', integrationsHandler)
  .route('/', moderationHandler)
  .route('/', authHandler)

export default app
