import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyzeHandler,
  areaOfInterestHandler,
  describeHandler,
  detectHandler,
  generateThumbnailHandler,
  modelsHandler,
  ocrHandler,
  tagHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', analyzeHandler)
  .route('/', areaOfInterestHandler)
  .route('/', describeHandler)
  .route('/', detectHandler)
  .route('/', generateThumbnailHandler)
  .route('/', modelsHandler)
  .route('/', ocrHandler)
  .route('/', tagHandler)

export default app
