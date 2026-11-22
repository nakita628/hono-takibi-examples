import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Locates(
  args: InferRequestType<typeof client.v1.locates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locates.$get(args, options))
}

export async function postV1Locates(
  args: InferRequestType<typeof client.v1.locates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locates.$post(args, options))
}

export async function getV1LocatesLocateId(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locates[':locate_id'].$get(args, options))
}

export async function getV1LocatesQuotes(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locates.quotes.$get(args, options))
}

export async function getV2beta1EventsActivities(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.events.activities.$get(args, options))
}

export async function getV2Account(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.account.$get(undefined, options))
}

export async function getV2AccountActivities(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.activities.$get(args, options))
}

export async function getV2AccountActivitiesActivityType(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.activities[':activity_type'].$get(args, options))
}

export async function getV2AccountConfigurations(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.account.configurations.$get(undefined, options))
}

export async function patchV2AccountConfigurations(
  args: InferRequestType<typeof client.v2.account.configurations.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.configurations.$patch(args, options))
}

export async function getV2AccountPortfolioHistory(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.portfolio.history.$get(args, options))
}

export async function getV2Assets(
  args: InferRequestType<typeof client.v2.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.assets.$get(args, options))
}

export async function getV2AssetsSymbolOrAssetId(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.assets[':symbol_or_asset_id'].$get(args, options))
}

export async function getV2Calendar(
  args: InferRequestType<typeof client.v2.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendar.$get(args, options))
}

export async function getV2Clock(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.clock.$get(undefined, options))
}

export async function getV2CorporateActionsAnnouncements(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.corporate_actions.announcements.$get(args, options))
}

export async function getV2CorporateActionsAnnouncementsId(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.corporate_actions.announcements[':id'].$get(args, options))
}

export async function getV2OptionsContracts(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.options.contracts.$get(args, options))
}

export async function getV2OptionsContractsSymbolOrId(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.options.contracts[':symbol_or_id'].$get(args, options))
}

export async function getV2Orders(
  args: InferRequestType<typeof client.v2.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders.$get(args, options))
}

export async function postV2Orders(
  args: InferRequestType<typeof client.v2.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders.$post(args, options))
}

export async function deleteV2Orders(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.orders.$delete(undefined, options))
}

export async function getV2OrdersOrderId(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders[':order_id'].$get(args, options))
}

export async function deleteV2OrdersOrderId(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders[':order_id'].$delete(args, options))
}

export async function patchV2OrdersOrderId(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders[':order_id'].$patch(args, options))
}

export async function getV2OrdersByClientOrderId(
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['orders:by_client_order_id'].$get(args, options))
}

export async function getV2Positions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.positions.$get(undefined, options))
}

export async function deleteV2Positions(
  args: InferRequestType<typeof client.v2.positions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.positions.$delete(args, options))
}

export async function getV2PositionsSymbolOrAssetId(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.positions[':symbol_or_asset_id'].$get(args, options))
}

export async function deleteV2PositionsSymbolOrAssetId(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.positions[':symbol_or_asset_id'].$delete(args, options))
}

export async function postV2PositionsSymbolOrContractIdDoNotExercise(
  args: InferRequestType<
    (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.positions[':symbol_or_contract_id']['do-not-exercise'].$post(args, options),
  )
}

export async function postV2PositionsSymbolOrContractIdExercise(
  args: InferRequestType<
    (typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.positions[':symbol_or_contract_id'].exercise.$post(args, options),
  )
}

export async function postV2TokenizationMint(
  args: InferRequestType<typeof client.v2.tokenization.mint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tokenization.mint.$post(args, options))
}

export async function getV2TokenizationRequests(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tokenization.requests.$get(args, options))
}

export async function getV2TokenizationRequestsTokenizationRequestId(
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.tokenization.requests[':tokenization_request_id'].$get(args, options),
  )
}

export async function getV2TokenizationRequestsByClientRequestId(
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.tokenization['requests:by_client_request_id'].$get(args, options),
  )
}

export async function getV2Wallets(
  args: InferRequestType<typeof client.v2.wallets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.wallets.$get(args, options))
}

export async function getV2WalletsFeesEstimate(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.wallets.fees.estimate.$get(args, options))
}

export async function getV2WalletsTransfers(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.wallets.transfers.$get(undefined, options))
}

export async function getV2WalletsTransfersTransferId(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.wallets.transfers[':transfer_id'].$get(args, options))
}

export async function getV2WalletsTravelRuleVasps(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.wallets['travel-rule'].vasps.$get(args, options))
}

export async function getV2WalletsWhitelists(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.wallets.whitelists.$get(undefined, options))
}

export async function postV2WalletsWhitelists(
  args: InferRequestType<typeof client.v2.wallets.whitelists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.wallets.whitelists.$post(args, options))
}

export async function deleteV2WalletsWhitelistsWhitelistedAddressId(
  args: InferRequestType<
    (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.wallets.whitelists[':whitelisted_address_id'].$delete(args, options),
  )
}

export async function patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfo(
  args: InferRequestType<
    (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.wallets.whitelists[':whitelisted_address_id']['travel-rule-info'].$patch(
      args,
      options,
    ),
  )
}

export async function getV2Watchlists(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.watchlists.$get(undefined, options))
}

export async function postV2Watchlists(
  args: InferRequestType<typeof client.v2.watchlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.watchlists.$post(args, options))
}

export async function getV2WatchlistsWatchlistId(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.watchlists[':watchlist_id'].$get(args, options))
}

export async function putV2WatchlistsWatchlistId(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.watchlists[':watchlist_id'].$put(args, options))
}

export async function postV2WatchlistsWatchlistId(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.watchlists[':watchlist_id'].$post(args, options))
}

export async function deleteV2WatchlistsWatchlistId(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.watchlists[':watchlist_id'].$delete(args, options))
}

export async function deleteV2WatchlistsWatchlistIdSymbol(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.watchlists[':watchlist_id'][':symbol'].$delete(args, options),
  )
}

export async function getV2WatchlistsByName(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['watchlists:by_name'].$get(args, options))
}

export async function putV2WatchlistsByName(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['watchlists:by_name'].$put(args, options))
}

export async function postV2WatchlistsByName(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['watchlists:by_name'].$post(args, options))
}

export async function deleteV2WatchlistsByName(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['watchlists:by_name'].$delete(args, options))
}

export async function getV3CalendarMarket(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.calendar[':market'].$get(args, options))
}

export async function getV3Clock(
  args: InferRequestType<typeof client.v3.clock.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.clock.$get(args, options))
}
