import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2BalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesBalanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesBalanceIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesBalanceIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrganizationsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrganizationsMePartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProfilesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OnboardingMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnboardingMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClientsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ClientLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsWebhookEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ConnectBalanceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectBalanceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectBalanceTransfersBalanceTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdReleaseAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UnmatchedCreditTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MethodsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProfilesProfileIdMethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProfilesProfileIdMethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PaymentsPaymentIdRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdChargebacksChargebackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WalletsApplepaySessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentLinksPaymentLinkIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsTerminalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsPairingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsPairingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsPairingCodesPairingCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TerminalsPairingCodesPairingCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdMandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdMandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SalesInvoicesSalesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SalesInvoicesSalesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SalesInvoicesSalesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BusinessAccountsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsBusinessAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BusinessAccountsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsTransfersBusinessAccountsTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BusinessAccountsPayeeVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BusinessAccountsDraftTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsDraftTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsDraftTransfersDraftTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BusinessAccountsDraftTransfersDraftTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
