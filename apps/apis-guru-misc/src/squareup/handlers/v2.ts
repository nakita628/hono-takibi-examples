import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postV2ApplePayDomainsRouteHandler: RouteHandler<
  typeof postV2ApplePayDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BankAccountsRouteHandler: RouteHandler<typeof getV2BankAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2BankAccountsByV1IdV1BankAccountIdRouteHandler: RouteHandler<
  typeof getV2BankAccountsByV1IdV1BankAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BankAccountsBankAccountIdRouteHandler: RouteHandler<
  typeof getV2BankAccountsBankAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsRouteHandler: RouteHandler<typeof postV2BookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsAvailabilitySearchRouteHandler: RouteHandler<
  typeof postV2BookingsAvailabilitySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBusinessBookingProfileRouteHandler: RouteHandler<
  typeof getV2BookingsBusinessBookingProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsTeamMemberBookingProfilesRouteHandler: RouteHandler<
  typeof getV2BookingsTeamMemberBookingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsTeamMemberBookingProfilesTeamMemberIdRouteHandler: RouteHandler<
  typeof getV2BookingsTeamMemberBookingProfilesTeamMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingIdRouteHandler: RouteHandler<
  typeof getV2BookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2BookingsBookingIdRouteHandler: RouteHandler<
  typeof putV2BookingsBookingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingIdCancelRouteHandler: RouteHandler<
  typeof postV2BookingsBookingIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CardsRouteHandler: RouteHandler<typeof getV2CardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CardsRouteHandler: RouteHandler<typeof postV2CardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CardsCardIdRouteHandler: RouteHandler<typeof getV2CardsCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2CardsCardIdDisableRouteHandler: RouteHandler<
  typeof postV2CardsCardIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CashDrawersShiftsRouteHandler: RouteHandler<
  typeof getV2CashDrawersShiftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CashDrawersShiftsShiftIdRouteHandler: RouteHandler<
  typeof getV2CashDrawersShiftsShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CashDrawersShiftsShiftIdEventsRouteHandler: RouteHandler<
  typeof getV2CashDrawersShiftsShiftIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogBatchDeleteRouteHandler: RouteHandler<
  typeof postV2CatalogBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogBatchRetrieveRouteHandler: RouteHandler<
  typeof postV2CatalogBatchRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogBatchUpsertRouteHandler: RouteHandler<
  typeof postV2CatalogBatchUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CatalogInfoRouteHandler: RouteHandler<typeof getV2CatalogInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2CatalogListRouteHandler: RouteHandler<typeof getV2CatalogListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2CatalogObjectRouteHandler: RouteHandler<
  typeof postV2CatalogObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CatalogObjectObjectIdRouteHandler: RouteHandler<
  typeof deleteV2CatalogObjectObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CatalogObjectObjectIdRouteHandler: RouteHandler<
  typeof getV2CatalogObjectObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogSearchRouteHandler: RouteHandler<
  typeof postV2CatalogSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogSearchCatalogItemsRouteHandler: RouteHandler<
  typeof postV2CatalogSearchCatalogItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogUpdateItemModifierListsRouteHandler: RouteHandler<
  typeof postV2CatalogUpdateItemModifierListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CatalogUpdateItemTaxesRouteHandler: RouteHandler<
  typeof postV2CatalogUpdateItemTaxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersRouteHandler: RouteHandler<typeof getV2CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersRouteHandler: RouteHandler<typeof postV2CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersGroupsRouteHandler: RouteHandler<
  typeof getV2CustomersGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersGroupsRouteHandler: RouteHandler<
  typeof postV2CustomersGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersGroupsGroupIdRouteHandler: RouteHandler<
  typeof getV2CustomersGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2CustomersGroupsGroupIdRouteHandler: RouteHandler<
  typeof putV2CustomersGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersSearchRouteHandler: RouteHandler<
  typeof postV2CustomersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersSegmentsRouteHandler: RouteHandler<
  typeof getV2CustomersSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof getV2CustomersSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof putV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersCustomerIdCardsRouteHandler: RouteHandler<
  typeof postV2CustomersCustomerIdCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdCardsCardIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdCardsCardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2CustomersCustomerIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof putV2CustomersCustomerIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DevicesCodesRouteHandler: RouteHandler<typeof getV2DevicesCodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2DevicesCodesRouteHandler: RouteHandler<typeof postV2DevicesCodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2DevicesCodesIdRouteHandler: RouteHandler<
  typeof getV2DevicesCodesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DisputesRouteHandler: RouteHandler<typeof getV2DisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DisputesDisputeIdRouteHandler: RouteHandler<
  typeof getV2DisputesDisputeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DisputesDisputeIdAcceptRouteHandler: RouteHandler<
  typeof postV2DisputesDisputeIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DisputesDisputeIdEvidenceRouteHandler: RouteHandler<
  typeof getV2DisputesDisputeIdEvidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DisputesDisputeIdEvidenceTextRouteHandler: RouteHandler<
  typeof postV2DisputesDisputeIdEvidenceTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DisputesDisputeIdEvidenceEvidenceIdRouteHandler: RouteHandler<
  typeof deleteV2DisputesDisputeIdEvidenceEvidenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DisputesDisputeIdEvidenceEvidenceIdRouteHandler: RouteHandler<
  typeof getV2DisputesDisputeIdEvidenceEvidenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DisputesDisputeIdSubmitEvidenceRouteHandler: RouteHandler<
  typeof postV2DisputesDisputeIdSubmitEvidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmployeesRouteHandler: RouteHandler<typeof getV2EmployeesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmployeesIdRouteHandler: RouteHandler<typeof getV2EmployeesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2GiftCardsRouteHandler: RouteHandler<typeof getV2GiftCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GiftCardsRouteHandler: RouteHandler<typeof postV2GiftCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GiftCardsActivitiesRouteHandler: RouteHandler<
  typeof getV2GiftCardsActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GiftCardsActivitiesRouteHandler: RouteHandler<
  typeof postV2GiftCardsActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GiftCardsFromGanRouteHandler: RouteHandler<
  typeof postV2GiftCardsFromGanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GiftCardsFromNonceRouteHandler: RouteHandler<
  typeof postV2GiftCardsFromNonceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GiftCardsGiftCardIdLinkCustomerRouteHandler: RouteHandler<
  typeof postV2GiftCardsGiftCardIdLinkCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GiftCardsGiftCardIdUnlinkCustomerRouteHandler: RouteHandler<
  typeof postV2GiftCardsGiftCardIdUnlinkCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GiftCardsIdRouteHandler: RouteHandler<typeof getV2GiftCardsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2InventoryAdjustmentAdjustmentIdRouteHandler: RouteHandler<
  typeof getV2InventoryAdjustmentAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventoryAdjustmentsAdjustmentIdRouteHandler: RouteHandler<
  typeof getV2InventoryAdjustmentsAdjustmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventoryBatchChangeRouteHandler: RouteHandler<
  typeof postV2InventoryBatchChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventoryBatchRetrieveChangesRouteHandler: RouteHandler<
  typeof postV2InventoryBatchRetrieveChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventoryBatchRetrieveCountsRouteHandler: RouteHandler<
  typeof postV2InventoryBatchRetrieveCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventoryChangesBatchCreateRouteHandler: RouteHandler<
  typeof postV2InventoryChangesBatchCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventoryChangesBatchRetrieveRouteHandler: RouteHandler<
  typeof postV2InventoryChangesBatchRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventoryCountsBatchRetrieveRouteHandler: RouteHandler<
  typeof postV2InventoryCountsBatchRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventoryPhysicalCountPhysicalCountIdRouteHandler: RouteHandler<
  typeof getV2InventoryPhysicalCountPhysicalCountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventoryPhysicalCountsPhysicalCountIdRouteHandler: RouteHandler<
  typeof getV2InventoryPhysicalCountsPhysicalCountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventoryTransfersTransferIdRouteHandler: RouteHandler<
  typeof getV2InventoryTransfersTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventoryCatalogObjectIdRouteHandler: RouteHandler<
  typeof getV2InventoryCatalogObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventoryCatalogObjectIdChangesRouteHandler: RouteHandler<
  typeof getV2InventoryCatalogObjectIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InvoicesRouteHandler: RouteHandler<typeof getV2InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InvoicesRouteHandler: RouteHandler<typeof postV2InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InvoicesSearchRouteHandler: RouteHandler<
  typeof postV2InvoicesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2InvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof deleteV2InvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getV2InvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2InvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof putV2InvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InvoicesInvoiceIdCancelRouteHandler: RouteHandler<
  typeof postV2InvoicesInvoiceIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InvoicesInvoiceIdPublishRouteHandler: RouteHandler<
  typeof postV2InvoicesInvoiceIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborBreakTypesRouteHandler: RouteHandler<
  typeof getV2LaborBreakTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LaborBreakTypesRouteHandler: RouteHandler<
  typeof postV2LaborBreakTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LaborBreakTypesIdRouteHandler: RouteHandler<
  typeof deleteV2LaborBreakTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborBreakTypesIdRouteHandler: RouteHandler<
  typeof getV2LaborBreakTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2LaborBreakTypesIdRouteHandler: RouteHandler<
  typeof putV2LaborBreakTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborEmployeeWagesRouteHandler: RouteHandler<
  typeof getV2LaborEmployeeWagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborEmployeeWagesIdRouteHandler: RouteHandler<
  typeof getV2LaborEmployeeWagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LaborShiftsRouteHandler: RouteHandler<typeof postV2LaborShiftsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2LaborShiftsSearchRouteHandler: RouteHandler<
  typeof postV2LaborShiftsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LaborShiftsIdRouteHandler: RouteHandler<
  typeof deleteV2LaborShiftsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborShiftsIdRouteHandler: RouteHandler<typeof getV2LaborShiftsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV2LaborShiftsIdRouteHandler: RouteHandler<typeof putV2LaborShiftsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2LaborTeamMemberWagesRouteHandler: RouteHandler<
  typeof getV2LaborTeamMemberWagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborTeamMemberWagesIdRouteHandler: RouteHandler<
  typeof getV2LaborTeamMemberWagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LaborWorkweekConfigsRouteHandler: RouteHandler<
  typeof getV2LaborWorkweekConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2LaborWorkweekConfigsIdRouteHandler: RouteHandler<
  typeof putV2LaborWorkweekConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LocationsRouteHandler: RouteHandler<typeof getV2LocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LocationsRouteHandler: RouteHandler<typeof postV2LocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LocationsLocationIdRouteHandler: RouteHandler<
  typeof getV2LocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2LocationsLocationIdRouteHandler: RouteHandler<
  typeof putV2LocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LocationsLocationIdCheckoutsRouteHandler: RouteHandler<
  typeof postV2LocationsLocationIdCheckoutsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LocationsLocationIdRefundsRouteHandler: RouteHandler<
  typeof getV2LocationsLocationIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LocationsLocationIdTransactionsRouteHandler: RouteHandler<
  typeof getV2LocationsLocationIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LocationsLocationIdTransactionsRouteHandler: RouteHandler<
  typeof postV2LocationsLocationIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LocationsLocationIdTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getV2LocationsLocationIdTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LocationsLocationIdTransactionsTransactionIdCaptureRouteHandler: RouteHandler<
  typeof postV2LocationsLocationIdTransactionsTransactionIdCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LocationsLocationIdTransactionsTransactionIdRefundRouteHandler: RouteHandler<
  typeof postV2LocationsLocationIdTransactionsTransactionIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LocationsLocationIdTransactionsTransactionIdVoidRouteHandler: RouteHandler<
  typeof postV2LocationsLocationIdTransactionsTransactionIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyAccountsRouteHandler: RouteHandler<
  typeof postV2LoyaltyAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyAccountsSearchRouteHandler: RouteHandler<
  typeof postV2LoyaltyAccountsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoyaltyAccountsAccountIdRouteHandler: RouteHandler<
  typeof getV2LoyaltyAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyAccountsAccountIdAccumulateRouteHandler: RouteHandler<
  typeof postV2LoyaltyAccountsAccountIdAccumulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyAccountsAccountIdAdjustRouteHandler: RouteHandler<
  typeof postV2LoyaltyAccountsAccountIdAdjustRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyEventsSearchRouteHandler: RouteHandler<
  typeof postV2LoyaltyEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoyaltyProgramsRouteHandler: RouteHandler<
  typeof getV2LoyaltyProgramsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoyaltyProgramsProgramIdRouteHandler: RouteHandler<
  typeof getV2LoyaltyProgramsProgramIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyProgramsProgramIdCalculateRouteHandler: RouteHandler<
  typeof postV2LoyaltyProgramsProgramIdCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyRewardsRouteHandler: RouteHandler<
  typeof postV2LoyaltyRewardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyRewardsSearchRouteHandler: RouteHandler<
  typeof postV2LoyaltyRewardsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoyaltyRewardsRewardIdRouteHandler: RouteHandler<
  typeof deleteV2LoyaltyRewardsRewardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoyaltyRewardsRewardIdRouteHandler: RouteHandler<
  typeof getV2LoyaltyRewardsRewardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoyaltyRewardsRewardIdRedeemRouteHandler: RouteHandler<
  typeof postV2LoyaltyRewardsRewardIdRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MerchantsRouteHandler: RouteHandler<typeof getV2MerchantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MerchantsMerchantIdRouteHandler: RouteHandler<
  typeof getV2MerchantsMerchantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OrdersRouteHandler: RouteHandler<typeof postV2OrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OrdersBatchRetrieveRouteHandler: RouteHandler<
  typeof postV2OrdersBatchRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OrdersCalculateRouteHandler: RouteHandler<
  typeof postV2OrdersCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OrdersSearchRouteHandler: RouteHandler<typeof postV2OrdersSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2OrdersOrderIdRouteHandler: RouteHandler<typeof getV2OrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV2OrdersOrderIdRouteHandler: RouteHandler<typeof putV2OrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2OrdersOrderIdPayRouteHandler: RouteHandler<
  typeof postV2OrdersOrderIdPayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsRouteHandler: RouteHandler<typeof getV2PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsRouteHandler: RouteHandler<typeof postV2PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsCancelRouteHandler: RouteHandler<
  typeof postV2PaymentsCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof putV2PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsPaymentIdCancelRouteHandler: RouteHandler<
  typeof postV2PaymentsPaymentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsPaymentIdCompleteRouteHandler: RouteHandler<
  typeof postV2PaymentsPaymentIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RefundsRouteHandler: RouteHandler<typeof getV2RefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2RefundsRouteHandler: RouteHandler<typeof postV2RefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RefundsRefundIdRouteHandler: RouteHandler<
  typeof getV2RefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SitesRouteHandler: RouteHandler<typeof getV2SitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SitesSiteIdSnippetRouteHandler: RouteHandler<
  typeof deleteV2SitesSiteIdSnippetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SitesSiteIdSnippetRouteHandler: RouteHandler<
  typeof getV2SitesSiteIdSnippetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SitesSiteIdSnippetRouteHandler: RouteHandler<
  typeof postV2SitesSiteIdSnippetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SubscriptionsRouteHandler: RouteHandler<
  typeof postV2SubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SubscriptionsSearchRouteHandler: RouteHandler<
  typeof postV2SubscriptionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getV2SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof putV2SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SubscriptionsSubscriptionIdCancelRouteHandler: RouteHandler<
  typeof postV2SubscriptionsSubscriptionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SubscriptionsSubscriptionIdEventsRouteHandler: RouteHandler<
  typeof getV2SubscriptionsSubscriptionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SubscriptionsSubscriptionIdResumeRouteHandler: RouteHandler<
  typeof postV2SubscriptionsSubscriptionIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TeamMembersRouteHandler: RouteHandler<typeof postV2TeamMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2TeamMembersBulkCreateRouteHandler: RouteHandler<
  typeof postV2TeamMembersBulkCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TeamMembersBulkUpdateRouteHandler: RouteHandler<
  typeof postV2TeamMembersBulkUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TeamMembersSearchRouteHandler: RouteHandler<
  typeof postV2TeamMembersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TeamMembersTeamMemberIdRouteHandler: RouteHandler<
  typeof getV2TeamMembersTeamMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2TeamMembersTeamMemberIdRouteHandler: RouteHandler<
  typeof putV2TeamMembersTeamMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TeamMembersTeamMemberIdWageSettingRouteHandler: RouteHandler<
  typeof getV2TeamMembersTeamMemberIdWageSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2TeamMembersTeamMemberIdWageSettingRouteHandler: RouteHandler<
  typeof putV2TeamMembersTeamMemberIdWageSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsCheckoutsRouteHandler: RouteHandler<
  typeof postV2TerminalsCheckoutsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsCheckoutsSearchRouteHandler: RouteHandler<
  typeof postV2TerminalsCheckoutsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TerminalsCheckoutsCheckoutIdRouteHandler: RouteHandler<
  typeof getV2TerminalsCheckoutsCheckoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsCheckoutsCheckoutIdCancelRouteHandler: RouteHandler<
  typeof postV2TerminalsCheckoutsCheckoutIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsRefundsRouteHandler: RouteHandler<
  typeof postV2TerminalsRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsRefundsSearchRouteHandler: RouteHandler<
  typeof postV2TerminalsRefundsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TerminalsRefundsTerminalRefundIdRouteHandler: RouteHandler<
  typeof getV2TerminalsRefundsTerminalRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsRefundsTerminalRefundIdCancelRouteHandler: RouteHandler<
  typeof postV2TerminalsRefundsTerminalRefundIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
