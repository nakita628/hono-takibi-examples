import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGwApiV1Accounts(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts.$get(args, options))
}

export async function postGwApiV1Accounts(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts.$post(args, options))
}

export async function patchGwApiV1Accounts(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts.$patch(args, options))
}

export async function postGwApiV1AccountsDocuments(
  args: InferRequestType<typeof client.gw.api.v1.accounts.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts.documents.$post(args, options))
}

export async function getGwApiV1AccountsAccountIdTasks(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$get(args, options))
}

export async function postGwApiV1AccountsAccountIdTasks(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$post(args, options))
}

export async function patchGwApiV1AccountsAccountIdTasks(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$patch(args, options))
}

export async function postGwApiV1BalancesQuery(
  args: InferRequestType<typeof client.gw.api.v1.balances.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.balances.query.$post(args, options))
}

export async function postGwApiV1BankInstructions(
  args: InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['bank-instructions'].$post(args, options))
}

export async function postGwApiV1BankInstructionsQuery(
  args: InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['bank-instructions'].query.$post(args, options))
}

export async function postGwApiV1BankInstructionsBulk(
  args: InferRequestType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['bank-instructions:bulk'].$post(args, options))
}

export async function postGwApiV1EchoSignedJwt(
  args: InferRequestType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.echo['signed-jwt'].$post(args, options))
}

export async function postGwApiV1ExternalAssetTransfers(
  args: InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['external-asset-transfers'].$post(args, options))
}

export async function postGwApiV1ExternalAssetTransfersBulk(
  args: InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['external-asset-transfers:bulk'].$post(args, options))
}

export async function postGwApiV1ExternalCashTransfers(
  args: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['external-cash-transfers'].$post(args, options))
}

export async function postGwApiV1ExternalCashTransfersQuery(
  args: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['external-cash-transfers'].query.$post(args, options))
}

export async function postGwApiV1ExternalCashTransfersBulk(
  args: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['external-cash-transfers:bulk'].$post(args, options))
}

export async function postGwApiV1InstructionsCancel(
  args: InferRequestType<typeof client.gw.api.v1.instructions.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.instructions.cancel.$post(args, options))
}

export async function postGwApiV1InstructionsCancelBulk(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.instructions['cancel:bulk'].$post(args, options))
}

export async function postGwApiV1InstructionsQuery(
  args: InferRequestType<typeof client.gw.api.v1.instructions.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.instructions.query.$post(args, options))
}

export async function postGwApiV1InternalAssetTransfers(
  args: InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['internal-asset-transfers'].$post(args, options))
}

export async function postGwApiV1InternalAssetTransfersBulk(
  args: InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['internal-asset-transfers:bulk'].$post(args, options))
}

export async function postGwApiV1InternalCashTransfers(
  args: InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['internal-cash-transfers'].$post(args, options))
}

export async function postGwApiV1InternalCashTransfersBulk(
  args: InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['internal-cash-transfers:bulk'].$post(args, options))
}

export async function postGwApiV1Restrictions(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.$post(args, options))
}

export async function postGwApiV1RestrictionsVerify(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.verify.$post(args, options))
}

export async function postGwApiV1SsoBrowserSessions(
  args: InferRequestType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['sso-browser-sessions'].$post(args, options))
}

export async function postGwApiV1SsoSessions(
  args: InferRequestType<(typeof client.gw.api.v1)['sso-sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['sso-sessions'].$post(args, options))
}

export async function postGwApiV1Statements(
  args: InferRequestType<typeof client.gw.api.v1.statements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.statements.$post(args, options))
}

export async function postGwApiV1TaxDocuments(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['tax-documents'].$post(args, options))
}

export async function postGwApiV1TaxVouchers(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['tax-vouchers'].$post(args, options))
}

export async function postGwApiV1TradeConfirmations(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['trade-confirmations'].$post(args, options))
}

export async function postGwApiV2ExternalAssetTransfers(
  args: InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v2['external-asset-transfers'].$post(args, options))
}

export async function postGwApiV2ExternalAssetTransfersBulk(
  args: InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v2['external-asset-transfers:bulk'].$post(args, options))
}

export async function postOauth2ApiV1Token(
  args: InferRequestType<typeof client.oauth2.api.v1.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.api.v1.token.$post(args, options))
}

export async function postV1ApiFaFaPresetGet(
  args: InferRequestType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa['fa-preset'].get.$post(args, options))
}

export async function postV1ApiFaFaPresetSave(
  args: InferRequestType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa['fa-preset'].save.$post(args, options))
}

export async function postV1ApiFaIsFullMaster(
  args: InferRequestType<(typeof client.v1.api.fa)['is-full-master']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa['is-full-master'].$post(args, options))
}

export async function postV1ApiFaModelAccountsDetails(
  args: InferRequestType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model['accounts-details'].$post(args, options))
}

export async function postV1ApiFaModelCashAnalyzer(
  args: InferRequestType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model['cash-analyzer'].$post(args, options))
}

export async function postV1ApiFaModelInvestDivest(
  args: InferRequestType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model['invest-divest'].$post(args, options))
}

export async function postV1ApiFaModelInvestDivestPositions(
  args: InferRequestType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model['invest-divest-positions'].$post(args, options))
}

export async function postV1ApiFaModelList(
  args: InferRequestType<typeof client.v1.api.fa.model.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model.list.$post(args, options))
}

export async function postV1ApiFaModelPositions(
  args: InferRequestType<typeof client.v1.api.fa.model.positions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model.positions.$post(args, options))
}

export async function postV1ApiFaModelRebalanceToExistingTargets(
  args: InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.fa.model.rebalance['to-existing-targets'].$post(args, options),
  )
}

export async function postV1ApiFaModelRebalanceToNewTargets(
  args: InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.fa.model.rebalance['to-new-targets'].$post(args, options),
  )
}

export async function postV1ApiFaModelRebalanceToSpecificTargets(
  args: InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.fa.model.rebalance['to-specific-targets'].$post(args, options),
  )
}

export async function postV1ApiFaModelSave(
  args: InferRequestType<typeof client.v1.api.fa.model.save.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model.save.$post(args, options))
}

export async function postV1ApiFaModelSubmitTransfers(
  args: InferRequestType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model['submit-transfers'].$post(args, options))
}

export async function postV1ApiFaModelSummary(
  args: InferRequestType<typeof client.v1.api.fa.model.summary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model.summary.$post(args, options))
}

export async function postV1ApiFaModelTwsInvestDivest(
  args: InferRequestType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fa.model['tws-invest-divest'].$post(args, options))
}

export async function postV1ApiFyiDeliveryoptionsDevice(
  args: InferRequestType<typeof client.v1.api.fyi.deliveryoptions.device.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.deliveryoptions.device.$post(args, options))
}

export async function postV1ApiFyiSettingsTypecode(
  args: InferRequestType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.settings[':typecode'].$post(args, options))
}

export async function postV1ApiIserverAccount(
  args: InferRequestType<typeof client.v1.api.iserver.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.$post(args, options))
}

export async function getV1ApiIserverAccountAllocationGroup(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.api.iserver.account.allocation.group.$get(undefined, options),
  )
}

export async function putV1ApiIserverAccountAllocationGroup(
  args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.allocation.group.$put(args, options))
}

export async function postV1ApiIserverAccountAllocationGroup(
  args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.allocation.group.$post(args, options))
}

export async function postV1ApiIserverAccountAllocationGroupDelete(
  args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account.allocation.group.delete.$post(args, options),
  )
}

export async function postV1ApiIserverAccountAllocationGroupSingle(
  args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.single.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account.allocation.group.single.$post(args, options),
  )
}

export async function getV1ApiIserverAccountAllocationPresets(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.api.iserver.account.allocation.presets.$get(undefined, options),
  )
}

export async function postV1ApiIserverAccountAllocationPresets(
  args: InferRequestType<typeof client.v1.api.iserver.account.allocation.presets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.allocation.presets.$post(args, options))
}

export async function postV1ApiIserverAccountAccountIdAlert(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account[':accountId'].alert.$post(args, options))
}

export async function postV1ApiIserverAccountAccountIdAlertActivate(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].alert.activate.$post(args, options),
  )
}

export async function postV1ApiIserverAccountAccountIdOrderOrderId(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].order[':orderId'].$post(args, options),
  )
}

export async function deleteV1ApiIserverAccountAccountIdOrderOrderId(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].order[':orderId'].$delete(args, options),
  )
}

export async function postV1ApiIserverAccountAccountIdOrders(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].orders.$post(args, options),
  )
}

export async function postV1ApiIserverAccountAccountIdOrdersWhatif(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].orders.whatif.$post(args, options),
  )
}

export async function postV1ApiIserverAccountModelCodeOrders(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':modelCode'].orders.$post(args, options),
  )
}

export async function postV1ApiIserverAuthSsodhInit(
  args: InferRequestType<typeof client.v1.api.iserver.auth.ssodh.init.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.auth.ssodh.init.$post(args, options))
}

export async function postV1ApiIserverAuthStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.iserver.auth.status.$post(undefined, options))
}

export async function postV1ApiIserverContractRules(
  args: InferRequestType<typeof client.v1.api.iserver.contract.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.contract.rules.$post(args, options))
}

export async function postV1ApiIserverDynaccount(
  args: InferRequestType<typeof client.v1.api.iserver.dynaccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.dynaccount.$post(args, options))
}

export async function postV1ApiIserverMarketdataUnsubscribe(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.marketdata.unsubscribe.$post(args, options))
}

export async function postV1ApiIserverNotification(
  args: InferRequestType<typeof client.v1.api.iserver.notification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.notification.$post(args, options))
}

export async function postV1ApiIserverQuestionsSuppress(
  args: InferRequestType<typeof client.v1.api.iserver.questions.suppress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.questions.suppress.$post(args, options))
}

export async function postV1ApiIserverQuestionsSuppressReset(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.api.iserver.questions.suppress.reset.$post(undefined, options),
  )
}

export async function postV1ApiIserverReplyReplyId(
  args: InferRequestType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.reply[':replyId'].$post(args, options))
}

export async function postV1ApiIserverScannerRun(
  args: InferRequestType<typeof client.v1.api.iserver.scanner.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.scanner.run.$post(args, options))
}

export async function getV1ApiIserverSecdefSearch(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.secdef.search.$get(args, options))
}

export async function postV1ApiIserverSecdefSearch(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.secdef.search.$post(args, options))
}

export async function getV1ApiIserverWatchlist(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.watchlist.$get(args, options))
}

export async function postV1ApiIserverWatchlist(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.watchlist.$post(args, options))
}

export async function deleteV1ApiIserverWatchlist(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.watchlist.$delete(args, options))
}

export async function postV1ApiLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.logout.$post(undefined, options))
}

export async function postV1ApiOauthAccessToken(
  args: InferRequestType<typeof client.v1.api.oauth.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.oauth.access_token.$post(args, options))
}

export async function postV1ApiOauthLiveSessionToken(
  args: InferRequestType<typeof client.v1.api.oauth.live_session_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.oauth.live_session_token.$post(args, options))
}

export async function postV1ApiOauthRequestToken(
  args: InferRequestType<typeof client.v1.api.oauth.request_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.oauth.request_token.$post(args, options))
}

export async function postV1ApiPaAllocation(
  args: InferRequestType<typeof client.v1.api.pa.allocation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.pa.allocation.$post(args, options))
}

export async function postV1ApiPaAllperiods(
  args: InferRequestType<typeof client.v1.api.pa.allperiods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.pa.allperiods.$post(args, options))
}

export async function postV1ApiPaPerformance(
  args: InferRequestType<typeof client.v1.api.pa.performance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.pa.performance.$post(args, options))
}

export async function postV1ApiPaTransactions(
  args: InferRequestType<typeof client.v1.api.pa.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.pa.transactions.$post(args, options))
}

export async function postV1ApiPortfolioAccountIdPositionsInvalidate(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.portfolio[':accountId'].positions.invalidate.$post(args, options),
  )
}

export async function postV1ApiTickle(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.tickle.$post(undefined, options))
}

export async function getGwApiV1AccountsAccountIdStatus(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].status.$get(args, options))
}

export async function patchGwApiV1AccountsAccountIdStatus(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].status.$patch(args, options))
}

export async function getGwApiV1RequestsRequestIdStatus(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.requests[':requestId'].status.$get(args, options))
}

export async function patchGwApiV1RequestsRequestIdStatus(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.requests[':requestId'].status.$patch(args, options))
}

export async function getGwApiV1AccountsLoginMessages(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts['login-messages'].$get(args, options))
}

export async function getGwApiV1AccountsStatus(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts.status.$get(args, options))
}

export async function getGwApiV1AccountsAccountIdDetails(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].details.$get(args, options))
}

export async function getGwApiV1AccountsAccountIdKyc(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.accounts[':accountId'].kyc.$get(args, options))
}

export async function getGwApiV1AccountsAccountIdLoginMessages(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1.accounts[':accountId']['login-messages'].$get(args, options),
  )
}

export async function getGwApiV1ClientInstructionsClientInstructionId(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1['client-instructions'][':clientInstructionId'].$get(args, options),
  )
}

export async function getGwApiV1EchoHttps(options?: ClientRequestOptions) {
  return await parseResponse(client.gw.api.v1.echo.https.$get(undefined, options))
}

export async function getGwApiV1EnumerationsComplexAssetTransfer(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1.enumerations['complex-asset-transfer'].$get(args, options),
  )
}

export async function getGwApiV1EnumerationsEnumerationType(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.enumerations[':enumerationType'].$get(args, options))
}

export async function getGwApiV1Forms(
  args: InferRequestType<typeof client.gw.api.v1.forms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.forms.$get(args, options))
}

export async function getGwApiV1FormsRequiredForms(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.forms['required-forms'].$get(args, options))
}

export async function getGwApiV1InstructionSetsInstructionSetId(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1['instruction-sets'][':instructionSetId'].$get(args, options),
  )
}

export async function getGwApiV1InstructionsInstructionId(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.instructions[':instructionId'].$get(args, options))
}

export async function getGwApiV1ParticipatingBanks(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['participating-banks'].$get(args, options))
}

export async function getGwApiV1Requests(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.requests.$get(args, options))
}

export async function getGwApiV1RestrictionsAccount(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.account.$get(args, options))
}

export async function getGwApiV1RestrictionsIds(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.ids.$get(args, options))
}

export async function getGwApiV1RestrictionsList(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.list.$get(args, options))
}

export async function getGwApiV1RestrictionsListsIds(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.lists.ids.$get(args, options))
}

export async function getGwApiV1RestrictionsRestriction(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.restriction.$get(args, options))
}

export async function getGwApiV1RestrictionsRestrictionScope(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions['restriction-scope'].$get(args, options))
}

export async function getGwApiV1RestrictionsUser(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.restrictions.user.$get(args, options))
}

export async function getGwApiV1StatementsAvailable(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1.statements.available.$get(args, options))
}

export async function getGwApiV1TaxDocumentsAvailable(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['tax-documents'].available.$get(args, options))
}

export async function getGwApiV1TaxVouchersActiveCountries(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1['tax-vouchers']['active-countries'].$get(args, options),
  )
}

export async function getGwApiV1TaxVouchersDividends(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['tax-vouchers'].dividends.$get(args, options))
}

export async function getGwApiV1TaxVouchersYears(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['tax-vouchers'].years.$get(args, options))
}

export async function getGwApiV1TaxVouchersRequestIdDownload(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1['tax-vouchers'][':requestId'].download.$get(args, options),
  )
}

export async function getGwApiV1TaxVouchersRequestIdState(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1['tax-vouchers'][':requestId'].state.$get(args, options),
  )
}

export async function getGwApiV1TradeConfirmationsAvailable(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gw.api.v1['trade-confirmations'].available.$get(args, options))
}

export async function getGwApiV1ValidationsUsernamesUsername(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gw.api.v1.validations.usernames[':username'].$get(args, options),
  )
}

export async function getV1ApiAceswsAccountIdSignaturesAndOwners(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.acesws[':accountId']['signatures-and-owners'].$get(args, options),
  )
}

export async function getV1ApiContractTradingSchedule(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.contract['trading-schedule'].$get(args, options))
}

export async function getV1ApiForecastCategoryTree(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.forecast.category.tree.$get(undefined, options))
}

export async function getV1ApiForecastContractDetails(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.forecast.contract.details.$get(args, options))
}

export async function getV1ApiForecastContractMarket(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.forecast.contract.market.$get(args, options))
}

export async function getV1ApiForecastContractRules(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.forecast.contract.rules.$get(args, options))
}

export async function getV1ApiForecastContractSchedules(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.forecast.contract.schedules.$get(args, options))
}

export async function getV1ApiFyiDeliveryoptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.fyi.deliveryoptions.$get(undefined, options))
}

export async function getV1ApiFyiDisclaimerTypecode(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.disclaimer[':typecode'].$get(args, options))
}

export async function putV1ApiFyiDisclaimerTypecode(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.disclaimer[':typecode'].$put(args, options))
}

export async function getV1ApiFyiNotifications(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.notifications.$get(args, options))
}

export async function getV1ApiFyiSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.fyi.settings.$get(undefined, options))
}

export async function getV1ApiFyiUnreadnumber(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.fyi.unreadnumber.$get(undefined, options))
}

export async function getV1ApiIserverAccountAlertAlertId(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.alert[':alertId'].$get(args, options))
}

export async function getV1ApiIserverAccountAllocationAccounts(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.api.iserver.account.allocation.accounts.$get(undefined, options),
  )
}

export async function getV1ApiIserverAccountAllocationModels(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.api.iserver.account.allocation.models.$get(undefined, options),
  )
}

export async function getV1ApiIserverAccountMta(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.iserver.account.mta.$get(undefined, options))
}

export async function getV1ApiIserverAccountOrderStatusOrderId(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account.order.status[':orderId'].$get(args, options),
  )
}

export async function getV1ApiIserverAccountOrders(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.orders.$get(args, options))
}

export async function getV1ApiIserverAccountPnlPartitioned(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.iserver.account.pnl.partitioned.$get(undefined, options))
}

export async function getV1ApiIserverAccountSearchSearchPattern(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account.search[':searchPattern'].$get(args, options),
  )
}

export async function getV1ApiIserverAccountTrades(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account.trades.$get(args, options))
}

export async function getV1ApiIserverAccountAccountIdAlerts(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.account[':accountId'].alerts.$get(args, options))
}

export async function getV1ApiIserverAccountAccountIdSummary(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].summary.$get(args, options),
  )
}

export async function getV1ApiIserverAccountAccountIdSummaryAvailableFunds(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].summary.available_funds.$get(args, options),
  )
}

export async function getV1ApiIserverAccountAccountIdSummaryBalances(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].summary.balances.$get(args, options),
  )
}

export async function getV1ApiIserverAccountAccountIdSummaryMargins(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].summary.margins.$get(args, options),
  )
}

export async function getV1ApiIserverAccountAccountIdSummaryMarketValue(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].summary.market_value.$get(args, options),
  )
}

export async function getV1ApiIserverAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.iserver.accounts.$get(undefined, options))
}

export async function getV1ApiIserverContractConidAlgos(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.contract[':conid'].algos.$get(args, options))
}

export async function getV1ApiIserverContractConidInfo(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.contract[':conid'].info.$get(args, options))
}

export async function getV1ApiIserverContractConidInfoAndRules(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.contract[':conid']['info-and-rules'].$get(args, options),
  )
}

export async function getV1ApiIserverCurrencyPairs(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.currency.pairs.$get(args, options))
}

export async function getV1ApiIserverExchangerate(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.exchangerate.$get(args, options))
}

export async function getV1ApiIserverMarketdataHistory(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.marketdata.history.$get(args, options))
}

export async function getV1ApiIserverMarketdataSnapshot(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.marketdata.snapshot.$get(args, options))
}

export async function getV1ApiIserverMarketdataUnsubscribeall(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.api.iserver.marketdata.unsubscribeall.$get(undefined, options),
  )
}

export async function getV1ApiIserverScannerParams(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.iserver.scanner.params.$get(undefined, options))
}

export async function getV1ApiIserverSecdefBondFilters(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.secdef['bond-filters'].$get(args, options))
}

export async function getV1ApiIserverSecdefInfo(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.secdef.info.$get(args, options))
}

export async function getV1ApiIserverSecdefStrikes(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.secdef.strikes.$get(args, options))
}

export async function getV1ApiIserverWatchlists(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.iserver.watchlists.$get(args, options))
}

export async function getV1ApiPortfolioAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.portfolio.accounts.$get(undefined, options))
}

export async function getV1ApiPortfolioPositionsConid(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio.positions[':conid'].$get(args, options))
}

export async function getV1ApiPortfolioSubaccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.portfolio.subaccounts.$get(undefined, options))
}

export async function getV1ApiPortfolioSubaccounts2(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio.subaccounts2.$get(args, options))
}

export async function getV1ApiPortfolioAccountIdAllocation(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio[':accountId'].allocation.$get(args, options))
}

export async function getV1ApiPortfolioAccountIdComboPositions(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.portfolio[':accountId'].combo.positions.$get(args, options),
  )
}

export async function getV1ApiPortfolioAccountIdLedger(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio[':accountId'].ledger.$get(args, options))
}

export async function getV1ApiPortfolioAccountIdMeta(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio[':accountId'].meta.$get(args, options))
}

export async function getV1ApiPortfolioAccountIdPositionConid(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.portfolio[':accountId'].position[':conid'].$get(args, options),
  )
}

export async function getV1ApiPortfolioAccountIdPositionsPageId(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.portfolio[':accountId'].positions[':pageId'].$get(args, options),
  )
}

export async function getV1ApiPortfolioAccountIdSummary(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio[':accountId'].summary.$get(args, options))
}

export async function getV1ApiPortfolio2AccountIdPositions(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.portfolio2[':accountId'].positions.$get(args, options))
}

export async function getV1ApiSsoValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.api.sso.validate.$get(undefined, options))
}

export async function getV1ApiTrsrvAllConids(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.trsrv['all-conids'].$get(args, options))
}

export async function getV1ApiTrsrvFutures(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.trsrv.futures.$get(args, options))
}

export async function getV1ApiTrsrvSecdef(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.trsrv.secdef.$get(args, options))
}

export async function getV1ApiTrsrvSecdefSchedule(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.trsrv.secdef.schedule.$get(args, options))
}

export async function getV1ApiTrsrvStocks(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.trsrv.stocks.$get(args, options))
}

export async function getV1ApiWs(
  args: InferRequestType<typeof client.v1.api.ws.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.ws.$get(args, options))
}

export async function putV1ApiFyiDeliveryoptionsEmail(
  args: InferRequestType<typeof client.v1.api.fyi.deliveryoptions.email.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.deliveryoptions.email.$put(args, options))
}

export async function putV1ApiFyiNotificationsNotificationId(
  args: InferRequestType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.notifications[':notificationId'].$put(args, options))
}

export async function deleteV1ApiFyiDeliveryoptionsDeviceId(
  args: InferRequestType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api.fyi.deliveryoptions[':deviceId'].$delete(args, options))
}

export async function deleteV1ApiIserverAccountAccountIdAlertAlertId(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.api.iserver.account[':accountId'].alert[':alertId'].$delete(args, options),
  )
}
