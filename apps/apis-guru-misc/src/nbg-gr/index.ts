import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountAccessHandler,
  accountsHandler,
  balancesHandler,
  beneficiariesHandler,
  partiesHandler,
  sandboxHandler,
  scheduledPaymentsHandler,
  standingOrdersHandler,
  statementsHandler,
  transactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountAccessHandler)
  .route('/', accountsHandler)
  .route('/', balancesHandler)
  .route('/', beneficiariesHandler)
  .route('/', partiesHandler)
  .route('/', scheduledPaymentsHandler)
  .route('/', standingOrdersHandler)
  .route('/', statementsHandler)
  .route('/', transactionsHandler)
  .route('/', sandboxHandler)

export default app
