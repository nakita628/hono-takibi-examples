import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cyclesHandler,
  plansHandler,
  reportsHandler,
  settingsHandler,
  subscriptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cyclesHandler)
  .route('/', subscriptionsHandler)
  .route('/', plansHandler)
  .route('/', reportsHandler)
  .route('/', settingsHandler)

export default app
