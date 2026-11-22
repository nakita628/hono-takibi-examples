import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  attachmentsHandler,
  budgetingHandler,
  categoriesHandler,
  categoryRulesHandler,
  currenciesHandler,
  eventsHandler,
  institutionsHandler,
  labelsHandler,
  savedSearchesHandler,
  timeZonesHandler,
  transactionAccountsHandler,
  transactionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', transactionsHandler)
  .route('/', attachmentsHandler)
  .route('/', categoriesHandler)
  .route('/', categoryRulesHandler)
  .route('/', currenciesHandler)
  .route('/', eventsHandler)
  .route('/', institutionsHandler)
  .route('/', usersHandler)
  .route('/', timeZonesHandler)
  .route('/', transactionAccountsHandler)
  .route('/', budgetingHandler)
  .route('/', labelsHandler)
  .route('/', savedSearchesHandler)

export default app
