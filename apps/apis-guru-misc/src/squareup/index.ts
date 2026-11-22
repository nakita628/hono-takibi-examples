import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applePayHandler,
  bankAccountsHandler,
  bookingsHandler,
  cardsHandler,
  cashDrawersHandler,
  catalogHandler,
  checkoutHandler,
  customerGroupsHandler,
  customerSegmentsHandler,
  customersHandler,
  devicesHandler,
  disputesHandler,
  employeesHandler,
  giftCardActivitiesHandler,
  giftCardsHandler,
  inventoryHandler,
  invoicesHandler,
  laborHandler,
  locationsHandler,
  loyaltyHandler,
  merchantsHandler,
  mobileAuthorizationHandler,
  oAuthHandler,
  ordersHandler,
  paymentsHandler,
  refundsHandler,
  sitesHandler,
  snippetsHandler,
  subscriptionsHandler,
  teamHandler,
  terminalHandler,
  transactionsHandler,
  v1EmployeesHandler,
  v1TransactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', mobileAuthorizationHandler)
  .route('/', oAuthHandler)
  .route('/', v1EmployeesHandler)
  .route('/', v1TransactionsHandler)
  .route('/', applePayHandler)
  .route('/', bankAccountsHandler)
  .route('/', bookingsHandler)
  .route('/', cardsHandler)
  .route('/', cashDrawersHandler)
  .route('/', catalogHandler)
  .route('/', customersHandler)
  .route('/', customerGroupsHandler)
  .route('/', customerSegmentsHandler)
  .route('/', devicesHandler)
  .route('/', disputesHandler)
  .route('/', employeesHandler)
  .route('/', giftCardsHandler)
  .route('/', giftCardActivitiesHandler)
  .route('/', inventoryHandler)
  .route('/', invoicesHandler)
  .route('/', laborHandler)
  .route('/', locationsHandler)
  .route('/', checkoutHandler)
  .route('/', transactionsHandler)
  .route('/', loyaltyHandler)
  .route('/', merchantsHandler)
  .route('/', ordersHandler)
  .route('/', paymentsHandler)
  .route('/', refundsHandler)
  .route('/', sitesHandler)
  .route('/', snippetsHandler)
  .route('/', subscriptionsHandler)
  .route('/', teamHandler)
  .route('/', terminalHandler)

export default app
