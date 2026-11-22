import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionHandler,
  batchHandler,
  boardHandler,
  cardHandler,
  checklistHandler,
  labelHandler,
  listHandler,
  memberHandler,
  notificationHandler,
  organizationHandler,
  searchHandler,
  sessionHandler,
  tokenHandler,
  typeHandler,
  webhookHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionHandler)
  .route('/', batchHandler)
  .route('/', boardHandler)
  .route('/', cardHandler)
  .route('/', checklistHandler)
  .route('/', labelHandler)
  .route('/', listHandler)
  .route('/', memberHandler)
  .route('/', notificationHandler)
  .route('/', organizationHandler)
  .route('/', searchHandler)
  .route('/', sessionHandler)
  .route('/', tokenHandler)
  .route('/', typeHandler)
  .route('/', webhookHandler)

export default app
