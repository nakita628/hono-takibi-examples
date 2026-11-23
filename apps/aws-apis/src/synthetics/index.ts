import { OpenAPIHono } from '@hono/zod-openapi'
import {
  canariesHandler,
  canaryHandler,
  groupHandler,
  groupsHandler,
  resourceHandler,
  runtimeVersionsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', groupHandler)
  .route('/', canaryHandler)
  .route('/', canariesHandler)
  .route('/', runtimeVersionsHandler)
  .route('/', resourceHandler)
  .route('/', groupsHandler)
  .route('/', tagsHandler)

export default app
