import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  classifyHandler,
  embeddingsAudioHandler,
  embeddingsHandler,
  embeddingsImageHandler,
  healthHandler,
  metricsHandler,
  modelsHandler,
  rerankHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', __rootHandler)
  .route('/', modelsHandler)
  .route('/', embeddingsHandler)
  .route('/', rerankHandler)
  .route('/', classifyHandler)
  .route('/', embeddingsImageHandler)
  .route('/', embeddingsAudioHandler)
  .route('/', metricsHandler)

export default app
