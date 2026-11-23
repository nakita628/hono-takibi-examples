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
  getV1LocatesLocateIdRoute,
  getV1LocatesQuotesRoute,
  getV1LocatesRoute,
  getV2AccountActivitiesActivityTypeRoute,
  getV2AccountActivitiesRoute,
  getV2AccountConfigurationsRoute,
  getV2AccountPortfolioHistoryRoute,
  getV2AccountRoute,
  getV2AssetsRoute,
  getV2AssetsSymbolOrAssetIdRoute,
  getV2beta1EventsActivitiesRoute,
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
  getV3CalendarMarketRoute,
  getV3ClockRoute,
  patchV2AccountConfigurationsRoute,
  patchV2OrdersOrderIdRoute,
  patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
  postV1LocatesRoute,
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
} from './routes'
import {
  deleteV2OrdersOrderIdRouteHandler,
  deleteV2OrdersRouteHandler,
  deleteV2PositionsRouteHandler,
  deleteV2PositionsSymbolOrAssetIdRouteHandler,
  deleteV2WalletsWhitelistsWhitelistedAddressIdRouteHandler,
  deleteV2WatchlistsByNameRouteHandler,
  deleteV2WatchlistsWatchlistIdRouteHandler,
  deleteV2WatchlistsWatchlistIdSymbolRouteHandler,
  getV1LocatesLocateIdRouteHandler,
  getV1LocatesQuotesRouteHandler,
  getV1LocatesRouteHandler,
  getV2AccountActivitiesActivityTypeRouteHandler,
  getV2AccountActivitiesRouteHandler,
  getV2AccountConfigurationsRouteHandler,
  getV2AccountPortfolioHistoryRouteHandler,
  getV2AccountRouteHandler,
  getV2AssetsRouteHandler,
  getV2AssetsSymbolOrAssetIdRouteHandler,
  getV2beta1EventsActivitiesRouteHandler,
  getV2CalendarRouteHandler,
  getV2ClockRouteHandler,
  getV2CorporateActionsAnnouncementsIdRouteHandler,
  getV2CorporateActionsAnnouncementsRouteHandler,
  getV2OptionsContractsRouteHandler,
  getV2OptionsContractsSymbolOrIdRouteHandler,
  getV2OrdersByClientOrderIdRouteHandler,
  getV2OrdersOrderIdRouteHandler,
  getV2OrdersRouteHandler,
  getV2PositionsRouteHandler,
  getV2PositionsSymbolOrAssetIdRouteHandler,
  getV2TokenizationRequestsByClientRequestIdRouteHandler,
  getV2TokenizationRequestsRouteHandler,
  getV2TokenizationRequestsTokenizationRequestIdRouteHandler,
  getV2WalletsFeesEstimateRouteHandler,
  getV2WalletsRouteHandler,
  getV2WalletsTransfersRouteHandler,
  getV2WalletsTransfersTransferIdRouteHandler,
  getV2WalletsTravelRuleVaspsRouteHandler,
  getV2WalletsWhitelistsRouteHandler,
  getV2WatchlistsByNameRouteHandler,
  getV2WatchlistsRouteHandler,
  getV2WatchlistsWatchlistIdRouteHandler,
  getV3CalendarMarketRouteHandler,
  getV3ClockRouteHandler,
  patchV2AccountConfigurationsRouteHandler,
  patchV2OrdersOrderIdRouteHandler,
  patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRouteHandler,
  postV1LocatesRouteHandler,
  postV2OrdersRouteHandler,
  postV2PositionsSymbolOrContractIdDoNotExerciseRouteHandler,
  postV2PositionsSymbolOrContractIdExerciseRouteHandler,
  postV2TokenizationMintRouteHandler,
  postV2WalletsWhitelistsRouteHandler,
  postV2WatchlistsByNameRouteHandler,
  postV2WatchlistsRouteHandler,
  postV2WatchlistsWatchlistIdRouteHandler,
  putV2WatchlistsByNameRouteHandler,
  putV2WatchlistsWatchlistIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1LocatesRoute, getV1LocatesRouteHandler)
  .openapi(postV1LocatesRoute, postV1LocatesRouteHandler)
  .openapi(getV1LocatesLocateIdRoute, getV1LocatesLocateIdRouteHandler)
  .openapi(getV1LocatesQuotesRoute, getV1LocatesQuotesRouteHandler)
  .openapi(getV2beta1EventsActivitiesRoute, getV2beta1EventsActivitiesRouteHandler)
  .openapi(getV2AccountRoute, getV2AccountRouteHandler)
  .openapi(getV2AccountActivitiesRoute, getV2AccountActivitiesRouteHandler)
  .openapi(getV2AccountActivitiesActivityTypeRoute, getV2AccountActivitiesActivityTypeRouteHandler)
  .openapi(getV2AccountConfigurationsRoute, getV2AccountConfigurationsRouteHandler)
  .openapi(patchV2AccountConfigurationsRoute, patchV2AccountConfigurationsRouteHandler)
  .openapi(getV2AccountPortfolioHistoryRoute, getV2AccountPortfolioHistoryRouteHandler)
  .openapi(getV2AssetsRoute, getV2AssetsRouteHandler)
  .openapi(getV2AssetsSymbolOrAssetIdRoute, getV2AssetsSymbolOrAssetIdRouteHandler)
  .openapi(getV2CalendarRoute, getV2CalendarRouteHandler)
  .openapi(getV2ClockRoute, getV2ClockRouteHandler)
  .openapi(getV2CorporateActionsAnnouncementsRoute, getV2CorporateActionsAnnouncementsRouteHandler)
  .openapi(
    getV2CorporateActionsAnnouncementsIdRoute,
    getV2CorporateActionsAnnouncementsIdRouteHandler,
  )
  .openapi(getV2OptionsContractsRoute, getV2OptionsContractsRouteHandler)
  .openapi(getV2OptionsContractsSymbolOrIdRoute, getV2OptionsContractsSymbolOrIdRouteHandler)
  .openapi(deleteV2OrdersRoute, deleteV2OrdersRouteHandler)
  .openapi(getV2OrdersRoute, getV2OrdersRouteHandler)
  .openapi(postV2OrdersRoute, postV2OrdersRouteHandler)
  .openapi(deleteV2OrdersOrderIdRoute, deleteV2OrdersOrderIdRouteHandler)
  .openapi(getV2OrdersOrderIdRoute, getV2OrdersOrderIdRouteHandler)
  .openapi(patchV2OrdersOrderIdRoute, patchV2OrdersOrderIdRouteHandler)
  .openapi(getV2OrdersByClientOrderIdRoute, getV2OrdersByClientOrderIdRouteHandler)
  .openapi(deleteV2PositionsRoute, deleteV2PositionsRouteHandler)
  .openapi(getV2PositionsRoute, getV2PositionsRouteHandler)
  .openapi(deleteV2PositionsSymbolOrAssetIdRoute, deleteV2PositionsSymbolOrAssetIdRouteHandler)
  .openapi(getV2PositionsSymbolOrAssetIdRoute, getV2PositionsSymbolOrAssetIdRouteHandler)
  .openapi(
    postV2PositionsSymbolOrContractIdDoNotExerciseRoute,
    postV2PositionsSymbolOrContractIdDoNotExerciseRouteHandler,
  )
  .openapi(
    postV2PositionsSymbolOrContractIdExerciseRoute,
    postV2PositionsSymbolOrContractIdExerciseRouteHandler,
  )
  .openapi(postV2TokenizationMintRoute, postV2TokenizationMintRouteHandler)
  .openapi(getV2TokenizationRequestsRoute, getV2TokenizationRequestsRouteHandler)
  .openapi(
    getV2TokenizationRequestsTokenizationRequestIdRoute,
    getV2TokenizationRequestsTokenizationRequestIdRouteHandler,
  )
  .openapi(
    getV2TokenizationRequestsByClientRequestIdRoute,
    getV2TokenizationRequestsByClientRequestIdRouteHandler,
  )
  .openapi(getV2WalletsRoute, getV2WalletsRouteHandler)
  .openapi(getV2WalletsFeesEstimateRoute, getV2WalletsFeesEstimateRouteHandler)
  .openapi(getV2WalletsTransfersRoute, getV2WalletsTransfersRouteHandler)
  .openapi(getV2WalletsTransfersTransferIdRoute, getV2WalletsTransfersTransferIdRouteHandler)
  .openapi(getV2WalletsTravelRuleVaspsRoute, getV2WalletsTravelRuleVaspsRouteHandler)
  .openapi(getV2WalletsWhitelistsRoute, getV2WalletsWhitelistsRouteHandler)
  .openapi(postV2WalletsWhitelistsRoute, postV2WalletsWhitelistsRouteHandler)
  .openapi(
    deleteV2WalletsWhitelistsWhitelistedAddressIdRoute,
    deleteV2WalletsWhitelistsWhitelistedAddressIdRouteHandler,
  )
  .openapi(
    patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
    patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRouteHandler,
  )
  .openapi(getV2WatchlistsRoute, getV2WatchlistsRouteHandler)
  .openapi(postV2WatchlistsRoute, postV2WatchlistsRouteHandler)
  .openapi(deleteV2WatchlistsWatchlistIdRoute, deleteV2WatchlistsWatchlistIdRouteHandler)
  .openapi(getV2WatchlistsWatchlistIdRoute, getV2WatchlistsWatchlistIdRouteHandler)
  .openapi(postV2WatchlistsWatchlistIdRoute, postV2WatchlistsWatchlistIdRouteHandler)
  .openapi(putV2WatchlistsWatchlistIdRoute, putV2WatchlistsWatchlistIdRouteHandler)
  .openapi(
    deleteV2WatchlistsWatchlistIdSymbolRoute,
    deleteV2WatchlistsWatchlistIdSymbolRouteHandler,
  )
  .openapi(deleteV2WatchlistsByNameRoute, deleteV2WatchlistsByNameRouteHandler)
  .openapi(getV2WatchlistsByNameRoute, getV2WatchlistsByNameRouteHandler)
  .openapi(postV2WatchlistsByNameRoute, postV2WatchlistsByNameRouteHandler)
  .openapi(putV2WatchlistsByNameRoute, putV2WatchlistsByNameRouteHandler)
  .openapi(getV3CalendarMarketRoute, getV3CalendarMarketRouteHandler)
  .openapi(getV3ClockRoute, getV3ClockRouteHandler)

export default app
