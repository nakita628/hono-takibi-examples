import { OpenAPIHono } from '@hono/zod-openapi'
import {
  egcerHandler,
  ewcerHandler,
  incerHandler,
  lhcerHandler,
  obcerHandler,
  rscerHandler,
  shcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', egcerHandler)
  .route('/', ewcerHandler)
  .route('/', incerHandler)
  .route('/', lhcerHandler)
  .route('/', obcerHandler)
  .route('/', rscerHandler)
  .route('/', shcerHandler)

export default app
