import { OpenAPIHono } from '@hono/zod-openapi'
import {
  fetchHandler,
  parseHandler,
  serpHandler,
  urlToPdfHandler,
  urlToScreenshotHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', urlToPdfHandler)
  .route('/', urlToScreenshotHandler)
  .route('/', fetchHandler)
  .route('/', parseHandler)
  .route('/', serpHandler)

export default app
