import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  credentialsHandler,
  healthHandler,
  oauth2Handler,
  userinfoHandler,
  versionHandler,
  wellKnownHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', wellKnownHandler)
  .route('/', adminHandler)
  .route('/', credentialsHandler)
  .route('/', healthHandler)
  .route('/', oauth2Handler)
  .route('/', userinfoHandler)
  .route('/', versionHandler)

export default app
