import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chcerHandler,
  dncerHandler,
  dpcerHandler,
  fslcsHandler,
  grredHandler,
  incerHandler,
  isoalHandler,
  lvcerHandler,
  malcsHandler,
  mpkbyHandler,
  obcerHandler,
  ritinHandler,
  rmcerHandler,
  rscerHandler,
  shcerHandler,
  smcerHandler,
  sslcsHandler,
  vrwmiHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chcerHandler)
  .route('/', dncerHandler)
  .route('/', dpcerHandler)
  .route('/', fslcsHandler)
  .route('/', grredHandler)
  .route('/', incerHandler)
  .route('/', isoalHandler)
  .route('/', lvcerHandler)
  .route('/', malcsHandler)
  .route('/', mpkbyHandler)
  .route('/', obcerHandler)
  .route('/', ritinHandler)
  .route('/', rmcerHandler)
  .route('/', rscerHandler)
  .route('/', shcerHandler)
  .route('/', smcerHandler)
  .route('/', sslcsHandler)
  .route('/', vrwmiHandler)

export default app
