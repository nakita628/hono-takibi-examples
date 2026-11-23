import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  articleHandler,
  latestpostsHandler,
  listHandler,
  publicationHandler,
  relatedTagsHandler,
  searchHandler,
  topfeedsHandler,
  topWriterHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', articleHandler)
  .route('/', latestpostsHandler)
  .route('/', listHandler)
  .route('/', publicationHandler)
  .route('/', relatedTagsHandler)
  .route('/', searchHandler)
  .route('/', topWriterHandler)
  .route('/', topfeedsHandler)
  .route('/', userHandler)

export default app
