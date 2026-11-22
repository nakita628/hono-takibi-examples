import { OpenAPIHono } from '@hono/zod-openapi'
import {
  backupRunsHandler,
  connectHandler,
  databasesHandler,
  flagsHandler,
  instancesHandler,
  operationsHandler,
  projectsHandler,
  sslCertsHandler,
  tiersHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', flagsHandler)
  .route('/', instancesHandler)
  .route('/', backupRunsHandler)
  .route('/', connectHandler)
  .route('/', sslCertsHandler)
  .route('/', databasesHandler)
  .route('/', projectsHandler)
  .route('/', usersHandler)
  .route('/', operationsHandler)
  .route('/', tiersHandler)

export default app
