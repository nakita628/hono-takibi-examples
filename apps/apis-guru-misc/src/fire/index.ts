import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  apiHandler,
  authenticationHandler,
  cardsHandler,
  directDebitsHandler,
  openBankingHandler,
  payeeBankAccountsHandler,
  paymentBatchesHandler,
  transactionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', transactionsHandler)
  .route('/', apiHandler)
  .route('/', authenticationHandler)
  .route('/', openBankingHandler)
  .route('/', paymentBatchesHandler)
  .route('/', cardsHandler)
  .route('/', directDebitsHandler)
  .route('/', payeeBankAccountsHandler)
  .route('/', usersHandler)

export default app
