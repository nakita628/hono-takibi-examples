import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiAccountCollectionFlowsRouteHandler: RouteHandler<
  typeof getApiAccountCollectionFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountCollectionFlowsRouteHandler: RouteHandler<
  typeof postApiAccountCollectionFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountCollectionFlowsIdRouteHandler: RouteHandler<
  typeof getApiAccountCollectionFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAccountCollectionFlowsIdRouteHandler: RouteHandler<
  typeof patchApiAccountCollectionFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBulkRequestsRouteHandler: RouteHandler<typeof getApiBulkRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiBulkRequestsRouteHandler: RouteHandler<
  typeof postApiBulkRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBulkRequestsIdRouteHandler: RouteHandler<
  typeof getApiBulkRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBulkResultsRouteHandler: RouteHandler<typeof getApiBulkResultsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiBulkResultsIdRouteHandler: RouteHandler<
  typeof getApiBulkResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCasesRouteHandler: RouteHandler<typeof getApiCasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCasesIdRouteHandler: RouteHandler<typeof getApiCasesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConnectionLegalEntitiesRouteHandler: RouteHandler<
  typeof getApiConnectionLegalEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConnectionLegalEntitiesRouteHandler: RouteHandler<
  typeof postApiConnectionLegalEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConnectionLegalEntitiesIdRouteHandler: RouteHandler<
  typeof getApiConnectionLegalEntitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiConnectionLegalEntitiesIdRouteHandler: RouteHandler<
  typeof patchApiConnectionLegalEntitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConnectionsRouteHandler: RouteHandler<typeof getApiConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCounterpartiesRouteHandler: RouteHandler<
  typeof getApiCounterpartiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCounterpartiesRouteHandler: RouteHandler<
  typeof postApiCounterpartiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCounterpartiesIdRouteHandler: RouteHandler<
  typeof getApiCounterpartiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCounterpartiesIdRouteHandler: RouteHandler<
  typeof patchApiCounterpartiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCounterpartiesIdRouteHandler: RouteHandler<
  typeof deleteApiCounterpartiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCounterpartiesIdCollectAccountRouteHandler: RouteHandler<
  typeof postApiCounterpartiesIdCollectAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocumentsRouteHandler: RouteHandler<typeof getApiDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDocumentsRouteHandler: RouteHandler<typeof postApiDocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiDocumentsIdRouteHandler: RouteHandler<typeof getApiDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiDocumentsIdDownloadRouteHandler: RouteHandler<
  typeof getApiDocumentsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEmbeddableFlowsRouteHandler: RouteHandler<
  typeof getApiEmbeddableFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEmbeddableFlowsRouteHandler: RouteHandler<
  typeof postApiEmbeddableFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEmbeddableFlowsIdRouteHandler: RouteHandler<
  typeof getApiEmbeddableFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiEmbeddableFlowsIdRouteHandler: RouteHandler<
  typeof patchApiEmbeddableFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEventsRouteHandler: RouteHandler<typeof getApiEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEventsIdRouteHandler: RouteHandler<typeof getApiEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiExpectedPaymentsRouteHandler: RouteHandler<
  typeof getApiExpectedPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExpectedPaymentsRouteHandler: RouteHandler<
  typeof postApiExpectedPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiExpectedPaymentsIdRouteHandler: RouteHandler<
  typeof getApiExpectedPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiExpectedPaymentsIdRouteHandler: RouteHandler<
  typeof patchApiExpectedPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiExpectedPaymentsIdRouteHandler: RouteHandler<
  typeof deleteApiExpectedPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiExternalAccountsRouteHandler: RouteHandler<
  typeof getApiExternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalAccountsRouteHandler: RouteHandler<
  typeof postApiExternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiExternalAccountsIdRouteHandler: RouteHandler<
  typeof getApiExternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiExternalAccountsIdRouteHandler: RouteHandler<
  typeof patchApiExternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiExternalAccountsIdRouteHandler: RouteHandler<
  typeof deleteApiExternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalAccountsIdCompleteVerificationRouteHandler: RouteHandler<
  typeof postApiExternalAccountsIdCompleteVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalAccountsIdVerifyRouteHandler: RouteHandler<
  typeof postApiExternalAccountsIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiForeignExchangeQuotesRouteHandler: RouteHandler<
  typeof getApiForeignExchangeQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiForeignExchangeQuotesRouteHandler: RouteHandler<
  typeof postApiForeignExchangeQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiForeignExchangeQuotesIdRouteHandler: RouteHandler<
  typeof getApiForeignExchangeQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiHoldsRouteHandler: RouteHandler<typeof getApiHoldsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiHoldsRouteHandler: RouteHandler<typeof postApiHoldsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiHoldsIdRouteHandler: RouteHandler<typeof getApiHoldsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiHoldsIdRouteHandler: RouteHandler<typeof patchApiHoldsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentificationsRouteHandler: RouteHandler<
  typeof postApiIdentificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentificationsIdRouteHandler: RouteHandler<
  typeof getApiIdentificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiIdentificationsIdRouteHandler: RouteHandler<
  typeof patchApiIdentificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIncomingPaymentDetailsRouteHandler: RouteHandler<
  typeof getApiIncomingPaymentDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIncomingPaymentDetailsIdRouteHandler: RouteHandler<
  typeof getApiIncomingPaymentDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiIncomingPaymentDetailsIdRouteHandler: RouteHandler<
  typeof patchApiIncomingPaymentDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInternalAccountsRouteHandler: RouteHandler<
  typeof getApiInternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInternalAccountsRouteHandler: RouteHandler<
  typeof postApiInternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInternalAccountsIdRouteHandler: RouteHandler<
  typeof getApiInternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiInternalAccountsIdRouteHandler: RouteHandler<
  typeof patchApiInternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInternalAccountsIdRequestClosureRouteHandler: RouteHandler<
  typeof postApiInternalAccountsIdRequestClosureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRouteHandler: RouteHandler<
  typeof patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInternalAccountsInternalAccountIdBalanceReportsRouteHandler: RouteHandler<
  typeof getApiInternalAccountsInternalAccountIdBalanceReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInternalAccountsInternalAccountIdBalanceReportsRouteHandler: RouteHandler<
  typeof postApiInternalAccountsInternalAccountIdBalanceReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInternalAccountsInternalAccountIdBalanceReportsIdRouteHandler: RouteHandler<
  typeof getApiInternalAccountsInternalAccountIdBalanceReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRouteHandler: RouteHandler<
  typeof deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInvoicesRouteHandler: RouteHandler<typeof getApiInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInvoicesRouteHandler: RouteHandler<typeof postApiInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInvoicesIdRouteHandler: RouteHandler<typeof getApiInvoicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiInvoicesIdRouteHandler: RouteHandler<typeof patchApiInvoicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiInvoicesIdPaymentOrdersPaymentOrderIdRouteHandler: RouteHandler<
  typeof putApiInvoicesIdPaymentOrdersPaymentOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInvoicesInvoiceIdInvoiceLineItemsRouteHandler: RouteHandler<
  typeof getApiInvoicesInvoiceIdInvoiceLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInvoicesInvoiceIdInvoiceLineItemsRouteHandler: RouteHandler<
  typeof postApiInvoicesInvoiceIdInvoiceLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler: RouteHandler<
  typeof getApiInvoicesInvoiceIdInvoiceLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler: RouteHandler<
  typeof patchApiInvoicesInvoiceIdInvoiceLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler: RouteHandler<
  typeof deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJournalEntriesRouteHandler: RouteHandler<
  typeof getApiJournalEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJournalEntriesIdRouteHandler: RouteHandler<
  typeof getApiJournalEntriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJournalReportsRouteHandler: RouteHandler<
  typeof getApiJournalReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJournalReportsIdRouteHandler: RouteHandler<
  typeof getApiJournalReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiJournalReportsIdRouteHandler: RouteHandler<
  typeof patchApiJournalReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJournalSourcesRouteHandler: RouteHandler<
  typeof getApiJournalSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJournalSourcesIdRouteHandler: RouteHandler<
  typeof getApiJournalSourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountBalanceMonitorsRouteHandler: RouteHandler<
  typeof getApiLedgerAccountBalanceMonitorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerAccountBalanceMonitorsRouteHandler: RouteHandler<
  typeof postApiLedgerAccountBalanceMonitorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountBalanceMonitorsIdRouteHandler: RouteHandler<
  typeof getApiLedgerAccountBalanceMonitorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerAccountBalanceMonitorsIdRouteHandler: RouteHandler<
  typeof patchApiLedgerAccountBalanceMonitorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgerAccountBalanceMonitorsIdRouteHandler: RouteHandler<
  typeof deleteApiLedgerAccountBalanceMonitorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountCategoriesRouteHandler: RouteHandler<
  typeof getApiLedgerAccountCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerAccountCategoriesRouteHandler: RouteHandler<
  typeof postApiLedgerAccountCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountCategoriesIdRouteHandler: RouteHandler<
  typeof getApiLedgerAccountCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerAccountCategoriesIdRouteHandler: RouteHandler<
  typeof patchApiLedgerAccountCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgerAccountCategoriesIdRouteHandler: RouteHandler<
  typeof deleteApiLedgerAccountCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRouteHandler: RouteHandler<
  typeof putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRouteHandler: RouteHandler<
  typeof deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRouteHandler: RouteHandler<
  typeof putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRouteHandler: RouteHandler<
  typeof deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountSettlementsRouteHandler: RouteHandler<
  typeof getApiLedgerAccountSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerAccountSettlementsRouteHandler: RouteHandler<
  typeof postApiLedgerAccountSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountSettlementsIdRouteHandler: RouteHandler<
  typeof getApiLedgerAccountSettlementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerAccountSettlementsIdRouteHandler: RouteHandler<
  typeof patchApiLedgerAccountSettlementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerAccountSettlementsIdLedgerEntriesRouteHandler: RouteHandler<
  typeof patchApiLedgerAccountSettlementsIdLedgerEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgerAccountSettlementsIdLedgerEntriesRouteHandler: RouteHandler<
  typeof deleteApiLedgerAccountSettlementsIdLedgerEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerAccountStatementsRouteHandler: RouteHandler<
  typeof postApiLedgerAccountStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountStatementsIdRouteHandler: RouteHandler<
  typeof getApiLedgerAccountStatementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountsRouteHandler: RouteHandler<
  typeof getApiLedgerAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerAccountsRouteHandler: RouteHandler<
  typeof postApiLedgerAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerAccountsIdRouteHandler: RouteHandler<
  typeof getApiLedgerAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerAccountsIdRouteHandler: RouteHandler<
  typeof patchApiLedgerAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgerAccountsIdRouteHandler: RouteHandler<
  typeof deleteApiLedgerAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerEntriesRouteHandler: RouteHandler<
  typeof getApiLedgerEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerEntriesIdRouteHandler: RouteHandler<
  typeof getApiLedgerEntriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerEntriesIdRouteHandler: RouteHandler<
  typeof patchApiLedgerEntriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerTransactionVersionsRouteHandler: RouteHandler<
  typeof getApiLedgerTransactionVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerTransactionsRouteHandler: RouteHandler<
  typeof getApiLedgerTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerTransactionsRouteHandler: RouteHandler<
  typeof postApiLedgerTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerTransactionsIdRouteHandler: RouteHandler<
  typeof getApiLedgerTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgerTransactionsIdRouteHandler: RouteHandler<
  typeof patchApiLedgerTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerTransactionsIdPartialPostRouteHandler: RouteHandler<
  typeof postApiLedgerTransactionsIdPartialPostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgerTransactionsIdReversalRouteHandler: RouteHandler<
  typeof postApiLedgerTransactionsIdReversalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgerTransactionsIdVersionsRouteHandler: RouteHandler<
  typeof getApiLedgerTransactionsIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgersRouteHandler: RouteHandler<typeof getApiLedgersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLedgersRouteHandler: RouteHandler<typeof postApiLedgersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLedgersIdRouteHandler: RouteHandler<typeof getApiLedgersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLedgersIdRouteHandler: RouteHandler<typeof patchApiLedgersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLedgersIdRouteHandler: RouteHandler<typeof deleteApiLedgersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiLegalEntitiesRouteHandler: RouteHandler<
  typeof getApiLegalEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLegalEntitiesRouteHandler: RouteHandler<
  typeof postApiLegalEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLegalEntitiesIdRouteHandler: RouteHandler<
  typeof getApiLegalEntitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLegalEntitiesIdRouteHandler: RouteHandler<
  typeof patchApiLegalEntitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLegalEntityAssociationsRouteHandler: RouteHandler<
  typeof postApiLegalEntityAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLegalEntityAssociationsIdRouteHandler: RouteHandler<
  typeof deleteApiLegalEntityAssociationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentActionsRouteHandler: RouteHandler<
  typeof getApiPaymentActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPaymentActionsRouteHandler: RouteHandler<
  typeof postApiPaymentActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentActionsIdRouteHandler: RouteHandler<
  typeof getApiPaymentActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPaymentActionsIdRouteHandler: RouteHandler<
  typeof patchApiPaymentActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentFlowsRouteHandler: RouteHandler<typeof getApiPaymentFlowsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiPaymentFlowsRouteHandler: RouteHandler<
  typeof postApiPaymentFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentFlowsIdRouteHandler: RouteHandler<
  typeof getApiPaymentFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPaymentFlowsIdRouteHandler: RouteHandler<
  typeof patchApiPaymentFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentOrdersRouteHandler: RouteHandler<
  typeof getApiPaymentOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPaymentOrdersRouteHandler: RouteHandler<
  typeof postApiPaymentOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPaymentOrdersCreateAsyncRouteHandler: RouteHandler<
  typeof postApiPaymentOrdersCreateAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentOrdersIdRouteHandler: RouteHandler<
  typeof getApiPaymentOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPaymentOrdersIdRouteHandler: RouteHandler<
  typeof patchApiPaymentOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentOrdersPaymentOrderIdReversalsRouteHandler: RouteHandler<
  typeof getApiPaymentOrdersPaymentOrderIdReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPaymentOrdersPaymentOrderIdReversalsRouteHandler: RouteHandler<
  typeof postApiPaymentOrdersPaymentOrderIdReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRouteHandler: RouteHandler<
  typeof getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentReferencesRouteHandler: RouteHandler<
  typeof getApiPaymentReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPaymentReferencesIdRouteHandler: RouteHandler<
  typeof getApiPaymentReferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPingRouteHandler: RouteHandler<typeof getApiPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReturnsRouteHandler: RouteHandler<typeof getApiReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReturnsRouteHandler: RouteHandler<typeof postApiReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReturnsIdRouteHandler: RouteHandler<typeof getApiReturnsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiSimulationsCasesIdResolveRouteHandler: RouteHandler<
  typeof patchApiSimulationsCasesIdResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSimulationsIncomingPaymentDetailsCreateAsyncRouteHandler: RouteHandler<
  typeof postApiSimulationsIncomingPaymentDetailsCreateAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiSimulationsLegalEntitiesIdUpdateStatusRouteHandler: RouteHandler<
  typeof patchApiSimulationsLegalEntitiesIdUpdateStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransactionLineItemsRouteHandler: RouteHandler<
  typeof getApiTransactionLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransactionLineItemsRouteHandler: RouteHandler<
  typeof postApiTransactionLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransactionLineItemsIdRouteHandler: RouteHandler<
  typeof getApiTransactionLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransactionLineItemsIdRouteHandler: RouteHandler<
  typeof deleteApiTransactionLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransactionsRouteHandler: RouteHandler<typeof getApiTransactionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiTransactionsRouteHandler: RouteHandler<
  typeof postApiTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransactionsIdRouteHandler: RouteHandler<
  typeof getApiTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTransactionsIdRouteHandler: RouteHandler<
  typeof patchApiTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransactionsIdRouteHandler: RouteHandler<
  typeof deleteApiTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransactionsTransactionIdLineItemsRouteHandler: RouteHandler<
  typeof getApiTransactionsTransactionIdLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiValidationsRoutingNumbersRouteHandler: RouteHandler<
  typeof getApiValidationsRoutingNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVirtualAccountSettingsRouteHandler: RouteHandler<
  typeof getApiVirtualAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVirtualAccountSettingsRouteHandler: RouteHandler<
  typeof postApiVirtualAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVirtualAccountsRouteHandler: RouteHandler<
  typeof getApiVirtualAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVirtualAccountsRouteHandler: RouteHandler<
  typeof postApiVirtualAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVirtualAccountsIdRouteHandler: RouteHandler<
  typeof getApiVirtualAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiVirtualAccountsIdRouteHandler: RouteHandler<
  typeof patchApiVirtualAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVirtualAccountsIdRouteHandler: RouteHandler<
  typeof deleteApiVirtualAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountsTypeAccountIdAccountDetailsRouteHandler: RouteHandler<
  typeof getApiAccountsTypeAccountIdAccountDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountsTypeAccountIdAccountDetailsRouteHandler: RouteHandler<
  typeof postApiAccountsTypeAccountIdAccountDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountsTypeAccountIdAccountDetailsIdRouteHandler: RouteHandler<
  typeof getApiAccountsTypeAccountIdAccountDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAccountsTypeAccountIdAccountDetailsIdRouteHandler: RouteHandler<
  typeof deleteApiAccountsTypeAccountIdAccountDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountsTypeAccountIdRoutingDetailsRouteHandler: RouteHandler<
  typeof getApiAccountsTypeAccountIdRoutingDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountsTypeAccountIdRoutingDetailsRouteHandler: RouteHandler<
  typeof postApiAccountsTypeAccountIdRoutingDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountsTypeAccountIdRoutingDetailsIdRouteHandler: RouteHandler<
  typeof getApiAccountsTypeAccountIdRoutingDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAccountsTypeAccountIdRoutingDetailsIdRouteHandler: RouteHandler<
  typeof deleteApiAccountsTypeAccountIdRoutingDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocumentableTypeDocumentableIdDocumentsRouteHandler: RouteHandler<
  typeof getApiDocumentableTypeDocumentableIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDocumentableTypeDocumentableIdDocumentsRouteHandler: RouteHandler<
  typeof postApiDocumentableTypeDocumentableIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocumentableTypeDocumentableIdDocumentsIdRouteHandler: RouteHandler<
  typeof getApiDocumentableTypeDocumentableIdDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRouteHandler: RouteHandler<
  typeof getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiItemizableTypeItemizableIdLineItemsRouteHandler: RouteHandler<
  typeof getApiItemizableTypeItemizableIdLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiItemizableTypeItemizableIdLineItemsIdRouteHandler: RouteHandler<
  typeof getApiItemizableTypeItemizableIdLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiItemizableTypeItemizableIdLineItemsIdRouteHandler: RouteHandler<
  typeof patchApiItemizableTypeItemizableIdLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
