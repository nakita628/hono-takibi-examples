import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  defaultSupportedIdpsHandler,
  projectsHandler,
  v2Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', defaultSupportedIdpsHandler)
  .route('/', v2Handler)
  .route('/', projectsHandler)

export default app
