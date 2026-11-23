import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentHandler,
  answerHandler,
  batchesHandler,
  contentsHandler,
  findSimilarHandler,
  monitorsHandler,
  searchHandler,
  v0Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', searchHandler)
  .route('/', contentsHandler)
  .route('/', answerHandler)
  .route('/', findSimilarHandler)
  .route('/', monitorsHandler)
  .route('/', agentHandler)
  .route('/', batchesHandler)
  .route('/', v0Handler)

export default app
