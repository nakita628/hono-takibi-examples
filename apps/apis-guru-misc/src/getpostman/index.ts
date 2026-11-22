import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  collectionsHandler,
  environmentsHandler,
  importHandler,
  mocksHandler,
  monitorsHandler,
  userHandler,
  webhooksHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', collectionsHandler)
  .route('/', environmentsHandler)
  .route('/', importHandler)
  .route('/', userHandler)
  .route('/', mocksHandler)
  .route('/', monitorsHandler)
  .route('/', webhooksHandler)
  .route('/', workspacesHandler)

export default app
