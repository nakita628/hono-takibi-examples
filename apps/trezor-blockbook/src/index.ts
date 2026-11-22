import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  blocksHandler,
  contractsHandler,
  feesHandler,
  fiatHandler,
  legacyHandler,
  statusHandler,
  transactionsHandler,
  webSocketHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', statusHandler)
  .route('/', blocksHandler)
  .route('/', transactionsHandler)
  .route('/', accountsHandler)
  .route('/', contractsHandler)
  .route('/', feesHandler)
  .route('/', fiatHandler)
  .route('/', legacyHandler)
  .route('/', webSocketHandler)

export default app
