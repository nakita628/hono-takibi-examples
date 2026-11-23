import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  apiRegistryHandler,
  apiSpecificationHandler,
  applyHandler,
  categoriesHandler,
  changelogsHandler,
  custompagesHandler,
  docsHandler,
  schemaHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiRegistryHandler)
  .route('/', apiSpecificationHandler)
  .route('/', applyHandler)
  .route('/', categoriesHandler)
  .route('/', changelogsHandler)
  .route('/', custompagesHandler)
  .route('/', docsHandler)
  .route('/', __rootHandler)
  .route('/', schemaHandler)
  .route('/', versionHandler)

export default app
