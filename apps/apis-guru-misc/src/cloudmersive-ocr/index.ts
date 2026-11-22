import { OpenAPIHono } from '@hono/zod-openapi'
import { imageOcrHandler, pdfOcrHandler, preprocessingHandler, receiptsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', imageOcrHandler)
  .route('/', pdfOcrHandler)
  .route('/', preprocessingHandler)
  .route('/', receiptsHandler)

export default app
