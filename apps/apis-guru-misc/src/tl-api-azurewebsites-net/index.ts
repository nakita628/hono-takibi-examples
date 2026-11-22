import { OpenAPIHono } from '@hono/zod-openapi'
import {
  articleHandler,
  authHandler,
  gymHandler,
  membershipHandler,
  packageHandler,
  statusHandler,
  testHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', articleHandler)
  .route('/', authHandler)
  .route('/', gymHandler)
  .route('/', membershipHandler)
  .route('/', packageHandler)
  .route('/', statusHandler)
  .route('/', testHandler)
  .route('/', userHandler)

export default app
