import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauth2TokensRoute,
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
  postOauth2TokensRoute,
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
} from './routes'
import {
  deleteOauth2TokensRouteHandler,
  deleteV2BusinessAccountsDraftTransfersDraftTransferIdRouteHandler,
  deleteV2CustomersCustomerIdMandatesMandateIdRouteHandler,
  deleteV2CustomersCustomerIdRouteHandler,
  deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  deleteV2PaymentLinksPaymentLinkIdRouteHandler,
  deleteV2PaymentsPaymentIdRefundsRefundIdRouteHandler,
  deleteV2PaymentsPaymentIdRouteHandler,
  deleteV2PayoutsPayoutIdRouteHandler,
  deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRouteHandler,
  deleteV2ProfilesProfileIdMethodsMethodIdRouteHandler,
  deleteV2ProfilesProfileIdRouteHandler,
  deleteV2SalesInvoicesSalesInvoiceIdRouteHandler,
  deleteV2TerminalsPairingCodesPairingCodeIdRouteHandler,
  deleteV2WebhooksWebhookIdRouteHandler,
  getV2BalancesBalanceIdReportRouteHandler,
  getV2BalancesBalanceIdRouteHandler,
  getV2BalancesBalanceIdTransactionsRouteHandler,
  getV2BalancesPrimaryRouteHandler,
  getV2BalancesRouteHandler,
  getV2BusinessAccountsAccountsBusinessAccountIdRouteHandler,
  getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRouteHandler,
  getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRouteHandler,
  getV2BusinessAccountsAccountsRouteHandler,
  getV2BusinessAccountsDraftTransfersDraftTransferIdRouteHandler,
  getV2BusinessAccountsDraftTransfersRouteHandler,
  getV2BusinessAccountsTransfersBusinessAccountsTransferIdRouteHandler,
  getV2CapabilitiesRouteHandler,
  getV2ChargebacksRouteHandler,
  getV2ClientsOrganizationIdRouteHandler,
  getV2ClientsRouteHandler,
  getV2ConnectBalanceTransfersBalanceTransferIdRouteHandler,
  getV2ConnectBalanceTransfersRouteHandler,
  getV2CustomersCustomerIdMandatesMandateIdRouteHandler,
  getV2CustomersCustomerIdMandatesRouteHandler,
  getV2CustomersCustomerIdPaymentsRouteHandler,
  getV2CustomersCustomerIdRouteHandler,
  getV2CustomersCustomerIdSubscriptionsRouteHandler,
  getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRouteHandler,
  getV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  getV2CustomersRouteHandler,
  getV2EventsWebhookEventIdRouteHandler,
  getV2InvoicesInvoiceIdRouteHandler,
  getV2InvoicesRouteHandler,
  getV2MethodsAllRouteHandler,
  getV2MethodsMethodIdRouteHandler,
  getV2MethodsRouteHandler,
  getV2OnboardingMeRouteHandler,
  getV2OrganizationsMePartnerRouteHandler,
  getV2OrganizationsMeRouteHandler,
  getV2OrganizationsOrganizationIdRouteHandler,
  getV2PaymentLinksPaymentLinkIdPaymentsRouteHandler,
  getV2PaymentLinksPaymentLinkIdRouteHandler,
  getV2PaymentLinksRouteHandler,
  getV2PaymentsPaymentIdCapturesCaptureIdRouteHandler,
  getV2PaymentsPaymentIdCapturesRouteHandler,
  getV2PaymentsPaymentIdChargebacksChargebackIdRouteHandler,
  getV2PaymentsPaymentIdChargebacksRouteHandler,
  getV2PaymentsPaymentIdRefundsRefundIdRouteHandler,
  getV2PaymentsPaymentIdRefundsRouteHandler,
  getV2PaymentsPaymentIdRouteHandler,
  getV2PaymentsPaymentIdRoutesRouteHandler,
  getV2PaymentsPaymentIdRoutesRouteIdRouteHandler,
  getV2PaymentsRouteHandler,
  getV2PayoutsPayoutIdRouteHandler,
  getV2PayoutsRouteHandler,
  getV2PermissionsPermissionIdRouteHandler,
  getV2PermissionsRouteHandler,
  getV2ProfilesMeRouteHandler,
  getV2ProfilesProfileIdRouteHandler,
  getV2ProfilesRouteHandler,
  getV2RefundsRouteHandler,
  getV2ReportsReportIdRouteHandler,
  getV2SalesInvoicesRouteHandler,
  getV2SalesInvoicesSalesInvoiceIdRouteHandler,
  getV2SessionsSessionIdRouteHandler,
  getV2SettlementsNextRouteHandler,
  getV2SettlementsOpenRouteHandler,
  getV2SettlementsRouteHandler,
  getV2SettlementsSettlementIdCapturesRouteHandler,
  getV2SettlementsSettlementIdChargebacksRouteHandler,
  getV2SettlementsSettlementIdPaymentsRouteHandler,
  getV2SettlementsSettlementIdRefundsRouteHandler,
  getV2SettlementsSettlementIdRouteHandler,
  getV2SubscriptionsRouteHandler,
  getV2TerminalsPairingCodesPairingCodeIdRouteHandler,
  getV2TerminalsPairingCodesRouteHandler,
  getV2TerminalsRouteHandler,
  getV2TerminalsTerminalIdRouteHandler,
  getV2UnmatchedCreditTransfersRouteHandler,
  getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRouteHandler,
  getV2WebhooksRouteHandler,
  getV2WebhooksWebhookIdRouteHandler,
  patchV2CustomersCustomerIdRouteHandler,
  patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  patchV2PaymentLinksPaymentLinkIdRouteHandler,
  patchV2PaymentsPaymentIdRouteHandler,
  patchV2ProfilesProfileIdRouteHandler,
  patchV2SalesInvoicesSalesInvoiceIdRouteHandler,
  patchV2WebhooksWebhookIdRouteHandler,
  postOauth2TokensRouteHandler,
  postV2BusinessAccountsAccountsRouteHandler,
  postV2BusinessAccountsDraftTransfersRouteHandler,
  postV2BusinessAccountsPayeeVerificationsRouteHandler,
  postV2BusinessAccountsTransfersRouteHandler,
  postV2ClientLinksRouteHandler,
  postV2ConnectBalanceTransfersRouteHandler,
  postV2CustomersCustomerIdMandatesRouteHandler,
  postV2CustomersCustomerIdPaymentsRouteHandler,
  postV2CustomersCustomerIdSubscriptionsRouteHandler,
  postV2CustomersRouteHandler,
  postV2OnboardingMeRouteHandler,
  postV2PaymentLinksRouteHandler,
  postV2PaymentsPaymentIdCapturesRouteHandler,
  postV2PaymentsPaymentIdRefundsRouteHandler,
  postV2PaymentsPaymentIdReleaseAuthorizationRouteHandler,
  postV2PaymentsPaymentIdRoutesRouteHandler,
  postV2PaymentsRouteHandler,
  postV2PayoutsRouteHandler,
  postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRouteHandler,
  postV2ProfilesProfileIdMethodsMethodIdRouteHandler,
  postV2ProfilesRouteHandler,
  postV2ReportsRouteHandler,
  postV2SalesInvoicesRouteHandler,
  postV2SessionsRouteHandler,
  postV2TerminalsPairingCodesRouteHandler,
  postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRouteHandler,
  postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRouteHandler,
  postV2WalletsApplepaySessionsRouteHandler,
  postV2WebhooksRouteHandler,
  postV2WebhooksWebhookIdPingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOauth2TokensRoute, postOauth2TokensRouteHandler)
  .openapi(deleteOauth2TokensRoute, deleteOauth2TokensRouteHandler)
  .openapi(getV2BalancesRoute, getV2BalancesRouteHandler)
  .openapi(getV2BalancesBalanceIdRoute, getV2BalancesBalanceIdRouteHandler)
  .openapi(getV2BalancesPrimaryRoute, getV2BalancesPrimaryRouteHandler)
  .openapi(getV2BalancesBalanceIdReportRoute, getV2BalancesBalanceIdReportRouteHandler)
  .openapi(getV2BalancesBalanceIdTransactionsRoute, getV2BalancesBalanceIdTransactionsRouteHandler)
  .openapi(postV2ReportsRoute, postV2ReportsRouteHandler)
  .openapi(getV2ReportsReportIdRoute, getV2ReportsReportIdRouteHandler)
  .openapi(getV2SettlementsRoute, getV2SettlementsRouteHandler)
  .openapi(getV2SettlementsSettlementIdRoute, getV2SettlementsSettlementIdRouteHandler)
  .openapi(getV2SettlementsOpenRoute, getV2SettlementsOpenRouteHandler)
  .openapi(getV2SettlementsNextRoute, getV2SettlementsNextRouteHandler)
  .openapi(
    getV2SettlementsSettlementIdPaymentsRoute,
    getV2SettlementsSettlementIdPaymentsRouteHandler,
  )
  .openapi(
    getV2SettlementsSettlementIdCapturesRoute,
    getV2SettlementsSettlementIdCapturesRouteHandler,
  )
  .openapi(
    getV2SettlementsSettlementIdRefundsRoute,
    getV2SettlementsSettlementIdRefundsRouteHandler,
  )
  .openapi(
    getV2SettlementsSettlementIdChargebacksRoute,
    getV2SettlementsSettlementIdChargebacksRouteHandler,
  )
  .openapi(getV2InvoicesRoute, getV2InvoicesRouteHandler)
  .openapi(getV2InvoicesInvoiceIdRoute, getV2InvoicesInvoiceIdRouteHandler)
  .openapi(getV2PermissionsRoute, getV2PermissionsRouteHandler)
  .openapi(getV2PermissionsPermissionIdRoute, getV2PermissionsPermissionIdRouteHandler)
  .openapi(getV2OrganizationsOrganizationIdRoute, getV2OrganizationsOrganizationIdRouteHandler)
  .openapi(getV2OrganizationsMeRoute, getV2OrganizationsMeRouteHandler)
  .openapi(getV2OrganizationsMePartnerRoute, getV2OrganizationsMePartnerRouteHandler)
  .openapi(postV2ProfilesRoute, postV2ProfilesRouteHandler)
  .openapi(getV2ProfilesRoute, getV2ProfilesRouteHandler)
  .openapi(getV2ProfilesProfileIdRoute, getV2ProfilesProfileIdRouteHandler)
  .openapi(patchV2ProfilesProfileIdRoute, patchV2ProfilesProfileIdRouteHandler)
  .openapi(deleteV2ProfilesProfileIdRoute, deleteV2ProfilesProfileIdRouteHandler)
  .openapi(getV2ProfilesMeRoute, getV2ProfilesMeRouteHandler)
  .openapi(getV2OnboardingMeRoute, getV2OnboardingMeRouteHandler)
  .openapi(postV2OnboardingMeRoute, postV2OnboardingMeRouteHandler)
  .openapi(getV2CapabilitiesRoute, getV2CapabilitiesRouteHandler)
  .openapi(getV2ClientsRoute, getV2ClientsRouteHandler)
  .openapi(getV2ClientsOrganizationIdRoute, getV2ClientsOrganizationIdRouteHandler)
  .openapi(postV2ClientLinksRoute, postV2ClientLinksRouteHandler)
  .openapi(postV2WebhooksRoute, postV2WebhooksRouteHandler)
  .openapi(getV2WebhooksRoute, getV2WebhooksRouteHandler)
  .openapi(patchV2WebhooksWebhookIdRoute, patchV2WebhooksWebhookIdRouteHandler)
  .openapi(getV2WebhooksWebhookIdRoute, getV2WebhooksWebhookIdRouteHandler)
  .openapi(deleteV2WebhooksWebhookIdRoute, deleteV2WebhooksWebhookIdRouteHandler)
  .openapi(postV2WebhooksWebhookIdPingRoute, postV2WebhooksWebhookIdPingRouteHandler)
  .openapi(getV2EventsWebhookEventIdRoute, getV2EventsWebhookEventIdRouteHandler)
  .openapi(postV2ConnectBalanceTransfersRoute, postV2ConnectBalanceTransfersRouteHandler)
  .openapi(getV2ConnectBalanceTransfersRoute, getV2ConnectBalanceTransfersRouteHandler)
  .openapi(
    getV2ConnectBalanceTransfersBalanceTransferIdRoute,
    getV2ConnectBalanceTransfersBalanceTransferIdRouteHandler,
  )
  .openapi(postV2PaymentsRoute, postV2PaymentsRouteHandler)
  .openapi(getV2PaymentsRoute, getV2PaymentsRouteHandler)
  .openapi(getV2PaymentsPaymentIdRoute, getV2PaymentsPaymentIdRouteHandler)
  .openapi(patchV2PaymentsPaymentIdRoute, patchV2PaymentsPaymentIdRouteHandler)
  .openapi(deleteV2PaymentsPaymentIdRoute, deleteV2PaymentsPaymentIdRouteHandler)
  .openapi(
    postV2PaymentsPaymentIdReleaseAuthorizationRoute,
    postV2PaymentsPaymentIdReleaseAuthorizationRouteHandler,
  )
  .openapi(getV2UnmatchedCreditTransfersRoute, getV2UnmatchedCreditTransfersRouteHandler)
  .openapi(
    getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRoute,
    getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRouteHandler,
  )
  .openapi(
    postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRoute,
    postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRouteHandler,
  )
  .openapi(
    postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRoute,
    postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRouteHandler,
  )
  .openapi(postV2SessionsRoute, postV2SessionsRouteHandler)
  .openapi(getV2SessionsSessionIdRoute, getV2SessionsSessionIdRouteHandler)
  .openapi(getV2MethodsRoute, getV2MethodsRouteHandler)
  .openapi(getV2MethodsAllRoute, getV2MethodsAllRouteHandler)
  .openapi(getV2MethodsMethodIdRoute, getV2MethodsMethodIdRouteHandler)
  .openapi(
    postV2ProfilesProfileIdMethodsMethodIdRoute,
    postV2ProfilesProfileIdMethodsMethodIdRouteHandler,
  )
  .openapi(
    deleteV2ProfilesProfileIdMethodsMethodIdRoute,
    deleteV2ProfilesProfileIdMethodsMethodIdRouteHandler,
  )
  .openapi(
    postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute,
    postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRouteHandler,
  )
  .openapi(
    deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute,
    deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRouteHandler,
  )
  .openapi(postV2PaymentsPaymentIdRefundsRoute, postV2PaymentsPaymentIdRefundsRouteHandler)
  .openapi(getV2PaymentsPaymentIdRefundsRoute, getV2PaymentsPaymentIdRefundsRouteHandler)
  .openapi(
    getV2PaymentsPaymentIdRefundsRefundIdRoute,
    getV2PaymentsPaymentIdRefundsRefundIdRouteHandler,
  )
  .openapi(
    deleteV2PaymentsPaymentIdRefundsRefundIdRoute,
    deleteV2PaymentsPaymentIdRefundsRefundIdRouteHandler,
  )
  .openapi(getV2RefundsRoute, getV2RefundsRouteHandler)
  .openapi(getV2PaymentsPaymentIdChargebacksRoute, getV2PaymentsPaymentIdChargebacksRouteHandler)
  .openapi(
    getV2PaymentsPaymentIdChargebacksChargebackIdRoute,
    getV2PaymentsPaymentIdChargebacksChargebackIdRouteHandler,
  )
  .openapi(getV2ChargebacksRoute, getV2ChargebacksRouteHandler)
  .openapi(postV2PaymentsPaymentIdCapturesRoute, postV2PaymentsPaymentIdCapturesRouteHandler)
  .openapi(getV2PaymentsPaymentIdCapturesRoute, getV2PaymentsPaymentIdCapturesRouteHandler)
  .openapi(
    getV2PaymentsPaymentIdCapturesCaptureIdRoute,
    getV2PaymentsPaymentIdCapturesCaptureIdRouteHandler,
  )
  .openapi(postV2WalletsApplepaySessionsRoute, postV2WalletsApplepaySessionsRouteHandler)
  .openapi(postV2PaymentLinksRoute, postV2PaymentLinksRouteHandler)
  .openapi(getV2PaymentLinksRoute, getV2PaymentLinksRouteHandler)
  .openapi(getV2PaymentLinksPaymentLinkIdRoute, getV2PaymentLinksPaymentLinkIdRouteHandler)
  .openapi(patchV2PaymentLinksPaymentLinkIdRoute, patchV2PaymentLinksPaymentLinkIdRouteHandler)
  .openapi(deleteV2PaymentLinksPaymentLinkIdRoute, deleteV2PaymentLinksPaymentLinkIdRouteHandler)
  .openapi(
    getV2PaymentLinksPaymentLinkIdPaymentsRoute,
    getV2PaymentLinksPaymentLinkIdPaymentsRouteHandler,
  )
  .openapi(getV2TerminalsRoute, getV2TerminalsRouteHandler)
  .openapi(getV2TerminalsTerminalIdRoute, getV2TerminalsTerminalIdRouteHandler)
  .openapi(postV2TerminalsPairingCodesRoute, postV2TerminalsPairingCodesRouteHandler)
  .openapi(getV2TerminalsPairingCodesRoute, getV2TerminalsPairingCodesRouteHandler)
  .openapi(
    getV2TerminalsPairingCodesPairingCodeIdRoute,
    getV2TerminalsPairingCodesPairingCodeIdRouteHandler,
  )
  .openapi(
    deleteV2TerminalsPairingCodesPairingCodeIdRoute,
    deleteV2TerminalsPairingCodesPairingCodeIdRouteHandler,
  )
  .openapi(postV2PaymentsPaymentIdRoutesRoute, postV2PaymentsPaymentIdRoutesRouteHandler)
  .openapi(getV2PaymentsPaymentIdRoutesRoute, getV2PaymentsPaymentIdRoutesRouteHandler)
  .openapi(
    getV2PaymentsPaymentIdRoutesRouteIdRoute,
    getV2PaymentsPaymentIdRoutesRouteIdRouteHandler,
  )
  .openapi(postV2CustomersRoute, postV2CustomersRouteHandler)
  .openapi(getV2CustomersRoute, getV2CustomersRouteHandler)
  .openapi(getV2CustomersCustomerIdRoute, getV2CustomersCustomerIdRouteHandler)
  .openapi(patchV2CustomersCustomerIdRoute, patchV2CustomersCustomerIdRouteHandler)
  .openapi(deleteV2CustomersCustomerIdRoute, deleteV2CustomersCustomerIdRouteHandler)
  .openapi(postV2CustomersCustomerIdPaymentsRoute, postV2CustomersCustomerIdPaymentsRouteHandler)
  .openapi(getV2CustomersCustomerIdPaymentsRoute, getV2CustomersCustomerIdPaymentsRouteHandler)
  .openapi(postV2CustomersCustomerIdMandatesRoute, postV2CustomersCustomerIdMandatesRouteHandler)
  .openapi(getV2CustomersCustomerIdMandatesRoute, getV2CustomersCustomerIdMandatesRouteHandler)
  .openapi(
    getV2CustomersCustomerIdMandatesMandateIdRoute,
    getV2CustomersCustomerIdMandatesMandateIdRouteHandler,
  )
  .openapi(
    deleteV2CustomersCustomerIdMandatesMandateIdRoute,
    deleteV2CustomersCustomerIdMandatesMandateIdRouteHandler,
  )
  .openapi(
    postV2CustomersCustomerIdSubscriptionsRoute,
    postV2CustomersCustomerIdSubscriptionsRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdSubscriptionsRoute,
    getV2CustomersCustomerIdSubscriptionsRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
    getV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
    patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
    deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getV2SubscriptionsRoute, getV2SubscriptionsRouteHandler)
  .openapi(
    getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRoute,
    getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRouteHandler,
  )
  .openapi(postV2SalesInvoicesRoute, postV2SalesInvoicesRouteHandler)
  .openapi(getV2SalesInvoicesRoute, getV2SalesInvoicesRouteHandler)
  .openapi(getV2SalesInvoicesSalesInvoiceIdRoute, getV2SalesInvoicesSalesInvoiceIdRouteHandler)
  .openapi(patchV2SalesInvoicesSalesInvoiceIdRoute, patchV2SalesInvoicesSalesInvoiceIdRouteHandler)
  .openapi(
    deleteV2SalesInvoicesSalesInvoiceIdRoute,
    deleteV2SalesInvoicesSalesInvoiceIdRouteHandler,
  )
  .openapi(postV2BusinessAccountsAccountsRoute, postV2BusinessAccountsAccountsRouteHandler)
  .openapi(getV2BusinessAccountsAccountsRoute, getV2BusinessAccountsAccountsRouteHandler)
  .openapi(
    getV2BusinessAccountsAccountsBusinessAccountIdRoute,
    getV2BusinessAccountsAccountsBusinessAccountIdRouteHandler,
  )
  .openapi(
    getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRoute,
    getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRouteHandler,
  )
  .openapi(
    getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRoute,
    getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(postV2BusinessAccountsTransfersRoute, postV2BusinessAccountsTransfersRouteHandler)
  .openapi(
    getV2BusinessAccountsTransfersBusinessAccountsTransferIdRoute,
    getV2BusinessAccountsTransfersBusinessAccountsTransferIdRouteHandler,
  )
  .openapi(
    postV2BusinessAccountsPayeeVerificationsRoute,
    postV2BusinessAccountsPayeeVerificationsRouteHandler,
  )
  .openapi(
    postV2BusinessAccountsDraftTransfersRoute,
    postV2BusinessAccountsDraftTransfersRouteHandler,
  )
  .openapi(
    getV2BusinessAccountsDraftTransfersRoute,
    getV2BusinessAccountsDraftTransfersRouteHandler,
  )
  .openapi(
    getV2BusinessAccountsDraftTransfersDraftTransferIdRoute,
    getV2BusinessAccountsDraftTransfersDraftTransferIdRouteHandler,
  )
  .openapi(
    deleteV2BusinessAccountsDraftTransfersDraftTransferIdRoute,
    deleteV2BusinessAccountsDraftTransfersDraftTransferIdRouteHandler,
  )
  .openapi(postV2PayoutsRoute, postV2PayoutsRouteHandler)
  .openapi(getV2PayoutsRoute, getV2PayoutsRouteHandler)
  .openapi(getV2PayoutsPayoutIdRoute, getV2PayoutsPayoutIdRouteHandler)
  .openapi(deleteV2PayoutsPayoutIdRoute, deleteV2PayoutsPayoutIdRouteHandler)

export default app
