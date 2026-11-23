import { OpenAPIHono } from '@hono/zod-openapi'
import {
  brlcsHandler,
  dpcerHandler,
  fmcerHandler,
  incerHandler,
  lccepHandler,
  ndcerHandler,
  obcerHandler,
  rmcerHandler,
  rscerHandler,
  rucerHandler,
  sicrdHandler,
  vlcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', brlcsHandler)
  .route('/', dpcerHandler)
  .route('/', fmcerHandler)
  .route('/', incerHandler)
  .route('/', lccepHandler)
  .route('/', ndcerHandler)
  .route('/', obcerHandler)
  .route('/', rmcerHandler)
  .route('/', rscerHandler)
  .route('/', rucerHandler)
  .route('/', sicrdHandler)
  .route('/', vlcerHandler)

export default app
