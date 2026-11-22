import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  apiHandler,
  appsHandler,
  oauthHandler,
  todoSecurityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', todoSecurityHandler)
  .route('/', accountsHandler)
  .route('/', appsHandler)
  .route('/', oauthHandler)

export default app
