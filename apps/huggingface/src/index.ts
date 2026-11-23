import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  bucketsHandler,
  containersHandler,
  datasetsHandler,
  namespaceHandler,
  oauthHandler,
  spacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', oauthHandler)
  .route('/', spacesHandler)
  .route('/', datasetsHandler)
  .route('/', namespaceHandler)
  .route('/', bucketsHandler)
  .route('/', containersHandler)

export default app
