import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  idHandler,
  notificationsHandler,
  settingsHandler,
  statusHandler,
  topicsHandler,
  updateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', notificationsHandler)
  .route('/', updateHandler)
  .route('/', statusHandler)
  .route('/', settingsHandler)
  .route('/', topicsHandler)
  .route('/', idHandler)

export default app
