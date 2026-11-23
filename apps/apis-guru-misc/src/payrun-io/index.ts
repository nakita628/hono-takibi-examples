import { OpenAPIHono } from '@hono/zod-openapi'
import {
  employerHandler,
  employersHandler,
  healthcheckHandler,
  jobsHandler,
  journalInstructionHandler,
  journalInstructionsHandler,
  permissionHandler,
  permissionsHandler,
  queryHandler,
  referenceDataHandler,
  reportHandler,
  reportsHandler,
  schemasHandler,
  secretHandler,
  secretsHandler,
  templateHandler,
  templatesHandler,
  transformHandler,
  transformsHandler,
  userHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', employerHandler)
  .route('/', employersHandler)
  .route('/', healthcheckHandler)
  .route('/', jobsHandler)
  .route('/', journalInstructionHandler)
  .route('/', journalInstructionsHandler)
  .route('/', permissionHandler)
  .route('/', permissionsHandler)
  .route('/', queryHandler)
  .route('/', referenceDataHandler)
  .route('/', reportHandler)
  .route('/', reportsHandler)
  .route('/', schemasHandler)
  .route('/', secretHandler)
  .route('/', secretsHandler)
  .route('/', templateHandler)
  .route('/', templatesHandler)
  .route('/', transformHandler)
  .route('/', transformsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)

export default app
