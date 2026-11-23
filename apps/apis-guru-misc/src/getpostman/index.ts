import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apisHandler,
  collectionsHandler,
  environmentsHandler,
  importHandler,
  meHandler,
  mocksHandler,
  monitorsHandler,
  webhooksHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apisHandler)
  .route('/', collectionsHandler)
  .route('/', environmentsHandler)
  .route('/', importHandler)
  .route('/', meHandler)
  .route('/', mocksHandler)
  .route('/', monitorsHandler)
  .route('/', webhooksHandler)
  .route('/', workspacesHandler)

export default app
