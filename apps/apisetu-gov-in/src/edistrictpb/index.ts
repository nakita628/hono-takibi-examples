import { OpenAPIHono } from '@hono/zod-openapi'
import {
  btcerHandler,
  dtcerHandler,
  ewcerHandler,
  obcerHandler,
  racerHandler,
  rscerHandler,
  shcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', btcerHandler)
  .route('/', dtcerHandler)
  .route('/', ewcerHandler)
  .route('/', obcerHandler)
  .route('/', racerHandler)
  .route('/', rscerHandler)
  .route('/', shcerHandler)

export default app
