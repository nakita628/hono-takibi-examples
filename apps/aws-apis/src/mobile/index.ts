import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bundlesHandler,
  exportsHandler,
  projectProjectIdHandler,
  projectsHandler,
  updateProjectIdHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectsHandler)
  .route('/', bundlesHandler)
  .route('/', projectProjectIdHandler)
  .route('/', exportsHandler)
  .route('/', updateProjectIdHandler)

export default app
