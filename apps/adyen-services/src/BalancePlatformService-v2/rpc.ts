import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountHolders(
  args: InferRequestType<typeof client.accountHolders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders.$post(args, options))
}

export async function getAccountHoldersId(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders[':id'].$get(args, options))
}

export async function patchAccountHoldersId(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders[':id'].$patch(args, options))
}

export async function getAccountHoldersIdBalanceAccounts(
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders[':id'].balanceAccounts.$get(args, options))
}

export async function getAccountHoldersIdTaxForms(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders[':id'].taxForms.$get(args, options))
}

export async function getAccountHoldersIdTransactionRules(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders[':id'].transactionRules.$get(args, options))
}

export async function postBalanceAccounts(
  args: InferRequestType<typeof client.balanceAccounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts.$post(args, options))
}

export async function getBalanceAccountsBalanceAccountIdSweeps(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':balanceAccountId'].sweeps.$get(args, options))
}

export async function postBalanceAccountsBalanceAccountIdSweeps(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].sweeps.$post(args, options),
  )
}

export async function getBalanceAccountsBalanceAccountIdSweepsSweepId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$get(args, options),
  )
}

export async function deleteBalanceAccountsBalanceAccountIdSweepsSweepId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$delete(args, options),
  )
}

export async function patchBalanceAccountsBalanceAccountIdSweepsSweepId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$patch(args, options),
  )
}

export async function getBalanceAccountsId(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':id'].$get(args, options))
}

export async function patchBalanceAccountsId(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':id'].$patch(args, options))
}

export async function getBalanceAccountsIdPaymentInstruments(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':id'].paymentInstruments.$get(args, options))
}

export async function getBalanceAccountsIdTransactionRules(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':id'].transactionRules.$get(args, options))
}

export async function getBalancePlatformsId(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balancePlatforms[':id'].$get(args, options))
}

export async function getBalancePlatformsIdAccountHolders(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balancePlatforms[':id'].accountHolders.$get(args, options))
}

export async function getBalancePlatformsIdTransactionRules(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balancePlatforms[':id'].transactionRules.$get(args, options))
}

export async function getCardorders(
  args: InferRequestType<typeof client.cardorders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cardorders.$get(args, options))
}

export async function getCardordersIdItems(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cardorders[':id'].items.$get(args, options))
}

export async function getGrantAccountsId(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grantAccounts[':id'].$get(args, options))
}

export async function getGrantOffers(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grantOffers.$get(args, options))
}

export async function getGrantOffersGrantOfferId(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grantOffers[':grantOfferId'].$get(args, options))
}

export async function getNetworkTokensNetworkTokenId(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networkTokens[':networkTokenId'].$get(args, options))
}

export async function patchNetworkTokensNetworkTokenId(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networkTokens[':networkTokenId'].$patch(args, options))
}

export async function postPaymentInstrumentGroups(
  args: InferRequestType<typeof client.paymentInstrumentGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstrumentGroups.$post(args, options))
}

export async function getPaymentInstrumentGroupsId(
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstrumentGroups[':id'].$get(args, options))
}

export async function getPaymentInstrumentGroupsIdTransactionRules(
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstrumentGroups[':id'].transactionRules.$get(args, options),
  )
}

export async function postPaymentInstruments(
  args: InferRequestType<typeof client.paymentInstruments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments.$post(args, options))
}

export async function postPaymentInstrumentsReveal(
  args: InferRequestType<typeof client.paymentInstruments.reveal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments.reveal.$post(args, options))
}

export async function getPaymentInstrumentsId(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments[':id'].$get(args, options))
}

export async function patchPaymentInstrumentsId(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments[':id'].$patch(args, options))
}

export async function getPaymentInstrumentsIdNetworkTokenActivationData(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstruments[':id'].networkTokenActivationData.$get(args, options),
  )
}

export async function postPaymentInstrumentsIdNetworkTokenActivationData(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstruments[':id'].networkTokenActivationData.$post(args, options),
  )
}

export async function getPaymentInstrumentsIdNetworkTokens(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments[':id'].networkTokens.$get(args, options))
}

export async function getPaymentInstrumentsIdReveal(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments[':id'].reveal.$get(args, options))
}

export async function getPaymentInstrumentsIdTransactionRules(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentInstruments[':id'].transactionRules.$get(args, options))
}

export async function postPinsChange(
  args: InferRequestType<typeof client.pins.change.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins.change.$post(args, options))
}

export async function postPinsReveal(
  args: InferRequestType<typeof client.pins.reveal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins.reveal.$post(args, options))
}

export async function getPublicKey(
  args: InferRequestType<typeof client.publicKey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publicKey.$get(args, options))
}

export async function getRegisteredDevices(
  args: InferRequestType<typeof client.registeredDevices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registeredDevices.$get(args, options))
}

export async function postRegisteredDevices(
  args: InferRequestType<typeof client.registeredDevices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registeredDevices.$post(args, options))
}

export async function postRegisteredDevicesDeviceIdAssociations(
  args: InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registeredDevices[':deviceId'].associations.$post(args, options),
  )
}

export async function patchRegisteredDevicesDeviceIdAssociations(
  args: InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registeredDevices[':deviceId'].associations.$patch(args, options),
  )
}

export async function deleteRegisteredDevicesId(
  args: InferRequestType<(typeof client.registeredDevices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registeredDevices[':id'].$delete(args, options))
}

export async function patchRegisteredDevicesId(
  args: InferRequestType<(typeof client.registeredDevices)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registeredDevices[':id'].$patch(args, options))
}

export async function postTransactionRules(
  args: InferRequestType<typeof client.transactionRules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionRules.$post(args, options))
}

export async function getTransactionRulesTransactionRuleId(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionRules[':transactionRuleId'].$get(args, options))
}

export async function deleteTransactionRulesTransactionRuleId(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionRules[':transactionRuleId'].$delete(args, options))
}

export async function patchTransactionRulesTransactionRuleId(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionRules[':transactionRuleId'].$patch(args, options))
}

export async function postTransferRoutesCalculate(
  args: InferRequestType<typeof client.transferRoutes.calculate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transferRoutes.calculate.$post(args, options))
}

export async function postValidateBankAccountIdentification(
  args: InferRequestType<typeof client.validateBankAccountIdentification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validateBankAccountIdentification.$post(args, options))
}

export async function getAccountHoldersIdTaxFormSummary(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolders[':id'].taxFormSummary.$get(args, options))
}

export async function getBalanceAccountsBalanceAccountIdPayoutSchedules(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].payoutSchedules.$get(args, options),
  )
}

export async function postBalanceAccountsBalanceAccountIdPayoutSchedules(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].payoutSchedules.$post(args, options),
  )
}

export async function getBalanceAccountsBalanceAccountIdPayoutSchedulesId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$get(args, options),
  )
}

export async function deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$delete(args, options),
  )
}

export async function patchBalanceAccountsBalanceAccountIdPayoutSchedulesId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$patch(args, options),
  )
}

export async function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].executions.$get(
      args,
      options,
    ),
  )
}

export async function getBalanceAccountsBalanceAccountIdRecurringTopUps(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].recurringTopUps.$get(args, options),
  )
}

export async function postBalanceAccountsBalanceAccountIdRecurringTopUps(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].recurringTopUps.$post(args, options),
  )
}

export async function deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].recurringTopUps[':topUpId'].$delete(args, options),
  )
}

export async function patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].recurringTopUps[':topUpId'].$patch(args, options),
  )
}

export async function getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutions(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].executions.$get(args, options),
  )
}

export async function getBalanceAccountsIdTransferLimits(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':id'].transferLimits.$get(args, options))
}

export async function postBalanceAccountsIdTransferLimits(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceAccounts[':id'].transferLimits.$post(args, options))
}

export async function postBalanceAccountsIdTransferLimitsApprove(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':id'].transferLimits.approve.$post(args, options),
  )
}

export async function getBalanceAccountsIdTransferLimitsCurrent(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':id'].transferLimits.current.$get(args, options),
  )
}

export async function getBalanceAccountsIdTransferLimitsTransferLimitId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$get(args, options),
  )
}

export async function deleteBalanceAccountsIdTransferLimitsTransferLimitId(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$delete(args, options),
  )
}

export async function getBalancePlatformsBalancePlatformIdPayoutSchedules(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].payoutSchedules.$get(args, options),
  )
}

export async function getBalancePlatformsBalancePlatformIdPayoutSchedulesId(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].payoutSchedules[':id'].$get(args, options),
  )
}

export async function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$get(
      args,
      options,
    ),
  )
}

export async function postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$post(
      args,
      options,
    ),
  )
}

export async function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
      ':settingId'
    ].$get(args, options),
  )
}

export async function deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
      ':settingId'
    ].$delete(args, options),
  )
}

export async function patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
      ':settingId'
    ].$patch(args, options),
  )
}

export async function getBalancePlatformsIdTransferLimits(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balancePlatforms[':id'].transferLimits.$get(args, options))
}

export async function postBalancePlatformsIdTransferLimits(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balancePlatforms[':id'].transferLimits.$post(args, options))
}

export async function getBalancePlatformsIdTransferLimitsTransferLimitId(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$get(args, options),
  )
}

export async function deleteBalancePlatformsIdTransferLimitsTransferLimitId(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$delete(args, options),
  )
}

export async function getMandates(
  args: InferRequestType<typeof client.mandates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mandates.$get(args, options))
}

export async function getMandatesMandateId(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mandates[':mandateId'].$get(args, options))
}

export async function patchMandatesMandateId(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mandates[':mandateId'].$patch(args, options))
}

export async function postMandatesMandateIdCancel(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mandates[':mandateId'].cancel.$post(args, options))
}

export async function getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$get(args, options),
  )
}

export async function postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$post(args, options),
  )
}

export async function deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$delete(args, options),
  )
}

export async function patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$patch(args, options),
  )
}

export async function getScaAssociations(
  args: InferRequestType<typeof client.scaAssociations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaAssociations.$get(args, options))
}

export async function deleteScaAssociations(
  args: InferRequestType<typeof client.scaAssociations.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaAssociations.$delete(args, options))
}

export async function patchScaAssociations(
  args: InferRequestType<typeof client.scaAssociations.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaAssociations.$patch(args, options))
}

export async function postScaDevices(
  args: InferRequestType<typeof client.scaDevices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaDevices.$post(args, options))
}

export async function deleteScaDevicesDeviceId(
  args: InferRequestType<(typeof client.scaDevices)[':deviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaDevices[':deviceId'].$delete(args, options))
}

export async function patchScaDevicesDeviceId(
  args: InferRequestType<(typeof client.scaDevices)[':deviceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaDevices[':deviceId'].$patch(args, options))
}

export async function postScaDevicesDeviceIdScaAssociations(
  args: InferRequestType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaDevices[':deviceId'].scaAssociations.$post(args, options))
}
