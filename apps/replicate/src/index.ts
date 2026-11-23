import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  collectionsHandler,
  deploymentsHandler,
  filesHandler,
  hardwareHandler,
  modelsHandler,
  predictionsHandler,
  searchHandler,
  trainingsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', collectionsHandler)
  .route('/', deploymentsHandler)
  .route('/', filesHandler)
  .route('/', hardwareHandler)
  .route('/', modelsHandler)
  .route('/', predictionsHandler)
  .route('/', searchHandler)
  .route('/', trainingsHandler)
  .route('/', webhooksHandler)

export default app
