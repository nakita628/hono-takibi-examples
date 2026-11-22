import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountGroupsHandler,
  accountItemsHandler,
  approvalFlowRoutesHandler,
  approvalRequestsHandler,
  banksHandler,
  companiesHandler,
  dealsHandler,
  expenseApplicationAmountCalculationsHandler,
  expenseApplicationCurrenciesHandler,
  expenseApplicationFormsHandler,
  expenseApplicationLineTemplatesHandler,
  expenseApplicationsHandler,
  fixedAssetsHandler,
  generalLedgersHandler,
  invoicesHandler,
  itemsHandler,
  journalsHandler,
  manualJournalsHandler,
  partnersHandler,
  paymentRequestsHandler,
  paymentsHandler,
  purchaseRequestsHandler,
  quotationsHandler,
  receiptsHandler,
  renewsHandler,
  sectionsHandler,
  segmentTagsHandler,
  selectablesHandler,
  tagsHandler,
  taxesHandler,
  transfersHandler,
  trialBalanceHandler,
  userMatchersHandler,
  usersHandler,
  walletablesHandler,
  walletTxnsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', partnersHandler)
  .route('/', selectablesHandler)
  .route('/', accountItemsHandler)
  .route('/', tagsHandler)
  .route('/', sectionsHandler)
  .route('/', invoicesHandler)
  .route('/', quotationsHandler)
  .route('/', dealsHandler)
  .route('/', renewsHandler)
  .route('/', paymentsHandler)
  .route('/', manualJournalsHandler)
  .route('/', usersHandler)
  .route('/', companiesHandler)
  .route('/', itemsHandler)
  .route('/', taxesHandler)
  .route('/', walletablesHandler)
  .route('/', banksHandler)
  .route('/', transfersHandler)
  .route('/', walletTxnsHandler)
  .route('/', journalsHandler)
  .route('/', trialBalanceHandler)
  .route('/', generalLedgersHandler)
  .route('/', receiptsHandler)
  .route('/', expenseApplicationsHandler)
  .route('/', expenseApplicationCurrenciesHandler)
  .route('/', expenseApplicationFormsHandler)
  .route('/', expenseApplicationAmountCalculationsHandler)
  .route('/', expenseApplicationLineTemplatesHandler)
  .route('/', paymentRequestsHandler)
  .route('/', approvalRequestsHandler)
  .route('/', purchaseRequestsHandler)
  .route('/', approvalFlowRoutesHandler)
  .route('/', segmentTagsHandler)
  .route('/', fixedAssetsHandler)
  .route('/', accountGroupsHandler)
  .route('/', userMatchersHandler)

export default app
