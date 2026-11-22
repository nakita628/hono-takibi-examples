import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOauth2Tokens(
  args: InferRequestType<typeof client.oauth2.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.tokens.$post(args, options))
}

export async function deleteOauth2Tokens(
  args: InferRequestType<typeof client.oauth2.tokens.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.tokens.$delete(args, options))
}

export async function getV2Balances(
  args: InferRequestType<typeof client.v2.balances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.balances.$get(args, options))
}

export async function getV2BalancesBalanceId(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.balances[':balanceId'].$get(args, options))
}

export async function getV2BalancesPrimary(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.balances.primary.$get(args, options))
}

export async function getV2BalancesBalanceIdReport(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.balances[':balanceId'].report.$get(args, options))
}

export async function getV2BalancesBalanceIdTransactions(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.balances[':balanceId'].transactions.$get(args, options))
}

export async function postV2Reports(
  args: InferRequestType<typeof client.v2.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports.$post(args, options))
}

export async function getV2ReportsReportId(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports[':reportId'].$get(args, options))
}

export async function getV2Settlements(
  args: InferRequestType<typeof client.v2.settlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements.$get(args, options))
}

export async function getV2SettlementsSettlementId(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements[':settlementId'].$get(args, options))
}

export async function getV2SettlementsOpen(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements.open.$get(args, options))
}

export async function getV2SettlementsNext(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements.next.$get(args, options))
}

export async function getV2SettlementsSettlementIdPayments(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements[':settlementId'].payments.$get(args, options))
}

export async function getV2SettlementsSettlementIdCaptures(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements[':settlementId'].captures.$get(args, options))
}

export async function getV2SettlementsSettlementIdRefunds(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements[':settlementId'].refunds.$get(args, options))
}

export async function getV2SettlementsSettlementIdChargebacks(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.settlements[':settlementId'].chargebacks.$get(args, options))
}

export async function getV2Invoices(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices.$get(args, options))
}

export async function getV2InvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices[':invoiceId'].$get(args, options))
}

export async function getV2Permissions(
  args: InferRequestType<typeof client.v2.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.permissions.$get(args, options))
}

export async function getV2PermissionsPermissionId(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.permissions[':permissionId'].$get(args, options))
}

export async function getV2OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.organizations[':organizationId'].$get(args, options))
}

export async function getV2OrganizationsMe(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.organizations.me.$get(args, options))
}

export async function getV2OrganizationsMePartner(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.organizations.me.partner.$get(args, options))
}

export async function getV2Profiles(
  args: InferRequestType<typeof client.v2.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.profiles.$get(args, options))
}

export async function postV2Profiles(
  args: InferRequestType<typeof client.v2.profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.profiles.$post(args, options))
}

export async function getV2ProfilesProfileId(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.profiles[':profileId'].$get(args, options))
}

export async function deleteV2ProfilesProfileId(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.profiles[':profileId'].$delete(args, options))
}

export async function patchV2ProfilesProfileId(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.profiles[':profileId'].$patch(args, options))
}

export async function getV2ProfilesMe(
  args: InferRequestType<typeof client.v2.profiles.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.profiles.me.$get(args, options))
}

export async function getV2OnboardingMe(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onboarding.me.$get(args, options))
}

export async function postV2OnboardingMe(
  args: InferRequestType<typeof client.v2.onboarding.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onboarding.me.$post(args, options))
}

export async function getV2Capabilities(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.capabilities.$get(args, options))
}

export async function getV2Clients(
  args: InferRequestType<typeof client.v2.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.clients.$get(args, options))
}

export async function getV2ClientsOrganizationId(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.clients[':organizationId'].$get(args, options))
}

export async function postV2ClientLinks(
  args: InferRequestType<(typeof client.v2)['client-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['client-links'].$post(args, options))
}

export async function getV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$get(args, options))
}

export async function postV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$post(args, options))
}

export async function getV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$get(args, options))
}

export async function deleteV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$delete(args, options))
}

export async function patchV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$patch(args, options))
}

export async function postV2WebhooksWebhookIdPing(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].ping.$post(args, options))
}

export async function getV2EventsWebhookEventId(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events[':webhookEventId'].$get(args, options))
}

export async function getV2ConnectBalanceTransfers(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.connect['balance-transfers'].$get(args, options))
}

export async function postV2ConnectBalanceTransfers(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.connect['balance-transfers'].$post(args, options))
}

export async function getV2ConnectBalanceTransfersBalanceTransferId(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.connect['balance-transfers'][':balanceTransferId'].$get(args, options),
  )
}

export async function getV2Payments(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.$get(args, options))
}

export async function postV2Payments(
  args: InferRequestType<typeof client.v2.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.$post(args, options))
}

export async function getV2PaymentsPaymentId(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].$get(args, options))
}

export async function deleteV2PaymentsPaymentId(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].$delete(args, options))
}

export async function patchV2PaymentsPaymentId(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].$patch(args, options))
}

export async function postV2PaymentsPaymentIdReleaseAuthorization(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['release-authorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments[':paymentId']['release-authorization'].$post(args, options),
  )
}

export async function getV2UnmatchedCreditTransfers(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['unmatched-credit-transfers'].$get(args, options))
}

export async function getV2UnmatchedCreditTransfersUnmatchedCreditTransferId(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].$get(args, options),
  )
}

export async function postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatch(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].match.$post(
      args,
      options,
    ),
  )
}

export async function postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturn(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].return.$post(
      args,
      options,
    ),
  )
}

export async function postV2Sessions(
  args: InferRequestType<typeof client.v2.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sessions.$post(args, options))
}

export async function getV2SessionsSessionId(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sessions[':sessionId'].$get(args, options))
}

export async function getV2Methods(
  args: InferRequestType<typeof client.v2.methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.methods.$get(args, options))
}

export async function getV2MethodsAll(
  args: InferRequestType<typeof client.v2.methods.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.methods.all.$get(args, options))
}

export async function getV2MethodsMethodId(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.methods[':methodId'].$get(args, options))
}

export async function postV2ProfilesProfileIdMethodsMethodId(
  args: InferRequestType<
    (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.profiles[':profileId'].methods[':methodId'].$post(args, options),
  )
}

export async function deleteV2ProfilesProfileIdMethodsMethodId(
  args: InferRequestType<
    (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.profiles[':profileId'].methods[':methodId'].$delete(args, options),
  )
}

export async function postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerId(
  args: InferRequestType<
    (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.profiles[':profileId'].methods[':methodId'].issuers[':issuerId'].$post(args, options),
  )
}

export async function deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerId(
  args: InferRequestType<
    (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.profiles[':profileId'].methods[':methodId'].issuers[':issuerId'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2PaymentsPaymentIdRefunds(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].refunds.$get(args, options))
}

export async function postV2PaymentsPaymentIdRefunds(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].refunds.$post(args, options))
}

export async function getV2PaymentsPaymentIdRefundsRefundId(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments[':paymentId'].refunds[':refundId'].$get(args, options),
  )
}

export async function deleteV2PaymentsPaymentIdRefundsRefundId(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments[':paymentId'].refunds[':refundId'].$delete(args, options),
  )
}

export async function getV2Refunds(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.refunds.$get(args, options))
}

export async function getV2PaymentsPaymentIdChargebacks(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].chargebacks.$get(args, options))
}

export async function getV2PaymentsPaymentIdChargebacksChargebackId(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments[':paymentId'].chargebacks[':chargebackId'].$get(args, options),
  )
}

export async function getV2Chargebacks(
  args: InferRequestType<typeof client.v2.chargebacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.chargebacks.$get(args, options))
}

export async function getV2PaymentsPaymentIdCaptures(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].captures.$get(args, options))
}

export async function postV2PaymentsPaymentIdCaptures(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].captures.$post(args, options))
}

export async function getV2PaymentsPaymentIdCapturesCaptureId(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments[':paymentId'].captures[':captureId'].$get(args, options),
  )
}

export async function postV2WalletsApplepaySessions(
  args: InferRequestType<typeof client.v2.wallets.applepay.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.wallets.applepay.sessions.$post(args, options))
}

export async function getV2PaymentLinks(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-links'].$get(args, options))
}

export async function postV2PaymentLinks(
  args: InferRequestType<(typeof client.v2)['payment-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-links'].$post(args, options))
}

export async function getV2PaymentLinksPaymentLinkId(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-links'][':paymentLinkId'].$get(args, options))
}

export async function deleteV2PaymentLinksPaymentLinkId(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-links'][':paymentLinkId'].$delete(args, options))
}

export async function patchV2PaymentLinksPaymentLinkId(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-links'][':paymentLinkId'].$patch(args, options))
}

export async function getV2PaymentLinksPaymentLinkIdPayments(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-links'][':paymentLinkId'].payments.$get(args, options),
  )
}

export async function getV2Terminals(
  args: InferRequestType<typeof client.v2.terminals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.$get(args, options))
}

export async function getV2TerminalsTerminalId(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals[':terminalId'].$get(args, options))
}

export async function getV2TerminalsPairingCodes(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals['pairing-codes'].$get(args, options))
}

export async function postV2TerminalsPairingCodes(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals['pairing-codes'].$post(args, options))
}

export async function getV2TerminalsPairingCodesPairingCodeId(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.terminals['pairing-codes'][':pairingCodeId'].$get(args, options),
  )
}

export async function deleteV2TerminalsPairingCodesPairingCodeId(
  args: InferRequestType<
    (typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.terminals['pairing-codes'][':pairingCodeId'].$delete(args, options),
  )
}

export async function getV2PaymentsPaymentIdRoutes(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].routes.$get(args, options))
}

export async function postV2PaymentsPaymentIdRoutes(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':paymentId'].routes.$post(args, options))
}

export async function getV2PaymentsPaymentIdRoutesRouteId(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments[':paymentId'].routes[':routeId'].$get(args, options),
  )
}

export async function getV2Customers(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.$get(args, options))
}

export async function postV2Customers(
  args: InferRequestType<typeof client.v2.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.$post(args, options))
}

export async function getV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].$get(args, options))
}

export async function deleteV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].$delete(args, options))
}

export async function patchV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].$patch(args, options))
}

export async function getV2CustomersCustomerIdPayments(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].payments.$get(args, options))
}

export async function postV2CustomersCustomerIdPayments(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].payments.$post(args, options))
}

export async function getV2CustomersCustomerIdMandates(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].mandates.$get(args, options))
}

export async function postV2CustomersCustomerIdMandates(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].mandates.$post(args, options))
}

export async function getV2CustomersCustomerIdMandatesMandateId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].mandates[':mandateId'].$get(args, options),
  )
}

export async function deleteV2CustomersCustomerIdMandatesMandateId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].mandates[':mandateId'].$delete(args, options),
  )
}

export async function getV2CustomersCustomerIdSubscriptions(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].subscriptions.$get(args, options))
}

export async function postV2CustomersCustomerIdSubscriptions(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].subscriptions.$post(args, options))
}

export async function getV2CustomersCustomerIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$get(args, options),
  )
}

export async function deleteV2CustomersCustomerIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$delete(args, options),
  )
}

export async function patchV2CustomersCustomerIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$patch(args, options),
  )
}

export async function getV2Subscriptions(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscriptions.$get(args, options))
}

export async function getV2CustomersCustomerIdSubscriptionsSubscriptionIdPayments(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].subscriptions[':subscriptionId'].payments.$get(
      args,
      options,
    ),
  )
}

export async function getV2SalesInvoices(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['sales-invoices'].$get(args, options))
}

export async function postV2SalesInvoices(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['sales-invoices'].$post(args, options))
}

export async function getV2SalesInvoicesSalesInvoiceId(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$get(args, options))
}

export async function deleteV2SalesInvoicesSalesInvoiceId(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$delete(args, options))
}

export async function patchV2SalesInvoicesSalesInvoiceId(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$patch(args, options))
}

export async function getV2BusinessAccountsAccounts(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['business-accounts'].accounts.$get(args, options))
}

export async function postV2BusinessAccountsAccounts(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['business-accounts'].accounts.$post(args, options))
}

export async function getV2BusinessAccountsAccountsBusinessAccountId(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts'].accounts[':businessAccountId'].$get(args, options),
  )
}

export async function getV2BusinessAccountsAccountsBusinessAccountIdTransactions(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts'].accounts[':businessAccountId'].transactions.$get(args, options),
  )
}

export async function getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts'].accounts[':businessAccountId'].transactions[
      ':transactionId'
    ].$get(args, options),
  )
}

export async function postV2BusinessAccountsTransfers(
  args: InferRequestType<(typeof client.v2)['business-accounts']['transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['business-accounts'].transfers.$post(args, options))
}

export async function getV2BusinessAccountsTransfersBusinessAccountsTransferId(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts'].transfers[':businessAccountsTransferId'].$get(args, options),
  )
}

export async function postV2BusinessAccountsPayeeVerifications(
  args: InferRequestType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts']['payee-verifications'].$post(args, options),
  )
}

export async function getV2BusinessAccountsDraftTransfers(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['business-accounts']['draft-transfers'].$get(args, options))
}

export async function postV2BusinessAccountsDraftTransfers(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['business-accounts']['draft-transfers'].$post(args, options))
}

export async function getV2BusinessAccountsDraftTransfersDraftTransferId(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$get(args, options),
  )
}

export async function deleteV2BusinessAccountsDraftTransfersDraftTransferId(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$delete(args, options),
  )
}

export async function getV2Payouts(
  args: InferRequestType<typeof client.v2.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payouts.$get(args, options))
}

export async function postV2Payouts(
  args: InferRequestType<typeof client.v2.payouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payouts.$post(args, options))
}

export async function getV2PayoutsPayoutId(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payouts[':payoutId'].$get(args, options))
}

export async function deleteV2PayoutsPayoutId(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payouts[':payoutId'].$delete(args, options))
}
