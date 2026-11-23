import { OpenAPIHono } from '@hono/zod-openapi'
import {
  reportHandler,
  settingsHandler,
  subscriptionsGroupHandler,
  subscriptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', reportHandler)
  .route('/', settingsHandler)
  .route('/', subscriptionsHandler)
  .route('/', subscriptionsGroupHandler)

export default app
