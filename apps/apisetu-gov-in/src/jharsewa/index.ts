import { OpenAPIHono } from '@hono/zod-openapi'
import {
  btcerHandler,
  ctcerHandler,
  dtcerHandler,
  ewcerHandler,
  incerHandler,
  rmcerHandler,
  rscerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', btcerHandler)
  .route('/', ctcerHandler)
  .route('/', dtcerHandler)
  .route('/', ewcerHandler)
  .route('/', incerHandler)
  .route('/', rmcerHandler)
  .route('/', rscerHandler)

export default app
