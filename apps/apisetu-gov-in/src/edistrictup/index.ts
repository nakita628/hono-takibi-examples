import { OpenAPIHono } from '@hono/zod-openapi'
import {
  btcerHandler,
  ctcerHandler,
  dmcerHandler,
  dpicrHandler,
  dtcerHandler,
  incerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', btcerHandler)
  .route('/', ctcerHandler)
  .route('/', dmcerHandler)
  .route('/', dpicrHandler)
  .route('/', dtcerHandler)
  .route('/', incerHandler)

export default app
