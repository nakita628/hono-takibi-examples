import { OpenAPIHono } from '@hono/zod-openapi'
import {
  googleServiceAccountsHandler,
  projectsHandler,
  transferJobsHandler,
  transferOperationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', googleServiceAccountsHandler)
  .route('/', projectsHandler)
  .route('/', transferJobsHandler)
  .route('/', transferOperationsHandler)

export default app
