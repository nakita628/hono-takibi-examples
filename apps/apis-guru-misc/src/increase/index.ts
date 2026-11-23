import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountNumbersHandler,
  accountsHandler,
  accountStatementsHandler,
  accountTransfersHandler,
  achPrenotificationsHandler,
  achTransfersHandler,
  cardDisputesHandler,
  cardProfilesHandler,
  cardsHandler,
  checkDepositsHandler,
  checkTransfersHandler,
  declinedTransactionsHandler,
  digitalWalletTokensHandler,
  documentsHandler,
  entitiesHandler,
  eventsHandler,
  eventSubscriptionsHandler,
  externalAccountsHandler,
  filesHandler,
  groupsHandler,
  inboundAchTransferReturnsHandler,
  inboundWireDrawdownRequestsHandler,
  limitsHandler,
  oauthConnectionsHandler,
  pendingTransactionsHandler,
  realTimeDecisionsHandler,
  routingNumbersHandler,
  simulationsHandler,
  transactionsHandler,
  wireDrawdownRequestsHandler,
  wireTransfersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountNumbersHandler)
  .route('/', accountStatementsHandler)
  .route('/', accountTransfersHandler)
  .route('/', accountsHandler)
  .route('/', achPrenotificationsHandler)
  .route('/', achTransfersHandler)
  .route('/', cardDisputesHandler)
  .route('/', cardProfilesHandler)
  .route('/', cardsHandler)
  .route('/', checkDepositsHandler)
  .route('/', checkTransfersHandler)
  .route('/', declinedTransactionsHandler)
  .route('/', digitalWalletTokensHandler)
  .route('/', documentsHandler)
  .route('/', entitiesHandler)
  .route('/', eventSubscriptionsHandler)
  .route('/', eventsHandler)
  .route('/', externalAccountsHandler)
  .route('/', filesHandler)
  .route('/', groupsHandler)
  .route('/', inboundAchTransferReturnsHandler)
  .route('/', inboundWireDrawdownRequestsHandler)
  .route('/', limitsHandler)
  .route('/', oauthConnectionsHandler)
  .route('/', pendingTransactionsHandler)
  .route('/', realTimeDecisionsHandler)
  .route('/', routingNumbersHandler)
  .route('/', simulationsHandler)
  .route('/', transactionsHandler)
  .route('/', wireDrawdownRequestsHandler)
  .route('/', wireTransfersHandler)

export default app
