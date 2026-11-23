import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountAccessConsentsHandler,
  accountsHandler,
  balancesHandler,
  beneficiariesHandler,
  directDebitsHandler,
  offersHandler,
  partyHandler,
  productsHandler,
  scheduledPaymentsHandler,
  standingOrdersHandler,
  statementsHandler,
  transactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountAccessConsentsHandler)
  .route('/', accountsHandler)
  .route('/', balancesHandler)
  .route('/', beneficiariesHandler)
  .route('/', directDebitsHandler)
  .route('/', offersHandler)
  .route('/', partyHandler)
  .route('/', productsHandler)
  .route('/', scheduledPaymentsHandler)
  .route('/', standingOrdersHandler)
  .route('/', statementsHandler)
  .route('/', transactionsHandler)

export default app
