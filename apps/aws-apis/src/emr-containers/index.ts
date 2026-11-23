import { OpenAPIHono } from '@hono/zod-openapi'
import { jobtemplatesHandler, tagsHandler, virtualclustersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', virtualclustersHandler)
  .route('/', jobtemplatesHandler)
  .route('/', tagsHandler)

export default app
