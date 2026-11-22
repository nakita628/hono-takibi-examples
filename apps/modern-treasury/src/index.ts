import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountCapabilityHandler,
  accountCollectionFlowHandler,
  accountDetailHandler,
  balanceReportHandler,
  bulkRequestHandler,
  bulkResultHandler,
  caseHandler,
  connectionHandler,
  connectionLegalEntityHandler,
  counterpartyHandler,
  documentHandler,
  embeddableFlowHandler,
  eventHandler,
  expectedPaymentHandler,
  externalAccountHandler,
  foreignExchangeQuoteHandler,
  holdHandler,
  identificationHandler,
  incomingPaymentDetailHandler,
  internalAccountHandler,
  invoiceHandler,
  invoiceLineItemHandler,
  journalEntryHandler,
  journalReportHandler,
  journalSourceHandler,
  ledgerAccountBalanceMonitorHandler,
  ledgerAccountCategoryHandler,
  ledgerAccountHandler,
  ledgerAccountSettlementHandler,
  ledgerAccountStatementHandler,
  ledgerEntryHandler,
  ledgerHandler,
  ledgerTransactionHandler,
  legalEntityAssociationHandler,
  legalEntityHandler,
  lineItemHandler,
  paymentActionHandler,
  paymentFlowHandler,
  paymentOrderHandler,
  paymentReferenceHandler,
  pingHandler,
  returnHandler,
  reversalHandler,
  routingDetailHandler,
  transactionHandler,
  transactionLineItemHandler,
  validationHandler,
  virtualAccountHandler,
  virtualAccountSettingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountCollectionFlowHandler)
  .route('/', bulkRequestHandler)
  .route('/', bulkResultHandler)
  .route('/', caseHandler)
  .route('/', connectionLegalEntityHandler)
  .route('/', connectionHandler)
  .route('/', counterpartyHandler)
  .route('/', documentHandler)
  .route('/', embeddableFlowHandler)
  .route('/', eventHandler)
  .route('/', expectedPaymentHandler)
  .route('/', externalAccountHandler)
  .route('/', foreignExchangeQuoteHandler)
  .route('/', holdHandler)
  .route('/', identificationHandler)
  .route('/', incomingPaymentDetailHandler)
  .route('/', internalAccountHandler)
  .route('/', accountCapabilityHandler)
  .route('/', balanceReportHandler)
  .route('/', invoiceHandler)
  .route('/', paymentOrderHandler)
  .route('/', invoiceLineItemHandler)
  .route('/', journalEntryHandler)
  .route('/', journalReportHandler)
  .route('/', journalSourceHandler)
  .route('/', ledgerAccountBalanceMonitorHandler)
  .route('/', ledgerAccountCategoryHandler)
  .route('/', ledgerAccountSettlementHandler)
  .route('/', ledgerAccountStatementHandler)
  .route('/', ledgerAccountHandler)
  .route('/', ledgerEntryHandler)
  .route('/', ledgerTransactionHandler)
  .route('/', ledgerHandler)
  .route('/', legalEntityHandler)
  .route('/', legalEntityAssociationHandler)
  .route('/', paymentActionHandler)
  .route('/', paymentFlowHandler)
  .route('/', reversalHandler)
  .route('/', paymentReferenceHandler)
  .route('/', pingHandler)
  .route('/', returnHandler)
  .route('/', transactionLineItemHandler)
  .route('/', transactionHandler)
  .route('/', validationHandler)
  .route('/', virtualAccountSettingHandler)
  .route('/', virtualAccountHandler)
  .route('/', accountDetailHandler)
  .route('/', routingDetailHandler)
  .route('/', lineItemHandler)

export default app
