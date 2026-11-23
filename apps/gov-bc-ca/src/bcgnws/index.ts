import { OpenAPIHono } from '@hono/zod-openapi'
import {
  featureCategoriesHandler,
  featureClassesHandler,
  featuresHandler,
  featureTypesHandler,
  nameAuthoritiesHandler,
  namesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', featureCategoriesHandler)
  .route('/', featureClassesHandler)
  .route('/', featureTypesHandler)
  .route('/', featuresHandler)
  .route('/', nameAuthoritiesHandler)
  .route('/', namesHandler)

export default app
