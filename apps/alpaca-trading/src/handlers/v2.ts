import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2OrdersOrderIdRoute,
  deleteV2OrdersRoute,
  deleteV2PositionsRoute,
  deleteV2PositionsSymbolOrAssetIdRoute,
  deleteV2WalletsWhitelistsWhitelistedAddressIdRoute,
  deleteV2WatchlistsByNameRoute,
  deleteV2WatchlistsWatchlistIdRoute,
  deleteV2WatchlistsWatchlistIdSymbolRoute,
  getV2AccountActivitiesActivityTypeRoute,
  getV2AccountActivitiesRoute,
  getV2AccountConfigurationsRoute,
  getV2AccountPortfolioHistoryRoute,
  getV2AccountRoute,
  getV2AssetsRoute,
  getV2AssetsSymbolOrAssetIdRoute,
  getV2CalendarRoute,
  getV2ClockRoute,
  getV2CorporateActionsAnnouncementsIdRoute,
  getV2CorporateActionsAnnouncementsRoute,
  getV2OptionsContractsRoute,
  getV2OptionsContractsSymbolOrIdRoute,
  getV2OrdersByClientOrderIdRoute,
  getV2OrdersOrderIdRoute,
  getV2OrdersRoute,
  getV2PositionsRoute,
  getV2PositionsSymbolOrAssetIdRoute,
  getV2TokenizationRequestsByClientRequestIdRoute,
  getV2TokenizationRequestsRoute,
  getV2TokenizationRequestsTokenizationRequestIdRoute,
  getV2WalletsFeesEstimateRoute,
  getV2WalletsRoute,
  getV2WalletsTransfersRoute,
  getV2WalletsTransfersTransferIdRoute,
  getV2WalletsTravelRuleVaspsRoute,
  getV2WalletsWhitelistsRoute,
  getV2WatchlistsByNameRoute,
  getV2WatchlistsRoute,
  getV2WatchlistsWatchlistIdRoute,
  patchV2AccountConfigurationsRoute,
  patchV2OrdersOrderIdRoute,
  patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
  postV2OrdersRoute,
  postV2PositionsSymbolOrContractIdDoNotExerciseRoute,
  postV2PositionsSymbolOrContractIdExerciseRoute,
  postV2TokenizationMintRoute,
  postV2WalletsWhitelistsRoute,
  postV2WatchlistsByNameRoute,
  postV2WatchlistsRoute,
  postV2WatchlistsWatchlistIdRoute,
  putV2WatchlistsByNameRoute,
  putV2WatchlistsWatchlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountActivitiesActivityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AccountConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountPortfolioHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AssetsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CorporateActionsAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CorporateActionsAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OptionsContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OptionsContractsSymbolOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersByClientOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PositionsSymbolOrContractIdDoNotExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PositionsSymbolOrContractIdExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TokenizationMintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TokenizationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TokenizationRequestsTokenizationRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TokenizationRequestsByClientRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsFeesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsTravelRuleVaspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WalletsWhitelistsWhitelistedAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WatchlistsWatchlistIdSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WatchlistsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
