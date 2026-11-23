import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  bouncesHandler,
  campaignsHandler,
  configHandler,
  dashboardHandler,
  healthHandler,
  importHandler,
  langHandler,
  listsHandler,
  logsHandler,
  maintenanceHandler,
  mediaHandler,
  publicHandler,
  settingsHandler,
  subscribersHandler,
  templatesHandler,
  txHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', configHandler)
  .route('/', langHandler)
  .route('/', dashboardHandler)
  .route('/', settingsHandler)
  .route('/', adminHandler)
  .route('/', logsHandler)
  .route('/', subscribersHandler)
  .route('/', bouncesHandler)
  .route('/', listsHandler)
  .route('/', importHandler)
  .route('/', campaignsHandler)
  .route('/', mediaHandler)
  .route('/', templatesHandler)
  .route('/', txHandler)
  .route('/', maintenanceHandler)
  .route('/', publicHandler)

export default app
