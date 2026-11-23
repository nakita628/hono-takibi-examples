import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agcerHandler,
  bacerHandler,
  bhcerHandler,
  chcerHandler,
  dccerHandler,
  ffcerHandler,
  incerHandler,
  lhcerHandler,
  mncerHandler,
  obcerHandler,
  psprtHandler,
  racerHandler,
  rmcerHandler,
  shcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agcerHandler)
  .route('/', bacerHandler)
  .route('/', bhcerHandler)
  .route('/', chcerHandler)
  .route('/', dccerHandler)
  .route('/', ffcerHandler)
  .route('/', incerHandler)
  .route('/', lhcerHandler)
  .route('/', mncerHandler)
  .route('/', obcerHandler)
  .route('/', psprtHandler)
  .route('/', racerHandler)
  .route('/', rmcerHandler)
  .route('/', shcerHandler)

export default app
