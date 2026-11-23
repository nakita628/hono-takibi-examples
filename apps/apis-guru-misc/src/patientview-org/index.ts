import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler, patientHandler, patientmanagementHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', patientHandler)
  .route('/', patientmanagementHandler)
  .route('/', userHandler)

export default app
