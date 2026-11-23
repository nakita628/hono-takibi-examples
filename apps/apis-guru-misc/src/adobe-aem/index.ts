import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsHandler,
  binHandler,
  cqactionsHtmlHandler,
  crxHandler,
  etcHandler,
  intermediatePathHandler,
  libsHandler,
  pathHandler,
  systemHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cqactionsHtmlHandler)
  .route('/', appsHandler)
  .route('/', binHandler)
  .route('/', crxHandler)
  .route('/', etcHandler)
  .route('/', libsHandler)
  .route('/', systemHandler)
  .route('/', intermediatePathHandler)
  .route('/', pathHandler)

export default app
