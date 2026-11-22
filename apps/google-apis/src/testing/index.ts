import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationDetailServiceHandler,
  projectsHandler,
  testEnvironmentCatalogHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationDetailServiceHandler)
  .route('/', projectsHandler)
  .route('/', testEnvironmentCatalogHandler)

export default app
