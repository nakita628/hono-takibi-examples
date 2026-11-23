import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  arizePhoenixVersionHandler,
  authHandler,
  healthzHandler,
  oauth2Handler,
  readyzHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', authHandler)
  .route('/', oauth2Handler)
  .route('/', agentsHandler)
  .route('/', arizePhoenixVersionHandler)
  .route('/', healthzHandler)
  .route('/', readyzHandler)

export default app
