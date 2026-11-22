import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Authenticate(
  args: InferRequestType<typeof client.v1.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.authenticate.$post(args, options))
}

export async function getV1DeltasFundings(
  args: InferRequestType<typeof client.v1.deltas.fundings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deltas.fundings.$get(args, options))
}

export async function getV1DeltasPayments(
  args: InferRequestType<typeof client.v1.deltas.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deltas.payments.$get(args, options))
}

export async function getV1FundingsFundingId(
  args: InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fundings[':fundingId'].$get(args, options))
}

export async function postV1Logout(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.logout.$post(undefined, options))
}

export async function postV1PasswordReset(
  args: InferRequestType<typeof client.v1.password.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.password.reset.$post(args, options))
}

export async function getV1PaymentChannelRules(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.paymentChannelRules.$get(undefined, options))
}

export async function getV1PaymentauditFundings(
  args: InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.paymentaudit.fundings.$get(args, options))
}

export async function getV1PaymentauditPayoutStatistics(
  args: InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.paymentaudit.payoutStatistics.$get(args, options))
}

export async function postV1PaymentsPaymentIdWithdraw(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].withdraw.$post(args, options))
}

export async function getV1PayorLinks(
  args: InferRequestType<typeof client.v1.payorLinks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payorLinks.$get(args, options))
}

export async function postV1PayorLinks(
  args: InferRequestType<typeof client.v1.payorLinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payorLinks.$post(args, options))
}

export async function getV1PayorsPayorId(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payors[':payorId'].$get(args, options))
}

export async function postV1PayorsPayorIdApplications(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payors[':payorId'].applications.$post(args, options))
}

export async function postV1PayorsPayorIdApplicationsApplicationIdKeys(
  args: InferRequestType<
    (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payors[':payorId'].applications[':applicationId'].keys.$post(args, options),
  )
}

export async function getV1PayorsPayorIdBranding(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payors[':payorId'].branding.$get(args, options))
}

export async function postV1PayorsPayorIdBrandingLogos(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payors[':payorId'].branding.logos.$post(args, options))
}

export async function postV1PayorsPayorIdReminderEmailsUpdate(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payors[':payorId'].reminderEmailsUpdate.$post(args, options))
}

export async function postV1SourceAccountsSourceAccountIdNotifications(
  args: InferRequestType<
    (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sourceAccounts[':sourceAccountId'].notifications.$post(args, options),
  )
}

export async function getV1SupportedCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.supportedCountries.$get(undefined, options))
}

export async function postV1Validate(
  args: InferRequestType<typeof client.v1.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.validate.$post(args, options))
}

export async function getV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$get(args, options))
}

export async function postV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$post(args, options))
}

export async function getV1WebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':webhookId'].$get(args, options))
}

export async function postV1WebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':webhookId'].$post(args, options))
}

export async function postV1WebhooksWebhookIdPing(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':webhookId'].ping.$post(args, options))
}

export async function getV2Currencies(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.currencies.$get(undefined, options))
}

export async function getV2FundingAccounts(
  args: InferRequestType<typeof client.v2.fundingAccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.fundingAccounts.$get(args, options))
}

export async function postV2FundingAccounts(
  args: InferRequestType<typeof client.v2.fundingAccounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.fundingAccounts.$post(args, options))
}

export async function getV2FundingAccountsFundingAccountId(
  args: InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.fundingAccounts[':fundingAccountId'].$get(args, options))
}

export async function getV2PayorsPayorId(
  args: InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payors[':payorId'].$get(args, options))
}

export async function getV2SourceAccounts(
  args: InferRequestType<typeof client.v2.sourceAccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sourceAccounts.$get(args, options))
}

export async function getV2SourceAccountsSourceAccountId(
  args: InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sourceAccounts[':sourceAccountId'].$get(args, options))
}

export async function postV2SourceAccountsSourceAccountIdFundingRequest(
  args: InferRequestType<
    (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sourceAccounts[':sourceAccountId'].fundingRequest.$post(args, options),
  )
}

export async function postV2SourceAccountsSourceAccountIdTransfers(
  args: InferRequestType<
    (typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sourceAccounts[':sourceAccountId'].transfers.$post(args, options),
  )
}

export async function getV2SupportedCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.supportedCountries.$get(undefined, options))
}

export async function getV2Users(
  args: InferRequestType<typeof client.v2.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.$get(args, options))
}

export async function postV2UsersInvite(
  args: InferRequestType<typeof client.v2.users.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.invite.$post(args, options))
}

export async function postV2UsersRegistrationSms(
  args: InferRequestType<typeof client.v2.users.registration.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.registration.sms.$post(args, options))
}

export async function getV2UsersSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.users.self.$get(undefined, options))
}

export async function postV2UsersSelfMfaUnregister(
  args: InferRequestType<typeof client.v2.users.self.mfa.unregister.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.self.mfa.unregister.$post(args, options))
}

export async function postV2UsersSelfPassword(
  args: InferRequestType<typeof client.v2.users.self.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.self.password.$post(args, options))
}

export async function postV2UsersSelfPasswordValidate(
  args: InferRequestType<typeof client.v2.users.self.password.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.self.password.validate.$post(args, options))
}

export async function postV2UsersSelfUserDetailsUpdate(
  args: InferRequestType<typeof client.v2.users.self.userDetailsUpdate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.self.userDetailsUpdate.$post(args, options))
}

export async function getV2UsersUserId(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].$get(args, options))
}

export async function deleteV2UsersUserId(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].$delete(args, options))
}

export async function postV2UsersUserIdDisable(
  args: InferRequestType<(typeof client.v2.users)[':userId']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].disable.$post(args, options))
}

export async function postV2UsersUserIdEnable(
  args: InferRequestType<(typeof client.v2.users)[':userId']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].enable.$post(args, options))
}

export async function postV2UsersUserIdMfaUnregister(
  args: InferRequestType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].mfa.unregister.$post(args, options))
}

export async function postV2UsersUserIdRoleUpdate(
  args: InferRequestType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].roleUpdate.$post(args, options))
}

export async function postV2UsersUserIdTokens(
  args: InferRequestType<(typeof client.v2.users)[':userId']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].tokens.$post(args, options))
}

export async function postV2UsersUserIdUnlock(
  args: InferRequestType<(typeof client.v2.users)[':userId']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].unlock.$post(args, options))
}

export async function postV2UsersUserIdUserDetailsUpdate(
  args: InferRequestType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].userDetailsUpdate.$post(args, options))
}

export async function getV3Payees(
  args: InferRequestType<typeof client.v3.payees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees.$get(args, options))
}

export async function postV3Payees(
  args: InferRequestType<typeof client.v3.payees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees.$post(args, options))
}

export async function getV3PayeesBatchBatchId(
  args: InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees.batch[':batchId'].$get(args, options))
}

export async function getV3PayeesDeltas(
  args: InferRequestType<typeof client.v3.payees.deltas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees.deltas.$get(args, options))
}

export async function getV3PayeesPayorsPayorIdInvitationStatus(
  args: InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.payees.payors[':payorId'].invitationStatus.$get(args, options),
  )
}

export async function getV3PayeesPayeeId(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees[':payeeId'].$get(args, options))
}

export async function deleteV3PayeesPayeeId(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees[':payeeId'].$delete(args, options))
}

export async function postV3PayeesPayeeIdInvite(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees[':payeeId'].invite.$post(args, options))
}

export async function postV3PayeesPayeeIdPayeeDetailsUpdate(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees[':payeeId'].payeeDetailsUpdate.$post(args, options))
}

export async function postV3PayeesPayeeIdRemoteIdUpdate(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payees[':payeeId'].remoteIdUpdate.$post(args, options))
}

export async function getV3PaymentauditPayments(
  args: InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.paymentaudit.payments.$get(args, options))
}

export async function getV3PaymentauditPaymentsPaymentId(
  args: InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.paymentaudit.payments[':paymentId'].$get(args, options))
}

export async function getV3PaymentauditPayouts(
  args: InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.paymentaudit.payouts.$get(args, options))
}

export async function getV3PaymentauditPayoutsPayoutId(
  args: InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.paymentaudit.payouts[':payoutId'].$get(args, options))
}

export async function getV3PaymentauditTransactions(
  args: InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.paymentaudit.transactions.$get(args, options))
}

export async function postV3Payouts(
  args: InferRequestType<typeof client.v3.payouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts.$post(args, options))
}

export async function getV3PayoutsPayoutId(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].$get(args, options))
}

export async function postV3PayoutsPayoutId(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].$post(args, options))
}

export async function deleteV3PayoutsPayoutId(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].$delete(args, options))
}

export async function getV3PayoutsPayoutIdPayments(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].payments.$get(args, options))
}

export async function postV3PayoutsPayoutIdQuote(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].quote.$post(args, options))
}

export async function postV3PayoutsPayoutIdSchedule(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].schedule.$post(args, options))
}

export async function deleteV3PayoutsPayoutIdSchedule(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.payouts[':payoutId'].schedule.$delete(args, options))
}

export async function getV3SourceAccounts(
  args: InferRequestType<typeof client.v3.sourceAccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.sourceAccounts.$get(args, options))
}

export async function getV3SourceAccountsSourceAccountId(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.sourceAccounts[':sourceAccountId'].$get(args, options))
}

export async function deleteV3SourceAccountsSourceAccountId(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.sourceAccounts[':sourceAccountId'].$delete(args, options))
}

export async function postV3SourceAccountsSourceAccountIdFundingRequest(
  args: InferRequestType<
    (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.sourceAccounts[':sourceAccountId'].fundingRequest.$post(args, options),
  )
}

export async function postV3SourceAccountsSourceAccountIdNotifications(
  args: InferRequestType<
    (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.sourceAccounts[':sourceAccountId'].notifications.$post(args, options),
  )
}

export async function postV3SourceAccountsSourceAccountIdTransfers(
  args: InferRequestType<
    (typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.sourceAccounts[':sourceAccountId'].transfers.$post(args, options),
  )
}

export async function getV4Payees(
  args: InferRequestType<typeof client.v4.payees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees.$get(args, options))
}

export async function postV4Payees(
  args: InferRequestType<typeof client.v4.payees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees.$post(args, options))
}

export async function getV4PayeesBatchBatchId(
  args: InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees.batch[':batchId'].$get(args, options))
}

export async function getV4PayeesDeltas(
  args: InferRequestType<typeof client.v4.payees.deltas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees.deltas.$get(args, options))
}

export async function getV4PayeesPayorsPayorIdInvitationStatus(
  args: InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.payees.payors[':payorId'].invitationStatus.$get(args, options),
  )
}

export async function getV4PayeesPayeeId(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees[':payeeId'].$get(args, options))
}

export async function deleteV4PayeesPayeeId(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees[':payeeId'].$delete(args, options))
}

export async function postV4PayeesPayeeIdInvite(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees[':payeeId'].invite.$post(args, options))
}

export async function postV4PayeesPayeeIdPayeeDetailsUpdate(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees[':payeeId'].payeeDetailsUpdate.$post(args, options))
}

export async function postV4PayeesPayeeIdRemoteIdUpdate(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payees[':payeeId'].remoteIdUpdate.$post(args, options))
}

export async function getV4PaymentauditFundings(
  args: InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.fundings.$get(args, options))
}

export async function getV4PaymentauditPayments(
  args: InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.payments.$get(args, options))
}

export async function getV4PaymentauditPaymentsPaymentId(
  args: InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.payments[':paymentId'].$get(args, options))
}

export async function getV4PaymentauditPayoutStatistics(
  args: InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.payoutStatistics.$get(args, options))
}

export async function getV4PaymentauditPayouts(
  args: InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.payouts.$get(args, options))
}

export async function getV4PaymentauditPayoutsPayoutId(
  args: InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.payouts[':payoutId'].$get(args, options))
}

export async function getV4PaymentauditTransactions(
  args: InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.paymentaudit.transactions.$get(args, options))
}

export async function getV4PaymentsDeltas(
  args: InferRequestType<typeof client.v4.payments.deltas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.payments.deltas.$get(args, options))
}
