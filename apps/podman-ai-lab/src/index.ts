import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chatHandler,
  generateHandler,
  modelsHandler,
  openaiHandler,
  serverHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', serverHandler)
  .route('/', modelsHandler)
  .route('/', generateHandler)
  .route('/', chatHandler)
  .route('/', openaiHandler)

export default app
