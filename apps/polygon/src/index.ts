import { OpenAPIHono } from '@hono/zod-openapi'
import {
  benzingaHandler,
  consumerSpendingHandler,
  cryptoHandler,
  etfGlobalHandler,
  fedHandler,
  forexHandler,
  futuresHandler,
  optionsHandler,
  stocksHandler,
  tmxHandler,
  v1Handler,
  v2Handler,
  v3Handler,
  vXHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', benzingaHandler)
  .route('/', consumerSpendingHandler)
  .route('/', cryptoHandler)
  .route('/', etfGlobalHandler)
  .route('/', fedHandler)
  .route('/', forexHandler)
  .route('/', futuresHandler)
  .route('/', optionsHandler)
  .route('/', stocksHandler)
  .route('/', tmxHandler)
  .route('/', v1Handler)
  .route('/', v2Handler)
  .route('/', v3Handler)
  .route('/', vXHandler)

export default app
