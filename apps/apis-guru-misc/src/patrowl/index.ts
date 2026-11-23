import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  cleanHandler,
  getfindingsHandler,
  infoHandler,
  livenessHandler,
  readinessHandler,
  reloadconfigHandler,
  startscanHandler,
  statusHandler,
  stopHandler,
  stopscansHandler,
  testHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', cleanHandler)
  .route('/', getfindingsHandler)
  .route('/', infoHandler)
  .route('/', livenessHandler)
  .route('/', readinessHandler)
  .route('/', reloadconfigHandler)
  .route('/', startscanHandler)
  .route('/', statusHandler)
  .route('/', stopHandler)
  .route('/', stopscansHandler)
  .route('/', testHandler)

export default app
