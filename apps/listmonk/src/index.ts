import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  bouncesHandler,
  campaignsHandler,
  importHandler,
  listsHandler,
  logsHandler,
  maintenanceHandler,
  mediaHandler,
  miscellaneousHandler,
  publicHandler,
  settingsHandler,
  subscribersHandler,
  templatesHandler,
  transactionalHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', miscellaneousHandler)
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
  .route('/', transactionalHandler)
  .route('/', maintenanceHandler)
  .route('/', publicHandler)

export default app
