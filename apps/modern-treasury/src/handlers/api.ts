import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAccountsTypeAccountIdAccountDetailsIdRoute,
  deleteApiAccountsTypeAccountIdRoutingDetailsIdRoute,
  deleteApiCounterpartiesIdRoute,
  deleteApiExpectedPaymentsIdRoute,
  deleteApiExternalAccountsIdRoute,
  deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRoute,
  deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
  deleteApiLedgerAccountBalanceMonitorsIdRoute,
  deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute,
  deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute,
  deleteApiLedgerAccountCategoriesIdRoute,
  deleteApiLedgerAccountSettlementsIdLedgerEntriesRoute,
  deleteApiLedgerAccountsIdRoute,
  deleteApiLedgersIdRoute,
  deleteApiLegalEntityAssociationsIdRoute,
  deleteApiTransactionLineItemsIdRoute,
  deleteApiTransactionsIdRoute,
  deleteApiVirtualAccountsIdRoute,
  getApiAccountCollectionFlowsIdRoute,
  getApiAccountCollectionFlowsRoute,
  getApiAccountsTypeAccountIdAccountDetailsIdRoute,
  getApiAccountsTypeAccountIdAccountDetailsRoute,
  getApiAccountsTypeAccountIdRoutingDetailsIdRoute,
  getApiAccountsTypeAccountIdRoutingDetailsRoute,
  getApiBulkRequestsIdRoute,
  getApiBulkRequestsRoute,
  getApiBulkResultsIdRoute,
  getApiBulkResultsRoute,
  getApiCasesIdRoute,
  getApiCasesRoute,
  getApiConnectionLegalEntitiesIdRoute,
  getApiConnectionLegalEntitiesRoute,
  getApiConnectionsRoute,
  getApiCounterpartiesIdRoute,
  getApiCounterpartiesRoute,
  getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRoute,
  getApiDocumentableTypeDocumentableIdDocumentsIdRoute,
  getApiDocumentableTypeDocumentableIdDocumentsRoute,
  getApiDocumentsIdDownloadRoute,
  getApiDocumentsIdRoute,
  getApiDocumentsRoute,
  getApiEmbeddableFlowsIdRoute,
  getApiEmbeddableFlowsRoute,
  getApiEventsIdRoute,
  getApiEventsRoute,
  getApiExpectedPaymentsIdRoute,
  getApiExpectedPaymentsRoute,
  getApiExternalAccountsIdRoute,
  getApiExternalAccountsRoute,
  getApiForeignExchangeQuotesIdRoute,
  getApiForeignExchangeQuotesRoute,
  getApiHoldsIdRoute,
  getApiHoldsRoute,
  getApiIdentificationsIdRoute,
  getApiIncomingPaymentDetailsIdRoute,
  getApiIncomingPaymentDetailsRoute,
  getApiInternalAccountsIdRoute,
  getApiInternalAccountsInternalAccountIdBalanceReportsIdRoute,
  getApiInternalAccountsInternalAccountIdBalanceReportsRoute,
  getApiInternalAccountsRoute,
  getApiInvoicesIdRoute,
  getApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
  getApiInvoicesInvoiceIdInvoiceLineItemsRoute,
  getApiInvoicesRoute,
  getApiItemizableTypeItemizableIdLineItemsIdRoute,
  getApiItemizableTypeItemizableIdLineItemsRoute,
  getApiJournalEntriesIdRoute,
  getApiJournalEntriesRoute,
  getApiJournalReportsIdRoute,
  getApiJournalReportsRoute,
  getApiJournalSourcesIdRoute,
  getApiJournalSourcesRoute,
  getApiLedgerAccountBalanceMonitorsIdRoute,
  getApiLedgerAccountBalanceMonitorsRoute,
  getApiLedgerAccountCategoriesIdRoute,
  getApiLedgerAccountCategoriesRoute,
  getApiLedgerAccountSettlementsIdRoute,
  getApiLedgerAccountSettlementsRoute,
  getApiLedgerAccountsIdRoute,
  getApiLedgerAccountsRoute,
  getApiLedgerAccountStatementsIdRoute,
  getApiLedgerEntriesIdRoute,
  getApiLedgerEntriesRoute,
  getApiLedgersIdRoute,
  getApiLedgersRoute,
  getApiLedgerTransactionsIdRoute,
  getApiLedgerTransactionsIdVersionsRoute,
  getApiLedgerTransactionsRoute,
  getApiLedgerTransactionVersionsRoute,
  getApiLegalEntitiesIdRoute,
  getApiLegalEntitiesRoute,
  getApiPaymentActionsIdRoute,
  getApiPaymentActionsRoute,
  getApiPaymentFlowsIdRoute,
  getApiPaymentFlowsRoute,
  getApiPaymentOrdersIdRoute,
  getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRoute,
  getApiPaymentOrdersPaymentOrderIdReversalsRoute,
  getApiPaymentOrdersRoute,
  getApiPaymentReferencesIdRoute,
  getApiPaymentReferencesRoute,
  getApiPingRoute,
  getApiReturnsIdRoute,
  getApiReturnsRoute,
  getApiTransactionLineItemsIdRoute,
  getApiTransactionLineItemsRoute,
  getApiTransactionsIdRoute,
  getApiTransactionsRoute,
  getApiTransactionsTransactionIdLineItemsRoute,
  getApiValidationsRoutingNumbersRoute,
  getApiVirtualAccountSettingsRoute,
  getApiVirtualAccountsIdRoute,
  getApiVirtualAccountsRoute,
  patchApiAccountCollectionFlowsIdRoute,
  patchApiConnectionLegalEntitiesIdRoute,
  patchApiCounterpartiesIdRoute,
  patchApiEmbeddableFlowsIdRoute,
  patchApiExpectedPaymentsIdRoute,
  patchApiExternalAccountsIdRoute,
  patchApiHoldsIdRoute,
  patchApiIdentificationsIdRoute,
  patchApiIncomingPaymentDetailsIdRoute,
  patchApiInternalAccountsIdRoute,
  patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRoute,
  patchApiInvoicesIdRoute,
  patchApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
  patchApiItemizableTypeItemizableIdLineItemsIdRoute,
  patchApiJournalReportsIdRoute,
  patchApiLedgerAccountBalanceMonitorsIdRoute,
  patchApiLedgerAccountCategoriesIdRoute,
  patchApiLedgerAccountSettlementsIdLedgerEntriesRoute,
  patchApiLedgerAccountSettlementsIdRoute,
  patchApiLedgerAccountsIdRoute,
  patchApiLedgerEntriesIdRoute,
  patchApiLedgersIdRoute,
  patchApiLedgerTransactionsIdRoute,
  patchApiLegalEntitiesIdRoute,
  patchApiPaymentActionsIdRoute,
  patchApiPaymentFlowsIdRoute,
  patchApiPaymentOrdersIdRoute,
  patchApiSimulationsCasesIdResolveRoute,
  patchApiSimulationsLegalEntitiesIdUpdateStatusRoute,
  patchApiTransactionsIdRoute,
  patchApiVirtualAccountsIdRoute,
  postApiAccountCollectionFlowsRoute,
  postApiAccountsTypeAccountIdAccountDetailsRoute,
  postApiAccountsTypeAccountIdRoutingDetailsRoute,
  postApiBulkRequestsRoute,
  postApiConnectionLegalEntitiesRoute,
  postApiCounterpartiesIdCollectAccountRoute,
  postApiCounterpartiesRoute,
  postApiDocumentableTypeDocumentableIdDocumentsRoute,
  postApiDocumentsRoute,
  postApiEmbeddableFlowsRoute,
  postApiExpectedPaymentsRoute,
  postApiExternalAccountsIdCompleteVerificationRoute,
  postApiExternalAccountsIdVerifyRoute,
  postApiExternalAccountsRoute,
  postApiForeignExchangeQuotesRoute,
  postApiHoldsRoute,
  postApiIdentificationsRoute,
  postApiInternalAccountsIdRequestClosureRoute,
  postApiInternalAccountsInternalAccountIdBalanceReportsRoute,
  postApiInternalAccountsRoute,
  postApiInvoicesInvoiceIdInvoiceLineItemsRoute,
  postApiInvoicesRoute,
  postApiLedgerAccountBalanceMonitorsRoute,
  postApiLedgerAccountCategoriesRoute,
  postApiLedgerAccountSettlementsRoute,
  postApiLedgerAccountsRoute,
  postApiLedgerAccountStatementsRoute,
  postApiLedgersRoute,
  postApiLedgerTransactionsIdPartialPostRoute,
  postApiLedgerTransactionsIdReversalRoute,
  postApiLedgerTransactionsRoute,
  postApiLegalEntitiesRoute,
  postApiLegalEntityAssociationsRoute,
  postApiPaymentActionsRoute,
  postApiPaymentFlowsRoute,
  postApiPaymentOrdersCreateAsyncRoute,
  postApiPaymentOrdersPaymentOrderIdReversalsRoute,
  postApiPaymentOrdersRoute,
  postApiReturnsRoute,
  postApiSimulationsIncomingPaymentDetailsCreateAsyncRoute,
  postApiTransactionLineItemsRoute,
  postApiTransactionsRoute,
  postApiVirtualAccountSettingsRoute,
  postApiVirtualAccountsRoute,
  putApiInvoicesIdPaymentOrdersPaymentOrderIdRoute,
  putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute,
  putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAccountCollectionFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountCollectionFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountCollectionFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAccountCollectionFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBulkRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConnectionLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConnectionLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConnectionLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConnectionLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCounterpartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCounterpartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCounterpartiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCounterpartiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCounterpartiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCounterpartiesIdCollectAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmbeddableFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmbeddableFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmbeddableFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiEmbeddableFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExpectedPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExpectedPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExpectedPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExpectedPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExpectedPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalAccountsIdCompleteVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalAccountsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiForeignExchangeQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiForeignExchangeQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiForeignExchangeQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHoldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiHoldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIdentificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIncomingPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIncomingPaymentDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIncomingPaymentDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInternalAccountsIdRequestClosureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInternalAccountsInternalAccountIdBalanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInternalAccountsInternalAccountIdBalanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInternalAccountsInternalAccountIdBalanceReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiInvoicesIdPaymentOrdersPaymentOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicesInvoiceIdInvoiceLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoicesInvoiceIdInvoiceLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicesInvoiceIdInvoiceLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInvoicesInvoiceIdInvoiceLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJournalReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountBalanceMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountBalanceMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountBalanceMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountBalanceMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountBalanceMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountSettlementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountSettlementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountSettlementsIdLedgerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountSettlementsIdLedgerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountStatementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerTransactionsIdPartialPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerTransactionsIdReversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLegalEntityAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLegalEntityAssociationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPaymentActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPaymentFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentOrdersCreateAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPaymentOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersPaymentOrderIdReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentOrdersPaymentOrderIdReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentReferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSimulationsCasesIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSimulationsIncomingPaymentDetailsCreateAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSimulationsLegalEntitiesIdUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransactionLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransactionLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsTransactionIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiValidationsRoutingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVirtualAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVirtualAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountsTypeAccountIdAccountDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountsTypeAccountIdAccountDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountsTypeAccountIdAccountDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAccountsTypeAccountIdAccountDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountsTypeAccountIdRoutingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountsTypeAccountIdRoutingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountsTypeAccountIdRoutingDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAccountsTypeAccountIdRoutingDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentableTypeDocumentableIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDocumentableTypeDocumentableIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentableTypeDocumentableIdDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiItemizableTypeItemizableIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiItemizableTypeItemizableIdLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiItemizableTypeItemizableIdLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
