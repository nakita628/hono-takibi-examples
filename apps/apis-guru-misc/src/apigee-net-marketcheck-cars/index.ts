import { OpenAPIHono } from '@hono/zod-openapi'
import {
  carHandler,
  clientHandler,
  crmCheckHandler,
  dealerHandler,
  dealersHandler,
  decodeHandler,
  historyHandler,
  imageHandler,
  listingHandler,
  mdsHandler,
  popularHandler,
  predictHandler,
  salesHandler,
  searchHandler,
  specsHandler,
  statsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', carHandler)
  .route('/', clientHandler)
  .route('/', crmCheckHandler)
  .route('/', dealerHandler)
  .route('/', dealersHandler)
  .route('/', decodeHandler)
  .route('/', historyHandler)
  .route('/', imageHandler)
  .route('/', listingHandler)
  .route('/', mdsHandler)
  .route('/', popularHandler)
  .route('/', predictHandler)
  .route('/', salesHandler)
  .route('/', searchHandler)
  .route('/', specsHandler)
  .route('/', statsHandler)

export default app
