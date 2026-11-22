import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountingHandler,
  accountsHandler,
  cardInvitationsHandler,
  cardsHandler,
  counterpartiesHandler,
  expensesHandler,
  foreignExchangeHandler,
  paymentDraftsHandler,
  payoutLinksHandler,
  simulationsHandler,
  teamsHandler,
  transactionsHandler,
  transfersHandler,
  webhooksV1DeprecatedHandler,
  webhooksV2Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountingHandler)
  .route('/', counterpartiesHandler)
  .route('/', accountsHandler)
  .route('/', cardInvitationsHandler)
  .route('/', cardsHandler)
  .route('/', foreignExchangeHandler)
  .route('/', expensesHandler)
  .route('/', paymentDraftsHandler)
  .route('/', payoutLinksHandler)
  .route('/', simulationsHandler)
  .route('/', teamsHandler)
  .route('/', transactionsHandler)
  .route('/', transfersHandler)
  .route('/', webhooksV1DeprecatedHandler)
  .route('/', webhooksV2Handler)

export default app
