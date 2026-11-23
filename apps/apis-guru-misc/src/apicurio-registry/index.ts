import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  groupsHandler,
  idsHandler,
  searchHandler,
  systemHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', groupsHandler)
  .route('/', idsHandler)
  .route('/', searchHandler)
  .route('/', systemHandler)
  .route('/', usersHandler)

export default app
