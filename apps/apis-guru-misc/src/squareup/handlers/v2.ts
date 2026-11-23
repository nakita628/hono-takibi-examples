import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CatalogObjectObjectIdRoute,
  deleteV2CustomersCustomerIdCardsCardIdRoute,
  deleteV2CustomersCustomerIdGroupsGroupIdRoute,
  deleteV2CustomersCustomerIdRoute,
  deleteV2CustomersGroupsGroupIdRoute,
  deleteV2DisputesDisputeIdEvidenceEvidenceIdRoute,
  deleteV2InvoicesInvoiceIdRoute,
  deleteV2LaborBreakTypesIdRoute,
  deleteV2LaborShiftsIdRoute,
  deleteV2LoyaltyRewardsRewardIdRoute,
  deleteV2SitesSiteIdSnippetRoute,
  getV2BankAccountsBankAccountIdRoute,
  getV2BankAccountsByV1IdV1BankAccountIdRoute,
  getV2BankAccountsRoute,
  getV2BookingsBookingIdRoute,
  getV2BookingsBusinessBookingProfileRoute,
  getV2BookingsTeamMemberBookingProfilesRoute,
  getV2BookingsTeamMemberBookingProfilesTeamMemberIdRoute,
  getV2CardsCardIdRoute,
  getV2CardsRoute,
  getV2CashDrawersShiftsRoute,
  getV2CashDrawersShiftsShiftIdEventsRoute,
  getV2CashDrawersShiftsShiftIdRoute,
  getV2CatalogInfoRoute,
  getV2CatalogListRoute,
  getV2CatalogObjectObjectIdRoute,
  getV2CustomersCustomerIdRoute,
  getV2CustomersGroupsGroupIdRoute,
  getV2CustomersGroupsRoute,
  getV2CustomersRoute,
  getV2CustomersSegmentsRoute,
  getV2CustomersSegmentsSegmentIdRoute,
  getV2DevicesCodesIdRoute,
  getV2DevicesCodesRoute,
  getV2DisputesDisputeIdEvidenceEvidenceIdRoute,
  getV2DisputesDisputeIdEvidenceRoute,
  getV2DisputesDisputeIdRoute,
  getV2DisputesRoute,
  getV2EmployeesIdRoute,
  getV2EmployeesRoute,
  getV2GiftCardsActivitiesRoute,
  getV2GiftCardsIdRoute,
  getV2GiftCardsRoute,
  getV2InventoryAdjustmentAdjustmentIdRoute,
  getV2InventoryAdjustmentsAdjustmentIdRoute,
  getV2InventoryCatalogObjectIdChangesRoute,
  getV2InventoryCatalogObjectIdRoute,
  getV2InventoryPhysicalCountPhysicalCountIdRoute,
  getV2InventoryPhysicalCountsPhysicalCountIdRoute,
  getV2InventoryTransfersTransferIdRoute,
  getV2InvoicesInvoiceIdRoute,
  getV2InvoicesRoute,
  getV2LaborBreakTypesIdRoute,
  getV2LaborBreakTypesRoute,
  getV2LaborEmployeeWagesIdRoute,
  getV2LaborEmployeeWagesRoute,
  getV2LaborShiftsIdRoute,
  getV2LaborTeamMemberWagesIdRoute,
  getV2LaborTeamMemberWagesRoute,
  getV2LaborWorkweekConfigsRoute,
  getV2LocationsLocationIdRefundsRoute,
  getV2LocationsLocationIdRoute,
  getV2LocationsLocationIdTransactionsRoute,
  getV2LocationsLocationIdTransactionsTransactionIdRoute,
  getV2LocationsRoute,
  getV2LoyaltyAccountsAccountIdRoute,
  getV2LoyaltyProgramsProgramIdRoute,
  getV2LoyaltyProgramsRoute,
  getV2LoyaltyRewardsRewardIdRoute,
  getV2MerchantsMerchantIdRoute,
  getV2MerchantsRoute,
  getV2OrdersOrderIdRoute,
  getV2PaymentsPaymentIdRoute,
  getV2PaymentsRoute,
  getV2RefundsRefundIdRoute,
  getV2RefundsRoute,
  getV2SitesRoute,
  getV2SitesSiteIdSnippetRoute,
  getV2SubscriptionsSubscriptionIdEventsRoute,
  getV2SubscriptionsSubscriptionIdRoute,
  getV2TeamMembersTeamMemberIdRoute,
  getV2TeamMembersTeamMemberIdWageSettingRoute,
  getV2TerminalsCheckoutsCheckoutIdRoute,
  getV2TerminalsRefundsTerminalRefundIdRoute,
  postV2ApplePayDomainsRoute,
  postV2BookingsAvailabilitySearchRoute,
  postV2BookingsBookingIdCancelRoute,
  postV2BookingsRoute,
  postV2CardsCardIdDisableRoute,
  postV2CardsRoute,
  postV2CatalogBatchDeleteRoute,
  postV2CatalogBatchRetrieveRoute,
  postV2CatalogBatchUpsertRoute,
  postV2CatalogObjectRoute,
  postV2CatalogSearchCatalogItemsRoute,
  postV2CatalogSearchRoute,
  postV2CatalogUpdateItemModifierListsRoute,
  postV2CatalogUpdateItemTaxesRoute,
  postV2CustomersCustomerIdCardsRoute,
  postV2CustomersGroupsRoute,
  postV2CustomersRoute,
  postV2CustomersSearchRoute,
  postV2DevicesCodesRoute,
  postV2DisputesDisputeIdAcceptRoute,
  postV2DisputesDisputeIdEvidenceTextRoute,
  postV2DisputesDisputeIdSubmitEvidenceRoute,
  postV2GiftCardsActivitiesRoute,
  postV2GiftCardsFromGanRoute,
  postV2GiftCardsFromNonceRoute,
  postV2GiftCardsGiftCardIdLinkCustomerRoute,
  postV2GiftCardsGiftCardIdUnlinkCustomerRoute,
  postV2GiftCardsRoute,
  postV2InventoryBatchChangeRoute,
  postV2InventoryBatchRetrieveChangesRoute,
  postV2InventoryBatchRetrieveCountsRoute,
  postV2InventoryChangesBatchCreateRoute,
  postV2InventoryChangesBatchRetrieveRoute,
  postV2InventoryCountsBatchRetrieveRoute,
  postV2InvoicesInvoiceIdCancelRoute,
  postV2InvoicesInvoiceIdPublishRoute,
  postV2InvoicesRoute,
  postV2InvoicesSearchRoute,
  postV2LaborBreakTypesRoute,
  postV2LaborShiftsRoute,
  postV2LaborShiftsSearchRoute,
  postV2LocationsLocationIdCheckoutsRoute,
  postV2LocationsLocationIdTransactionsRoute,
  postV2LocationsLocationIdTransactionsTransactionIdCaptureRoute,
  postV2LocationsLocationIdTransactionsTransactionIdRefundRoute,
  postV2LocationsLocationIdTransactionsTransactionIdVoidRoute,
  postV2LocationsRoute,
  postV2LoyaltyAccountsAccountIdAccumulateRoute,
  postV2LoyaltyAccountsAccountIdAdjustRoute,
  postV2LoyaltyAccountsRoute,
  postV2LoyaltyAccountsSearchRoute,
  postV2LoyaltyEventsSearchRoute,
  postV2LoyaltyProgramsProgramIdCalculateRoute,
  postV2LoyaltyRewardsRewardIdRedeemRoute,
  postV2LoyaltyRewardsRoute,
  postV2LoyaltyRewardsSearchRoute,
  postV2OrdersBatchRetrieveRoute,
  postV2OrdersCalculateRoute,
  postV2OrdersOrderIdPayRoute,
  postV2OrdersRoute,
  postV2OrdersSearchRoute,
  postV2PaymentsCancelRoute,
  postV2PaymentsPaymentIdCancelRoute,
  postV2PaymentsPaymentIdCompleteRoute,
  postV2PaymentsRoute,
  postV2RefundsRoute,
  postV2SitesSiteIdSnippetRoute,
  postV2SubscriptionsRoute,
  postV2SubscriptionsSearchRoute,
  postV2SubscriptionsSubscriptionIdCancelRoute,
  postV2SubscriptionsSubscriptionIdResumeRoute,
  postV2TeamMembersBulkCreateRoute,
  postV2TeamMembersBulkUpdateRoute,
  postV2TeamMembersRoute,
  postV2TeamMembersSearchRoute,
  postV2TerminalsCheckoutsCheckoutIdCancelRoute,
  postV2TerminalsCheckoutsRoute,
  postV2TerminalsCheckoutsSearchRoute,
  postV2TerminalsRefundsRoute,
  postV2TerminalsRefundsSearchRoute,
  postV2TerminalsRefundsTerminalRefundIdCancelRoute,
  putV2BookingsBookingIdRoute,
  putV2CustomersCustomerIdGroupsGroupIdRoute,
  putV2CustomersCustomerIdRoute,
  putV2CustomersGroupsGroupIdRoute,
  putV2InvoicesInvoiceIdRoute,
  putV2LaborBreakTypesIdRoute,
  putV2LaborShiftsIdRoute,
  putV2LaborWorkweekConfigsIdRoute,
  putV2LocationsLocationIdRoute,
  putV2OrdersOrderIdRoute,
  putV2PaymentsPaymentIdRoute,
  putV2SubscriptionsSubscriptionIdRoute,
  putV2TeamMembersTeamMemberIdRoute,
  putV2TeamMembersTeamMemberIdWageSettingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ApplePayDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BankAccountsByV1IdV1BankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BankAccountsBankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsAvailabilitySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBusinessBookingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsTeamMemberBookingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsTeamMemberBookingProfilesTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CardsCardIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CashDrawersShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CashDrawersShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CashDrawersShiftsShiftIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CatalogObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogSearchCatalogItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogUpdateItemModifierListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogUpdateItemTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DevicesCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DevicesCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DevicesCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisputesDisputeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeIdEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisputesDisputeIdEvidenceTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DisputesDisputeIdEvidenceEvidenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeIdEvidenceEvidenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisputesDisputeIdSubmitEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GiftCardsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsFromGanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsFromNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsGiftCardIdLinkCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsGiftCardIdUnlinkCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GiftCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryAdjustmentAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryAdjustmentsAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryBatchChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryBatchRetrieveChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryBatchRetrieveCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryChangesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryChangesBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryCountsBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryPhysicalCountPhysicalCountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryPhysicalCountsPhysicalCountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryCatalogObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryCatalogObjectIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesInvoiceIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesInvoiceIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborBreakTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LaborBreakTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LaborBreakTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborBreakTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LaborBreakTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborEmployeeWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborEmployeeWagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LaborShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LaborShiftsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LaborShiftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborShiftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LaborShiftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborTeamMemberWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborTeamMemberWagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborWorkweekConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LaborWorkweekConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdCheckoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsTransactionIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsTransactionIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsTransactionIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsAccountIdAccumulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsAccountIdAdjustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyProgramsProgramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyProgramsProgramIdCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyRewardsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LoyaltyRewardsRewardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyRewardsRewardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyRewardsRewardIdRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MerchantsMerchantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersOrderIdPayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SitesSiteIdSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SitesSiteIdSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SitesSiteIdSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscriptionsSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsSubscriptionIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamMembersTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamMembersTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamMembersTeamMemberIdWageSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamMembersTeamMemberIdWageSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsCheckoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsCheckoutsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsCheckoutsCheckoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsCheckoutsCheckoutIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsRefundsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsRefundsTerminalRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsRefundsTerminalRefundIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
