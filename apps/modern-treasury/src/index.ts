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
} from './routes'
import {
  deleteApiAccountsTypeAccountIdAccountDetailsIdRouteHandler,
  deleteApiAccountsTypeAccountIdRoutingDetailsIdRouteHandler,
  deleteApiCounterpartiesIdRouteHandler,
  deleteApiExpectedPaymentsIdRouteHandler,
  deleteApiExternalAccountsIdRouteHandler,
  deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRouteHandler,
  deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler,
  deleteApiLedgerAccountBalanceMonitorsIdRouteHandler,
  deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRouteHandler,
  deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRouteHandler,
  deleteApiLedgerAccountCategoriesIdRouteHandler,
  deleteApiLedgerAccountSettlementsIdLedgerEntriesRouteHandler,
  deleteApiLedgerAccountsIdRouteHandler,
  deleteApiLedgersIdRouteHandler,
  deleteApiLegalEntityAssociationsIdRouteHandler,
  deleteApiTransactionLineItemsIdRouteHandler,
  deleteApiTransactionsIdRouteHandler,
  deleteApiVirtualAccountsIdRouteHandler,
  getApiAccountCollectionFlowsIdRouteHandler,
  getApiAccountCollectionFlowsRouteHandler,
  getApiAccountsTypeAccountIdAccountDetailsIdRouteHandler,
  getApiAccountsTypeAccountIdAccountDetailsRouteHandler,
  getApiAccountsTypeAccountIdRoutingDetailsIdRouteHandler,
  getApiAccountsTypeAccountIdRoutingDetailsRouteHandler,
  getApiBulkRequestsIdRouteHandler,
  getApiBulkRequestsRouteHandler,
  getApiBulkResultsIdRouteHandler,
  getApiBulkResultsRouteHandler,
  getApiCasesIdRouteHandler,
  getApiCasesRouteHandler,
  getApiConnectionLegalEntitiesIdRouteHandler,
  getApiConnectionLegalEntitiesRouteHandler,
  getApiConnectionsRouteHandler,
  getApiCounterpartiesIdRouteHandler,
  getApiCounterpartiesRouteHandler,
  getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRouteHandler,
  getApiDocumentableTypeDocumentableIdDocumentsIdRouteHandler,
  getApiDocumentableTypeDocumentableIdDocumentsRouteHandler,
  getApiDocumentsIdDownloadRouteHandler,
  getApiDocumentsIdRouteHandler,
  getApiDocumentsRouteHandler,
  getApiEmbeddableFlowsIdRouteHandler,
  getApiEmbeddableFlowsRouteHandler,
  getApiEventsIdRouteHandler,
  getApiEventsRouteHandler,
  getApiExpectedPaymentsIdRouteHandler,
  getApiExpectedPaymentsRouteHandler,
  getApiExternalAccountsIdRouteHandler,
  getApiExternalAccountsRouteHandler,
  getApiForeignExchangeQuotesIdRouteHandler,
  getApiForeignExchangeQuotesRouteHandler,
  getApiHoldsIdRouteHandler,
  getApiHoldsRouteHandler,
  getApiIdentificationsIdRouteHandler,
  getApiIncomingPaymentDetailsIdRouteHandler,
  getApiIncomingPaymentDetailsRouteHandler,
  getApiInternalAccountsIdRouteHandler,
  getApiInternalAccountsInternalAccountIdBalanceReportsIdRouteHandler,
  getApiInternalAccountsInternalAccountIdBalanceReportsRouteHandler,
  getApiInternalAccountsRouteHandler,
  getApiInvoicesIdRouteHandler,
  getApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler,
  getApiInvoicesInvoiceIdInvoiceLineItemsRouteHandler,
  getApiInvoicesRouteHandler,
  getApiItemizableTypeItemizableIdLineItemsIdRouteHandler,
  getApiItemizableTypeItemizableIdLineItemsRouteHandler,
  getApiJournalEntriesIdRouteHandler,
  getApiJournalEntriesRouteHandler,
  getApiJournalReportsIdRouteHandler,
  getApiJournalReportsRouteHandler,
  getApiJournalSourcesIdRouteHandler,
  getApiJournalSourcesRouteHandler,
  getApiLedgerAccountBalanceMonitorsIdRouteHandler,
  getApiLedgerAccountBalanceMonitorsRouteHandler,
  getApiLedgerAccountCategoriesIdRouteHandler,
  getApiLedgerAccountCategoriesRouteHandler,
  getApiLedgerAccountSettlementsIdRouteHandler,
  getApiLedgerAccountSettlementsRouteHandler,
  getApiLedgerAccountsIdRouteHandler,
  getApiLedgerAccountsRouteHandler,
  getApiLedgerAccountStatementsIdRouteHandler,
  getApiLedgerEntriesIdRouteHandler,
  getApiLedgerEntriesRouteHandler,
  getApiLedgersIdRouteHandler,
  getApiLedgersRouteHandler,
  getApiLedgerTransactionsIdRouteHandler,
  getApiLedgerTransactionsIdVersionsRouteHandler,
  getApiLedgerTransactionsRouteHandler,
  getApiLedgerTransactionVersionsRouteHandler,
  getApiLegalEntitiesIdRouteHandler,
  getApiLegalEntitiesRouteHandler,
  getApiPaymentActionsIdRouteHandler,
  getApiPaymentActionsRouteHandler,
  getApiPaymentFlowsIdRouteHandler,
  getApiPaymentFlowsRouteHandler,
  getApiPaymentOrdersIdRouteHandler,
  getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRouteHandler,
  getApiPaymentOrdersPaymentOrderIdReversalsRouteHandler,
  getApiPaymentOrdersRouteHandler,
  getApiPaymentReferencesIdRouteHandler,
  getApiPaymentReferencesRouteHandler,
  getApiPingRouteHandler,
  getApiReturnsIdRouteHandler,
  getApiReturnsRouteHandler,
  getApiTransactionLineItemsIdRouteHandler,
  getApiTransactionLineItemsRouteHandler,
  getApiTransactionsIdRouteHandler,
  getApiTransactionsRouteHandler,
  getApiTransactionsTransactionIdLineItemsRouteHandler,
  getApiValidationsRoutingNumbersRouteHandler,
  getApiVirtualAccountSettingsRouteHandler,
  getApiVirtualAccountsIdRouteHandler,
  getApiVirtualAccountsRouteHandler,
  patchApiAccountCollectionFlowsIdRouteHandler,
  patchApiConnectionLegalEntitiesIdRouteHandler,
  patchApiCounterpartiesIdRouteHandler,
  patchApiEmbeddableFlowsIdRouteHandler,
  patchApiExpectedPaymentsIdRouteHandler,
  patchApiExternalAccountsIdRouteHandler,
  patchApiHoldsIdRouteHandler,
  patchApiIdentificationsIdRouteHandler,
  patchApiIncomingPaymentDetailsIdRouteHandler,
  patchApiInternalAccountsIdRouteHandler,
  patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRouteHandler,
  patchApiInvoicesIdRouteHandler,
  patchApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler,
  patchApiItemizableTypeItemizableIdLineItemsIdRouteHandler,
  patchApiJournalReportsIdRouteHandler,
  patchApiLedgerAccountBalanceMonitorsIdRouteHandler,
  patchApiLedgerAccountCategoriesIdRouteHandler,
  patchApiLedgerAccountSettlementsIdLedgerEntriesRouteHandler,
  patchApiLedgerAccountSettlementsIdRouteHandler,
  patchApiLedgerAccountsIdRouteHandler,
  patchApiLedgerEntriesIdRouteHandler,
  patchApiLedgersIdRouteHandler,
  patchApiLedgerTransactionsIdRouteHandler,
  patchApiLegalEntitiesIdRouteHandler,
  patchApiPaymentActionsIdRouteHandler,
  patchApiPaymentFlowsIdRouteHandler,
  patchApiPaymentOrdersIdRouteHandler,
  patchApiSimulationsCasesIdResolveRouteHandler,
  patchApiSimulationsLegalEntitiesIdUpdateStatusRouteHandler,
  patchApiTransactionsIdRouteHandler,
  patchApiVirtualAccountsIdRouteHandler,
  postApiAccountCollectionFlowsRouteHandler,
  postApiAccountsTypeAccountIdAccountDetailsRouteHandler,
  postApiAccountsTypeAccountIdRoutingDetailsRouteHandler,
  postApiBulkRequestsRouteHandler,
  postApiConnectionLegalEntitiesRouteHandler,
  postApiCounterpartiesIdCollectAccountRouteHandler,
  postApiCounterpartiesRouteHandler,
  postApiDocumentableTypeDocumentableIdDocumentsRouteHandler,
  postApiDocumentsRouteHandler,
  postApiEmbeddableFlowsRouteHandler,
  postApiExpectedPaymentsRouteHandler,
  postApiExternalAccountsIdCompleteVerificationRouteHandler,
  postApiExternalAccountsIdVerifyRouteHandler,
  postApiExternalAccountsRouteHandler,
  postApiForeignExchangeQuotesRouteHandler,
  postApiHoldsRouteHandler,
  postApiIdentificationsRouteHandler,
  postApiInternalAccountsIdRequestClosureRouteHandler,
  postApiInternalAccountsInternalAccountIdBalanceReportsRouteHandler,
  postApiInternalAccountsRouteHandler,
  postApiInvoicesInvoiceIdInvoiceLineItemsRouteHandler,
  postApiInvoicesRouteHandler,
  postApiLedgerAccountBalanceMonitorsRouteHandler,
  postApiLedgerAccountCategoriesRouteHandler,
  postApiLedgerAccountSettlementsRouteHandler,
  postApiLedgerAccountsRouteHandler,
  postApiLedgerAccountStatementsRouteHandler,
  postApiLedgersRouteHandler,
  postApiLedgerTransactionsIdPartialPostRouteHandler,
  postApiLedgerTransactionsIdReversalRouteHandler,
  postApiLedgerTransactionsRouteHandler,
  postApiLegalEntitiesRouteHandler,
  postApiLegalEntityAssociationsRouteHandler,
  postApiPaymentActionsRouteHandler,
  postApiPaymentFlowsRouteHandler,
  postApiPaymentOrdersCreateAsyncRouteHandler,
  postApiPaymentOrdersPaymentOrderIdReversalsRouteHandler,
  postApiPaymentOrdersRouteHandler,
  postApiReturnsRouteHandler,
  postApiSimulationsIncomingPaymentDetailsCreateAsyncRouteHandler,
  postApiTransactionLineItemsRouteHandler,
  postApiTransactionsRouteHandler,
  postApiVirtualAccountSettingsRouteHandler,
  postApiVirtualAccountsRouteHandler,
  putApiInvoicesIdPaymentOrdersPaymentOrderIdRouteHandler,
  putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRouteHandler,
  putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAccountCollectionFlowsRoute, getApiAccountCollectionFlowsRouteHandler)
  .openapi(postApiAccountCollectionFlowsRoute, postApiAccountCollectionFlowsRouteHandler)
  .openapi(getApiAccountCollectionFlowsIdRoute, getApiAccountCollectionFlowsIdRouteHandler)
  .openapi(patchApiAccountCollectionFlowsIdRoute, patchApiAccountCollectionFlowsIdRouteHandler)
  .openapi(getApiBulkRequestsRoute, getApiBulkRequestsRouteHandler)
  .openapi(postApiBulkRequestsRoute, postApiBulkRequestsRouteHandler)
  .openapi(getApiBulkRequestsIdRoute, getApiBulkRequestsIdRouteHandler)
  .openapi(getApiBulkResultsRoute, getApiBulkResultsRouteHandler)
  .openapi(getApiBulkResultsIdRoute, getApiBulkResultsIdRouteHandler)
  .openapi(getApiCasesRoute, getApiCasesRouteHandler)
  .openapi(getApiCasesIdRoute, getApiCasesIdRouteHandler)
  .openapi(getApiConnectionLegalEntitiesRoute, getApiConnectionLegalEntitiesRouteHandler)
  .openapi(postApiConnectionLegalEntitiesRoute, postApiConnectionLegalEntitiesRouteHandler)
  .openapi(getApiConnectionLegalEntitiesIdRoute, getApiConnectionLegalEntitiesIdRouteHandler)
  .openapi(patchApiConnectionLegalEntitiesIdRoute, patchApiConnectionLegalEntitiesIdRouteHandler)
  .openapi(getApiConnectionsRoute, getApiConnectionsRouteHandler)
  .openapi(getApiCounterpartiesRoute, getApiCounterpartiesRouteHandler)
  .openapi(postApiCounterpartiesRoute, postApiCounterpartiesRouteHandler)
  .openapi(getApiCounterpartiesIdRoute, getApiCounterpartiesIdRouteHandler)
  .openapi(patchApiCounterpartiesIdRoute, patchApiCounterpartiesIdRouteHandler)
  .openapi(deleteApiCounterpartiesIdRoute, deleteApiCounterpartiesIdRouteHandler)
  .openapi(
    postApiCounterpartiesIdCollectAccountRoute,
    postApiCounterpartiesIdCollectAccountRouteHandler,
  )
  .openapi(getApiDocumentsRoute, getApiDocumentsRouteHandler)
  .openapi(postApiDocumentsRoute, postApiDocumentsRouteHandler)
  .openapi(getApiDocumentsIdRoute, getApiDocumentsIdRouteHandler)
  .openapi(getApiDocumentsIdDownloadRoute, getApiDocumentsIdDownloadRouteHandler)
  .openapi(getApiEmbeddableFlowsRoute, getApiEmbeddableFlowsRouteHandler)
  .openapi(postApiEmbeddableFlowsRoute, postApiEmbeddableFlowsRouteHandler)
  .openapi(getApiEmbeddableFlowsIdRoute, getApiEmbeddableFlowsIdRouteHandler)
  .openapi(patchApiEmbeddableFlowsIdRoute, patchApiEmbeddableFlowsIdRouteHandler)
  .openapi(getApiEventsRoute, getApiEventsRouteHandler)
  .openapi(getApiEventsIdRoute, getApiEventsIdRouteHandler)
  .openapi(getApiExpectedPaymentsRoute, getApiExpectedPaymentsRouteHandler)
  .openapi(postApiExpectedPaymentsRoute, postApiExpectedPaymentsRouteHandler)
  .openapi(getApiExpectedPaymentsIdRoute, getApiExpectedPaymentsIdRouteHandler)
  .openapi(patchApiExpectedPaymentsIdRoute, patchApiExpectedPaymentsIdRouteHandler)
  .openapi(deleteApiExpectedPaymentsIdRoute, deleteApiExpectedPaymentsIdRouteHandler)
  .openapi(getApiExternalAccountsRoute, getApiExternalAccountsRouteHandler)
  .openapi(postApiExternalAccountsRoute, postApiExternalAccountsRouteHandler)
  .openapi(getApiExternalAccountsIdRoute, getApiExternalAccountsIdRouteHandler)
  .openapi(patchApiExternalAccountsIdRoute, patchApiExternalAccountsIdRouteHandler)
  .openapi(deleteApiExternalAccountsIdRoute, deleteApiExternalAccountsIdRouteHandler)
  .openapi(
    postApiExternalAccountsIdCompleteVerificationRoute,
    postApiExternalAccountsIdCompleteVerificationRouteHandler,
  )
  .openapi(postApiExternalAccountsIdVerifyRoute, postApiExternalAccountsIdVerifyRouteHandler)
  .openapi(getApiForeignExchangeQuotesRoute, getApiForeignExchangeQuotesRouteHandler)
  .openapi(postApiForeignExchangeQuotesRoute, postApiForeignExchangeQuotesRouteHandler)
  .openapi(getApiForeignExchangeQuotesIdRoute, getApiForeignExchangeQuotesIdRouteHandler)
  .openapi(getApiHoldsRoute, getApiHoldsRouteHandler)
  .openapi(postApiHoldsRoute, postApiHoldsRouteHandler)
  .openapi(getApiHoldsIdRoute, getApiHoldsIdRouteHandler)
  .openapi(patchApiHoldsIdRoute, patchApiHoldsIdRouteHandler)
  .openapi(postApiIdentificationsRoute, postApiIdentificationsRouteHandler)
  .openapi(getApiIdentificationsIdRoute, getApiIdentificationsIdRouteHandler)
  .openapi(patchApiIdentificationsIdRoute, patchApiIdentificationsIdRouteHandler)
  .openapi(getApiIncomingPaymentDetailsRoute, getApiIncomingPaymentDetailsRouteHandler)
  .openapi(getApiIncomingPaymentDetailsIdRoute, getApiIncomingPaymentDetailsIdRouteHandler)
  .openapi(patchApiIncomingPaymentDetailsIdRoute, patchApiIncomingPaymentDetailsIdRouteHandler)
  .openapi(getApiInternalAccountsRoute, getApiInternalAccountsRouteHandler)
  .openapi(postApiInternalAccountsRoute, postApiInternalAccountsRouteHandler)
  .openapi(getApiInternalAccountsIdRoute, getApiInternalAccountsIdRouteHandler)
  .openapi(patchApiInternalAccountsIdRoute, patchApiInternalAccountsIdRouteHandler)
  .openapi(
    postApiInternalAccountsIdRequestClosureRoute,
    postApiInternalAccountsIdRequestClosureRouteHandler,
  )
  .openapi(
    patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRoute,
    patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRouteHandler,
  )
  .openapi(
    getApiInternalAccountsInternalAccountIdBalanceReportsRoute,
    getApiInternalAccountsInternalAccountIdBalanceReportsRouteHandler,
  )
  .openapi(
    postApiInternalAccountsInternalAccountIdBalanceReportsRoute,
    postApiInternalAccountsInternalAccountIdBalanceReportsRouteHandler,
  )
  .openapi(
    getApiInternalAccountsInternalAccountIdBalanceReportsIdRoute,
    getApiInternalAccountsInternalAccountIdBalanceReportsIdRouteHandler,
  )
  .openapi(
    deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRoute,
    deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRouteHandler,
  )
  .openapi(getApiInvoicesRoute, getApiInvoicesRouteHandler)
  .openapi(postApiInvoicesRoute, postApiInvoicesRouteHandler)
  .openapi(getApiInvoicesIdRoute, getApiInvoicesIdRouteHandler)
  .openapi(patchApiInvoicesIdRoute, patchApiInvoicesIdRouteHandler)
  .openapi(
    putApiInvoicesIdPaymentOrdersPaymentOrderIdRoute,
    putApiInvoicesIdPaymentOrdersPaymentOrderIdRouteHandler,
  )
  .openapi(
    getApiInvoicesInvoiceIdInvoiceLineItemsRoute,
    getApiInvoicesInvoiceIdInvoiceLineItemsRouteHandler,
  )
  .openapi(
    postApiInvoicesInvoiceIdInvoiceLineItemsRoute,
    postApiInvoicesInvoiceIdInvoiceLineItemsRouteHandler,
  )
  .openapi(
    getApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
    getApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler,
  )
  .openapi(
    patchApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
    patchApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler,
  )
  .openapi(
    deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
    deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRouteHandler,
  )
  .openapi(getApiJournalEntriesRoute, getApiJournalEntriesRouteHandler)
  .openapi(getApiJournalEntriesIdRoute, getApiJournalEntriesIdRouteHandler)
  .openapi(getApiJournalReportsRoute, getApiJournalReportsRouteHandler)
  .openapi(getApiJournalReportsIdRoute, getApiJournalReportsIdRouteHandler)
  .openapi(patchApiJournalReportsIdRoute, patchApiJournalReportsIdRouteHandler)
  .openapi(getApiJournalSourcesRoute, getApiJournalSourcesRouteHandler)
  .openapi(getApiJournalSourcesIdRoute, getApiJournalSourcesIdRouteHandler)
  .openapi(getApiLedgerAccountBalanceMonitorsRoute, getApiLedgerAccountBalanceMonitorsRouteHandler)
  .openapi(
    postApiLedgerAccountBalanceMonitorsRoute,
    postApiLedgerAccountBalanceMonitorsRouteHandler,
  )
  .openapi(
    getApiLedgerAccountBalanceMonitorsIdRoute,
    getApiLedgerAccountBalanceMonitorsIdRouteHandler,
  )
  .openapi(
    patchApiLedgerAccountBalanceMonitorsIdRoute,
    patchApiLedgerAccountBalanceMonitorsIdRouteHandler,
  )
  .openapi(
    deleteApiLedgerAccountBalanceMonitorsIdRoute,
    deleteApiLedgerAccountBalanceMonitorsIdRouteHandler,
  )
  .openapi(getApiLedgerAccountCategoriesRoute, getApiLedgerAccountCategoriesRouteHandler)
  .openapi(postApiLedgerAccountCategoriesRoute, postApiLedgerAccountCategoriesRouteHandler)
  .openapi(getApiLedgerAccountCategoriesIdRoute, getApiLedgerAccountCategoriesIdRouteHandler)
  .openapi(patchApiLedgerAccountCategoriesIdRoute, patchApiLedgerAccountCategoriesIdRouteHandler)
  .openapi(deleteApiLedgerAccountCategoriesIdRoute, deleteApiLedgerAccountCategoriesIdRouteHandler)
  .openapi(
    putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute,
    putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRouteHandler,
  )
  .openapi(
    deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute,
    deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRouteHandler,
  )
  .openapi(
    putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute,
    putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRouteHandler,
  )
  .openapi(
    deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute,
    deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRouteHandler,
  )
  .openapi(getApiLedgerAccountSettlementsRoute, getApiLedgerAccountSettlementsRouteHandler)
  .openapi(postApiLedgerAccountSettlementsRoute, postApiLedgerAccountSettlementsRouteHandler)
  .openapi(getApiLedgerAccountSettlementsIdRoute, getApiLedgerAccountSettlementsIdRouteHandler)
  .openapi(patchApiLedgerAccountSettlementsIdRoute, patchApiLedgerAccountSettlementsIdRouteHandler)
  .openapi(
    patchApiLedgerAccountSettlementsIdLedgerEntriesRoute,
    patchApiLedgerAccountSettlementsIdLedgerEntriesRouteHandler,
  )
  .openapi(
    deleteApiLedgerAccountSettlementsIdLedgerEntriesRoute,
    deleteApiLedgerAccountSettlementsIdLedgerEntriesRouteHandler,
  )
  .openapi(postApiLedgerAccountStatementsRoute, postApiLedgerAccountStatementsRouteHandler)
  .openapi(getApiLedgerAccountStatementsIdRoute, getApiLedgerAccountStatementsIdRouteHandler)
  .openapi(getApiLedgerAccountsRoute, getApiLedgerAccountsRouteHandler)
  .openapi(postApiLedgerAccountsRoute, postApiLedgerAccountsRouteHandler)
  .openapi(getApiLedgerAccountsIdRoute, getApiLedgerAccountsIdRouteHandler)
  .openapi(patchApiLedgerAccountsIdRoute, patchApiLedgerAccountsIdRouteHandler)
  .openapi(deleteApiLedgerAccountsIdRoute, deleteApiLedgerAccountsIdRouteHandler)
  .openapi(getApiLedgerEntriesRoute, getApiLedgerEntriesRouteHandler)
  .openapi(getApiLedgerEntriesIdRoute, getApiLedgerEntriesIdRouteHandler)
  .openapi(patchApiLedgerEntriesIdRoute, patchApiLedgerEntriesIdRouteHandler)
  .openapi(getApiLedgerTransactionVersionsRoute, getApiLedgerTransactionVersionsRouteHandler)
  .openapi(getApiLedgerTransactionsRoute, getApiLedgerTransactionsRouteHandler)
  .openapi(postApiLedgerTransactionsRoute, postApiLedgerTransactionsRouteHandler)
  .openapi(getApiLedgerTransactionsIdRoute, getApiLedgerTransactionsIdRouteHandler)
  .openapi(patchApiLedgerTransactionsIdRoute, patchApiLedgerTransactionsIdRouteHandler)
  .openapi(
    postApiLedgerTransactionsIdPartialPostRoute,
    postApiLedgerTransactionsIdPartialPostRouteHandler,
  )
  .openapi(
    postApiLedgerTransactionsIdReversalRoute,
    postApiLedgerTransactionsIdReversalRouteHandler,
  )
  .openapi(getApiLedgerTransactionsIdVersionsRoute, getApiLedgerTransactionsIdVersionsRouteHandler)
  .openapi(getApiLedgersRoute, getApiLedgersRouteHandler)
  .openapi(postApiLedgersRoute, postApiLedgersRouteHandler)
  .openapi(getApiLedgersIdRoute, getApiLedgersIdRouteHandler)
  .openapi(patchApiLedgersIdRoute, patchApiLedgersIdRouteHandler)
  .openapi(deleteApiLedgersIdRoute, deleteApiLedgersIdRouteHandler)
  .openapi(getApiLegalEntitiesRoute, getApiLegalEntitiesRouteHandler)
  .openapi(postApiLegalEntitiesRoute, postApiLegalEntitiesRouteHandler)
  .openapi(getApiLegalEntitiesIdRoute, getApiLegalEntitiesIdRouteHandler)
  .openapi(patchApiLegalEntitiesIdRoute, patchApiLegalEntitiesIdRouteHandler)
  .openapi(postApiLegalEntityAssociationsRoute, postApiLegalEntityAssociationsRouteHandler)
  .openapi(deleteApiLegalEntityAssociationsIdRoute, deleteApiLegalEntityAssociationsIdRouteHandler)
  .openapi(getApiPaymentActionsRoute, getApiPaymentActionsRouteHandler)
  .openapi(postApiPaymentActionsRoute, postApiPaymentActionsRouteHandler)
  .openapi(getApiPaymentActionsIdRoute, getApiPaymentActionsIdRouteHandler)
  .openapi(patchApiPaymentActionsIdRoute, patchApiPaymentActionsIdRouteHandler)
  .openapi(getApiPaymentFlowsRoute, getApiPaymentFlowsRouteHandler)
  .openapi(postApiPaymentFlowsRoute, postApiPaymentFlowsRouteHandler)
  .openapi(getApiPaymentFlowsIdRoute, getApiPaymentFlowsIdRouteHandler)
  .openapi(patchApiPaymentFlowsIdRoute, patchApiPaymentFlowsIdRouteHandler)
  .openapi(getApiPaymentOrdersRoute, getApiPaymentOrdersRouteHandler)
  .openapi(postApiPaymentOrdersRoute, postApiPaymentOrdersRouteHandler)
  .openapi(postApiPaymentOrdersCreateAsyncRoute, postApiPaymentOrdersCreateAsyncRouteHandler)
  .openapi(getApiPaymentOrdersIdRoute, getApiPaymentOrdersIdRouteHandler)
  .openapi(patchApiPaymentOrdersIdRoute, patchApiPaymentOrdersIdRouteHandler)
  .openapi(
    getApiPaymentOrdersPaymentOrderIdReversalsRoute,
    getApiPaymentOrdersPaymentOrderIdReversalsRouteHandler,
  )
  .openapi(
    postApiPaymentOrdersPaymentOrderIdReversalsRoute,
    postApiPaymentOrdersPaymentOrderIdReversalsRouteHandler,
  )
  .openapi(
    getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRoute,
    getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRouteHandler,
  )
  .openapi(getApiPaymentReferencesRoute, getApiPaymentReferencesRouteHandler)
  .openapi(getApiPaymentReferencesIdRoute, getApiPaymentReferencesIdRouteHandler)
  .openapi(getApiPingRoute, getApiPingRouteHandler)
  .openapi(getApiReturnsRoute, getApiReturnsRouteHandler)
  .openapi(postApiReturnsRoute, postApiReturnsRouteHandler)
  .openapi(getApiReturnsIdRoute, getApiReturnsIdRouteHandler)
  .openapi(patchApiSimulationsCasesIdResolveRoute, patchApiSimulationsCasesIdResolveRouteHandler)
  .openapi(
    postApiSimulationsIncomingPaymentDetailsCreateAsyncRoute,
    postApiSimulationsIncomingPaymentDetailsCreateAsyncRouteHandler,
  )
  .openapi(
    patchApiSimulationsLegalEntitiesIdUpdateStatusRoute,
    patchApiSimulationsLegalEntitiesIdUpdateStatusRouteHandler,
  )
  .openapi(getApiTransactionLineItemsRoute, getApiTransactionLineItemsRouteHandler)
  .openapi(postApiTransactionLineItemsRoute, postApiTransactionLineItemsRouteHandler)
  .openapi(getApiTransactionLineItemsIdRoute, getApiTransactionLineItemsIdRouteHandler)
  .openapi(deleteApiTransactionLineItemsIdRoute, deleteApiTransactionLineItemsIdRouteHandler)
  .openapi(getApiTransactionsRoute, getApiTransactionsRouteHandler)
  .openapi(postApiTransactionsRoute, postApiTransactionsRouteHandler)
  .openapi(getApiTransactionsIdRoute, getApiTransactionsIdRouteHandler)
  .openapi(patchApiTransactionsIdRoute, patchApiTransactionsIdRouteHandler)
  .openapi(deleteApiTransactionsIdRoute, deleteApiTransactionsIdRouteHandler)
  .openapi(
    getApiTransactionsTransactionIdLineItemsRoute,
    getApiTransactionsTransactionIdLineItemsRouteHandler,
  )
  .openapi(getApiValidationsRoutingNumbersRoute, getApiValidationsRoutingNumbersRouteHandler)
  .openapi(getApiVirtualAccountSettingsRoute, getApiVirtualAccountSettingsRouteHandler)
  .openapi(postApiVirtualAccountSettingsRoute, postApiVirtualAccountSettingsRouteHandler)
  .openapi(getApiVirtualAccountsRoute, getApiVirtualAccountsRouteHandler)
  .openapi(postApiVirtualAccountsRoute, postApiVirtualAccountsRouteHandler)
  .openapi(getApiVirtualAccountsIdRoute, getApiVirtualAccountsIdRouteHandler)
  .openapi(patchApiVirtualAccountsIdRoute, patchApiVirtualAccountsIdRouteHandler)
  .openapi(deleteApiVirtualAccountsIdRoute, deleteApiVirtualAccountsIdRouteHandler)
  .openapi(
    getApiAccountsTypeAccountIdAccountDetailsRoute,
    getApiAccountsTypeAccountIdAccountDetailsRouteHandler,
  )
  .openapi(
    postApiAccountsTypeAccountIdAccountDetailsRoute,
    postApiAccountsTypeAccountIdAccountDetailsRouteHandler,
  )
  .openapi(
    getApiAccountsTypeAccountIdAccountDetailsIdRoute,
    getApiAccountsTypeAccountIdAccountDetailsIdRouteHandler,
  )
  .openapi(
    deleteApiAccountsTypeAccountIdAccountDetailsIdRoute,
    deleteApiAccountsTypeAccountIdAccountDetailsIdRouteHandler,
  )
  .openapi(
    getApiAccountsTypeAccountIdRoutingDetailsRoute,
    getApiAccountsTypeAccountIdRoutingDetailsRouteHandler,
  )
  .openapi(
    postApiAccountsTypeAccountIdRoutingDetailsRoute,
    postApiAccountsTypeAccountIdRoutingDetailsRouteHandler,
  )
  .openapi(
    getApiAccountsTypeAccountIdRoutingDetailsIdRoute,
    getApiAccountsTypeAccountIdRoutingDetailsIdRouteHandler,
  )
  .openapi(
    deleteApiAccountsTypeAccountIdRoutingDetailsIdRoute,
    deleteApiAccountsTypeAccountIdRoutingDetailsIdRouteHandler,
  )
  .openapi(
    getApiDocumentableTypeDocumentableIdDocumentsRoute,
    getApiDocumentableTypeDocumentableIdDocumentsRouteHandler,
  )
  .openapi(
    postApiDocumentableTypeDocumentableIdDocumentsRoute,
    postApiDocumentableTypeDocumentableIdDocumentsRouteHandler,
  )
  .openapi(
    getApiDocumentableTypeDocumentableIdDocumentsIdRoute,
    getApiDocumentableTypeDocumentableIdDocumentsIdRouteHandler,
  )
  .openapi(
    getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRoute,
    getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRouteHandler,
  )
  .openapi(
    getApiItemizableTypeItemizableIdLineItemsRoute,
    getApiItemizableTypeItemizableIdLineItemsRouteHandler,
  )
  .openapi(
    getApiItemizableTypeItemizableIdLineItemsIdRoute,
    getApiItemizableTypeItemizableIdLineItemsIdRouteHandler,
  )
  .openapi(
    patchApiItemizableTypeItemizableIdLineItemsIdRoute,
    patchApiItemizableTypeItemizableIdLineItemsIdRouteHandler,
  )

export default app
