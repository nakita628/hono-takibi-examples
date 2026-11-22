import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiRegistryHandler,
  apiSpecificationHandler,
  applyToReadMeHandler,
  categoriesHandler,
  changelogHandler,
  customPagesHandler,
  docsHandler,
  projectsHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiRegistryHandler)
  .route('/', apiSpecificationHandler)
  .route('/', applyToReadMeHandler)
  .route('/', categoriesHandler)
  .route('/', changelogHandler)
  .route('/', customPagesHandler)
  .route('/', docsHandler)
  .route('/', projectsHandler)
  .route('/', versionHandler)

export default app
