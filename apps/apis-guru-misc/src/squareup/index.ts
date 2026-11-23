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
  getV1LocationIdOrdersOrderIdRoute,
  getV1LocationIdOrdersRoute,
  getV1LocationIdPaymentsPaymentIdRoute,
  getV1LocationIdPaymentsRoute,
  getV1LocationIdRefundsRoute,
  getV1LocationIdSettlementsRoute,
  getV1LocationIdSettlementsSettlementIdRoute,
  getV1MeEmployeesEmployeeIdRoute,
  getV1MeEmployeesRoute,
  getV1MeRolesRoleIdRoute,
  getV1MeRolesRoute,
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
  postMobileAuthorizationCodeRoute,
  postOauth2ClientsClientIdAccessTokenRenewRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRoute,
  postV1LocationIdRefundsRoute,
  postV1MeEmployeesRoute,
  postV1MeRolesRoute,
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
  putV1LocationIdOrdersOrderIdRoute,
  putV1MeEmployeesEmployeeIdRoute,
  putV1MeRolesRoleIdRoute,
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
} from './routes'
import {
  deleteV2CatalogObjectObjectIdRouteHandler,
  deleteV2CustomersCustomerIdCardsCardIdRouteHandler,
  deleteV2CustomersCustomerIdGroupsGroupIdRouteHandler,
  deleteV2CustomersCustomerIdRouteHandler,
  deleteV2CustomersGroupsGroupIdRouteHandler,
  deleteV2DisputesDisputeIdEvidenceEvidenceIdRouteHandler,
  deleteV2InvoicesInvoiceIdRouteHandler,
  deleteV2LaborBreakTypesIdRouteHandler,
  deleteV2LaborShiftsIdRouteHandler,
  deleteV2LoyaltyRewardsRewardIdRouteHandler,
  deleteV2SitesSiteIdSnippetRouteHandler,
  getV1LocationIdOrdersOrderIdRouteHandler,
  getV1LocationIdOrdersRouteHandler,
  getV1LocationIdPaymentsPaymentIdRouteHandler,
  getV1LocationIdPaymentsRouteHandler,
  getV1LocationIdRefundsRouteHandler,
  getV1LocationIdSettlementsRouteHandler,
  getV1LocationIdSettlementsSettlementIdRouteHandler,
  getV1MeEmployeesEmployeeIdRouteHandler,
  getV1MeEmployeesRouteHandler,
  getV1MeRolesRoleIdRouteHandler,
  getV1MeRolesRouteHandler,
  getV2BankAccountsBankAccountIdRouteHandler,
  getV2BankAccountsByV1IdV1BankAccountIdRouteHandler,
  getV2BankAccountsRouteHandler,
  getV2BookingsBookingIdRouteHandler,
  getV2BookingsBusinessBookingProfileRouteHandler,
  getV2BookingsTeamMemberBookingProfilesRouteHandler,
  getV2BookingsTeamMemberBookingProfilesTeamMemberIdRouteHandler,
  getV2CardsCardIdRouteHandler,
  getV2CardsRouteHandler,
  getV2CashDrawersShiftsRouteHandler,
  getV2CashDrawersShiftsShiftIdEventsRouteHandler,
  getV2CashDrawersShiftsShiftIdRouteHandler,
  getV2CatalogInfoRouteHandler,
  getV2CatalogListRouteHandler,
  getV2CatalogObjectObjectIdRouteHandler,
  getV2CustomersCustomerIdRouteHandler,
  getV2CustomersGroupsGroupIdRouteHandler,
  getV2CustomersGroupsRouteHandler,
  getV2CustomersRouteHandler,
  getV2CustomersSegmentsRouteHandler,
  getV2CustomersSegmentsSegmentIdRouteHandler,
  getV2DevicesCodesIdRouteHandler,
  getV2DevicesCodesRouteHandler,
  getV2DisputesDisputeIdEvidenceEvidenceIdRouteHandler,
  getV2DisputesDisputeIdEvidenceRouteHandler,
  getV2DisputesDisputeIdRouteHandler,
  getV2DisputesRouteHandler,
  getV2EmployeesIdRouteHandler,
  getV2EmployeesRouteHandler,
  getV2GiftCardsActivitiesRouteHandler,
  getV2GiftCardsIdRouteHandler,
  getV2GiftCardsRouteHandler,
  getV2InventoryAdjustmentAdjustmentIdRouteHandler,
  getV2InventoryAdjustmentsAdjustmentIdRouteHandler,
  getV2InventoryCatalogObjectIdChangesRouteHandler,
  getV2InventoryCatalogObjectIdRouteHandler,
  getV2InventoryPhysicalCountPhysicalCountIdRouteHandler,
  getV2InventoryPhysicalCountsPhysicalCountIdRouteHandler,
  getV2InventoryTransfersTransferIdRouteHandler,
  getV2InvoicesInvoiceIdRouteHandler,
  getV2InvoicesRouteHandler,
  getV2LaborBreakTypesIdRouteHandler,
  getV2LaborBreakTypesRouteHandler,
  getV2LaborEmployeeWagesIdRouteHandler,
  getV2LaborEmployeeWagesRouteHandler,
  getV2LaborShiftsIdRouteHandler,
  getV2LaborTeamMemberWagesIdRouteHandler,
  getV2LaborTeamMemberWagesRouteHandler,
  getV2LaborWorkweekConfigsRouteHandler,
  getV2LocationsLocationIdRefundsRouteHandler,
  getV2LocationsLocationIdRouteHandler,
  getV2LocationsLocationIdTransactionsRouteHandler,
  getV2LocationsLocationIdTransactionsTransactionIdRouteHandler,
  getV2LocationsRouteHandler,
  getV2LoyaltyAccountsAccountIdRouteHandler,
  getV2LoyaltyProgramsProgramIdRouteHandler,
  getV2LoyaltyProgramsRouteHandler,
  getV2LoyaltyRewardsRewardIdRouteHandler,
  getV2MerchantsMerchantIdRouteHandler,
  getV2MerchantsRouteHandler,
  getV2OrdersOrderIdRouteHandler,
  getV2PaymentsPaymentIdRouteHandler,
  getV2PaymentsRouteHandler,
  getV2RefundsRefundIdRouteHandler,
  getV2RefundsRouteHandler,
  getV2SitesRouteHandler,
  getV2SitesSiteIdSnippetRouteHandler,
  getV2SubscriptionsSubscriptionIdEventsRouteHandler,
  getV2SubscriptionsSubscriptionIdRouteHandler,
  getV2TeamMembersTeamMemberIdRouteHandler,
  getV2TeamMembersTeamMemberIdWageSettingRouteHandler,
  getV2TerminalsCheckoutsCheckoutIdRouteHandler,
  getV2TerminalsRefundsTerminalRefundIdRouteHandler,
  postMobileAuthorizationCodeRouteHandler,
  postOauth2ClientsClientIdAccessTokenRenewRouteHandler,
  postOauth2RevokeRouteHandler,
  postOauth2TokenRouteHandler,
  postV1LocationIdRefundsRouteHandler,
  postV1MeEmployeesRouteHandler,
  postV1MeRolesRouteHandler,
  postV2ApplePayDomainsRouteHandler,
  postV2BookingsAvailabilitySearchRouteHandler,
  postV2BookingsBookingIdCancelRouteHandler,
  postV2BookingsRouteHandler,
  postV2CardsCardIdDisableRouteHandler,
  postV2CardsRouteHandler,
  postV2CatalogBatchDeleteRouteHandler,
  postV2CatalogBatchRetrieveRouteHandler,
  postV2CatalogBatchUpsertRouteHandler,
  postV2CatalogObjectRouteHandler,
  postV2CatalogSearchCatalogItemsRouteHandler,
  postV2CatalogSearchRouteHandler,
  postV2CatalogUpdateItemModifierListsRouteHandler,
  postV2CatalogUpdateItemTaxesRouteHandler,
  postV2CustomersCustomerIdCardsRouteHandler,
  postV2CustomersGroupsRouteHandler,
  postV2CustomersRouteHandler,
  postV2CustomersSearchRouteHandler,
  postV2DevicesCodesRouteHandler,
  postV2DisputesDisputeIdAcceptRouteHandler,
  postV2DisputesDisputeIdEvidenceTextRouteHandler,
  postV2DisputesDisputeIdSubmitEvidenceRouteHandler,
  postV2GiftCardsActivitiesRouteHandler,
  postV2GiftCardsFromGanRouteHandler,
  postV2GiftCardsFromNonceRouteHandler,
  postV2GiftCardsGiftCardIdLinkCustomerRouteHandler,
  postV2GiftCardsGiftCardIdUnlinkCustomerRouteHandler,
  postV2GiftCardsRouteHandler,
  postV2InventoryBatchChangeRouteHandler,
  postV2InventoryBatchRetrieveChangesRouteHandler,
  postV2InventoryBatchRetrieveCountsRouteHandler,
  postV2InventoryChangesBatchCreateRouteHandler,
  postV2InventoryChangesBatchRetrieveRouteHandler,
  postV2InventoryCountsBatchRetrieveRouteHandler,
  postV2InvoicesInvoiceIdCancelRouteHandler,
  postV2InvoicesInvoiceIdPublishRouteHandler,
  postV2InvoicesRouteHandler,
  postV2InvoicesSearchRouteHandler,
  postV2LaborBreakTypesRouteHandler,
  postV2LaborShiftsRouteHandler,
  postV2LaborShiftsSearchRouteHandler,
  postV2LocationsLocationIdCheckoutsRouteHandler,
  postV2LocationsLocationIdTransactionsRouteHandler,
  postV2LocationsLocationIdTransactionsTransactionIdCaptureRouteHandler,
  postV2LocationsLocationIdTransactionsTransactionIdRefundRouteHandler,
  postV2LocationsLocationIdTransactionsTransactionIdVoidRouteHandler,
  postV2LocationsRouteHandler,
  postV2LoyaltyAccountsAccountIdAccumulateRouteHandler,
  postV2LoyaltyAccountsAccountIdAdjustRouteHandler,
  postV2LoyaltyAccountsRouteHandler,
  postV2LoyaltyAccountsSearchRouteHandler,
  postV2LoyaltyEventsSearchRouteHandler,
  postV2LoyaltyProgramsProgramIdCalculateRouteHandler,
  postV2LoyaltyRewardsRewardIdRedeemRouteHandler,
  postV2LoyaltyRewardsRouteHandler,
  postV2LoyaltyRewardsSearchRouteHandler,
  postV2OrdersBatchRetrieveRouteHandler,
  postV2OrdersCalculateRouteHandler,
  postV2OrdersOrderIdPayRouteHandler,
  postV2OrdersRouteHandler,
  postV2OrdersSearchRouteHandler,
  postV2PaymentsCancelRouteHandler,
  postV2PaymentsPaymentIdCancelRouteHandler,
  postV2PaymentsPaymentIdCompleteRouteHandler,
  postV2PaymentsRouteHandler,
  postV2RefundsRouteHandler,
  postV2SitesSiteIdSnippetRouteHandler,
  postV2SubscriptionsRouteHandler,
  postV2SubscriptionsSearchRouteHandler,
  postV2SubscriptionsSubscriptionIdCancelRouteHandler,
  postV2SubscriptionsSubscriptionIdResumeRouteHandler,
  postV2TeamMembersBulkCreateRouteHandler,
  postV2TeamMembersBulkUpdateRouteHandler,
  postV2TeamMembersRouteHandler,
  postV2TeamMembersSearchRouteHandler,
  postV2TerminalsCheckoutsCheckoutIdCancelRouteHandler,
  postV2TerminalsCheckoutsRouteHandler,
  postV2TerminalsCheckoutsSearchRouteHandler,
  postV2TerminalsRefundsRouteHandler,
  postV2TerminalsRefundsSearchRouteHandler,
  postV2TerminalsRefundsTerminalRefundIdCancelRouteHandler,
  putV1LocationIdOrdersOrderIdRouteHandler,
  putV1MeEmployeesEmployeeIdRouteHandler,
  putV1MeRolesRoleIdRouteHandler,
  putV2BookingsBookingIdRouteHandler,
  putV2CustomersCustomerIdGroupsGroupIdRouteHandler,
  putV2CustomersCustomerIdRouteHandler,
  putV2CustomersGroupsGroupIdRouteHandler,
  putV2InvoicesInvoiceIdRouteHandler,
  putV2LaborBreakTypesIdRouteHandler,
  putV2LaborShiftsIdRouteHandler,
  putV2LaborWorkweekConfigsIdRouteHandler,
  putV2LocationsLocationIdRouteHandler,
  putV2OrdersOrderIdRouteHandler,
  putV2PaymentsPaymentIdRouteHandler,
  putV2SubscriptionsSubscriptionIdRouteHandler,
  putV2TeamMembersTeamMemberIdRouteHandler,
  putV2TeamMembersTeamMemberIdWageSettingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postMobileAuthorizationCodeRoute, postMobileAuthorizationCodeRouteHandler)
  .openapi(
    postOauth2ClientsClientIdAccessTokenRenewRoute,
    postOauth2ClientsClientIdAccessTokenRenewRouteHandler,
  )
  .openapi(postOauth2RevokeRoute, postOauth2RevokeRouteHandler)
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(getV1MeEmployeesRoute, getV1MeEmployeesRouteHandler)
  .openapi(postV1MeEmployeesRoute, postV1MeEmployeesRouteHandler)
  .openapi(getV1MeEmployeesEmployeeIdRoute, getV1MeEmployeesEmployeeIdRouteHandler)
  .openapi(putV1MeEmployeesEmployeeIdRoute, putV1MeEmployeesEmployeeIdRouteHandler)
  .openapi(getV1MeRolesRoute, getV1MeRolesRouteHandler)
  .openapi(postV1MeRolesRoute, postV1MeRolesRouteHandler)
  .openapi(getV1MeRolesRoleIdRoute, getV1MeRolesRoleIdRouteHandler)
  .openapi(putV1MeRolesRoleIdRoute, putV1MeRolesRoleIdRouteHandler)
  .openapi(getV1LocationIdOrdersRoute, getV1LocationIdOrdersRouteHandler)
  .openapi(getV1LocationIdOrdersOrderIdRoute, getV1LocationIdOrdersOrderIdRouteHandler)
  .openapi(putV1LocationIdOrdersOrderIdRoute, putV1LocationIdOrdersOrderIdRouteHandler)
  .openapi(getV1LocationIdPaymentsRoute, getV1LocationIdPaymentsRouteHandler)
  .openapi(getV1LocationIdPaymentsPaymentIdRoute, getV1LocationIdPaymentsPaymentIdRouteHandler)
  .openapi(getV1LocationIdRefundsRoute, getV1LocationIdRefundsRouteHandler)
  .openapi(postV1LocationIdRefundsRoute, postV1LocationIdRefundsRouteHandler)
  .openapi(getV1LocationIdSettlementsRoute, getV1LocationIdSettlementsRouteHandler)
  .openapi(
    getV1LocationIdSettlementsSettlementIdRoute,
    getV1LocationIdSettlementsSettlementIdRouteHandler,
  )
  .openapi(postV2ApplePayDomainsRoute, postV2ApplePayDomainsRouteHandler)
  .openapi(getV2BankAccountsRoute, getV2BankAccountsRouteHandler)
  .openapi(
    getV2BankAccountsByV1IdV1BankAccountIdRoute,
    getV2BankAccountsByV1IdV1BankAccountIdRouteHandler,
  )
  .openapi(getV2BankAccountsBankAccountIdRoute, getV2BankAccountsBankAccountIdRouteHandler)
  .openapi(postV2BookingsRoute, postV2BookingsRouteHandler)
  .openapi(postV2BookingsAvailabilitySearchRoute, postV2BookingsAvailabilitySearchRouteHandler)
  .openapi(
    getV2BookingsBusinessBookingProfileRoute,
    getV2BookingsBusinessBookingProfileRouteHandler,
  )
  .openapi(
    getV2BookingsTeamMemberBookingProfilesRoute,
    getV2BookingsTeamMemberBookingProfilesRouteHandler,
  )
  .openapi(
    getV2BookingsTeamMemberBookingProfilesTeamMemberIdRoute,
    getV2BookingsTeamMemberBookingProfilesTeamMemberIdRouteHandler,
  )
  .openapi(getV2BookingsBookingIdRoute, getV2BookingsBookingIdRouteHandler)
  .openapi(putV2BookingsBookingIdRoute, putV2BookingsBookingIdRouteHandler)
  .openapi(postV2BookingsBookingIdCancelRoute, postV2BookingsBookingIdCancelRouteHandler)
  .openapi(getV2CardsRoute, getV2CardsRouteHandler)
  .openapi(postV2CardsRoute, postV2CardsRouteHandler)
  .openapi(getV2CardsCardIdRoute, getV2CardsCardIdRouteHandler)
  .openapi(postV2CardsCardIdDisableRoute, postV2CardsCardIdDisableRouteHandler)
  .openapi(getV2CashDrawersShiftsRoute, getV2CashDrawersShiftsRouteHandler)
  .openapi(getV2CashDrawersShiftsShiftIdRoute, getV2CashDrawersShiftsShiftIdRouteHandler)
  .openapi(
    getV2CashDrawersShiftsShiftIdEventsRoute,
    getV2CashDrawersShiftsShiftIdEventsRouteHandler,
  )
  .openapi(postV2CatalogBatchDeleteRoute, postV2CatalogBatchDeleteRouteHandler)
  .openapi(postV2CatalogBatchRetrieveRoute, postV2CatalogBatchRetrieveRouteHandler)
  .openapi(postV2CatalogBatchUpsertRoute, postV2CatalogBatchUpsertRouteHandler)
  .openapi(getV2CatalogInfoRoute, getV2CatalogInfoRouteHandler)
  .openapi(getV2CatalogListRoute, getV2CatalogListRouteHandler)
  .openapi(postV2CatalogObjectRoute, postV2CatalogObjectRouteHandler)
  .openapi(deleteV2CatalogObjectObjectIdRoute, deleteV2CatalogObjectObjectIdRouteHandler)
  .openapi(getV2CatalogObjectObjectIdRoute, getV2CatalogObjectObjectIdRouteHandler)
  .openapi(postV2CatalogSearchRoute, postV2CatalogSearchRouteHandler)
  .openapi(postV2CatalogSearchCatalogItemsRoute, postV2CatalogSearchCatalogItemsRouteHandler)
  .openapi(
    postV2CatalogUpdateItemModifierListsRoute,
    postV2CatalogUpdateItemModifierListsRouteHandler,
  )
  .openapi(postV2CatalogUpdateItemTaxesRoute, postV2CatalogUpdateItemTaxesRouteHandler)
  .openapi(getV2CustomersRoute, getV2CustomersRouteHandler)
  .openapi(postV2CustomersRoute, postV2CustomersRouteHandler)
  .openapi(getV2CustomersGroupsRoute, getV2CustomersGroupsRouteHandler)
  .openapi(postV2CustomersGroupsRoute, postV2CustomersGroupsRouteHandler)
  .openapi(deleteV2CustomersGroupsGroupIdRoute, deleteV2CustomersGroupsGroupIdRouteHandler)
  .openapi(getV2CustomersGroupsGroupIdRoute, getV2CustomersGroupsGroupIdRouteHandler)
  .openapi(putV2CustomersGroupsGroupIdRoute, putV2CustomersGroupsGroupIdRouteHandler)
  .openapi(postV2CustomersSearchRoute, postV2CustomersSearchRouteHandler)
  .openapi(getV2CustomersSegmentsRoute, getV2CustomersSegmentsRouteHandler)
  .openapi(getV2CustomersSegmentsSegmentIdRoute, getV2CustomersSegmentsSegmentIdRouteHandler)
  .openapi(deleteV2CustomersCustomerIdRoute, deleteV2CustomersCustomerIdRouteHandler)
  .openapi(getV2CustomersCustomerIdRoute, getV2CustomersCustomerIdRouteHandler)
  .openapi(putV2CustomersCustomerIdRoute, putV2CustomersCustomerIdRouteHandler)
  .openapi(postV2CustomersCustomerIdCardsRoute, postV2CustomersCustomerIdCardsRouteHandler)
  .openapi(
    deleteV2CustomersCustomerIdCardsCardIdRoute,
    deleteV2CustomersCustomerIdCardsCardIdRouteHandler,
  )
  .openapi(
    deleteV2CustomersCustomerIdGroupsGroupIdRoute,
    deleteV2CustomersCustomerIdGroupsGroupIdRouteHandler,
  )
  .openapi(
    putV2CustomersCustomerIdGroupsGroupIdRoute,
    putV2CustomersCustomerIdGroupsGroupIdRouteHandler,
  )
  .openapi(getV2DevicesCodesRoute, getV2DevicesCodesRouteHandler)
  .openapi(postV2DevicesCodesRoute, postV2DevicesCodesRouteHandler)
  .openapi(getV2DevicesCodesIdRoute, getV2DevicesCodesIdRouteHandler)
  .openapi(getV2DisputesRoute, getV2DisputesRouteHandler)
  .openapi(getV2DisputesDisputeIdRoute, getV2DisputesDisputeIdRouteHandler)
  .openapi(postV2DisputesDisputeIdAcceptRoute, postV2DisputesDisputeIdAcceptRouteHandler)
  .openapi(getV2DisputesDisputeIdEvidenceRoute, getV2DisputesDisputeIdEvidenceRouteHandler)
  .openapi(
    postV2DisputesDisputeIdEvidenceTextRoute,
    postV2DisputesDisputeIdEvidenceTextRouteHandler,
  )
  .openapi(
    deleteV2DisputesDisputeIdEvidenceEvidenceIdRoute,
    deleteV2DisputesDisputeIdEvidenceEvidenceIdRouteHandler,
  )
  .openapi(
    getV2DisputesDisputeIdEvidenceEvidenceIdRoute,
    getV2DisputesDisputeIdEvidenceEvidenceIdRouteHandler,
  )
  .openapi(
    postV2DisputesDisputeIdSubmitEvidenceRoute,
    postV2DisputesDisputeIdSubmitEvidenceRouteHandler,
  )
  .openapi(getV2EmployeesRoute, getV2EmployeesRouteHandler)
  .openapi(getV2EmployeesIdRoute, getV2EmployeesIdRouteHandler)
  .openapi(getV2GiftCardsRoute, getV2GiftCardsRouteHandler)
  .openapi(postV2GiftCardsRoute, postV2GiftCardsRouteHandler)
  .openapi(getV2GiftCardsActivitiesRoute, getV2GiftCardsActivitiesRouteHandler)
  .openapi(postV2GiftCardsActivitiesRoute, postV2GiftCardsActivitiesRouteHandler)
  .openapi(postV2GiftCardsFromGanRoute, postV2GiftCardsFromGanRouteHandler)
  .openapi(postV2GiftCardsFromNonceRoute, postV2GiftCardsFromNonceRouteHandler)
  .openapi(
    postV2GiftCardsGiftCardIdLinkCustomerRoute,
    postV2GiftCardsGiftCardIdLinkCustomerRouteHandler,
  )
  .openapi(
    postV2GiftCardsGiftCardIdUnlinkCustomerRoute,
    postV2GiftCardsGiftCardIdUnlinkCustomerRouteHandler,
  )
  .openapi(getV2GiftCardsIdRoute, getV2GiftCardsIdRouteHandler)
  .openapi(
    getV2InventoryAdjustmentAdjustmentIdRoute,
    getV2InventoryAdjustmentAdjustmentIdRouteHandler,
  )
  .openapi(
    getV2InventoryAdjustmentsAdjustmentIdRoute,
    getV2InventoryAdjustmentsAdjustmentIdRouteHandler,
  )
  .openapi(postV2InventoryBatchChangeRoute, postV2InventoryBatchChangeRouteHandler)
  .openapi(
    postV2InventoryBatchRetrieveChangesRoute,
    postV2InventoryBatchRetrieveChangesRouteHandler,
  )
  .openapi(postV2InventoryBatchRetrieveCountsRoute, postV2InventoryBatchRetrieveCountsRouteHandler)
  .openapi(postV2InventoryChangesBatchCreateRoute, postV2InventoryChangesBatchCreateRouteHandler)
  .openapi(
    postV2InventoryChangesBatchRetrieveRoute,
    postV2InventoryChangesBatchRetrieveRouteHandler,
  )
  .openapi(postV2InventoryCountsBatchRetrieveRoute, postV2InventoryCountsBatchRetrieveRouteHandler)
  .openapi(
    getV2InventoryPhysicalCountPhysicalCountIdRoute,
    getV2InventoryPhysicalCountPhysicalCountIdRouteHandler,
  )
  .openapi(
    getV2InventoryPhysicalCountsPhysicalCountIdRoute,
    getV2InventoryPhysicalCountsPhysicalCountIdRouteHandler,
  )
  .openapi(getV2InventoryTransfersTransferIdRoute, getV2InventoryTransfersTransferIdRouteHandler)
  .openapi(getV2InventoryCatalogObjectIdRoute, getV2InventoryCatalogObjectIdRouteHandler)
  .openapi(
    getV2InventoryCatalogObjectIdChangesRoute,
    getV2InventoryCatalogObjectIdChangesRouteHandler,
  )
  .openapi(getV2InvoicesRoute, getV2InvoicesRouteHandler)
  .openapi(postV2InvoicesRoute, postV2InvoicesRouteHandler)
  .openapi(postV2InvoicesSearchRoute, postV2InvoicesSearchRouteHandler)
  .openapi(deleteV2InvoicesInvoiceIdRoute, deleteV2InvoicesInvoiceIdRouteHandler)
  .openapi(getV2InvoicesInvoiceIdRoute, getV2InvoicesInvoiceIdRouteHandler)
  .openapi(putV2InvoicesInvoiceIdRoute, putV2InvoicesInvoiceIdRouteHandler)
  .openapi(postV2InvoicesInvoiceIdCancelRoute, postV2InvoicesInvoiceIdCancelRouteHandler)
  .openapi(postV2InvoicesInvoiceIdPublishRoute, postV2InvoicesInvoiceIdPublishRouteHandler)
  .openapi(getV2LaborBreakTypesRoute, getV2LaborBreakTypesRouteHandler)
  .openapi(postV2LaborBreakTypesRoute, postV2LaborBreakTypesRouteHandler)
  .openapi(deleteV2LaborBreakTypesIdRoute, deleteV2LaborBreakTypesIdRouteHandler)
  .openapi(getV2LaborBreakTypesIdRoute, getV2LaborBreakTypesIdRouteHandler)
  .openapi(putV2LaborBreakTypesIdRoute, putV2LaborBreakTypesIdRouteHandler)
  .openapi(getV2LaborEmployeeWagesRoute, getV2LaborEmployeeWagesRouteHandler)
  .openapi(getV2LaborEmployeeWagesIdRoute, getV2LaborEmployeeWagesIdRouteHandler)
  .openapi(postV2LaborShiftsRoute, postV2LaborShiftsRouteHandler)
  .openapi(postV2LaborShiftsSearchRoute, postV2LaborShiftsSearchRouteHandler)
  .openapi(deleteV2LaborShiftsIdRoute, deleteV2LaborShiftsIdRouteHandler)
  .openapi(getV2LaborShiftsIdRoute, getV2LaborShiftsIdRouteHandler)
  .openapi(putV2LaborShiftsIdRoute, putV2LaborShiftsIdRouteHandler)
  .openapi(getV2LaborTeamMemberWagesRoute, getV2LaborTeamMemberWagesRouteHandler)
  .openapi(getV2LaborTeamMemberWagesIdRoute, getV2LaborTeamMemberWagesIdRouteHandler)
  .openapi(getV2LaborWorkweekConfigsRoute, getV2LaborWorkweekConfigsRouteHandler)
  .openapi(putV2LaborWorkweekConfigsIdRoute, putV2LaborWorkweekConfigsIdRouteHandler)
  .openapi(getV2LocationsRoute, getV2LocationsRouteHandler)
  .openapi(postV2LocationsRoute, postV2LocationsRouteHandler)
  .openapi(getV2LocationsLocationIdRoute, getV2LocationsLocationIdRouteHandler)
  .openapi(putV2LocationsLocationIdRoute, putV2LocationsLocationIdRouteHandler)
  .openapi(postV2LocationsLocationIdCheckoutsRoute, postV2LocationsLocationIdCheckoutsRouteHandler)
  .openapi(getV2LocationsLocationIdRefundsRoute, getV2LocationsLocationIdRefundsRouteHandler)
  .openapi(
    getV2LocationsLocationIdTransactionsRoute,
    getV2LocationsLocationIdTransactionsRouteHandler,
  )
  .openapi(
    postV2LocationsLocationIdTransactionsRoute,
    postV2LocationsLocationIdTransactionsRouteHandler,
  )
  .openapi(
    getV2LocationsLocationIdTransactionsTransactionIdRoute,
    getV2LocationsLocationIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(
    postV2LocationsLocationIdTransactionsTransactionIdCaptureRoute,
    postV2LocationsLocationIdTransactionsTransactionIdCaptureRouteHandler,
  )
  .openapi(
    postV2LocationsLocationIdTransactionsTransactionIdRefundRoute,
    postV2LocationsLocationIdTransactionsTransactionIdRefundRouteHandler,
  )
  .openapi(
    postV2LocationsLocationIdTransactionsTransactionIdVoidRoute,
    postV2LocationsLocationIdTransactionsTransactionIdVoidRouteHandler,
  )
  .openapi(postV2LoyaltyAccountsRoute, postV2LoyaltyAccountsRouteHandler)
  .openapi(postV2LoyaltyAccountsSearchRoute, postV2LoyaltyAccountsSearchRouteHandler)
  .openapi(getV2LoyaltyAccountsAccountIdRoute, getV2LoyaltyAccountsAccountIdRouteHandler)
  .openapi(
    postV2LoyaltyAccountsAccountIdAccumulateRoute,
    postV2LoyaltyAccountsAccountIdAccumulateRouteHandler,
  )
  .openapi(
    postV2LoyaltyAccountsAccountIdAdjustRoute,
    postV2LoyaltyAccountsAccountIdAdjustRouteHandler,
  )
  .openapi(postV2LoyaltyEventsSearchRoute, postV2LoyaltyEventsSearchRouteHandler)
  .openapi(getV2LoyaltyProgramsRoute, getV2LoyaltyProgramsRouteHandler)
  .openapi(getV2LoyaltyProgramsProgramIdRoute, getV2LoyaltyProgramsProgramIdRouteHandler)
  .openapi(
    postV2LoyaltyProgramsProgramIdCalculateRoute,
    postV2LoyaltyProgramsProgramIdCalculateRouteHandler,
  )
  .openapi(postV2LoyaltyRewardsRoute, postV2LoyaltyRewardsRouteHandler)
  .openapi(postV2LoyaltyRewardsSearchRoute, postV2LoyaltyRewardsSearchRouteHandler)
  .openapi(deleteV2LoyaltyRewardsRewardIdRoute, deleteV2LoyaltyRewardsRewardIdRouteHandler)
  .openapi(getV2LoyaltyRewardsRewardIdRoute, getV2LoyaltyRewardsRewardIdRouteHandler)
  .openapi(postV2LoyaltyRewardsRewardIdRedeemRoute, postV2LoyaltyRewardsRewardIdRedeemRouteHandler)
  .openapi(getV2MerchantsRoute, getV2MerchantsRouteHandler)
  .openapi(getV2MerchantsMerchantIdRoute, getV2MerchantsMerchantIdRouteHandler)
  .openapi(postV2OrdersRoute, postV2OrdersRouteHandler)
  .openapi(postV2OrdersBatchRetrieveRoute, postV2OrdersBatchRetrieveRouteHandler)
  .openapi(postV2OrdersCalculateRoute, postV2OrdersCalculateRouteHandler)
  .openapi(postV2OrdersSearchRoute, postV2OrdersSearchRouteHandler)
  .openapi(getV2OrdersOrderIdRoute, getV2OrdersOrderIdRouteHandler)
  .openapi(putV2OrdersOrderIdRoute, putV2OrdersOrderIdRouteHandler)
  .openapi(postV2OrdersOrderIdPayRoute, postV2OrdersOrderIdPayRouteHandler)
  .openapi(getV2PaymentsRoute, getV2PaymentsRouteHandler)
  .openapi(postV2PaymentsRoute, postV2PaymentsRouteHandler)
  .openapi(postV2PaymentsCancelRoute, postV2PaymentsCancelRouteHandler)
  .openapi(getV2PaymentsPaymentIdRoute, getV2PaymentsPaymentIdRouteHandler)
  .openapi(putV2PaymentsPaymentIdRoute, putV2PaymentsPaymentIdRouteHandler)
  .openapi(postV2PaymentsPaymentIdCancelRoute, postV2PaymentsPaymentIdCancelRouteHandler)
  .openapi(postV2PaymentsPaymentIdCompleteRoute, postV2PaymentsPaymentIdCompleteRouteHandler)
  .openapi(getV2RefundsRoute, getV2RefundsRouteHandler)
  .openapi(postV2RefundsRoute, postV2RefundsRouteHandler)
  .openapi(getV2RefundsRefundIdRoute, getV2RefundsRefundIdRouteHandler)
  .openapi(getV2SitesRoute, getV2SitesRouteHandler)
  .openapi(deleteV2SitesSiteIdSnippetRoute, deleteV2SitesSiteIdSnippetRouteHandler)
  .openapi(getV2SitesSiteIdSnippetRoute, getV2SitesSiteIdSnippetRouteHandler)
  .openapi(postV2SitesSiteIdSnippetRoute, postV2SitesSiteIdSnippetRouteHandler)
  .openapi(postV2SubscriptionsRoute, postV2SubscriptionsRouteHandler)
  .openapi(postV2SubscriptionsSearchRoute, postV2SubscriptionsSearchRouteHandler)
  .openapi(getV2SubscriptionsSubscriptionIdRoute, getV2SubscriptionsSubscriptionIdRouteHandler)
  .openapi(putV2SubscriptionsSubscriptionIdRoute, putV2SubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    postV2SubscriptionsSubscriptionIdCancelRoute,
    postV2SubscriptionsSubscriptionIdCancelRouteHandler,
  )
  .openapi(
    getV2SubscriptionsSubscriptionIdEventsRoute,
    getV2SubscriptionsSubscriptionIdEventsRouteHandler,
  )
  .openapi(
    postV2SubscriptionsSubscriptionIdResumeRoute,
    postV2SubscriptionsSubscriptionIdResumeRouteHandler,
  )
  .openapi(postV2TeamMembersRoute, postV2TeamMembersRouteHandler)
  .openapi(postV2TeamMembersBulkCreateRoute, postV2TeamMembersBulkCreateRouteHandler)
  .openapi(postV2TeamMembersBulkUpdateRoute, postV2TeamMembersBulkUpdateRouteHandler)
  .openapi(postV2TeamMembersSearchRoute, postV2TeamMembersSearchRouteHandler)
  .openapi(getV2TeamMembersTeamMemberIdRoute, getV2TeamMembersTeamMemberIdRouteHandler)
  .openapi(putV2TeamMembersTeamMemberIdRoute, putV2TeamMembersTeamMemberIdRouteHandler)
  .openapi(
    getV2TeamMembersTeamMemberIdWageSettingRoute,
    getV2TeamMembersTeamMemberIdWageSettingRouteHandler,
  )
  .openapi(
    putV2TeamMembersTeamMemberIdWageSettingRoute,
    putV2TeamMembersTeamMemberIdWageSettingRouteHandler,
  )
  .openapi(postV2TerminalsCheckoutsRoute, postV2TerminalsCheckoutsRouteHandler)
  .openapi(postV2TerminalsCheckoutsSearchRoute, postV2TerminalsCheckoutsSearchRouteHandler)
  .openapi(getV2TerminalsCheckoutsCheckoutIdRoute, getV2TerminalsCheckoutsCheckoutIdRouteHandler)
  .openapi(
    postV2TerminalsCheckoutsCheckoutIdCancelRoute,
    postV2TerminalsCheckoutsCheckoutIdCancelRouteHandler,
  )
  .openapi(postV2TerminalsRefundsRoute, postV2TerminalsRefundsRouteHandler)
  .openapi(postV2TerminalsRefundsSearchRoute, postV2TerminalsRefundsSearchRouteHandler)
  .openapi(
    getV2TerminalsRefundsTerminalRefundIdRoute,
    getV2TerminalsRefundsTerminalRefundIdRouteHandler,
  )
  .openapi(
    postV2TerminalsRefundsTerminalRefundIdCancelRoute,
    postV2TerminalsRefundsTerminalRefundIdCancelRouteHandler,
  )

export default app
