import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentHandler,
  batchHandler,
  crawlHandler,
  extractHandler,
  feedbackHandler,
  interactHandler,
  mapHandler,
  monitorHandler,
  parseHandler,
  scrapeHandler,
  searchHandler,
  supportHandler,
  teamHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', monitorHandler)
  .route('/', scrapeHandler)
  .route('/', parseHandler)
  .route('/', batchHandler)
  .route('/', crawlHandler)
  .route('/', mapHandler)
  .route('/', extractHandler)
  .route('/', agentHandler)
  .route('/', teamHandler)
  .route('/', searchHandler)
  .route('/', interactHandler)
  .route('/', supportHandler)
  .route('/', feedbackHandler)

export default app
