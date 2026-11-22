import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ldapHandler,
  permissionsHandler,
  rolesHandler,
  samlHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', permissionsHandler)
  .route('/', rolesHandler)
  .route('/', usersHandler)
  .route('/', ldapHandler)
  .route('/', samlHandler)

export default app
