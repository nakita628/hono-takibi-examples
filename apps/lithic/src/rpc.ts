import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AccountHolders(
  args: InferRequestType<typeof client.v1.account_holders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account_holders.$get(args, options))
}

export async function postV1AccountHolders(
  args: InferRequestType<typeof client.v1.account_holders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account_holders.$post(args, options))
}

export async function getV1AccountHoldersAccountHolderToken(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account_holders[':account_holder_token'].$get(args, options))
}

export async function patchV1AccountHoldersAccountHolderToken(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.account_holders[':account_holder_token'].$patch(args, options),
  )
}

export async function getV1AccountHoldersAccountHolderTokenDocuments(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.account_holders[':account_holder_token'].documents.$get(args, options),
  )
}

export async function postV1AccountHoldersAccountHolderTokenDocuments(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.account_holders[':account_holder_token'].documents.$post(args, options),
  )
}

export async function getV1AccountHoldersAccountHolderTokenDocumentsDocumentToken(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.account_holders[':account_holder_token'].documents[':document_token'].$get(
      args,
      options,
    ),
  )
}

export async function postV1AccountHoldersAccountHolderTokenEntities(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.account_holders[':account_holder_token'].entities.$post(args, options),
  )
}

export async function deleteV1AccountHoldersAccountHolderTokenEntitiesEntityToken(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.account_holders[':account_holder_token'].entities[':entity_token'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$get(args, options))
}

export async function getV1AccountsAccountToken(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_token'].$get(args, options))
}

export async function patchV1AccountsAccountToken(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_token'].$patch(args, options))
}

export async function getV1AccountsAccountTokenSpendLimits(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_token'].spend_limits.$get(args, options))
}

export async function getV2AuthRules(
  args: InferRequestType<typeof client.v2.auth_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules.$get(args, options))
}

export async function postV2AuthRules(
  args: InferRequestType<typeof client.v2.auth_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules.$post(args, options))
}

export async function getV2AuthRulesAuthRuleToken(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].$get(args, options))
}

export async function deleteV2AuthRulesAuthRuleToken(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].$delete(args, options))
}

export async function patchV2AuthRulesAuthRuleToken(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].$patch(args, options))
}

export async function patchV2AuthRulesAuthRuleTokenEntities(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.auth_rules[':auth_rule_token'].entities.$patch(args, options),
  )
}

export async function postV2AuthRulesAuthRuleTokenDraft(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].draft.$post(args, options))
}

export async function getV2AuthRulesAuthRuleTokenFeatures(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].features.$get(args, options))
}

export async function postV2AuthRulesAuthRuleTokenPromote(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].promote.$post(args, options))
}

export async function getV2AuthRulesAuthRuleTokenVersions(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].versions.$get(args, options))
}

export async function getV2AuthRulesAuthRuleTokenReport(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].report.$get(args, options))
}

export async function getV2AuthRulesAuthRuleTokenBacktests(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules[':auth_rule_token'].backtests.$get(args, options))
}

export async function postV2AuthRulesAuthRuleTokenBacktests(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.auth_rules[':auth_rule_token'].backtests.$post(args, options),
  )
}

export async function getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestToken(
  args: InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.auth_rules[':auth_rule_token'].backtests[':auth_rule_backtest_token'].$get(
      args,
      options,
    ),
  )
}

export async function getV2AuthRulesResults(
  args: InferRequestType<typeof client.v2.auth_rules.results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth_rules.results.$get(args, options))
}

export async function getV1CardsCardTokenSignals(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].signals.$get(args, options))
}

export async function getV1AccountsAccountTokenSignals(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_token'].signals.$get(args, options))
}

export async function getV1AuthStreamSecret(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.auth_stream.secret.$get(undefined, options))
}

export async function postV1AuthStreamSecretRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.auth_stream.secret.rotate.$post(undefined, options))
}

export async function getV1Balances(
  args: InferRequestType<typeof client.v1.balances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.balances.$get(args, options))
}

export async function getV1CardPrograms(
  args: InferRequestType<typeof client.v1.card_programs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.card_programs.$get(args, options))
}

export async function getV1CardProgramsCardProgramToken(
  args: InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.card_programs[':card_program_token'].$get(args, options))
}

export async function getV1Cards(
  args: InferRequestType<typeof client.v1.cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards.$get(args, options))
}

export async function postV1Cards(
  args: InferRequestType<typeof client.v1.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards.$post(args, options))
}

export async function postV1CardsSearchByPan(
  args: InferRequestType<typeof client.v1.cards.search_by_pan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards.search_by_pan.$post(args, options))
}

export async function getV1CardsCardToken(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].$get(args, options))
}

export async function patchV1CardsCardToken(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].$patch(args, options))
}

export async function getV1CardsCardTokenBalances(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].balances.$get(args, options))
}

export async function getV1CardsCardTokenFinancialTransactions(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.cards[':card_token'].financial_transactions.$get(args, options),
  )
}

export async function getV1CardsCardTokenFinancialTransactionsFinancialTransactionToken(
  args: InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.cards[':card_token'].financial_transactions[':financial_transaction_token'].$get(
      args,
      options,
    ),
  )
}

export async function postV1CardsCardTokenProvision(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].provision.$post(args, options))
}

export async function postV1CardsCardTokenWebProvision(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].web_provision.$post(args, options))
}

export async function postV1CardsCardTokenReissue(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].reissue.$post(args, options))
}

export async function postV1CardsCardTokenRenew(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['renew']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].renew.$post(args, options))
}

export async function postV1CardsCardTokenReassignAccount(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].reassign_account.$post(args, options))
}

export async function postV1CardsCardTokenConvertPhysical(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].convert_physical.$post(args, options))
}

export async function getV1CardsCardTokenSpendLimits(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].spend_limits.$get(args, options))
}

export async function postV1CardsCardTokenEmbed(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['embed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].embed.$post(args, options))
}

export async function postV1CardAuthorizationsEventTokenChallengeResponse(
  args: InferRequestType<
    (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.card_authorizations[':event_token'].challenge_response.$post(args, options),
  )
}

export async function getV1CardBulkOrders(
  args: InferRequestType<typeof client.v1.card_bulk_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.card_bulk_orders.$get(args, options))
}

export async function postV1CardBulkOrders(
  args: InferRequestType<typeof client.v1.card_bulk_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.card_bulk_orders.$post(args, options))
}

export async function getV1CardBulkOrdersBulkOrderToken(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.card_bulk_orders[':bulk_order_token'].$get(args, options))
}

export async function patchV1CardBulkOrdersBulkOrderToken(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.card_bulk_orders[':bulk_order_token'].$patch(args, options))
}

export async function getV1DigitalCardArt(
  args: InferRequestType<typeof client.v1.digital_card_art.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.digital_card_art.$get(args, options))
}

export async function getV1DigitalCardArtDigitalCardArtToken(
  args: InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.digital_card_art[':digital_card_art_token'].$get(args, options),
  )
}

export async function getV1Disputes(
  args: InferRequestType<typeof client.v1.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes.$get(args, options))
}

export async function postV1Disputes(
  args: InferRequestType<typeof client.v1.disputes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes.$post(args, options))
}

export async function getV1DisputesDisputeToken(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute_token'].$get(args, options))
}

export async function deleteV1DisputesDisputeToken(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute_token'].$delete(args, options))
}

export async function patchV1DisputesDisputeToken(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute_token'].$patch(args, options))
}

export async function getV1DisputesDisputeTokenEvidences(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute_token'].evidences.$get(args, options))
}

export async function postV1DisputesDisputeTokenEvidences(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute_token'].evidences.$post(args, options))
}

export async function getV1DisputesDisputeTokenEvidencesEvidenceToken(
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$get(args, options),
  )
}

export async function deleteV1DisputesDisputeTokenEvidencesEvidenceToken(
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$delete(args, options),
  )
}

export async function getV1EmbedCard(
  args: InferRequestType<typeof client.v1.embed.card.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.embed.card.$get(args, options))
}

export async function getV1Embed(
  args: InferRequestType<typeof client.v1.embed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.embed.$get(args, options))
}

export async function getV1FraudTransactionsTransactionToken(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fraud.transactions[':transaction_token'].$get(args, options))
}

export async function postV1FraudTransactionsTransactionToken(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.fraud.transactions[':transaction_token'].$post(args, options),
  )
}

export async function getV1TransactionsTransactionTokenEnhancedCommercialData(
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transactions[':transaction_token'].enhanced_commercial_data.$get(args, options),
  )
}

export async function postV1TransactionsTransactionTokenExpireAuthorization(
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transactions[':transaction_token'].expire_authorization.$post(args, options),
  )
}

export async function postV1TransactionsTransactionTokenRoute(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transactions[':transaction_token'].route.$post(args, options),
  )
}

export async function getV1TransactionsEventsEventTokenEnhancedCommercialData(
  args: InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transactions.events[':event_token'].enhanced_commercial_data.$get(args, options),
  )
}

export async function getV1EventSubscriptions(
  args: InferRequestType<typeof client.v1.event_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.event_subscriptions.$get(args, options))
}

export async function postV1EventSubscriptions(
  args: InferRequestType<typeof client.v1.event_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.event_subscriptions.$post(args, options))
}

export async function getV1EventSubscriptionsEventSubscriptionToken(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].$get(args, options),
  )
}

export async function deleteV1EventSubscriptionsEventSubscriptionToken(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].$delete(args, options),
  )
}

export async function patchV1EventSubscriptionsEventSubscriptionToken(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].$patch(args, options),
  )
}

export async function getV1EventSubscriptionsEventSubscriptionTokenAttempts(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].attempts.$get(args, options),
  )
}

export async function postV1EventSubscriptionsEventSubscriptionTokenRecover(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].recover.$post(args, options),
  )
}

export async function postV1EventSubscriptionsEventSubscriptionTokenReplayMissing(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].replay_missing.$post(args, options),
  )
}

export async function getV1EventSubscriptionsEventSubscriptionTokenSecret(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].secret.$get(args, options),
  )
}

export async function postV1EventSubscriptionsEventSubscriptionTokenSecretRotate(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.event_subscriptions[':event_subscription_token'].secret.rotate.$post(args, options),
  )
}

export async function getV1Events(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.$get(args, options))
}

export async function getV1EventsEventToken(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events[':event_token'].$get(args, options))
}

export async function getV1EventsEventTokenAttempts(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events[':event_token'].attempts.$get(args, options))
}

export async function postV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResend(
  args: InferRequestType<
    (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.events[':event_token'].event_subscriptions[':event_subscription_token'].resend.$post(
      args,
      options,
    ),
  )
}

export async function postV1BlockchainRecipients(
  args: InferRequestType<typeof client.v1.blockchain_recipients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.blockchain_recipients.$post(args, options))
}

export async function getV1BlockchainRecipientsBlockchainRecipientToken(
  args: InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.blockchain_recipients[':blockchain_recipient_token'].$get(args, options),
  )
}

export async function getV1ExternalBankAccounts(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.external_bank_accounts.$get(args, options))
}

export async function postV1ExternalBankAccounts(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.external_bank_accounts.$post(args, options))
}

export async function getV1ExternalBankAccountsExternalBankAccountToken(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].$get(args, options),
  )
}

export async function patchV1ExternalBankAccountsExternalBankAccountToken(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].$patch(args, options),
  )
}

export async function postV1ExternalBankAccountsExternalBankAccountTokenMicroDeposits(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].micro_deposits.$post(
      args,
      options,
    ),
  )
}

export async function postV1ExternalBankAccountsExternalBankAccountTokenPause(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].pause.$post(args, options),
  )
}

export async function postV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDeposits(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].retry_micro_deposits.$post(
      args,
      options,
    ),
  )
}

export async function postV1ExternalBankAccountsExternalBankAccountTokenRetryPrenote(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].retry_prenote.$post(
      args,
      options,
    ),
  )
}

export async function postV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethod(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].set_verification_method.$post(
      args,
      options,
    ),
  )
}

export async function postV1ExternalBankAccountsExternalBankAccountTokenUnpause(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_bank_accounts[':external_bank_account_token'].unpause.$post(args, options),
  )
}

export async function getV1CreditProductsCreditProductTokenExtendedCredit(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.credit_products[':credit_product_token'].extended_credit.$get(args, options),
  )
}

export async function getV1CreditProductsCreditProductTokenPrimeRates(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.credit_products[':credit_product_token'].prime_rates.$get(args, options),
  )
}

export async function postV1CreditProductsCreditProductTokenPrimeRates(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.credit_products[':credit_product_token'].prime_rates.$post(args, options),
  )
}

export async function getV1FinancialAccounts(
  args: InferRequestType<typeof client.v1.financial_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.financial_accounts.$get(args, options))
}

export async function postV1FinancialAccounts(
  args: InferRequestType<typeof client.v1.financial_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.financial_accounts.$post(args, options))
}

export async function getV1FinancialAccountsFinancialAccountToken(
  args: InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].$get(args, options),
  )
}

export async function patchV1FinancialAccountsFinancialAccountToken(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].$patch(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenBalances(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].balances.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenOpenToBuy(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].open_to_buy.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenCreditConfiguration(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].credit_configuration.$get(
      args,
      options,
    ),
  )
}

export async function patchV1FinancialAccountsFinancialAccountTokenCreditConfiguration(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].credit_configuration.$patch(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenFinancialTransactions(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].financial_transactions.$get(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionToken(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].financial_transactions[
      ':financial_transaction_token'
    ].$get(args, options),
  )
}

export async function postV1FinancialAccountsFinancialAccountTokenRegisterAccountNumber(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].register_account_number.$post(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenHolds(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].holds.$get(args, options),
  )
}

export async function postV1FinancialAccountsFinancialAccountTokenHolds(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].holds.$post(args, options),
  )
}

export async function getV1HoldsHoldToken(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holds[':hold_token'].$get(args, options))
}

export async function postV1HoldsHoldTokenVoid(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.holds[':hold_token'].void.$post(args, options))
}

export async function getV1FinancialAccountsFinancialAccountTokenStatements(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].statements.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenStatementsStatementToken(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].statements[':statement_token'].$get(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItems(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].statements[
      ':statement_token'
    ].line_items.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenLoanTapes(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].loan_tapes.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeToken(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].loan_tapes[':loan_tape_token'].$get(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenLoanTapeConfiguration(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].loan_tape_configuration.$get(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenInstallmentPlans(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].installment_plans.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanToken(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].installment_plans[
      ':installment_plan_token'
    ].$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatements(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].installment_plans[
      ':installment_plan_token'
    ].statements.$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementToken(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].installment_plans[
      ':installment_plan_token'
    ].statements[':statement_token'].$get(args, options),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenInterestTierSchedule(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$get(
      args,
      options,
    ),
  )
}

export async function postV1FinancialAccountsFinancialAccountTokenInterestTierSchedule(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$post(
      args,
      options,
    ),
  )
}

export async function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
      ':effective_date'
    ].$get(args, options),
  )
}

export async function putV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
      ':effective_date'
    ].$put(args, options),
  )
}

export async function deleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
      ':effective_date'
    ].$delete(args, options),
  )
}

export async function postV1FinancialAccountsFinancialAccountTokenUpdateStatus(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_accounts[':financial_account_token'].update_status.$post(args, options),
  )
}

export async function getV1AccountActivity(
  args: InferRequestType<typeof client.v1.account_activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account_activity.$get(args, options))
}

export async function getV1AccountActivityTransactionToken(
  args: InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account_activity[':transaction_token'].$get(args, options))
}

export async function getV1Payments(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.$get(args, options))
}

export async function postV1Payments(
  args: InferRequestType<typeof client.v1.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.$post(args, options))
}

export async function postV1PaymentsStablecoin(
  args: InferRequestType<typeof client.v1.payments.stablecoin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.stablecoin.$post(args, options))
}

export async function getV1PaymentsPaymentToken(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':payment_token'].$get(args, options))
}

export async function postV1PaymentsPaymentTokenRetry(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':payment_token'].retry.$post(args, options))
}

export async function postV1PaymentsPaymentTokenReturn(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['return']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':payment_token'].return.$post(args, options))
}

export async function getV1ReportsSettlementDetailsReportDate(
  args: InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reports.settlement.details[':report_date'].$get(args, options),
  )
}

export async function getV1ReportsSettlementSummaryReportDate(
  args: InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reports.settlement.summary[':report_date'].$get(args, options),
  )
}

export async function getV1ReportsSettlementNetworkTotals(
  args: InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports.settlement.network_totals.$get(args, options))
}

export async function getV1ReportsSettlementNetworkTotalsToken(
  args: InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reports.settlement.network_totals[':token'].$get(args, options),
  )
}

export async function getV1ResponderEndpoints(
  args: InferRequestType<typeof client.v1.responder_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.responder_endpoints.$get(args, options))
}

export async function postV1ResponderEndpoints(
  args: InferRequestType<typeof client.v1.responder_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.responder_endpoints.$post(args, options))
}

export async function deleteV1ResponderEndpoints(
  args: InferRequestType<typeof client.v1.responder_endpoints.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.responder_endpoints.$delete(args, options))
}

export async function getV1IpRanges(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.ip_ranges.$get(undefined, options))
}

export async function postV1SimulateAuthorizationAdvice(
  args: InferRequestType<typeof client.v1.simulate.authorization_advice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.authorization_advice.$post(args, options))
}

export async function postV1SimulateAuthorize(
  args: InferRequestType<typeof client.v1.simulate.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.authorize.$post(args, options))
}

export async function postV1SimulateClearing(
  args: InferRequestType<typeof client.v1.simulate.clearing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.clearing.$post(args, options))
}

export async function postV1SimulateCreditAuthorizationAdvice(
  args: InferRequestType<typeof client.v1.simulate.credit_authorization_advice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.credit_authorization_advice.$post(args, options))
}

export async function postV1SimulateEventSubscriptionsEventSubscriptionTokenSendExample(
  args: InferRequestType<
    (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.simulate.event_subscriptions[':event_subscription_token'].send_example.$post(
      args,
      options,
    ),
  )
}

export async function postV1SimulatePaymentsReceipt(
  args: InferRequestType<typeof client.v1.simulate.payments.receipt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.payments.receipt.$post(args, options))
}

export async function postV1SimulatePaymentsRelease(
  args: InferRequestType<typeof client.v1.simulate.payments.release.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.payments.release.$post(args, options))
}

export async function postV1SimulatePaymentsReturn(
  args: InferRequestType<typeof client.v1.simulate.payments.return.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.payments.return.$post(args, options))
}

export async function postV1SimulatePaymentsPaymentTokenAction(
  args: InferRequestType<(typeof client.v1.simulate.payments)[':payment_token']['action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.simulate.payments[':payment_token'].action.$post(args, options),
  )
}

export async function postV1SimulateReturn(
  args: InferRequestType<typeof client.v1.simulate.return.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.return.$post(args, options))
}

export async function postV1SimulateReturnReversal(
  args: InferRequestType<typeof client.v1.simulate.return_reversal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.return_reversal.$post(args, options))
}

export async function postV1SimulateTokenizations(
  args: InferRequestType<typeof client.v1.simulate.tokenizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.tokenizations.$post(args, options))
}

export async function postV1SimulateVoid(
  args: InferRequestType<typeof client.v1.simulate.void.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.simulate.void.$post(args, options))
}

export async function postV1SimulateAccountHoldersEnrollmentReview(
  args: InferRequestType<typeof client.v1.simulate.account_holders.enrollment_review.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.simulate.account_holders.enrollment_review.$post(args, options),
  )
}

export async function postV1SimulateAccountHoldersEnrollmentDocumentReview(
  args: InferRequestType<
    typeof client.v1.simulate.account_holders.enrollment_document_review.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.simulate.account_holders.enrollment_document_review.$post(args, options),
  )
}

export async function getV1Status(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.status.$get(undefined, options))
}

export async function postV1ThreeDsAuthenticationSimulate(
  args: InferRequestType<typeof client.v1.three_ds_authentication.simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.three_ds_authentication.simulate.$post(args, options))
}

export async function postV1ThreeDsDecisioningSimulateEnterOtp(
  args: InferRequestType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.three_ds_decisioning.simulate.enter_otp.$post(args, options))
}

export async function getV1ThreeDsAuthenticationThreeDsAuthenticationToken(
  args: InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.three_ds_authentication[':three_ds_authentication_token'].$get(args, options),
  )
}

export async function getV1ThreeDsDecisioningSecret(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.three_ds_decisioning.secret.$get(undefined, options))
}

export async function postV1ThreeDsDecisioningSecretRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.three_ds_decisioning.secret.rotate.$post(undefined, options))
}

export async function postV1ThreeDsDecisioningChallengeResponse(
  args: InferRequestType<typeof client.v1.three_ds_decisioning.challenge_response.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.three_ds_decisioning.challenge_response.$post(args, options))
}

export async function getV1TokenizationDecisioningSecret(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.tokenization_decisioning.secret.$get(undefined, options))
}

export async function postV1TokenizationDecisioningSecretRotate(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.tokenization_decisioning.secret.rotate.$post(undefined, options),
  )
}

export async function postV1CardsCardTokenTokenizations(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':card_token'].tokenizations.$post(args, options))
}

export async function postV1TokenizationsTokenizationTokenSelectTfaMethod(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].select_tfa_method.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenSubmitTfa(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].submit_tfa.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenPaymentCredentials(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].payment_credentials.$post(args, options),
  )
}

export async function getV1Tokenizations(
  args: InferRequestType<typeof client.v1.tokenizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokenizations.$get(args, options))
}

export async function getV1TokenizationsTokenizationToken(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokenizations[':tokenization_token'].$get(args, options))
}

export async function postV1TokenizationsTokenizationTokenPause(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].pause.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenUnpause(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].unpause.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenDeactivate(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].deactivate.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenActivate(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].activate.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenResendActivationCode(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].resend_activation_code.$post(args, options),
  )
}

export async function postV1TokenizationsTokenizationTokenUpdateDigitalCardArt(
  args: InferRequestType<
    (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.tokenizations[':tokenization_token'].update_digital_card_art.$post(args, options),
  )
}

export async function getV1Transactions(
  args: InferRequestType<typeof client.v1.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transactions.$get(args, options))
}

export async function getV1TransactionsTransactionToken(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transactions[':transaction_token'].$get(args, options))
}

export async function getV1TransactionMonitoringCases(
  args: InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transaction_monitoring.cases.$get(args, options))
}

export async function getV1TransactionMonitoringCasesCaseToken(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].$get(args, options),
  )
}

export async function patchV1TransactionMonitoringCasesCaseToken(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].$patch(args, options),
  )
}

export async function getV1TransactionMonitoringCasesCaseTokenActivity(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].activity.$get(args, options),
  )
}

export async function getV1TransactionMonitoringCasesCaseTokenTransactions(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].transactions.$get(args, options),
  )
}

export async function getV1TransactionMonitoringCasesCaseTokenCards(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].cards.$get(args, options),
  )
}

export async function postV1TransactionMonitoringCasesCaseTokenComments(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].comments.$post(args, options),
  )
}

export async function deleteV1TransactionMonitoringCasesCaseTokenCommentsCommentToken(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].comments[':comment_token'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1TransactionMonitoringCasesCaseTokenCommentsCommentToken(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].comments[':comment_token'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1TransactionMonitoringCasesCaseTokenFiles(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].files.$get(args, options),
  )
}

export async function postV1TransactionMonitoringCasesCaseTokenFiles(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].files.$post(args, options),
  )
}

export async function getV1TransactionMonitoringCasesCaseTokenFilesFileToken(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$get(args, options),
  )
}

export async function deleteV1TransactionMonitoringCasesCaseTokenFilesFileToken(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1TransactionMonitoringQueues(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transaction_monitoring.queues.$get(args, options))
}

export async function postV1TransactionMonitoringQueues(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transaction_monitoring.queues.$post(args, options))
}

export async function getV1TransactionMonitoringQueuesQueueToken(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.queues[':queue_token'].$get(args, options),
  )
}

export async function deleteV1TransactionMonitoringQueuesQueueToken(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.queues[':queue_token'].$delete(args, options),
  )
}

export async function patchV1TransactionMonitoringQueuesQueueToken(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transaction_monitoring.queues[':queue_token'].$patch(args, options),
  )
}

export async function postV1Transfer(
  args: InferRequestType<typeof client.v1.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfer.$post(args, options))
}

export async function getV1TransferLimits(
  args: InferRequestType<typeof client.v1.transfer_limits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfer_limits.$get(args, options))
}

export async function getV1BookTransfers(
  args: InferRequestType<typeof client.v1.book_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.book_transfers.$get(args, options))
}

export async function postV1BookTransfers(
  args: InferRequestType<typeof client.v1.book_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.book_transfers.$post(args, options))
}

export async function getV1BookTransfersBookTransferToken(
  args: InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.book_transfers[':book_transfer_token'].$get(args, options))
}

export async function postV1BookTransfersBookTransferTokenRetry(
  args: InferRequestType<
    (typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.book_transfers[':book_transfer_token'].retry.$post(args, options),
  )
}

export async function postV1BookTransfersBookTransferTokenReverse(
  args: InferRequestType<
    (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.book_transfers[':book_transfer_token'].reverse.$post(args, options),
  )
}

export async function getV1ExternalPayments(
  args: InferRequestType<typeof client.v1.external_payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.external_payments.$get(args, options))
}

export async function postV1ExternalPayments(
  args: InferRequestType<typeof client.v1.external_payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.external_payments.$post(args, options))
}

export async function getV1ExternalPaymentsExternalPaymentToken(
  args: InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_payments[':external_payment_token'].$get(args, options),
  )
}

export async function postV1ExternalPaymentsExternalPaymentTokenSettle(
  args: InferRequestType<
    (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_payments[':external_payment_token'].settle.$post(args, options),
  )
}

export async function postV1ExternalPaymentsExternalPaymentTokenRelease(
  args: InferRequestType<
    (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_payments[':external_payment_token'].release.$post(args, options),
  )
}

export async function postV1ExternalPaymentsExternalPaymentTokenCancel(
  args: InferRequestType<
    (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_payments[':external_payment_token'].cancel.$post(args, options),
  )
}

export async function postV1ExternalPaymentsExternalPaymentTokenReverse(
  args: InferRequestType<
    (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.external_payments[':external_payment_token'].reverse.$post(args, options),
  )
}

export async function getV1ManagementOperations(
  args: InferRequestType<typeof client.v1.management_operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.management_operations.$get(args, options))
}

export async function postV1ManagementOperations(
  args: InferRequestType<typeof client.v1.management_operations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.management_operations.$post(args, options))
}

export async function getV1ManagementOperationsManagementOperationToken(
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.management_operations[':management_operation_token'].$get(args, options),
  )
}

export async function postV1ManagementOperationsManagementOperationTokenReverse(
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.management_operations[':management_operation_token'].reverse.$post(args, options),
  )
}

export async function getV1NetworkPrograms(
  args: InferRequestType<typeof client.v1.network_programs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.network_programs.$get(args, options))
}

export async function getV1NetworkProgramsNetworkProgramToken(
  args: InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.network_programs[':network_program_token'].$get(args, options),
  )
}

export async function getV1FundingEvents(
  args: InferRequestType<typeof client.v1.funding_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.funding_events.$get(args, options))
}

export async function getV1FundingEventsFundingEventToken(
  args: InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.funding_events[':funding_event_token'].$get(args, options))
}

export async function getV1FundingEventsFundingEventTokenDetails(
  args: InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.funding_events[':funding_event_token'].details.$get(args, options),
  )
}

export async function getV2Disputes(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disputes.$get(args, options))
}

export async function getV2DisputesDisputeToken(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disputes[':dispute_token'].$get(args, options))
}
