import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountAccessHandler,
  accountsHandler,
  balancesHandler,
  beneficiariesHandler,
  directDebitsHandler,
  offersHandler,
  partiesHandler,
  productsHandler,
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
  .route('/', directDebitsHandler)
  .route('/', offersHandler)
  .route('/', partiesHandler)
  .route('/', productsHandler)
  .route('/', scheduledPaymentsHandler)
  .route('/', standingOrdersHandler)
  .route('/', statementsHandler)
  .route('/', transactionsHandler)

export default app
