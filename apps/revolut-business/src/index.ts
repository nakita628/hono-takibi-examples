import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountingCategoriesHandler,
  accountNameValidationHandler,
  accountsHandler,
  cardInvitationsHandler,
  cardsHandler,
  counterpartiesHandler,
  counterpartyHandler,
  departmentsHandler,
  exchangeHandler,
  exchangeReasonsHandler,
  expensesHandler,
  labelGroupsHandler,
  payHandler,
  paymentDraftsHandler,
  payoutLinksHandler,
  rateHandler,
  rolesHandler,
  sandboxHandler,
  taxRatesHandler,
  teamMembersHandler,
  transactionHandler,
  transactionsHandler,
  transferHandler,
  transferReasonsHandler,
  webhookHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountingCategoriesHandler)
  .route('/', accountNameValidationHandler)
  .route('/', accountsHandler)
  .route('/', cardInvitationsHandler)
  .route('/', cardsHandler)
  .route('/', counterpartiesHandler)
  .route('/', counterpartyHandler)
  .route('/', rateHandler)
  .route('/', exchangeHandler)
  .route('/', exchangeReasonsHandler)
  .route('/', expensesHandler)
  .route('/', labelGroupsHandler)
  .route('/', paymentDraftsHandler)
  .route('/', payoutLinksHandler)
  .route('/', sandboxHandler)
  .route('/', taxRatesHandler)
  .route('/', teamMembersHandler)
  .route('/', rolesHandler)
  .route('/', departmentsHandler)
  .route('/', transactionsHandler)
  .route('/', transactionHandler)
  .route('/', payHandler)
  .route('/', transferHandler)
  .route('/', transferReasonsHandler)
  .route('/', webhookHandler)
  .route('/', webhooksHandler)

export default app
