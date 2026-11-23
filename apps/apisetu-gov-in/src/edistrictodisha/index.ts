import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ctcerHandler,
  ewcerHandler,
  lhcerHandler,
  obcerHandler,
  ror1bHandler,
  slcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ctcerHandler)
  .route('/', ewcerHandler)
  .route('/', lhcerHandler)
  .route('/', obcerHandler)
  .route('/', ror1bHandler)
  .route('/', slcerHandler)

export default app
