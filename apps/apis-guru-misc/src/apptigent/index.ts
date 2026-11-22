import { OpenAPIHono } from '@hono/zod-openapi'
import {
  collectionsHandler,
  dataHandler,
  dateTimeHandler,
  filesHandler,
  financeHandler,
  mathHandler,
  textHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionsHandler)
  .route('/', dataHandler)
  .route('/', mathHandler)
  .route('/', textHandler)
  .route('/', financeHandler)
  .route('/', filesHandler)
  .route('/', dateTimeHandler)

export default app
