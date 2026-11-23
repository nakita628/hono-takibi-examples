import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AccountingCodesAcIdRoute,
  deleteV1AccountingPeriodsApIdRoute,
  deleteV1AttachmentsAttachmentIdRoute,
  deleteV1CreditmemosCreditMemoIdRoute,
  deleteV1DebitmemosDebitMemoIdRoute,
  deleteV1DocumentPropertiesDocumentPropertiesIdRoute,
  deleteV1EntitiesIdRoute,
  deleteV1JournalEntriesJeNumberRoute,
  deleteV1JournalRunsJrNumberRoute,
  deleteV1ObjectAccountIdRoute,
  deleteV1ObjectAmendmentIdRoute,
  deleteV1ObjectBillRunIdRoute,
  deleteV1ObjectContactIdRoute,
  deleteV1ObjectFeatureIdRoute,
  deleteV1ObjectInvoiceAdjustmentIdRoute,
  deleteV1ObjectInvoiceIdRoute,
  deleteV1ObjectInvoiceItemAdjustmentIdRoute,
  deleteV1ObjectPaymentIdRoute,
  deleteV1ObjectPaymentMethodIdRoute,
  deleteV1ObjectProductFeatureIdRoute,
  deleteV1ObjectProductIdRoute,
  deleteV1ObjectProductRatePlanChargeIdRoute,
  deleteV1ObjectProductRatePlanIdRoute,
  deleteV1ObjectRefundIdRoute,
  deleteV1ObjectSubscriptionIdRoute,
  deleteV1ObjectTaxationItemIdRoute,
  deleteV1ObjectUnitOfMeasureIdRoute,
  deleteV1ObjectUsageIdRoute,
  deleteV1OrdersOrderNumberRoute,
  deleteV1PaymentMethodsPaymentMethodIdRoute,
  deleteV1PaymentRunsPaymentRunIdRoute,
  deleteV1PaymentsPaymentIdRoute,
  deleteV1RefundsRefundIdRoute,
  deleteV1RevenueSchedulesRsNumberRoute,
  deleteV1SequenceSetsIdRoute,
  deleteV1TaxationitemsIdRoute,
  getV1AccountingCodesAcIdRoute,
  getV1AccountingCodesRoute,
  getV1AccountingPeriodsApIdRoute,
  getV1AccountingPeriodsRoute,
  getV1AccountsAccountKeyRoute,
  getV1AccountsAccountKeySummaryRoute,
  getV1AccountsBillingDocumentsFilesDeletionJobsJobIdRoute,
  getV1AmendmentsAmendmentKeyRoute,
  getV1AmendmentsSubscriptionsSubscriptionIdRoute,
  getV1AsyncJobsJobIdRoute,
  getV1AttachmentsAttachmentIdRoute,
  getV1AttachmentsObjectTypeObjectKeyRoute,
  getV1BillingDocumentsRoute,
  getV1BillingPreviewRunsBillingPreviewRunIdRoute,
  getV1BulkBulkKeyRoute,
  getV1CatalogProductProductIdRoute,
  getV1CatalogProductsRoute,
  getV1ChargeRevenueSummariesCrsNumberRoute,
  getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyRoute,
  getV1CreditmemosCreditMemoIdItemsCmitemidRoute,
  getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsRoute,
  getV1CreditmemosCreditMemoIdItemsRoute,
  getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidRoute,
  getV1CreditmemosCreditMemoIdPartsPartidItempartsRoute,
  getV1CreditmemosCreditMemoIdPartsPartidRoute,
  getV1CreditmemosCreditMemoIdPartsRoute,
  getV1CreditmemosCreditMemoIdRoute,
  getV1CreditmemosRoute,
  getV1CustomExchangeRatesCurrencyRoute,
  getV1DebitmemosDebitMemoIdApplicationPartsRoute,
  getV1DebitmemosDebitMemoIdItemsDmitemidRoute,
  getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsRoute,
  getV1DebitmemosDebitMemoIdItemsRoute,
  getV1DebitmemosDebitMemoIdRoute,
  getV1DebitmemosRoute,
  getV1DescribeObjectRoute,
  getV1DocumentPropertiesDocumentTypeDocumentIdRoute,
  getV1EntitiesIdRoute,
  getV1EntitiesRoute,
  getV1EntityConnectionsRoute,
  getV1FilesFileIdRoute,
  getV1HostedpagesRoute,
  getV1InvoicesInvoiceIdApplicationPartsRoute,
  getV1InvoicesInvoiceIdFilesRoute,
  getV1InvoicesInvoiceIdItemsItemIdTaxationItemsRoute,
  getV1InvoicesInvoiceIdItemsRoute,
  getV1JournalEntriesJeNumberRoute,
  getV1JournalEntriesJournalRunsJrNumberRoute,
  getV1JournalRunsJrNumberRoute,
  getV1NotificationHistoryCalloutRoute,
  getV1NotificationHistoryEmailRoute,
  getV1ObjectAccountIdRoute,
  getV1ObjectAmendmentIdRoute,
  getV1ObjectBillRunIdRoute,
  getV1ObjectCommunicationProfileIdRoute,
  getV1ObjectContactIdRoute,
  getV1ObjectCreditBalanceAdjustmentIdRoute,
  getV1ObjectExportIdRoute,
  getV1ObjectFeatureIdRoute,
  getV1ObjectImportIdRoute,
  getV1ObjectInvoiceAdjustmentIdRoute,
  getV1ObjectInvoiceIdRoute,
  getV1ObjectInvoiceItemAdjustmentIdRoute,
  getV1ObjectInvoiceItemIdRoute,
  getV1ObjectInvoicePaymentIdRoute,
  getV1ObjectInvoiceSplitIdRoute,
  getV1ObjectInvoiceSplitItemIdRoute,
  getV1ObjectPaymentIdRoute,
  getV1ObjectPaymentMethodIdRoute,
  getV1ObjectPaymentMethodSnapshotIdRoute,
  getV1ObjectPaymentMethodTransactionLogIdRoute,
  getV1ObjectPaymentTransactionLogIdRoute,
  getV1ObjectProductFeatureIdRoute,
  getV1ObjectProductIdRoute,
  getV1ObjectProductRatePlanChargeIdRoute,
  getV1ObjectProductRatePlanChargeTierIdRoute,
  getV1ObjectProductRatePlanIdRoute,
  getV1ObjectRatePlanChargeIdRoute,
  getV1ObjectRatePlanChargeTierIdRoute,
  getV1ObjectRatePlanIdRoute,
  getV1ObjectRefundIdRoute,
  getV1ObjectRefundInvoicePaymentIdRoute,
  getV1ObjectRefundTransactionLogIdRoute,
  getV1ObjectSubscriptionIdRoute,
  getV1ObjectSubscriptionProductFeatureIdRoute,
  getV1ObjectTaxationItemIdRoute,
  getV1ObjectUnitOfMeasureIdRoute,
  getV1ObjectUsageIdRoute,
  getV1OrderLineItemsItemIdRoute,
  getV1OrdersInvoiceOwnerAccountNumberRoute,
  getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberRoute,
  getV1OrdersOrderNumberRampMetricsRoute,
  getV1OrdersOrderNumberRoute,
  getV1OrdersRoute,
  getV1OrdersSubscriptionOwnerAccountNumberRoute,
  getV1OrdersSubscriptionSubscriptionNumberRoute,
  getV1OrdersTermSubscriptionNumberRoute,
  getV1PaymentgatewaysRoute,
  getV1PaymentMethodsCreditCardsAccountsAccountKeyRoute,
  getV1PaymentMethodsPaymentMethodIdProfilesRoute,
  getV1PaymentMethodsPaymentMethodIdRoute,
  getV1PaymentRunsPaymentRunIdDataRoute,
  getV1PaymentRunsPaymentRunIdRoute,
  getV1PaymentRunsPaymentRunIdSummaryRoute,
  getV1PaymentRunsRoute,
  getV1PaymentsPaymentIdPartsPartidItempartsItempartidRoute,
  getV1PaymentsPaymentIdPartsPartidItempartsRoute,
  getV1PaymentsPaymentIdPartsPartidRoute,
  getV1PaymentsPaymentIdPartsRoute,
  getV1PaymentsPaymentIdRoute,
  getV1PaymentsRoute,
  getV1RampsRampNumberRampMetricsRoute,
  getV1RampsRampNumberRoute,
  getV1RateplanProductIdProductRatePlanRoute,
  getV1RefundsRefundIdPartsRefundpartidItempartsItempartidRoute,
  getV1RefundsRefundIdPartsRefundpartidItempartsRoute,
  getV1RefundsRefundIdPartsRefundpartidRoute,
  getV1RefundsRefundIdPartsRoute,
  getV1RefundsRefundIdRoute,
  getV1RefundsRoute,
  getV1RevenueEventsEventNumberRoute,
  getV1RevenueEventsRevenueSchedulesRsNumberRoute,
  getV1RevenueItemsChargeRevenueSummariesCrsNumberRoute,
  getV1RevenueItemsRevenueEventsEventNumberRoute,
  getV1RevenueItemsRevenueSchedulesRsNumberRoute,
  getV1RevenueRecognitionRulesProductChargesChargeKeyRoute,
  getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyRoute,
  getV1RevenueSchedulesCreditMemoItemsCmiIdRoute,
  getV1RevenueSchedulesDebitMemoItemsDmiIdRoute,
  getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute,
  getV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute,
  getV1RevenueSchedulesProductChargesChargeKeyAccountKeyRoute,
  getV1RevenueSchedulesRsNumberRoute,
  getV1RevenueSchedulesSubscriptionChargesChargeKeyRoute,
  getV1SequenceSetsIdRoute,
  getV1SequenceSetsRoute,
  getV1SettingsFinanceRevenueAutomationStartDateRoute,
  getV1SubscriptionsAccountsAccountKeyRoute,
  getV1SubscriptionsSubscriptionKeyRampMetricsRoute,
  getV1SubscriptionsSubscriptionKeyRampsRoute,
  getV1SubscriptionsSubscriptionKeyRoute,
  getV1SubscriptionsSubscriptionKeyVersionsVersionRoute,
  getV1TaxationitemsIdRoute,
  getV1TransactionsInvoicesAccountsAccountKeyRoute,
  getV1TransactionsPaymentsAccountsAccountKeyRoute,
  getV1UsageAccountsAccountKeyRoute,
  getV1UsersUsernameAccessibleEntitiesRoute,
  postV1AccountingCodesRoute,
  postV1AccountingPeriodsRoute,
  postV1AccountsBillingDocumentsFilesDeletionJobsRoute,
  postV1AccountsIdBillingDocumentsGenerateRoute,
  postV1AccountsRoute,
  postV1ActionAmendRoute,
  postV1ActionCreateRoute,
  postV1ActionDeleteRoute,
  postV1ActionExecuteRoute,
  postV1ActionGenerateRoute,
  postV1ActionQueryMoreRoute,
  postV1ActionQueryRoute,
  postV1ActionSubscribeRoute,
  postV1ActionUpdateRoute,
  postV1AsyncOrdersPreviewRoute,
  postV1AsyncOrdersRoute,
  postV1AttachmentsRoute,
  postV1BillingPreviewRunsRoute,
  postV1BillRunsBillRunIdEmailsRoute,
  postV1BulkRoute,
  postV1CatalogProductsProductIdShareRoute,
  postV1ConnectionsRoute,
  postV1CreditmemosCreditMemoIdEmailsRoute,
  postV1CreditmemosCreditMemoIdFilesRoute,
  postV1CreditmemosCreditMemoIdPdfsRoute,
  postV1CreditmemosCreditmemoIdRefundsRoute,
  postV1CreditmemosCreditMemoIdTaxationitemsRoute,
  postV1CreditmemosRoute,
  postV1DebitmemosDebitMemoIdCollectRoute,
  postV1DebitmemosDebitMemoIdEmailsRoute,
  postV1DebitmemosDebitMemoIdFilesRoute,
  postV1DebitmemosDebitMemoIdPdfsRoute,
  postV1DebitmemosDebitMemoIdTaxationitemsRoute,
  postV1DebitmemosRoute,
  postV1DocumentPropertiesRoute,
  postV1EntitiesRoute,
  postV1EntityConnectionsRoute,
  postV1GatewaySettlementPaymentsPaymentIdChargebackRoute,
  postV1GatewaySettlementPaymentsPaymentIdRejectRoute,
  postV1GatewaySettlementPaymentsPaymentIdSettleRoute,
  postV1HmacSignaturesRoute,
  postV1InvoicesInvoiceIdCreditmemosRoute,
  postV1InvoicesInvoiceIdDebitmemosRoute,
  postV1InvoicesInvoiceIdEmailsRoute,
  postV1InvoicesInvoiceIdFilesRoute,
  postV1InvoicesRoute,
  postV1JournalEntriesRoute,
  postV1JournalRunsRoute,
  postV1ObjectAccountRoute,
  postV1ObjectBillRunRoute,
  postV1ObjectContactRoute,
  postV1ObjectCreditBalanceAdjustmentRoute,
  postV1ObjectExportRoute,
  postV1ObjectFeatureRoute,
  postV1ObjectImportRoute,
  postV1ObjectInvoiceAdjustmentRoute,
  postV1ObjectInvoicePaymentRoute,
  postV1ObjectPaymentMethodRoute,
  postV1ObjectPaymentRoute,
  postV1ObjectProductRatePlanChargeRoute,
  postV1ObjectProductRatePlanRoute,
  postV1ObjectProductRoute,
  postV1ObjectRefundRoute,
  postV1ObjectTaxationItemRoute,
  postV1ObjectUnitOfMeasureRoute,
  postV1ObjectUsageRoute,
  postV1OperationsBillingPreviewRoute,
  postV1OperationsInvoiceCollectRoute,
  postV1OrderLineItemsBulkRoute,
  postV1OrdersPreviewRoute,
  postV1OrdersRoute,
  postV1PaymentMethodsCreditCardsRoute,
  postV1PaymentMethodsDecryptionRoute,
  postV1PaymentMethodsPaymentMethodIdAuthorizeRoute,
  postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelRoute,
  postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireRoute,
  postV1PaymentMethodsPaymentMethodIdProfilesRoute,
  postV1PaymentMethodsPaymentMethodIdVoidAuthorizeRoute,
  postV1PaymentMethodsRoute,
  postV1PaymentRunsRoute,
  postV1PaymentsPaymentIdRefundsRoute,
  postV1PaymentsRoute,
  postV1QuotesDocumentRoute,
  postV1RefundsRefundIdReconcileRoute,
  postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesCreditMemoItemsCmiIdRoute,
  postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesDebitMemoItemsDmiIdRoute,
  postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute,
  postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute,
  postV1RevenueSchedulesSubscriptionChargesChargeKeyRoute,
  postV1RsaSignaturesDecryptRoute,
  postV1RsaSignaturesRoute,
  postV1SequenceSetsRoute,
  postV1SubscriptionsPreviewRoute,
  postV1SubscriptionsRoute,
  postV1UsageRoute,
  putV1AccountingCodesAcIdActivateRoute,
  putV1AccountingCodesAcIdDeactivateRoute,
  putV1AccountingCodesAcIdRoute,
  putV1AccountingPeriodsApIdCloseRoute,
  putV1AccountingPeriodsApIdPendingCloseRoute,
  putV1AccountingPeriodsApIdReopenRoute,
  putV1AccountingPeriodsApIdRoute,
  putV1AccountingPeriodsApIdRunTrialBalanceRoute,
  putV1AccountsAccountKeyRoute,
  putV1AttachmentsAttachmentIdRoute,
  putV1BulkBulkKeyStopRoute,
  putV1ContactsContactIdScrubRoute,
  putV1CreditmemosCreditMemoIdApplyRoute,
  putV1CreditmemosCreditMemoIdCancelRoute,
  putV1CreditmemosCreditMemoIdPostRoute,
  putV1CreditmemosCreditMemoIdRoute,
  putV1CreditmemosCreditMemoIdUnapplyRoute,
  putV1CreditmemosCreditMemoIdUnpostRoute,
  putV1DebitmemosDebitMemoIdCancelRoute,
  putV1DebitmemosDebitMemoIdPostRoute,
  putV1DebitmemosDebitMemoIdRoute,
  putV1DebitmemosDebitMemoIdUnpostRoute,
  putV1DebitmemosRoute,
  putV1DocumentPropertiesDocumentPropertiesIdRoute,
  putV1EntitiesIdProvisionRoute,
  putV1EntitiesIdRoute,
  putV1EntityConnectionsConnectionIdAcceptRoute,
  putV1EntityConnectionsConnectionIdDenyRoute,
  putV1EntityConnectionsConnectionIdDisconnectRoute,
  putV1InvoicesInvoiceIdReverseRoute,
  putV1InvoicesInvoiceIdRoute,
  putV1InvoicesInvoiceIdWriteOffRoute,
  putV1InvoicesRoute,
  putV1JournalEntriesJeNumberBasicInformationRoute,
  putV1JournalEntriesJeNumberCancelRoute,
  putV1JournalRunsJrNumberCancelRoute,
  putV1ObjectAccountIdRoute,
  putV1ObjectAmendmentIdRoute,
  putV1ObjectBillRunIdRoute,
  putV1ObjectContactIdRoute,
  putV1ObjectCreditBalanceAdjustmentIdRoute,
  putV1ObjectFeatureIdRoute,
  putV1ObjectInvoiceAdjustmentIdRoute,
  putV1ObjectInvoiceIdRoute,
  putV1ObjectInvoicePaymentIdRoute,
  putV1ObjectPaymentIdRoute,
  putV1ObjectPaymentMethodIdRoute,
  putV1ObjectProductIdRoute,
  putV1ObjectProductRatePlanChargeIdRoute,
  putV1ObjectProductRatePlanChargeTierIdRoute,
  putV1ObjectProductRatePlanIdRoute,
  putV1ObjectRatePlanChargeIdRoute,
  putV1ObjectRefundIdRoute,
  putV1ObjectSubscriptionIdRoute,
  putV1ObjectTaxationItemIdRoute,
  putV1ObjectUnitOfMeasureIdRoute,
  putV1ObjectUsageIdRoute,
  putV1OrderLineItemsItemIdRoute,
  putV1OrdersOrderNumberCustomFieldsRoute,
  putV1OrdersOrderNumberTriggerDatesRoute,
  putV1PaymentMethodsCreditCardsPaymentMethodIdRoute,
  putV1PaymentMethodsPaymentMethodIdRoute,
  putV1PaymentMethodsPaymentMethodIdScrubRoute,
  putV1PaymentMethodsPaymentMethodIdVerifyRoute,
  putV1PaymentRunsPaymentRunIdRoute,
  putV1PaymentsPaymentIdApplyRoute,
  putV1PaymentsPaymentIdCancelRoute,
  putV1PaymentsPaymentIdRoute,
  putV1PaymentsPaymentIdTransferRoute,
  putV1PaymentsPaymentIdUnapplyRoute,
  putV1RefundsRefundIdCancelRoute,
  putV1RefundsRefundIdRoute,
  putV1RevenueItemsRevenueEventsEventNumberRoute,
  putV1RevenueItemsRevenueSchedulesRsNumberRoute,
  putV1RevenueSchedulesRsNumberBasicInformationRoute,
  putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsRoute,
  putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateRoute,
  putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeRoute,
  putV1RevproAccountingCodesRoute,
  putV1SequenceSetsIdRoute,
  putV1SubscriptionsSubscriptionKeyCancelRoute,
  putV1SubscriptionsSubscriptionKeyRenewRoute,
  putV1SubscriptionsSubscriptionKeyResumeRoute,
  putV1SubscriptionsSubscriptionKeyRoute,
  putV1SubscriptionsSubscriptionKeySuspendRoute,
  putV1SubscriptionsSubscriptionNumberCustomFieldsRoute,
  putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsRoute,
  putV1TaxationitemsIdRoute,
  putV1UsersUsernameAcceptAccessRoute,
  putV1UsersUsernameDenyAccessRoute,
  putV1UsersUsernameRequestAccessRoute,
} from '../routes'

export const getV1AccountingCodesRouteHandler: RouteHandler<
  typeof getV1AccountingCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountingCodesRouteHandler: RouteHandler<
  typeof postV1AccountingCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountingCodesAcIdRouteHandler: RouteHandler<
  typeof deleteV1AccountingCodesAcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountingCodesAcIdRouteHandler: RouteHandler<
  typeof getV1AccountingCodesAcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingCodesAcIdRouteHandler: RouteHandler<
  typeof putV1AccountingCodesAcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingCodesAcIdActivateRouteHandler: RouteHandler<
  typeof putV1AccountingCodesAcIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingCodesAcIdDeactivateRouteHandler: RouteHandler<
  typeof putV1AccountingCodesAcIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountingPeriodsRouteHandler: RouteHandler<
  typeof getV1AccountingPeriodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountingPeriodsRouteHandler: RouteHandler<
  typeof postV1AccountingPeriodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountingPeriodsApIdRouteHandler: RouteHandler<
  typeof deleteV1AccountingPeriodsApIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountingPeriodsApIdRouteHandler: RouteHandler<
  typeof getV1AccountingPeriodsApIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingPeriodsApIdRouteHandler: RouteHandler<
  typeof putV1AccountingPeriodsApIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingPeriodsApIdCloseRouteHandler: RouteHandler<
  typeof putV1AccountingPeriodsApIdCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingPeriodsApIdPendingCloseRouteHandler: RouteHandler<
  typeof putV1AccountingPeriodsApIdPendingCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingPeriodsApIdReopenRouteHandler: RouteHandler<
  typeof putV1AccountingPeriodsApIdReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountingPeriodsApIdRunTrialBalanceRouteHandler: RouteHandler<
  typeof putV1AccountingPeriodsApIdRunTrialBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsRouteHandler: RouteHandler<typeof postV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsBillingDocumentsFilesDeletionJobsRouteHandler: RouteHandler<
  typeof postV1AccountsBillingDocumentsFilesDeletionJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsBillingDocumentsFilesDeletionJobsJobIdRouteHandler: RouteHandler<
  typeof getV1AccountsBillingDocumentsFilesDeletionJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountKeyRouteHandler: RouteHandler<
  typeof getV1AccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AccountsAccountKeyRouteHandler: RouteHandler<
  typeof putV1AccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountKeySummaryRouteHandler: RouteHandler<
  typeof getV1AccountsAccountKeySummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsIdBillingDocumentsGenerateRouteHandler: RouteHandler<
  typeof postV1AccountsIdBillingDocumentsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActionAmendRouteHandler: RouteHandler<typeof postV1ActionAmendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ActionCreateRouteHandler: RouteHandler<typeof postV1ActionCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ActionDeleteRouteHandler: RouteHandler<typeof postV1ActionDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ActionExecuteRouteHandler: RouteHandler<
  typeof postV1ActionExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActionGenerateRouteHandler: RouteHandler<
  typeof postV1ActionGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActionQueryRouteHandler: RouteHandler<typeof postV1ActionQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ActionQueryMoreRouteHandler: RouteHandler<
  typeof postV1ActionQueryMoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActionSubscribeRouteHandler: RouteHandler<
  typeof postV1ActionSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActionUpdateRouteHandler: RouteHandler<typeof postV1ActionUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AmendmentsSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getV1AmendmentsSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AmendmentsAmendmentKeyRouteHandler: RouteHandler<
  typeof getV1AmendmentsAmendmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AsyncJobsJobIdRouteHandler: RouteHandler<
  typeof getV1AsyncJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AsyncOrdersRouteHandler: RouteHandler<typeof postV1AsyncOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AsyncOrdersPreviewRouteHandler: RouteHandler<
  typeof postV1AsyncOrdersPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttachmentsRouteHandler: RouteHandler<typeof postV1AttachmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteV1AttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getV1AttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof putV1AttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttachmentsObjectTypeObjectKeyRouteHandler: RouteHandler<
  typeof getV1AttachmentsObjectTypeObjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillRunsBillRunIdEmailsRouteHandler: RouteHandler<
  typeof postV1BillRunsBillRunIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingDocumentsRouteHandler: RouteHandler<
  typeof getV1BillingDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingPreviewRunsRouteHandler: RouteHandler<
  typeof postV1BillingPreviewRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingPreviewRunsBillingPreviewRunIdRouteHandler: RouteHandler<
  typeof getV1BillingPreviewRunsBillingPreviewRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BulkRouteHandler: RouteHandler<typeof postV1BulkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BulkBulkKeyRouteHandler: RouteHandler<typeof getV1BulkBulkKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1BulkBulkKeyStopRouteHandler: RouteHandler<
  typeof putV1BulkBulkKeyStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CatalogProductProductIdRouteHandler: RouteHandler<
  typeof getV1CatalogProductProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CatalogProductsRouteHandler: RouteHandler<
  typeof getV1CatalogProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CatalogProductsProductIdShareRouteHandler: RouteHandler<
  typeof postV1CatalogProductsProductIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyRouteHandler: RouteHandler<
  typeof getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargeRevenueSummariesCrsNumberRouteHandler: RouteHandler<
  typeof getV1ChargeRevenueSummariesCrsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsRouteHandler: RouteHandler<typeof postV1ConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1ContactsContactIdScrubRouteHandler: RouteHandler<
  typeof putV1ContactsContactIdScrubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosRouteHandler: RouteHandler<typeof getV1CreditmemosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemosRouteHandler: RouteHandler<typeof postV1CreditmemosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1CreditmemosCreditMemoIdRouteHandler: RouteHandler<
  typeof deleteV1CreditmemosCreditMemoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemosCreditMemoIdRouteHandler: RouteHandler<
  typeof putV1CreditmemosCreditMemoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemosCreditMemoIdApplyRouteHandler: RouteHandler<
  typeof putV1CreditmemosCreditMemoIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemosCreditMemoIdCancelRouteHandler: RouteHandler<
  typeof putV1CreditmemosCreditMemoIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemosCreditMemoIdEmailsRouteHandler: RouteHandler<
  typeof postV1CreditmemosCreditMemoIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemosCreditMemoIdFilesRouteHandler: RouteHandler<
  typeof postV1CreditmemosCreditMemoIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdItemsRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdItemsCmitemidRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdItemsCmitemidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdPartsRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdPartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdPartsPartidRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdPartsPartidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdPartsPartidItempartsRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdPartsPartidItempartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidRouteHandler: RouteHandler<
  typeof getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemosCreditMemoIdPdfsRouteHandler: RouteHandler<
  typeof postV1CreditmemosCreditMemoIdPdfsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemosCreditMemoIdPostRouteHandler: RouteHandler<
  typeof putV1CreditmemosCreditMemoIdPostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemosCreditMemoIdTaxationitemsRouteHandler: RouteHandler<
  typeof postV1CreditmemosCreditMemoIdTaxationitemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemosCreditMemoIdUnapplyRouteHandler: RouteHandler<
  typeof putV1CreditmemosCreditMemoIdUnapplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemosCreditMemoIdUnpostRouteHandler: RouteHandler<
  typeof putV1CreditmemosCreditMemoIdUnpostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemosCreditmemoIdRefundsRouteHandler: RouteHandler<
  typeof postV1CreditmemosCreditmemoIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomExchangeRatesCurrencyRouteHandler: RouteHandler<
  typeof getV1CustomExchangeRatesCurrencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebitmemosRouteHandler: RouteHandler<typeof getV1DebitmemosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DebitmemosRouteHandler: RouteHandler<typeof postV1DebitmemosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1DebitmemosRouteHandler: RouteHandler<typeof putV1DebitmemosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DebitmemosDebitMemoIdRouteHandler: RouteHandler<
  typeof deleteV1DebitmemosDebitMemoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebitmemosDebitMemoIdRouteHandler: RouteHandler<
  typeof getV1DebitmemosDebitMemoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DebitmemosDebitMemoIdRouteHandler: RouteHandler<
  typeof putV1DebitmemosDebitMemoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebitmemosDebitMemoIdApplicationPartsRouteHandler: RouteHandler<
  typeof getV1DebitmemosDebitMemoIdApplicationPartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DebitmemosDebitMemoIdCancelRouteHandler: RouteHandler<
  typeof putV1DebitmemosDebitMemoIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DebitmemosDebitMemoIdCollectRouteHandler: RouteHandler<
  typeof postV1DebitmemosDebitMemoIdCollectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DebitmemosDebitMemoIdEmailsRouteHandler: RouteHandler<
  typeof postV1DebitmemosDebitMemoIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DebitmemosDebitMemoIdFilesRouteHandler: RouteHandler<
  typeof postV1DebitmemosDebitMemoIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebitmemosDebitMemoIdItemsRouteHandler: RouteHandler<
  typeof getV1DebitmemosDebitMemoIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebitmemosDebitMemoIdItemsDmitemidRouteHandler: RouteHandler<
  typeof getV1DebitmemosDebitMemoIdItemsDmitemidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsRouteHandler: RouteHandler<
  typeof getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DebitmemosDebitMemoIdPdfsRouteHandler: RouteHandler<
  typeof postV1DebitmemosDebitMemoIdPdfsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DebitmemosDebitMemoIdPostRouteHandler: RouteHandler<
  typeof putV1DebitmemosDebitMemoIdPostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DebitmemosDebitMemoIdTaxationitemsRouteHandler: RouteHandler<
  typeof postV1DebitmemosDebitMemoIdTaxationitemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DebitmemosDebitMemoIdUnpostRouteHandler: RouteHandler<
  typeof putV1DebitmemosDebitMemoIdUnpostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DescribeObjectRouteHandler: RouteHandler<
  typeof getV1DescribeObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DocumentPropertiesRouteHandler: RouteHandler<
  typeof postV1DocumentPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DocumentPropertiesDocumentPropertiesIdRouteHandler: RouteHandler<
  typeof deleteV1DocumentPropertiesDocumentPropertiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DocumentPropertiesDocumentPropertiesIdRouteHandler: RouteHandler<
  typeof putV1DocumentPropertiesDocumentPropertiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DocumentPropertiesDocumentTypeDocumentIdRouteHandler: RouteHandler<
  typeof getV1DocumentPropertiesDocumentTypeDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EntitiesRouteHandler: RouteHandler<typeof getV1EntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EntitiesRouteHandler: RouteHandler<typeof postV1EntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EntitiesIdRouteHandler: RouteHandler<typeof deleteV1EntitiesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1EntitiesIdRouteHandler: RouteHandler<typeof getV1EntitiesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EntitiesIdRouteHandler: RouteHandler<typeof putV1EntitiesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EntitiesIdProvisionRouteHandler: RouteHandler<
  typeof putV1EntitiesIdProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EntityConnectionsRouteHandler: RouteHandler<
  typeof getV1EntityConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EntityConnectionsRouteHandler: RouteHandler<
  typeof postV1EntityConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EntityConnectionsConnectionIdAcceptRouteHandler: RouteHandler<
  typeof putV1EntityConnectionsConnectionIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EntityConnectionsConnectionIdDenyRouteHandler: RouteHandler<
  typeof putV1EntityConnectionsConnectionIdDenyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EntityConnectionsConnectionIdDisconnectRouteHandler: RouteHandler<
  typeof putV1EntityConnectionsConnectionIdDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesFileIdRouteHandler: RouteHandler<typeof getV1FilesFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GatewaySettlementPaymentsPaymentIdChargebackRouteHandler: RouteHandler<
  typeof postV1GatewaySettlementPaymentsPaymentIdChargebackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GatewaySettlementPaymentsPaymentIdRejectRouteHandler: RouteHandler<
  typeof postV1GatewaySettlementPaymentsPaymentIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GatewaySettlementPaymentsPaymentIdSettleRouteHandler: RouteHandler<
  typeof postV1GatewaySettlementPaymentsPaymentIdSettleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HmacSignaturesRouteHandler: RouteHandler<
  typeof postV1HmacSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HostedpagesRouteHandler: RouteHandler<typeof getV1HostedpagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesRouteHandler: RouteHandler<typeof postV1InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InvoicesRouteHandler: RouteHandler<typeof putV1InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof putV1InvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesInvoiceIdApplicationPartsRouteHandler: RouteHandler<
  typeof getV1InvoicesInvoiceIdApplicationPartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceIdCreditmemosRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceIdCreditmemosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceIdDebitmemosRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceIdDebitmemosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceIdEmailsRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesInvoiceIdFilesRouteHandler: RouteHandler<
  typeof getV1InvoicesInvoiceIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceIdFilesRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesInvoiceIdItemsRouteHandler: RouteHandler<
  typeof getV1InvoicesInvoiceIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesInvoiceIdItemsItemIdTaxationItemsRouteHandler: RouteHandler<
  typeof getV1InvoicesInvoiceIdItemsItemIdTaxationItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InvoicesInvoiceIdReverseRouteHandler: RouteHandler<
  typeof putV1InvoicesInvoiceIdReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InvoicesInvoiceIdWriteOffRouteHandler: RouteHandler<
  typeof putV1InvoicesInvoiceIdWriteOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JournalEntriesRouteHandler: RouteHandler<
  typeof postV1JournalEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JournalEntriesJournalRunsJrNumberRouteHandler: RouteHandler<
  typeof getV1JournalEntriesJournalRunsJrNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1JournalEntriesJeNumberRouteHandler: RouteHandler<
  typeof deleteV1JournalEntriesJeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JournalEntriesJeNumberRouteHandler: RouteHandler<
  typeof getV1JournalEntriesJeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1JournalEntriesJeNumberBasicInformationRouteHandler: RouteHandler<
  typeof putV1JournalEntriesJeNumberBasicInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1JournalEntriesJeNumberCancelRouteHandler: RouteHandler<
  typeof putV1JournalEntriesJeNumberCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JournalRunsRouteHandler: RouteHandler<typeof postV1JournalRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1JournalRunsJrNumberRouteHandler: RouteHandler<
  typeof deleteV1JournalRunsJrNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JournalRunsJrNumberRouteHandler: RouteHandler<
  typeof getV1JournalRunsJrNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1JournalRunsJrNumberCancelRouteHandler: RouteHandler<
  typeof putV1JournalRunsJrNumberCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NotificationHistoryCalloutRouteHandler: RouteHandler<
  typeof getV1NotificationHistoryCalloutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NotificationHistoryEmailRouteHandler: RouteHandler<
  typeof getV1NotificationHistoryEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectAccountRouteHandler: RouteHandler<
  typeof postV1ObjectAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectAccountIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectAccountIdRouteHandler: RouteHandler<
  typeof getV1ObjectAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectAccountIdRouteHandler: RouteHandler<
  typeof putV1ObjectAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectAmendmentIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectAmendmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectAmendmentIdRouteHandler: RouteHandler<
  typeof getV1ObjectAmendmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectAmendmentIdRouteHandler: RouteHandler<
  typeof putV1ObjectAmendmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectBillRunRouteHandler: RouteHandler<
  typeof postV1ObjectBillRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectBillRunIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectBillRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectBillRunIdRouteHandler: RouteHandler<
  typeof getV1ObjectBillRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectBillRunIdRouteHandler: RouteHandler<
  typeof putV1ObjectBillRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectCommunicationProfileIdRouteHandler: RouteHandler<
  typeof getV1ObjectCommunicationProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectContactRouteHandler: RouteHandler<
  typeof postV1ObjectContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectContactIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectContactIdRouteHandler: RouteHandler<
  typeof getV1ObjectContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectContactIdRouteHandler: RouteHandler<
  typeof putV1ObjectContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectCreditBalanceAdjustmentRouteHandler: RouteHandler<
  typeof postV1ObjectCreditBalanceAdjustmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectCreditBalanceAdjustmentIdRouteHandler: RouteHandler<
  typeof getV1ObjectCreditBalanceAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectCreditBalanceAdjustmentIdRouteHandler: RouteHandler<
  typeof putV1ObjectCreditBalanceAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectExportRouteHandler: RouteHandler<typeof postV1ObjectExportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ObjectExportIdRouteHandler: RouteHandler<
  typeof getV1ObjectExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectFeatureRouteHandler: RouteHandler<
  typeof postV1ObjectFeatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectFeatureIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectFeatureIdRouteHandler: RouteHandler<
  typeof getV1ObjectFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectFeatureIdRouteHandler: RouteHandler<
  typeof putV1ObjectFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectImportRouteHandler: RouteHandler<typeof postV1ObjectImportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ObjectImportIdRouteHandler: RouteHandler<
  typeof getV1ObjectImportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectInvoiceAdjustmentRouteHandler: RouteHandler<
  typeof postV1ObjectInvoiceAdjustmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectInvoiceAdjustmentIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectInvoiceAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoiceAdjustmentIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoiceAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectInvoiceAdjustmentIdRouteHandler: RouteHandler<
  typeof putV1ObjectInvoiceAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectInvoiceItemAdjustmentIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectInvoiceItemAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoiceItemAdjustmentIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoiceItemAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoiceItemIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoiceItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectInvoicePaymentRouteHandler: RouteHandler<
  typeof postV1ObjectInvoicePaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoicePaymentIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoicePaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectInvoicePaymentIdRouteHandler: RouteHandler<
  typeof putV1ObjectInvoicePaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoiceSplitItemIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoiceSplitItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoiceSplitIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoiceSplitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectInvoiceIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectInvoiceIdRouteHandler: RouteHandler<
  typeof getV1ObjectInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectInvoiceIdRouteHandler: RouteHandler<
  typeof putV1ObjectInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectPaymentRouteHandler: RouteHandler<
  typeof postV1ObjectPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectPaymentMethodRouteHandler: RouteHandler<
  typeof postV1ObjectPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectPaymentMethodSnapshotIdRouteHandler: RouteHandler<
  typeof getV1ObjectPaymentMethodSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectPaymentMethodTransactionLogIdRouteHandler: RouteHandler<
  typeof getV1ObjectPaymentMethodTransactionLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectPaymentMethodIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectPaymentMethodIdRouteHandler: RouteHandler<
  typeof getV1ObjectPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectPaymentMethodIdRouteHandler: RouteHandler<
  typeof putV1ObjectPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectPaymentTransactionLogIdRouteHandler: RouteHandler<
  typeof getV1ObjectPaymentTransactionLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectPaymentIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectPaymentIdRouteHandler: RouteHandler<
  typeof getV1ObjectPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectPaymentIdRouteHandler: RouteHandler<
  typeof putV1ObjectPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectProductRouteHandler: RouteHandler<
  typeof postV1ObjectProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectProductFeatureIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectProductFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectProductFeatureIdRouteHandler: RouteHandler<
  typeof getV1ObjectProductFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectProductRatePlanRouteHandler: RouteHandler<
  typeof postV1ObjectProductRatePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectProductRatePlanChargeRouteHandler: RouteHandler<
  typeof postV1ObjectProductRatePlanChargeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectProductRatePlanChargeTierIdRouteHandler: RouteHandler<
  typeof getV1ObjectProductRatePlanChargeTierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectProductRatePlanChargeTierIdRouteHandler: RouteHandler<
  typeof putV1ObjectProductRatePlanChargeTierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectProductRatePlanChargeIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectProductRatePlanChargeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectProductRatePlanChargeIdRouteHandler: RouteHandler<
  typeof getV1ObjectProductRatePlanChargeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectProductRatePlanChargeIdRouteHandler: RouteHandler<
  typeof putV1ObjectProductRatePlanChargeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectProductRatePlanIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectProductRatePlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectProductRatePlanIdRouteHandler: RouteHandler<
  typeof getV1ObjectProductRatePlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectProductRatePlanIdRouteHandler: RouteHandler<
  typeof putV1ObjectProductRatePlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectProductIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectProductIdRouteHandler: RouteHandler<
  typeof getV1ObjectProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectProductIdRouteHandler: RouteHandler<
  typeof putV1ObjectProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectRatePlanChargeTierIdRouteHandler: RouteHandler<
  typeof getV1ObjectRatePlanChargeTierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectRatePlanChargeIdRouteHandler: RouteHandler<
  typeof getV1ObjectRatePlanChargeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectRatePlanChargeIdRouteHandler: RouteHandler<
  typeof putV1ObjectRatePlanChargeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectRatePlanIdRouteHandler: RouteHandler<
  typeof getV1ObjectRatePlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectRefundRouteHandler: RouteHandler<typeof postV1ObjectRefundRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ObjectRefundInvoicePaymentIdRouteHandler: RouteHandler<
  typeof getV1ObjectRefundInvoicePaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectRefundTransactionLogIdRouteHandler: RouteHandler<
  typeof getV1ObjectRefundTransactionLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectRefundIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectRefundIdRouteHandler: RouteHandler<
  typeof getV1ObjectRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectRefundIdRouteHandler: RouteHandler<
  typeof putV1ObjectRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectSubscriptionProductFeatureIdRouteHandler: RouteHandler<
  typeof getV1ObjectSubscriptionProductFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectSubscriptionIdRouteHandler: RouteHandler<
  typeof getV1ObjectSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectSubscriptionIdRouteHandler: RouteHandler<
  typeof putV1ObjectSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectTaxationItemRouteHandler: RouteHandler<
  typeof postV1ObjectTaxationItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectTaxationItemIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectTaxationItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectTaxationItemIdRouteHandler: RouteHandler<
  typeof getV1ObjectTaxationItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectTaxationItemIdRouteHandler: RouteHandler<
  typeof putV1ObjectTaxationItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectUnitOfMeasureRouteHandler: RouteHandler<
  typeof postV1ObjectUnitOfMeasureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectUnitOfMeasureIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectUnitOfMeasureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectUnitOfMeasureIdRouteHandler: RouteHandler<
  typeof getV1ObjectUnitOfMeasureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectUnitOfMeasureIdRouteHandler: RouteHandler<
  typeof putV1ObjectUnitOfMeasureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectUsageRouteHandler: RouteHandler<typeof postV1ObjectUsageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectUsageIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectUsageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectUsageIdRouteHandler: RouteHandler<typeof getV1ObjectUsageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1ObjectUsageIdRouteHandler: RouteHandler<typeof putV1ObjectUsageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1OperationsBillingPreviewRouteHandler: RouteHandler<
  typeof postV1OperationsBillingPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsInvoiceCollectRouteHandler: RouteHandler<
  typeof postV1OperationsInvoiceCollectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrderLineItemsBulkRouteHandler: RouteHandler<
  typeof postV1OrderLineItemsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrderLineItemsItemIdRouteHandler: RouteHandler<
  typeof getV1OrderLineItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrderLineItemsItemIdRouteHandler: RouteHandler<
  typeof putV1OrderLineItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersRouteHandler: RouteHandler<typeof getV1OrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersRouteHandler: RouteHandler<typeof postV1OrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersInvoiceOwnerAccountNumberRouteHandler: RouteHandler<
  typeof getV1OrdersInvoiceOwnerAccountNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersPreviewRouteHandler: RouteHandler<
  typeof postV1OrdersPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersSubscriptionSubscriptionNumberRouteHandler: RouteHandler<
  typeof getV1OrdersSubscriptionSubscriptionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersSubscriptionOwnerAccountNumberRouteHandler: RouteHandler<
  typeof getV1OrdersSubscriptionOwnerAccountNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersTermSubscriptionNumberRouteHandler: RouteHandler<
  typeof getV1OrdersTermSubscriptionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrdersOrderNumberRouteHandler: RouteHandler<
  typeof deleteV1OrdersOrderNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersOrderNumberRouteHandler: RouteHandler<
  typeof getV1OrdersOrderNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrdersOrderNumberCustomFieldsRouteHandler: RouteHandler<
  typeof putV1OrdersOrderNumberCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberRouteHandler: RouteHandler<
  typeof getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersOrderNumberRampMetricsRouteHandler: RouteHandler<
  typeof getV1OrdersOrderNumberRampMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrdersOrderNumberTriggerDatesRouteHandler: RouteHandler<
  typeof putV1OrdersOrderNumberTriggerDatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsCreditCardsRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsCreditCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentMethodsCreditCardsAccountsAccountKeyRouteHandler: RouteHandler<
  typeof getV1PaymentMethodsCreditCardsAccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentMethodsCreditCardsPaymentMethodIdRouteHandler: RouteHandler<
  typeof putV1PaymentMethodsCreditCardsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsDecryptionRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsDecryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof deleteV1PaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof getV1PaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof putV1PaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodIdAuthorizeRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodIdAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentMethodsPaymentMethodIdProfilesRouteHandler: RouteHandler<
  typeof getV1PaymentMethodsPaymentMethodIdProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodIdProfilesRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodIdProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentMethodsPaymentMethodIdScrubRouteHandler: RouteHandler<
  typeof putV1PaymentMethodsPaymentMethodIdScrubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentMethodsPaymentMethodIdVerifyRouteHandler: RouteHandler<
  typeof putV1PaymentMethodsPaymentMethodIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodIdVoidAuthorizeRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodIdVoidAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentRunsRouteHandler: RouteHandler<typeof getV1PaymentRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PaymentRunsRouteHandler: RouteHandler<typeof postV1PaymentRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1PaymentRunsPaymentRunIdRouteHandler: RouteHandler<
  typeof deleteV1PaymentRunsPaymentRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentRunsPaymentRunIdRouteHandler: RouteHandler<
  typeof getV1PaymentRunsPaymentRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentRunsPaymentRunIdRouteHandler: RouteHandler<
  typeof putV1PaymentRunsPaymentRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentRunsPaymentRunIdDataRouteHandler: RouteHandler<
  typeof getV1PaymentRunsPaymentRunIdDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentRunsPaymentRunIdSummaryRouteHandler: RouteHandler<
  typeof getV1PaymentRunsPaymentRunIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentgatewaysRouteHandler: RouteHandler<
  typeof getV1PaymentgatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsRouteHandler: RouteHandler<typeof getV1PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsRouteHandler: RouteHandler<typeof postV1PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof deleteV1PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof putV1PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentsPaymentIdApplyRouteHandler: RouteHandler<
  typeof putV1PaymentsPaymentIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentsPaymentIdCancelRouteHandler: RouteHandler<
  typeof putV1PaymentsPaymentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentIdPartsRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentIdPartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentIdPartsPartidRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentIdPartsPartidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentIdPartsPartidItempartsRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentIdPartsPartidItempartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentIdPartsPartidItempartsItempartidRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentIdPartsPartidItempartsItempartidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsPaymentIdRefundsRouteHandler: RouteHandler<
  typeof postV1PaymentsPaymentIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentsPaymentIdTransferRouteHandler: RouteHandler<
  typeof putV1PaymentsPaymentIdTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentsPaymentIdUnapplyRouteHandler: RouteHandler<
  typeof putV1PaymentsPaymentIdUnapplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1QuotesDocumentRouteHandler: RouteHandler<
  typeof postV1QuotesDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampsRampNumberRouteHandler: RouteHandler<
  typeof getV1RampsRampNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampsRampNumberRampMetricsRouteHandler: RouteHandler<
  typeof getV1RampsRampNumberRampMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RateplanProductIdProductRatePlanRouteHandler: RouteHandler<
  typeof getV1RateplanProductIdProductRatePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRouteHandler: RouteHandler<typeof getV1RefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RefundsRefundIdReconcileRouteHandler: RouteHandler<
  typeof postV1RefundsRefundIdReconcileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RefundsRefundIdRouteHandler: RouteHandler<
  typeof deleteV1RefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRefundIdRouteHandler: RouteHandler<
  typeof getV1RefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RefundsRefundIdRouteHandler: RouteHandler<
  typeof putV1RefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RefundsRefundIdCancelRouteHandler: RouteHandler<
  typeof putV1RefundsRefundIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRefundIdPartsRouteHandler: RouteHandler<
  typeof getV1RefundsRefundIdPartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRefundIdPartsRefundpartidRouteHandler: RouteHandler<
  typeof getV1RefundsRefundIdPartsRefundpartidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRefundIdPartsRefundpartidItempartsRouteHandler: RouteHandler<
  typeof getV1RefundsRefundIdPartsRefundpartidItempartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRefundIdPartsRefundpartidItempartsItempartidRouteHandler: RouteHandler<
  typeof getV1RefundsRefundIdPartsRefundpartidItempartsItempartidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueEventsRevenueSchedulesRsNumberRouteHandler: RouteHandler<
  typeof getV1RevenueEventsRevenueSchedulesRsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueEventsEventNumberRouteHandler: RouteHandler<
  typeof getV1RevenueEventsEventNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueItemsChargeRevenueSummariesCrsNumberRouteHandler: RouteHandler<
  typeof getV1RevenueItemsChargeRevenueSummariesCrsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueItemsRevenueEventsEventNumberRouteHandler: RouteHandler<
  typeof getV1RevenueItemsRevenueEventsEventNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevenueItemsRevenueEventsEventNumberRouteHandler: RouteHandler<
  typeof putV1RevenueItemsRevenueEventsEventNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueItemsRevenueSchedulesRsNumberRouteHandler: RouteHandler<
  typeof getV1RevenueItemsRevenueSchedulesRsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevenueItemsRevenueSchedulesRsNumberRouteHandler: RouteHandler<
  typeof putV1RevenueItemsRevenueSchedulesRsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueRecognitionRulesProductChargesChargeKeyRouteHandler: RouteHandler<
  typeof getV1RevenueRecognitionRulesProductChargesChargeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyRouteHandler: RouteHandler<
  typeof getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesCreditMemoItemsCmiIdRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesCreditMemoItemsCmiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesCreditMemoItemsCmiIdRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesCreditMemoItemsCmiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesDebitMemoItemsDmiIdRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesDebitMemoItemsDmiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesDebitMemoItemsDmiIdRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesDebitMemoItemsDmiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesInvoiceItemsInvoiceItemIdRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesInvoiceItemsInvoiceItemIdRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesProductChargesChargeKeyAccountKeyRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesProductChargesChargeKeyAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesSubscriptionChargesChargeKeyRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesSubscriptionChargesChargeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RevenueSchedulesSubscriptionChargesChargeKeyRouteHandler: RouteHandler<
  typeof postV1RevenueSchedulesSubscriptionChargesChargeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RevenueSchedulesRsNumberRouteHandler: RouteHandler<
  typeof deleteV1RevenueSchedulesRsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RevenueSchedulesRsNumberRouteHandler: RouteHandler<
  typeof getV1RevenueSchedulesRsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevenueSchedulesRsNumberBasicInformationRouteHandler: RouteHandler<
  typeof putV1RevenueSchedulesRsNumberBasicInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsRouteHandler: RouteHandler<
  typeof putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateRouteHandler: RouteHandler<
  typeof putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeRouteHandler: RouteHandler<
  typeof putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RevproAccountingCodesRouteHandler: RouteHandler<
  typeof putV1RevproAccountingCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RsaSignaturesRouteHandler: RouteHandler<
  typeof postV1RsaSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RsaSignaturesDecryptRouteHandler: RouteHandler<
  typeof postV1RsaSignaturesDecryptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SequenceSetsRouteHandler: RouteHandler<typeof getV1SequenceSetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SequenceSetsRouteHandler: RouteHandler<typeof postV1SequenceSetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1SequenceSetsIdRouteHandler: RouteHandler<
  typeof deleteV1SequenceSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SequenceSetsIdRouteHandler: RouteHandler<
  typeof getV1SequenceSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SequenceSetsIdRouteHandler: RouteHandler<
  typeof putV1SequenceSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SettingsFinanceRevenueAutomationStartDateRouteHandler: RouteHandler<
  typeof getV1SettingsFinanceRevenueAutomationStartDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionsRouteHandler: RouteHandler<
  typeof postV1SubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsAccountsAccountKeyRouteHandler: RouteHandler<
  typeof getV1SubscriptionsAccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionsPreviewRouteHandler: RouteHandler<
  typeof postV1SubscriptionsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSubscriptionKeyRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSubscriptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionKeyRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionKeyCancelRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionKeyCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionKeyRenewRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionKeyRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionKeyResumeRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionKeyResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionKeySuspendRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionKeySuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSubscriptionKeyVersionsVersionRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSubscriptionKeyVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSubscriptionKeyRampMetricsRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSubscriptionKeyRampMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSubscriptionKeyRampsRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSubscriptionKeyRampsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionNumberCustomFieldsRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionNumberCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsRouteHandler: RouteHandler<
  typeof putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TaxationitemsIdRouteHandler: RouteHandler<
  typeof deleteV1TaxationitemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxationitemsIdRouteHandler: RouteHandler<
  typeof getV1TaxationitemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TaxationitemsIdRouteHandler: RouteHandler<
  typeof putV1TaxationitemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsInvoicesAccountsAccountKeyRouteHandler: RouteHandler<
  typeof getV1TransactionsInvoicesAccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsPaymentsAccountsAccountKeyRouteHandler: RouteHandler<
  typeof getV1TransactionsPaymentsAccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsageRouteHandler: RouteHandler<typeof postV1UsageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsageAccountsAccountKeyRouteHandler: RouteHandler<
  typeof getV1UsageAccountsAccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUsernameAcceptAccessRouteHandler: RouteHandler<
  typeof putV1UsersUsernameAcceptAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUsernameAccessibleEntitiesRouteHandler: RouteHandler<
  typeof getV1UsersUsernameAccessibleEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUsernameDenyAccessRouteHandler: RouteHandler<
  typeof putV1UsersUsernameDenyAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUsernameRequestAccessRouteHandler: RouteHandler<
  typeof putV1UsersUsernameRequestAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
