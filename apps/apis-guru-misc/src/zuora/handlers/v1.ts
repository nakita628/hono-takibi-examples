import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountingCodesAcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountingCodesAcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingCodesAcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingCodesAcIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingCodesAcIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountingPeriodsApIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountingPeriodsApIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdPendingCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdRunTrialBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsBillingDocumentsFilesDeletionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsBillingDocumentsFilesDeletionJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountKeySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsIdBillingDocumentsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionAmendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionQueryMoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AmendmentsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AmendmentsAmendmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsyncJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsyncOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsyncOrdersPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttachmentsObjectTypeObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillRunsBillRunIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPreviewRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPreviewRunsBillingPreviewRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkBulkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BulkBulkKeyStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CatalogProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CatalogProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CatalogProductsProductIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargeRevenueSummariesCrsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContactsContactIdScrubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CreditmemosCreditMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdItemsCmitemidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsPartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsPartidItempartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdPdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdTaxationitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdUnpostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditmemoIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomExchangeRatesCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DebitmemosDebitMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdApplicationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdItemsDmitemidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdPdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdTaxationitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdUnpostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DescribeObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DocumentPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DocumentPropertiesDocumentPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DocumentPropertiesDocumentPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DocumentPropertiesDocumentTypeDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntitiesIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntityConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntityConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntityConnectionsConnectionIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntityConnectionsConnectionIdDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntityConnectionsConnectionIdDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GatewaySettlementPaymentsPaymentIdChargebackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GatewaySettlementPaymentsPaymentIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GatewaySettlementPaymentsPaymentIdSettleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HmacSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HostedpagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdApplicationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdCreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdDebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdItemsItemIdTaxationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesInvoiceIdReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesInvoiceIdWriteOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalEntriesJournalRunsJrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JournalEntriesJeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalEntriesJeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1JournalEntriesJeNumberBasicInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1JournalEntriesJeNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JournalRunsJrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalRunsJrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1JournalRunsJrNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationHistoryCalloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationHistoryEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectBillRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectBillRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectBillRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectBillRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectCommunicationProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectCreditBalanceAdjustmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectCreditBalanceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectCreditBalanceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectImportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectInvoiceAdjustmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectInvoiceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectInvoiceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectInvoiceItemAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceItemAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectInvoicePaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoicePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectInvoicePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceSplitItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceSplitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentMethodSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentMethodTransactionLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentTransactionLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectProductRatePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectProductRatePlanChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductRatePlanChargeTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductRatePlanChargeTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRatePlanChargeTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRefundInvoicePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRefundTransactionLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectSubscriptionProductFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectTaxationItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectTaxationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectTaxationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectTaxationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectUnitOfMeasureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectUnitOfMeasureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectUnitOfMeasureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectUnitOfMeasureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsBillingPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsInvoiceCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrderLineItemsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrderLineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrderLineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersInvoiceOwnerAccountNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersSubscriptionSubscriptionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersSubscriptionOwnerAccountNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersTermSubscriptionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrdersOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrdersOrderNumberCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersOrderNumberRampMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrdersOrderNumberTriggerDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsCreditCardsAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsCreditCardsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsDecryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsPaymentMethodIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsPaymentMethodIdScrubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsPaymentMethodIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdVoidAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentRunsPaymentRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsPaymentRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentRunsPaymentRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsPaymentRunIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsPaymentRunIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentgatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsPartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsPartidItempartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsPartidItempartsItempartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPaymentIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampsRampNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampsRampNumberRampMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RateplanProductIdProductRatePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RefundsRefundIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RefundsRefundIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRefundpartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRefundpartidItempartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRefundpartidItempartsItempartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueEventsRevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueEventsEventNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueItemsChargeRevenueSummariesCrsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueItemsRevenueEventsEventNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueItemsRevenueEventsEventNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueItemsRevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueItemsRevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueRecognitionRulesProductChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesCreditMemoItemsCmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesCreditMemoItemsCmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesDebitMemoItemsDmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesDebitMemoItemsDmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1RevenueSchedulesProductChargesChargeKeyAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberBasicInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevproAccountingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RsaSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RsaSignaturesDecryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SequenceSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SequenceSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SequenceSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SequenceSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SequenceSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsFinanceRevenueAutomationStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeySuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyRampMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionNumberCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TaxationitemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxationitemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxationitemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsInvoicesAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsPaymentsAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsageAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUsernameAcceptAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUsernameAccessibleEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUsernameDenyAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUsernameRequestAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
