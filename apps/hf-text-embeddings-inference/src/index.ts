import { OpenAPIHono } from '@hono/zod-openapi'
import {
  decodeHandler,
  embedAllHandler,
  embedHandler,
  embedSparseHandler,
  healthHandler,
  infoHandler,
  metricsHandler,
  predictHandler,
  rerankHandler,
  similarityHandler,
  tokenizeHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', decodeHandler)
  .route('/', embedHandler)
  .route('/', embedAllHandler)
  .route('/', embedSparseHandler)
  .route('/', healthHandler)
  .route('/', infoHandler)
  .route('/', metricsHandler)
  .route('/', predictHandler)
  .route('/', rerankHandler)
  .route('/', similarityHandler)
  .route('/', tokenizeHandler)
  .route('/', v1Handler)

export default app
