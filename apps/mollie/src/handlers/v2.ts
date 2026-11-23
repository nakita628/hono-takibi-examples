import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2BusinessAccountsDraftTransfersDraftTransferIdRoute,
  deleteV2CustomersCustomerIdMandatesMandateIdRoute,
  deleteV2CustomersCustomerIdRoute,
  deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  deleteV2PaymentLinksPaymentLinkIdRoute,
  deleteV2PaymentsPaymentIdRefundsRefundIdRoute,
  deleteV2PaymentsPaymentIdRoute,
  deleteV2PayoutsPayoutIdRoute,
  deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute,
  deleteV2ProfilesProfileIdMethodsMethodIdRoute,
  deleteV2ProfilesProfileIdRoute,
  deleteV2SalesInvoicesSalesInvoiceIdRoute,
  deleteV2TerminalsPairingCodesPairingCodeIdRoute,
  deleteV2WebhooksWebhookIdRoute,
  getV2BalancesBalanceIdReportRoute,
  getV2BalancesBalanceIdRoute,
  getV2BalancesBalanceIdTransactionsRoute,
  getV2BalancesPrimaryRoute,
  getV2BalancesRoute,
  getV2BusinessAccountsAccountsBusinessAccountIdRoute,
  getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRoute,
  getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRoute,
  getV2BusinessAccountsAccountsRoute,
  getV2BusinessAccountsDraftTransfersDraftTransferIdRoute,
  getV2BusinessAccountsDraftTransfersRoute,
  getV2BusinessAccountsTransfersBusinessAccountsTransferIdRoute,
  getV2CapabilitiesRoute,
  getV2ChargebacksRoute,
  getV2ClientsOrganizationIdRoute,
  getV2ClientsRoute,
  getV2ConnectBalanceTransfersBalanceTransferIdRoute,
  getV2ConnectBalanceTransfersRoute,
  getV2CustomersCustomerIdMandatesMandateIdRoute,
  getV2CustomersCustomerIdMandatesRoute,
  getV2CustomersCustomerIdPaymentsRoute,
  getV2CustomersCustomerIdRoute,
  getV2CustomersCustomerIdSubscriptionsRoute,
  getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRoute,
  getV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getV2CustomersRoute,
  getV2EventsWebhookEventIdRoute,
  getV2InvoicesInvoiceIdRoute,
  getV2InvoicesRoute,
  getV2MethodsAllRoute,
  getV2MethodsMethodIdRoute,
  getV2MethodsRoute,
  getV2OnboardingMeRoute,
  getV2OrganizationsMePartnerRoute,
  getV2OrganizationsMeRoute,
  getV2OrganizationsOrganizationIdRoute,
  getV2PaymentLinksPaymentLinkIdPaymentsRoute,
  getV2PaymentLinksPaymentLinkIdRoute,
  getV2PaymentLinksRoute,
  getV2PaymentsPaymentIdCapturesCaptureIdRoute,
  getV2PaymentsPaymentIdCapturesRoute,
  getV2PaymentsPaymentIdChargebacksChargebackIdRoute,
  getV2PaymentsPaymentIdChargebacksRoute,
  getV2PaymentsPaymentIdRefundsRefundIdRoute,
  getV2PaymentsPaymentIdRefundsRoute,
  getV2PaymentsPaymentIdRoute,
  getV2PaymentsPaymentIdRoutesRoute,
  getV2PaymentsPaymentIdRoutesRouteIdRoute,
  getV2PaymentsRoute,
  getV2PayoutsPayoutIdRoute,
  getV2PayoutsRoute,
  getV2PermissionsPermissionIdRoute,
  getV2PermissionsRoute,
  getV2ProfilesMeRoute,
  getV2ProfilesProfileIdRoute,
  getV2ProfilesRoute,
  getV2RefundsRoute,
  getV2ReportsReportIdRoute,
  getV2SalesInvoicesRoute,
  getV2SalesInvoicesSalesInvoiceIdRoute,
  getV2SessionsSessionIdRoute,
  getV2SettlementsNextRoute,
  getV2SettlementsOpenRoute,
  getV2SettlementsRoute,
  getV2SettlementsSettlementIdCapturesRoute,
  getV2SettlementsSettlementIdChargebacksRoute,
  getV2SettlementsSettlementIdPaymentsRoute,
  getV2SettlementsSettlementIdRefundsRoute,
  getV2SettlementsSettlementIdRoute,
  getV2SubscriptionsRoute,
  getV2TerminalsPairingCodesPairingCodeIdRoute,
  getV2TerminalsPairingCodesRoute,
  getV2TerminalsRoute,
  getV2TerminalsTerminalIdRoute,
  getV2UnmatchedCreditTransfersRoute,
  getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdRoute,
  patchV2CustomersCustomerIdRoute,
  patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  patchV2PaymentLinksPaymentLinkIdRoute,
  patchV2PaymentsPaymentIdRoute,
  patchV2ProfilesProfileIdRoute,
  patchV2SalesInvoicesSalesInvoiceIdRoute,
  patchV2WebhooksWebhookIdRoute,
  postV2BusinessAccountsAccountsRoute,
  postV2BusinessAccountsDraftTransfersRoute,
  postV2BusinessAccountsPayeeVerificationsRoute,
  postV2BusinessAccountsTransfersRoute,
  postV2ClientLinksRoute,
  postV2ConnectBalanceTransfersRoute,
  postV2CustomersCustomerIdMandatesRoute,
  postV2CustomersCustomerIdPaymentsRoute,
  postV2CustomersCustomerIdSubscriptionsRoute,
  postV2CustomersRoute,
  postV2OnboardingMeRoute,
  postV2PaymentLinksRoute,
  postV2PaymentsPaymentIdCapturesRoute,
  postV2PaymentsPaymentIdRefundsRoute,
  postV2PaymentsPaymentIdReleaseAuthorizationRoute,
  postV2PaymentsPaymentIdRoutesRoute,
  postV2PaymentsRoute,
  postV2PayoutsRoute,
  postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute,
  postV2ProfilesProfileIdMethodsMethodIdRoute,
  postV2ProfilesRoute,
  postV2ReportsRoute,
  postV2SalesInvoicesRoute,
  postV2SessionsRoute,
  postV2TerminalsPairingCodesRoute,
  postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRoute,
  postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRoute,
  postV2WalletsApplepaySessionsRoute,
  postV2WebhooksRoute,
  postV2WebhooksWebhookIdPingRoute,
} from '../routes'

export const getV2BalancesRouteHandler: RouteHandler<typeof getV2BalancesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BalancesBalanceIdRouteHandler: RouteHandler<
  typeof getV2BalancesBalanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BalancesPrimaryRouteHandler: RouteHandler<
  typeof getV2BalancesPrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BalancesBalanceIdReportRouteHandler: RouteHandler<
  typeof getV2BalancesBalanceIdReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BalancesBalanceIdTransactionsRouteHandler: RouteHandler<
  typeof getV2BalancesBalanceIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ReportsRouteHandler: RouteHandler<typeof postV2ReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReportsReportIdRouteHandler: RouteHandler<
  typeof getV2ReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsRouteHandler: RouteHandler<typeof getV2SettlementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsSettlementIdRouteHandler: RouteHandler<
  typeof getV2SettlementsSettlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsOpenRouteHandler: RouteHandler<
  typeof getV2SettlementsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsNextRouteHandler: RouteHandler<
  typeof getV2SettlementsNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsSettlementIdPaymentsRouteHandler: RouteHandler<
  typeof getV2SettlementsSettlementIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsSettlementIdCapturesRouteHandler: RouteHandler<
  typeof getV2SettlementsSettlementIdCapturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsSettlementIdRefundsRouteHandler: RouteHandler<
  typeof getV2SettlementsSettlementIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SettlementsSettlementIdChargebacksRouteHandler: RouteHandler<
  typeof getV2SettlementsSettlementIdChargebacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InvoicesRouteHandler: RouteHandler<typeof getV2InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getV2InvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PermissionsRouteHandler: RouteHandler<typeof getV2PermissionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2PermissionsPermissionIdRouteHandler: RouteHandler<
  typeof getV2PermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getV2OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OrganizationsMeRouteHandler: RouteHandler<
  typeof getV2OrganizationsMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OrganizationsMePartnerRouteHandler: RouteHandler<
  typeof getV2OrganizationsMePartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProfilesRouteHandler: RouteHandler<typeof postV2ProfilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProfilesRouteHandler: RouteHandler<typeof getV2ProfilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProfilesProfileIdRouteHandler: RouteHandler<
  typeof getV2ProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2ProfilesProfileIdRouteHandler: RouteHandler<
  typeof patchV2ProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ProfilesProfileIdRouteHandler: RouteHandler<
  typeof deleteV2ProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProfilesMeRouteHandler: RouteHandler<typeof getV2ProfilesMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OnboardingMeRouteHandler: RouteHandler<typeof getV2OnboardingMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2OnboardingMeRouteHandler: RouteHandler<typeof postV2OnboardingMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2CapabilitiesRouteHandler: RouteHandler<typeof getV2CapabilitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2ClientsRouteHandler: RouteHandler<typeof getV2ClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ClientsOrganizationIdRouteHandler: RouteHandler<
  typeof getV2ClientsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ClientLinksRouteHandler: RouteHandler<typeof postV2ClientLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2WebhooksRouteHandler: RouteHandler<typeof postV2WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2WebhooksRouteHandler: RouteHandler<typeof getV2WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchV2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2WebhooksWebhookIdPingRouteHandler: RouteHandler<
  typeof postV2WebhooksWebhookIdPingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsWebhookEventIdRouteHandler: RouteHandler<
  typeof getV2EventsWebhookEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ConnectBalanceTransfersRouteHandler: RouteHandler<
  typeof postV2ConnectBalanceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ConnectBalanceTransfersRouteHandler: RouteHandler<
  typeof getV2ConnectBalanceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ConnectBalanceTransfersBalanceTransferIdRouteHandler: RouteHandler<
  typeof getV2ConnectBalanceTransfersBalanceTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsRouteHandler: RouteHandler<typeof postV2PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsRouteHandler: RouteHandler<typeof getV2PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof patchV2PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PaymentsPaymentIdRouteHandler: RouteHandler<
  typeof deleteV2PaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsPaymentIdReleaseAuthorizationRouteHandler: RouteHandler<
  typeof postV2PaymentsPaymentIdReleaseAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UnmatchedCreditTransfersRouteHandler: RouteHandler<
  typeof getV2UnmatchedCreditTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRouteHandler: RouteHandler<
  typeof getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRouteHandler: RouteHandler<
  typeof postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRouteHandler: RouteHandler<
  typeof postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SessionsRouteHandler: RouteHandler<typeof postV2SessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SessionsSessionIdRouteHandler: RouteHandler<
  typeof getV2SessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MethodsRouteHandler: RouteHandler<typeof getV2MethodsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MethodsAllRouteHandler: RouteHandler<typeof getV2MethodsAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MethodsMethodIdRouteHandler: RouteHandler<
  typeof getV2MethodsMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProfilesProfileIdMethodsMethodIdRouteHandler: RouteHandler<
  typeof postV2ProfilesProfileIdMethodsMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ProfilesProfileIdMethodsMethodIdRouteHandler: RouteHandler<
  typeof deleteV2ProfilesProfileIdMethodsMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRouteHandler: RouteHandler<
  typeof postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRouteHandler: RouteHandler<
  typeof deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsPaymentIdRefundsRouteHandler: RouteHandler<
  typeof postV2PaymentsPaymentIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdRefundsRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdRefundsRefundIdRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdRefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PaymentsPaymentIdRefundsRefundIdRouteHandler: RouteHandler<
  typeof deleteV2PaymentsPaymentIdRefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RefundsRouteHandler: RouteHandler<typeof getV2RefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdChargebacksRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdChargebacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdChargebacksChargebackIdRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdChargebacksChargebackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ChargebacksRouteHandler: RouteHandler<typeof getV2ChargebacksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsPaymentIdCapturesRouteHandler: RouteHandler<
  typeof postV2PaymentsPaymentIdCapturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdCapturesRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdCapturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdCapturesCaptureIdRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdCapturesCaptureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2WalletsApplepaySessionsRouteHandler: RouteHandler<
  typeof postV2WalletsApplepaySessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentLinksRouteHandler: RouteHandler<typeof postV2PaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2PaymentLinksRouteHandler: RouteHandler<typeof getV2PaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2PaymentLinksPaymentLinkIdRouteHandler: RouteHandler<
  typeof getV2PaymentLinksPaymentLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2PaymentLinksPaymentLinkIdRouteHandler: RouteHandler<
  typeof patchV2PaymentLinksPaymentLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PaymentLinksPaymentLinkIdRouteHandler: RouteHandler<
  typeof deleteV2PaymentLinksPaymentLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentLinksPaymentLinkIdPaymentsRouteHandler: RouteHandler<
  typeof getV2PaymentLinksPaymentLinkIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TerminalsRouteHandler: RouteHandler<typeof getV2TerminalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TerminalsTerminalIdRouteHandler: RouteHandler<
  typeof getV2TerminalsTerminalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TerminalsPairingCodesRouteHandler: RouteHandler<
  typeof postV2TerminalsPairingCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TerminalsPairingCodesRouteHandler: RouteHandler<
  typeof getV2TerminalsPairingCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TerminalsPairingCodesPairingCodeIdRouteHandler: RouteHandler<
  typeof getV2TerminalsPairingCodesPairingCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2TerminalsPairingCodesPairingCodeIdRouteHandler: RouteHandler<
  typeof deleteV2TerminalsPairingCodesPairingCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsPaymentIdRoutesRouteHandler: RouteHandler<
  typeof postV2PaymentsPaymentIdRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdRoutesRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsPaymentIdRoutesRouteIdRouteHandler: RouteHandler<
  typeof getV2PaymentsPaymentIdRoutesRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersRouteHandler: RouteHandler<typeof postV2CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersRouteHandler: RouteHandler<typeof getV2CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof patchV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersCustomerIdPaymentsRouteHandler: RouteHandler<
  typeof postV2CustomersCustomerIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdPaymentsRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersCustomerIdMandatesRouteHandler: RouteHandler<
  typeof postV2CustomersCustomerIdMandatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdMandatesRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdMandatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdMandatesMandateIdRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdMandatesMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdMandatesMandateIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdMandatesMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersCustomerIdSubscriptionsRouteHandler: RouteHandler<
  typeof postV2CustomersCustomerIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdSubscriptionsRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SubscriptionsRouteHandler: RouteHandler<typeof getV2SubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SalesInvoicesRouteHandler: RouteHandler<
  typeof postV2SalesInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SalesInvoicesRouteHandler: RouteHandler<typeof getV2SalesInvoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2SalesInvoicesSalesInvoiceIdRouteHandler: RouteHandler<
  typeof getV2SalesInvoicesSalesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2SalesInvoicesSalesInvoiceIdRouteHandler: RouteHandler<
  typeof patchV2SalesInvoicesSalesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SalesInvoicesSalesInvoiceIdRouteHandler: RouteHandler<
  typeof deleteV2SalesInvoicesSalesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BusinessAccountsAccountsRouteHandler: RouteHandler<
  typeof postV2BusinessAccountsAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsAccountsRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsAccountsBusinessAccountIdRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsAccountsBusinessAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BusinessAccountsTransfersRouteHandler: RouteHandler<
  typeof postV2BusinessAccountsTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsTransfersBusinessAccountsTransferIdRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsTransfersBusinessAccountsTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BusinessAccountsPayeeVerificationsRouteHandler: RouteHandler<
  typeof postV2BusinessAccountsPayeeVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BusinessAccountsDraftTransfersRouteHandler: RouteHandler<
  typeof postV2BusinessAccountsDraftTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsDraftTransfersRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsDraftTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BusinessAccountsDraftTransfersDraftTransferIdRouteHandler: RouteHandler<
  typeof getV2BusinessAccountsDraftTransfersDraftTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2BusinessAccountsDraftTransfersDraftTransferIdRouteHandler: RouteHandler<
  typeof deleteV2BusinessAccountsDraftTransfersDraftTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PayoutsRouteHandler: RouteHandler<typeof postV2PayoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PayoutsRouteHandler: RouteHandler<typeof getV2PayoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PayoutsPayoutIdRouteHandler: RouteHandler<
  typeof getV2PayoutsPayoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PayoutsPayoutIdRouteHandler: RouteHandler<
  typeof deleteV2PayoutsPayoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
