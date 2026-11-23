import { OpenAPIHono } from '@hono/zod-openapi'
import {
  lolHandler,
  lorHandler,
  riftboundHandler,
  riotHandler,
  tftHandler,
  valHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', riotHandler)
  .route('/', lolHandler)
  .route('/', lorHandler)
  .route('/', riftboundHandler)
  .route('/', tftHandler)
  .route('/', valHandler)

export default app
