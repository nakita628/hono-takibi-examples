import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chcerHandler,
  dmcerHandler,
  dpcerHandler,
  incerHandler,
  rscerHandler,
  shcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chcerHandler)
  .route('/', dmcerHandler)
  .route('/', dpcerHandler)
  .route('/', incerHandler)
  .route('/', rscerHandler)
  .route('/', shcerHandler)

export default app
