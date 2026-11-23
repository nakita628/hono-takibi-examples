import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  attachmentsHandler,
  categoriesHandler,
  currenciesHandler,
  eventsHandler,
  institutionsHandler,
  meHandler,
  scenariosHandler,
  timeZonesHandler,
  transactionAccountsHandler,
  transactionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', attachmentsHandler)
  .route('/', categoriesHandler)
  .route('/', currenciesHandler)
  .route('/', eventsHandler)
  .route('/', institutionsHandler)
  .route('/', meHandler)
  .route('/', scenariosHandler)
  .route('/', timeZonesHandler)
  .route('/', transactionAccountsHandler)
  .route('/', transactionsHandler)
  .route('/', usersHandler)

export default app
