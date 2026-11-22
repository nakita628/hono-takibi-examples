import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiSpecificationHandler,
  categoriesHandler,
  changelogHandler,
  customPagesHandler,
  docsHandler,
  errorsHandler,
  projectsHandler,
  swaggerHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectsHandler)
  .route('/', apiSpecificationHandler)
  .route('/', categoriesHandler)
  .route('/', changelogHandler)
  .route('/', customPagesHandler)
  .route('/', docsHandler)
  .route('/', errorsHandler)
  .route('/', swaggerHandler)
  .route('/', versionHandler)

export default app
