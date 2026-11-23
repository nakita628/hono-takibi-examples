import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  apiSpecificationHandler,
  categoriesHandler,
  changelogsHandler,
  custompagesHandler,
  docsHandler,
  errorsHandler,
  swaggerHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', apiSpecificationHandler)
  .route('/', categoriesHandler)
  .route('/', changelogsHandler)
  .route('/', custompagesHandler)
  .route('/', docsHandler)
  .route('/', errorsHandler)
  .route('/', swaggerHandler)
  .route('/', versionHandler)

export default app
