import { OpenAPIHono } from '@hono/zod-openapi'
import { endpointHandler, suiteDefinitionsHandler, suiteRunsHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', suiteDefinitionsHandler)
  .route('/', endpointHandler)
  .route('/', suiteRunsHandler)
  .route('/', tagsHandler)

export default app
