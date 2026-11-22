import { OpenAPIHono } from '@hono/zod-openapi'
import {
  reportHandler,
  settingsHandler,
  subscriptionGroupHandler,
  subscriptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', reportHandler)
  .route('/', settingsHandler)
  .route('/', subscriptionsHandler)
  .route('/', subscriptionGroupHandler)

export default app
