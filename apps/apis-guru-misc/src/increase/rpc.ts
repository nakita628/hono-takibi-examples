import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountNumbers(
  args: InferRequestType<typeof client.account_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_numbers.$get(args, options))
}

export async function postAccountNumbers(
  args: InferRequestType<typeof client.account_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_numbers.$post(args, options))
}

export async function getAccountNumbersAccountNumberId(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_numbers[':account_number_id'].$get(args, options))
}

export async function patchAccountNumbersAccountNumberId(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_numbers[':account_number_id'].$patch(args, options))
}

export async function getAccountStatements(
  args: InferRequestType<typeof client.account_statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_statements.$get(args, options))
}

export async function getAccountStatementsAccountStatementId(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_statements[':account_statement_id'].$get(args, options))
}

export async function getAccountTransfers(
  args: InferRequestType<typeof client.account_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_transfers.$get(args, options))
}

export async function postAccountTransfers(
  args: InferRequestType<typeof client.account_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_transfers.$post(args, options))
}

export async function getAccountTransfersAccountTransferId(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_transfers[':account_transfer_id'].$get(args, options))
}

export async function postAccountTransfersAccountTransferIdApprove(
  args: InferRequestType<
    (typeof client.account_transfers)[':account_transfer_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account_transfers[':account_transfer_id'].approve.$post(args, options),
  )
}

export async function postAccountTransfersAccountTransferIdCancel(
  args: InferRequestType<
    (typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account_transfers[':account_transfer_id'].cancel.$post(args, options),
  )
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$get(args, options))
}

export async function patchAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$patch(args, options))
}

export async function postAccountsAccountIdClose(
  args: InferRequestType<(typeof client.accounts)[':account_id']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].close.$post(args, options))
}

export async function getAchPrenotifications(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_prenotifications.$get(args, options))
}

export async function postAchPrenotifications(
  args: InferRequestType<typeof client.ach_prenotifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_prenotifications.$post(args, options))
}

export async function getAchPrenotificationsAchPrenotificationId(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ach_prenotifications[':ach_prenotification_id'].$get(args, options),
  )
}

export async function getAchTransfers(
  args: InferRequestType<typeof client.ach_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_transfers.$get(args, options))
}

export async function postAchTransfers(
  args: InferRequestType<typeof client.ach_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_transfers.$post(args, options))
}

export async function getAchTransfersAchTransferId(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_transfers[':ach_transfer_id'].$get(args, options))
}

export async function postAchTransfersAchTransferIdApprove(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_transfers[':ach_transfer_id'].approve.$post(args, options))
}

export async function postAchTransfersAchTransferIdCancel(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ach_transfers[':ach_transfer_id'].cancel.$post(args, options))
}

export async function getCardDisputes(
  args: InferRequestType<typeof client.card_disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_disputes.$get(args, options))
}

export async function postCardDisputes(
  args: InferRequestType<typeof client.card_disputes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_disputes.$post(args, options))
}

export async function getCardDisputesCardDisputeId(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_disputes[':card_dispute_id'].$get(args, options))
}

export async function getCardProfiles(
  args: InferRequestType<typeof client.card_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_profiles.$get(args, options))
}

export async function postCardProfiles(
  args: InferRequestType<typeof client.card_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_profiles.$post(args, options))
}

export async function getCardProfilesCardProfileId(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_profiles[':card_profile_id'].$get(args, options))
}

export async function getCards(
  args: InferRequestType<typeof client.cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$get(args, options))
}

export async function postCards(
  args: InferRequestType<typeof client.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$post(args, options))
}

export async function getCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$get(args, options))
}

export async function patchCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$patch(args, options))
}

export async function getCardsCardIdDetails(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].details.$get(args, options))
}

export async function getCheckDeposits(
  args: InferRequestType<typeof client.check_deposits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_deposits.$get(args, options))
}

export async function postCheckDeposits(
  args: InferRequestType<typeof client.check_deposits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_deposits.$post(args, options))
}

export async function getCheckDepositsCheckDepositId(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_deposits[':check_deposit_id'].$get(args, options))
}

export async function getCheckTransfers(
  args: InferRequestType<typeof client.check_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_transfers.$get(args, options))
}

export async function postCheckTransfers(
  args: InferRequestType<typeof client.check_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_transfers.$post(args, options))
}

export async function getCheckTransfersCheckTransferId(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_transfers[':check_transfer_id'].$get(args, options))
}

export async function postCheckTransfersCheckTransferIdApprove(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.check_transfers[':check_transfer_id'].approve.$post(args, options),
  )
}

export async function postCheckTransfersCheckTransferIdCancel(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.check_transfers[':check_transfer_id'].cancel.$post(args, options),
  )
}

export async function postCheckTransfersCheckTransferIdStopPayment(
  args: InferRequestType<
    (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.check_transfers[':check_transfer_id'].stop_payment.$post(args, options),
  )
}

export async function getDeclinedTransactions(
  args: InferRequestType<typeof client.declined_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.declined_transactions.$get(args, options))
}

export async function getDeclinedTransactionsDeclinedTransactionId(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.declined_transactions[':declined_transaction_id'].$get(args, options),
  )
}

export async function getDigitalWalletTokens(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.digital_wallet_tokens.$get(args, options))
}

export async function getDigitalWalletTokensDigitalWalletTokenId(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.digital_wallet_tokens[':digital_wallet_token_id'].$get(args, options),
  )
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function getDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].$get(args, options))
}

export async function getEntities(
  args: InferRequestType<typeof client.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.$get(args, options))
}

export async function postEntities(
  args: InferRequestType<typeof client.entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.$post(args, options))
}

export async function getEntitiesEntityId(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities[':entity_id'].$get(args, options))
}

export async function postEntitiesEntityIdSupplementalDocuments(
  args: InferRequestType<(typeof client.entities)[':entity_id']['supplemental_documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entities[':entity_id'].supplemental_documents.$post(args, options),
  )
}

export async function getEventSubscriptions(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_subscriptions.$get(args, options))
}

export async function postEventSubscriptions(
  args: InferRequestType<typeof client.event_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_subscriptions.$post(args, options))
}

export async function getEventSubscriptionsEventSubscriptionId(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_subscriptions[':event_subscription_id'].$get(args, options),
  )
}

export async function patchEventSubscriptionsEventSubscriptionId(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_subscriptions[':event_subscription_id'].$patch(args, options),
  )
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].$get(args, options))
}

export async function getExternalAccounts(
  args: InferRequestType<typeof client.external_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_accounts.$get(args, options))
}

export async function postExternalAccounts(
  args: InferRequestType<typeof client.external_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_accounts.$post(args, options))
}

export async function getExternalAccountsExternalAccountId(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_accounts[':external_account_id'].$get(args, options))
}

export async function patchExternalAccountsExternalAccountId(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_accounts[':external_account_id'].$patch(args, options))
}

export async function getFiles(
  args: InferRequestType<typeof client.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$get(args, options))
}

export async function getGroupsCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.current.$get(undefined, options))
}

export async function getInboundAchTransferReturns(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound_ach_transfer_returns.$get(args, options))
}

export async function postInboundAchTransferReturns(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound_ach_transfer_returns.$post(args, options))
}

export async function getInboundAchTransferReturnsInboundAchTransferReturnId(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inbound_ach_transfer_returns[':inbound_ach_transfer_return_id'].$get(args, options),
  )
}

export async function getInboundWireDrawdownRequests(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound_wire_drawdown_requests.$get(args, options))
}

export async function getInboundWireDrawdownRequestsInboundWireDrawdownRequestId(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inbound_wire_drawdown_requests[':inbound_wire_drawdown_request_id'].$get(args, options),
  )
}

export async function getLimits(
  args: InferRequestType<typeof client.limits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.limits.$get(args, options))
}

export async function postLimits(
  args: InferRequestType<typeof client.limits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.limits.$post(args, options))
}

export async function getLimitsLimitId(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.limits[':limit_id'].$get(args, options))
}

export async function patchLimitsLimitId(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.limits[':limit_id'].$patch(args, options))
}

export async function getOauthConnections(
  args: InferRequestType<typeof client.oauth_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_connections.$get(args, options))
}

export async function getOauthConnectionsOauthConnectionId(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_connections[':oauth_connection_id'].$get(args, options))
}

export async function getPendingTransactions(
  args: InferRequestType<typeof client.pending_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pending_transactions.$get(args, options))
}

export async function getPendingTransactionsPendingTransactionId(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pending_transactions[':pending_transaction_id'].$get(args, options),
  )
}

export async function getRealTimeDecisionsRealTimeDecisionId(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.real_time_decisions[':real_time_decision_id'].$get(args, options),
  )
}

export async function postRealTimeDecisionsRealTimeDecisionIdAction(
  args: InferRequestType<
    (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.real_time_decisions[':real_time_decision_id'].action.$post(args, options),
  )
}

export async function getRoutingNumbers(
  args: InferRequestType<typeof client.routing_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing_numbers.$get(args, options))
}

export async function postSimulationsAccountStatements(
  args: InferRequestType<typeof client.simulations.account_statements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.account_statements.$post(args, options))
}

export async function postSimulationsAccountTransfersAccountTransferIdComplete(
  args: InferRequestType<
    (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.account_transfers[':account_transfer_id'].complete.$post(args, options),
  )
}

export async function postSimulationsAchTransfersAchTransferIdReturn(
  args: InferRequestType<
    (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.ach_transfers[':ach_transfer_id'].return.$post(args, options),
  )
}

export async function postSimulationsAchTransfersAchTransferIdSubmit(
  args: InferRequestType<
    (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.ach_transfers[':ach_transfer_id'].submit.$post(args, options),
  )
}

export async function postSimulationsCardAuthorizations(
  args: InferRequestType<typeof client.simulations.card_authorizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.card_authorizations.$post(args, options))
}

export async function postSimulationsCardDisputesCardDisputeIdAction(
  args: InferRequestType<
    (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.card_disputes[':card_dispute_id'].action.$post(args, options),
  )
}

export async function postSimulationsCardRefunds(
  args: InferRequestType<typeof client.simulations.card_refunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.card_refunds.$post(args, options))
}

export async function postSimulationsCardSettlements(
  args: InferRequestType<typeof client.simulations.card_settlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.card_settlements.$post(args, options))
}

export async function postSimulationsCheckDepositsCheckDepositIdReject(
  args: InferRequestType<
    (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.check_deposits[':check_deposit_id'].reject.$post(args, options),
  )
}

export async function postSimulationsCheckDepositsCheckDepositIdReturn(
  args: InferRequestType<
    (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.check_deposits[':check_deposit_id'].return.$post(args, options),
  )
}

export async function postSimulationsCheckDepositsCheckDepositIdSubmit(
  args: InferRequestType<
    (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.check_deposits[':check_deposit_id'].submit.$post(args, options),
  )
}

export async function postSimulationsCheckTransfersCheckTransferIdDeposit(
  args: InferRequestType<
    (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.check_transfers[':check_transfer_id'].deposit.$post(args, options),
  )
}

export async function postSimulationsCheckTransfersCheckTransferIdMail(
  args: InferRequestType<
    (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.check_transfers[':check_transfer_id'].mail.$post(args, options),
  )
}

export async function postSimulationsDigitalWalletTokenRequests(
  args: InferRequestType<typeof client.simulations.digital_wallet_token_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.digital_wallet_token_requests.$post(args, options))
}

export async function postSimulationsDocuments(
  args: InferRequestType<typeof client.simulations.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.documents.$post(args, options))
}

export async function postSimulationsInboundAchTransfers(
  args: InferRequestType<typeof client.simulations.inbound_ach_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.inbound_ach_transfers.$post(args, options))
}

export async function postSimulationsInboundRealTimePaymentsTransfers(
  args: InferRequestType<typeof client.simulations.inbound_real_time_payments_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.inbound_real_time_payments_transfers.$post(args, options),
  )
}

export async function postSimulationsInboundWireDrawdownRequests(
  args: InferRequestType<typeof client.simulations.inbound_wire_drawdown_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.inbound_wire_drawdown_requests.$post(args, options))
}

export async function postSimulationsInboundWireTransfers(
  args: InferRequestType<typeof client.simulations.inbound_wire_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.inbound_wire_transfers.$post(args, options))
}

export async function postSimulationsWireTransfersWireTransferIdReverse(
  args: InferRequestType<
    (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.wire_transfers[':wire_transfer_id'].reverse.$post(args, options),
  )
}

export async function postSimulationsWireTransfersWireTransferIdSubmit(
  args: InferRequestType<
    (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations.wire_transfers[':wire_transfer_id'].submit.$post(args, options),
  )
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function getTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction_id'].$get(args, options))
}

export async function getWireDrawdownRequests(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wire_drawdown_requests.$get(args, options))
}

export async function postWireDrawdownRequests(
  args: InferRequestType<typeof client.wire_drawdown_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wire_drawdown_requests.$post(args, options))
}

export async function getWireDrawdownRequestsWireDrawdownRequestId(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wire_drawdown_requests[':wire_drawdown_request_id'].$get(args, options),
  )
}

export async function getWireTransfers(
  args: InferRequestType<typeof client.wire_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wire_transfers.$get(args, options))
}

export async function postWireTransfers(
  args: InferRequestType<typeof client.wire_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wire_transfers.$post(args, options))
}

export async function getWireTransfersWireTransferId(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wire_transfers[':wire_transfer_id'].$get(args, options))
}

export async function postWireTransfersWireTransferIdApprove(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wire_transfers[':wire_transfer_id'].approve.$post(args, options),
  )
}

export async function postWireTransfersWireTransferIdCancel(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wire_transfers[':wire_transfer_id'].cancel.$post(args, options))
}
