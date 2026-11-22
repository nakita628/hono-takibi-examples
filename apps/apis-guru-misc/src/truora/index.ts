import { OpenAPIHono } from '@hono/zod-openapi'
import {
  behaviorHandler,
  checksHandler,
  continuousHandler,
  customTypeHandler,
  hooksHandler,
  pdfHandler,
  reportsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', behaviorHandler)
  .route('/', checksHandler)
  .route('/', pdfHandler)
  .route('/', customTypeHandler)
  .route('/', continuousHandler)
  .route('/', hooksHandler)
  .route('/', reportsHandler)

export default app
