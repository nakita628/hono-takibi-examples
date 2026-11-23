import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyzeLocationHandler,
  entitiesHandler,
  entityFacetsHandler,
  locationsHandler,
  refreshHandler,
  validateEntityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', refreshHandler)
  .route('/', entitiesHandler)
  .route('/', entityFacetsHandler)
  .route('/', locationsHandler)
  .route('/', analyzeLocationHandler)
  .route('/', validateEntityHandler)

export default app
