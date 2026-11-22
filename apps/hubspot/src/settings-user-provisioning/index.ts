import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, rolesHandler, seatsHandler, teamsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', rolesHandler)
  .route('/', seatsHandler)
  .route('/', teamsHandler)
  .route('/', usersHandler)

export default app
