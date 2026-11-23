import { OpenAPIHono } from '@hono/zod-openapi'
import {
  detectHandler,
  frontendHandler,
  languagesHandler,
  suggestHandler,
  translateFileHandler,
  translateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', detectHandler)
  .route('/', frontendHandler)
  .route('/', languagesHandler)
  .route('/', suggestHandler)
  .route('/', translateHandler)
  .route('/', translateFileHandler)

export default app
