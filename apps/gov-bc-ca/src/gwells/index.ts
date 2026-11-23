import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aquiferCodesHandler,
  aquifersHandler,
  citiesHandler,
  configHandler,
  drillersHandler,
  keycloakHandler,
  submissionsHandler,
  surveysHandler,
  wellsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aquiferCodesHandler)
  .route('/', aquifersHandler)
  .route('/', citiesHandler)
  .route('/', configHandler)
  .route('/', drillersHandler)
  .route('/', keycloakHandler)
  .route('/', submissionsHandler)
  .route('/', surveysHandler)
  .route('/', wellsHandler)

export default app
