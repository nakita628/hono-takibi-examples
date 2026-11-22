import { OpenAPIHono } from '@hono/zod-openapi'
import {
  audioTranscriptionsHandler,
  batchesHandler,
  connectorsHandler,
  datasetsHandler,
  embedJobsHandler,
  finetuningHandler,
  modelsHandler,
  v1Handler,
  v2Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', v2Handler)
  .route('/', audioTranscriptionsHandler)
  .route('/', batchesHandler)
  .route('/', embedJobsHandler)
  .route('/', datasetsHandler)
  .route('/', connectorsHandler)
  .route('/', modelsHandler)
  .route('/', finetuningHandler)

export default app
