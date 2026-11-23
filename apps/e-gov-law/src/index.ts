import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentHandler,
  keywordHandler,
  lawDataHandler,
  lawFileHandler,
  lawRevisionsHandler,
  lawsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', lawsHandler)
  .route('/', lawRevisionsHandler)
  .route('/', lawDataHandler)
  .route('/', attachmentHandler)
  .route('/', keywordHandler)
  .route('/', lawFileHandler)

export default app
