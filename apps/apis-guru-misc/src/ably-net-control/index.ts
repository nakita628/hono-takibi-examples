import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsHandler,
  keysHandler,
  namespacesHandler,
  queuesHandler,
  rulesHandler,
  tokensHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', keysHandler)
  .route('/', namespacesHandler)
  .route('/', queuesHandler)
  .route('/', rulesHandler)
  .route('/', tokensHandler)

export default app
