import { OpenAPIHono } from '@hono/zod-openapi'
import {
  absencesHandler,
  attendancesHandler,
  customReportsHandler,
  documentsHandler,
  employeesHandler,
  projectsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', employeesHandler)
  .route('/', attendancesHandler)
  .route('/', projectsHandler)
  .route('/', absencesHandler)
  .route('/', documentsHandler)
  .route('/', customReportsHandler)

export default app
