import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  issueHandler,
  miscellaneousHandler,
  notificationHandler,
  organizationHandler,
  packageHandler,
  repositoryHandler,
  settingsHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', miscellaneousHandler)
  .route('/', notificationHandler)
  .route('/', organizationHandler)
  .route('/', packageHandler)
  .route('/', issueHandler)
  .route('/', repositoryHandler)
  .route('/', settingsHandler)
  .route('/', userHandler)

export default app
