import { OpenAPIHono } from '@hono/zod-openapi'
import {
  boundariesHandler,
  exportsHandler,
  farmOrganizationsHandler,
  fieldsHandler,
  layersHandler,
  operationsHandler,
  resourceOwnersHandler,
  uploadsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', boundariesHandler)
  .route('/', exportsHandler)
  .route('/', farmOrganizationsHandler)
  .route('/', fieldsHandler)
  .route('/', layersHandler)
  .route('/', operationsHandler)
  .route('/', resourceOwnersHandler)
  .route('/', uploadsHandler)

export default app
