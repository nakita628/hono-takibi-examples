import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  authHandler,
  generalHandler,
  oauthClientHandler,
  oauthServerHandler,
  samlHandler,
  ssoHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', oauthClientHandler)
  .route('/', userHandler)
  .route('/', ssoHandler)
  .route('/', samlHandler)
  .route('/', adminHandler)
  .route('/', oauthServerHandler)
  .route('/', generalHandler)

export default app
