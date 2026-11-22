import { OpenAPIHono } from '@hono/zod-openapi'
import {
  datasetsHandler,
  jobsHandler,
  modelsHandler,
  projectsHandler,
  routinesHandler,
  rowAccessPoliciesHandler,
  tabledataHandler,
  tablesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectsHandler)
  .route('/', datasetsHandler)
  .route('/', modelsHandler)
  .route('/', routinesHandler)
  .route('/', tablesHandler)
  .route('/', tabledataHandler)
  .route('/', rowAccessPoliciesHandler)
  .route('/', jobsHandler)

export default app
