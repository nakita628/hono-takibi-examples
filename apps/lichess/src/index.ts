import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiBulkPairingIdRoute,
  deleteApiExternalEngineIdRoute,
  deleteApiStudyStudyIdChapterIdRoute,
  deleteApiTokenRoute,
  getAntichessRoute,
  getApiAccountEmailRoute,
  getApiAccountKidRoute,
  getApiAccountPlayingRoute,
  getApiAccountPreferencesRoute,
  getApiAccountRoute,
  getApiBoardGameGameIdChatRoute,
  getApiBoardGameStreamGameIdRoute,
  getApiBotGameGameIdChatRoute,
  getApiBotGameStreamGameIdRoute,
  getApiBotOnlineRoute,
  getApiBroadcastBroadcastTournamentIdPgnRoute,
  getApiBroadcastBroadcastTournamentIdRoute,
  getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRoute,
  getApiBroadcastByUsernameRoute,
  getApiBroadcastMyRoundsRoute,
  getApiBroadcastRoundBroadcastRoundIdPgnRoute,
  getApiBroadcastRoute,
  getApiBroadcastSearchRoute,
  getApiBroadcastTopRoute,
  getApiBulkPairingIdGamesRoute,
  getApiBulkPairingIdRoute,
  getApiBulkPairingRoute,
  getApiChallengeChallengeIdShowRoute,
  getApiChallengeRoute,
  getApiCloudEvalRoute,
  getApiCrosstableUser1User2Route,
  getApiExternalEngineIdRoute,
  getApiExternalEngineRoute,
  getApiFidePlayerPlayerIdRatingsRoute,
  getApiFidePlayerPlayerIdRoute,
  getApiFidePlayerRoute,
  getApiGameGameIdChatRoute,
  getApiGamesExportBookmarksRoute,
  getApiGamesExportImportsRoute,
  getApiGamesUserUsernameRoute,
  getApiPlayerAutocompleteRoute,
  getApiPlayerRoute,
  getApiPlayerTopNbPerfTypeRoute,
  getApiPuzzleActivityRoute,
  getApiPuzzleBatchAngleRoute,
  getApiPuzzleDailyRoute,
  getApiPuzzleDashboardDaysRoute,
  getApiPuzzleIdRoute,
  getApiPuzzleNextRoute,
  getApiPuzzleReplayDaysThemeRoute,
  getApiRacerIdRoute,
  getApiRelFollowingRoute,
  getApiSimulRoute,
  getApiStormDashboardUsernameRoute,
  getApiStreamBroadcastGroupBroadcastGroupIdPgnRoute,
  getApiStreamBroadcastRoundBroadcastRoundIdPgnRoute,
  getApiStreamBroadcastTourBroadcastTourIdPgnRoute,
  getApiStreamerLiveRoute,
  getApiStreamEventRoute,
  getApiStreamGameIdRoute,
  getApiStudyByUsernameExportPgnRoute,
  getApiStudyByUsernameRoute,
  getApiStudyStudyIdChapterIdPgnRoute,
  getApiStudyStudyIdPgnRoute,
  getApiSwissIdGamesRoute,
  getApiSwissIdResultsRoute,
  getApiSwissIdRoute,
  getApiTeamAllRoute,
  getApiTeamOfUsernameRoute,
  getApiTeamSearchRoute,
  getApiTeamTeamIdArenaRoute,
  getApiTeamTeamIdRequestsRoute,
  getApiTeamTeamIdRoute,
  getApiTeamTeamIdSwissRoute,
  getApiTeamTeamIdUsersRoute,
  getApiTournamentIdGamesRoute,
  getApiTournamentIdResultsRoute,
  getApiTournamentIdRoute,
  getApiTournamentIdTeamsRoute,
  getApiTournamentRoute,
  getApiTvChannelFeedRoute,
  getApiTvChannelRoute,
  getApiTvChannelsRoute,
  getApiTvFeedRoute,
  getApiUsersStatusRoute,
  getApiUserUsernameActivityRoute,
  getApiUserUsernameCurrentGameRoute,
  getApiUserUsernameNoteRoute,
  getApiUserUsernamePerfPerfRoute,
  getApiUserUsernameRatingHistoryRoute,
  getApiUserUsernameRoute,
  getApiUserUsernameTournamentCreatedRoute,
  getApiUserUsernameTournamentPlayedRoute,
  getApiVersionRoute,
  getAtomicRoute,
  getBroadcastBroadcastTournamentIdPlayersPlayerIdRoute,
  getBroadcastBroadcastTournamentIdPlayersRoute,
  getBroadcastBroadcastTournamentIdTeamsStandingsRoute,
  getGameExportGameIdRoute,
  getLichessRoute,
  getMastersPgnGameIdRoute,
  getMastersRoute,
  getOauthRoute,
  getPlayerRoute,
  getStandardRoute,
  getSwissIdTrfRoute,
  getTeamUpdatesRoute,
  getTeamUpdatesTeamIdRoute,
  headApiStudyStudyIdPgnRoute,
  postApiAccountKidRoute,
  postApiBoardGameGameIdAbortRoute,
  postApiBoardGameGameIdBerserkRoute,
  postApiBoardGameGameIdChatRoute,
  postApiBoardGameGameIdClaimDrawRoute,
  postApiBoardGameGameIdClaimVictoryRoute,
  postApiBoardGameGameIdDrawAcceptRoute,
  postApiBoardGameGameIdMoveMoveRoute,
  postApiBoardGameGameIdResignRoute,
  postApiBoardGameGameIdTakebackAcceptRoute,
  postApiBoardSeekRoute,
  postApiBotAccountUpgradeRoute,
  postApiBotGameGameIdAbortRoute,
  postApiBotGameGameIdChatRoute,
  postApiBotGameGameIdClaimDrawRoute,
  postApiBotGameGameIdClaimVictoryRoute,
  postApiBotGameGameIdDrawAcceptRoute,
  postApiBotGameGameIdMoveMoveRoute,
  postApiBotGameGameIdResignRoute,
  postApiBotGameGameIdTakebackAcceptRoute,
  postApiBroadcastRoundBroadcastRoundIdPushRoute,
  postApiBroadcastRoundBroadcastRoundIdResetRoute,
  postApiBulkPairingIdStartClocksRoute,
  postApiBulkPairingRoute,
  postApiChallengeAiRoute,
  postApiChallengeChallengeIdAcceptRoute,
  postApiChallengeChallengeIdCancelRoute,
  postApiChallengeChallengeIdDeclineRoute,
  postApiChallengeGameIdStartClocksRoute,
  postApiChallengeOpenRoute,
  postApiChallengeUsernameRoute,
  postApiExternalEngineIdAnalyseRoute,
  postApiExternalEngineRoute,
  postApiExternalEngineWorkIdRoute,
  postApiExternalEngineWorkRoute,
  postApiGamesExportIdsRoute,
  postApiImportRoute,
  postApiPuzzleBatchAngleRoute,
  postApiRacerRoute,
  postApiRelBlockUsernameRoute,
  postApiRelFollowUsernameRoute,
  postApiRelUnblockUsernameRoute,
  postApiRelUnfollowUsernameRoute,
  postApiRoundGameIdAddTimeSecondsRoute,
  postApiStreamGamesByUsersRoute,
  postApiStreamGamesStreamIdAddRoute,
  postApiStreamGamesStreamIdRoute,
  postApiStudyRoute,
  postApiStudyStudyIdChapterIdMovesRoute,
  postApiStudyStudyIdChapterIdTagsRoute,
  postApiStudyStudyIdImportPgnRoute,
  postApiSwissIdEditRoute,
  postApiSwissIdJoinRoute,
  postApiSwissIdScheduleNextRoundRoute,
  postApiSwissIdTerminateRoute,
  postApiSwissIdWithdrawRoute,
  postApiSwissNewTeamIdRoute,
  postApiTeamTeamIdKickUserIdRoute,
  postApiTeamTeamIdRequestUserIdAcceptRoute,
  postApiTeamTeamIdRequestUserIdDeclineRoute,
  postApiTokenAdminChallengeRoute,
  postApiTokenRoute,
  postApiTokenTestRoute,
  postApiTournamentIdJoinRoute,
  postApiTournamentIdRoute,
  postApiTournamentIdTerminateRoute,
  postApiTournamentIdWithdrawRoute,
  postApiTournamentRoute,
  postApiTournamentTeamBattleIdRoute,
  postApiUsersRoute,
  postApiUserUsernameNoteRoute,
  postBookmarkGameIdRoute,
  postBroadcastBroadcastTournamentIdEditRoute,
  postBroadcastBroadcastTournamentIdNewRoute,
  postBroadcastNewRoute,
  postBroadcastRoundBroadcastRoundIdEditRoute,
  postInboxUsernameRoute,
  postTeamTeamIdJoinRoute,
  postTeamTeamIdPmAllRoute,
  postTeamTeamIdQuitRoute,
  putApiExternalEngineIdRoute,
} from './routes'
import {
  deleteApiBulkPairingIdRouteHandler,
  deleteApiExternalEngineIdRouteHandler,
  deleteApiStudyStudyIdChapterIdRouteHandler,
  deleteApiTokenRouteHandler,
  getAntichessRouteHandler,
  getApiAccountEmailRouteHandler,
  getApiAccountKidRouteHandler,
  getApiAccountPlayingRouteHandler,
  getApiAccountPreferencesRouteHandler,
  getApiAccountRouteHandler,
  getApiBoardGameGameIdChatRouteHandler,
  getApiBoardGameStreamGameIdRouteHandler,
  getApiBotGameGameIdChatRouteHandler,
  getApiBotGameStreamGameIdRouteHandler,
  getApiBotOnlineRouteHandler,
  getApiBroadcastBroadcastTournamentIdPgnRouteHandler,
  getApiBroadcastBroadcastTournamentIdRouteHandler,
  getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRouteHandler,
  getApiBroadcastByUsernameRouteHandler,
  getApiBroadcastMyRoundsRouteHandler,
  getApiBroadcastRoundBroadcastRoundIdPgnRouteHandler,
  getApiBroadcastRouteHandler,
  getApiBroadcastSearchRouteHandler,
  getApiBroadcastTopRouteHandler,
  getApiBulkPairingIdGamesRouteHandler,
  getApiBulkPairingIdRouteHandler,
  getApiBulkPairingRouteHandler,
  getApiChallengeChallengeIdShowRouteHandler,
  getApiChallengeRouteHandler,
  getApiCloudEvalRouteHandler,
  getApiCrosstableUser1User2RouteHandler,
  getApiExternalEngineIdRouteHandler,
  getApiExternalEngineRouteHandler,
  getApiFidePlayerPlayerIdRatingsRouteHandler,
  getApiFidePlayerPlayerIdRouteHandler,
  getApiFidePlayerRouteHandler,
  getApiGameGameIdChatRouteHandler,
  getApiGamesExportBookmarksRouteHandler,
  getApiGamesExportImportsRouteHandler,
  getApiGamesUserUsernameRouteHandler,
  getApiPlayerAutocompleteRouteHandler,
  getApiPlayerRouteHandler,
  getApiPlayerTopNbPerfTypeRouteHandler,
  getApiPuzzleActivityRouteHandler,
  getApiPuzzleBatchAngleRouteHandler,
  getApiPuzzleDailyRouteHandler,
  getApiPuzzleDashboardDaysRouteHandler,
  getApiPuzzleIdRouteHandler,
  getApiPuzzleNextRouteHandler,
  getApiPuzzleReplayDaysThemeRouteHandler,
  getApiRacerIdRouteHandler,
  getApiRelFollowingRouteHandler,
  getApiSimulRouteHandler,
  getApiStormDashboardUsernameRouteHandler,
  getApiStreamBroadcastGroupBroadcastGroupIdPgnRouteHandler,
  getApiStreamBroadcastRoundBroadcastRoundIdPgnRouteHandler,
  getApiStreamBroadcastTourBroadcastTourIdPgnRouteHandler,
  getApiStreamerLiveRouteHandler,
  getApiStreamEventRouteHandler,
  getApiStreamGameIdRouteHandler,
  getApiStudyByUsernameExportPgnRouteHandler,
  getApiStudyByUsernameRouteHandler,
  getApiStudyStudyIdChapterIdPgnRouteHandler,
  getApiStudyStudyIdPgnRouteHandler,
  getApiSwissIdGamesRouteHandler,
  getApiSwissIdResultsRouteHandler,
  getApiSwissIdRouteHandler,
  getApiTeamAllRouteHandler,
  getApiTeamOfUsernameRouteHandler,
  getApiTeamSearchRouteHandler,
  getApiTeamTeamIdArenaRouteHandler,
  getApiTeamTeamIdRequestsRouteHandler,
  getApiTeamTeamIdRouteHandler,
  getApiTeamTeamIdSwissRouteHandler,
  getApiTeamTeamIdUsersRouteHandler,
  getApiTournamentIdGamesRouteHandler,
  getApiTournamentIdResultsRouteHandler,
  getApiTournamentIdRouteHandler,
  getApiTournamentIdTeamsRouteHandler,
  getApiTournamentRouteHandler,
  getApiTvChannelFeedRouteHandler,
  getApiTvChannelRouteHandler,
  getApiTvChannelsRouteHandler,
  getApiTvFeedRouteHandler,
  getApiUsersStatusRouteHandler,
  getApiUserUsernameActivityRouteHandler,
  getApiUserUsernameCurrentGameRouteHandler,
  getApiUserUsernameNoteRouteHandler,
  getApiUserUsernamePerfPerfRouteHandler,
  getApiUserUsernameRatingHistoryRouteHandler,
  getApiUserUsernameRouteHandler,
  getApiUserUsernameTournamentCreatedRouteHandler,
  getApiUserUsernameTournamentPlayedRouteHandler,
  getApiVersionRouteHandler,
  getAtomicRouteHandler,
  getBroadcastBroadcastTournamentIdPlayersPlayerIdRouteHandler,
  getBroadcastBroadcastTournamentIdPlayersRouteHandler,
  getBroadcastBroadcastTournamentIdTeamsStandingsRouteHandler,
  getGameExportGameIdRouteHandler,
  getLichessRouteHandler,
  getMastersPgnGameIdRouteHandler,
  getMastersRouteHandler,
  getOauthRouteHandler,
  getPlayerRouteHandler,
  getStandardRouteHandler,
  getSwissIdTrfRouteHandler,
  getTeamUpdatesRouteHandler,
  getTeamUpdatesTeamIdRouteHandler,
  headApiStudyStudyIdPgnRouteHandler,
  postApiAccountKidRouteHandler,
  postApiBoardGameGameIdAbortRouteHandler,
  postApiBoardGameGameIdBerserkRouteHandler,
  postApiBoardGameGameIdChatRouteHandler,
  postApiBoardGameGameIdClaimDrawRouteHandler,
  postApiBoardGameGameIdClaimVictoryRouteHandler,
  postApiBoardGameGameIdDrawAcceptRouteHandler,
  postApiBoardGameGameIdMoveMoveRouteHandler,
  postApiBoardGameGameIdResignRouteHandler,
  postApiBoardGameGameIdTakebackAcceptRouteHandler,
  postApiBoardSeekRouteHandler,
  postApiBotAccountUpgradeRouteHandler,
  postApiBotGameGameIdAbortRouteHandler,
  postApiBotGameGameIdChatRouteHandler,
  postApiBotGameGameIdClaimDrawRouteHandler,
  postApiBotGameGameIdClaimVictoryRouteHandler,
  postApiBotGameGameIdDrawAcceptRouteHandler,
  postApiBotGameGameIdMoveMoveRouteHandler,
  postApiBotGameGameIdResignRouteHandler,
  postApiBotGameGameIdTakebackAcceptRouteHandler,
  postApiBroadcastRoundBroadcastRoundIdPushRouteHandler,
  postApiBroadcastRoundBroadcastRoundIdResetRouteHandler,
  postApiBulkPairingIdStartClocksRouteHandler,
  postApiBulkPairingRouteHandler,
  postApiChallengeAiRouteHandler,
  postApiChallengeChallengeIdAcceptRouteHandler,
  postApiChallengeChallengeIdCancelRouteHandler,
  postApiChallengeChallengeIdDeclineRouteHandler,
  postApiChallengeGameIdStartClocksRouteHandler,
  postApiChallengeOpenRouteHandler,
  postApiChallengeUsernameRouteHandler,
  postApiExternalEngineIdAnalyseRouteHandler,
  postApiExternalEngineRouteHandler,
  postApiExternalEngineWorkIdRouteHandler,
  postApiExternalEngineWorkRouteHandler,
  postApiGamesExportIdsRouteHandler,
  postApiImportRouteHandler,
  postApiPuzzleBatchAngleRouteHandler,
  postApiRacerRouteHandler,
  postApiRelBlockUsernameRouteHandler,
  postApiRelFollowUsernameRouteHandler,
  postApiRelUnblockUsernameRouteHandler,
  postApiRelUnfollowUsernameRouteHandler,
  postApiRoundGameIdAddTimeSecondsRouteHandler,
  postApiStreamGamesByUsersRouteHandler,
  postApiStreamGamesStreamIdAddRouteHandler,
  postApiStreamGamesStreamIdRouteHandler,
  postApiStudyRouteHandler,
  postApiStudyStudyIdChapterIdMovesRouteHandler,
  postApiStudyStudyIdChapterIdTagsRouteHandler,
  postApiStudyStudyIdImportPgnRouteHandler,
  postApiSwissIdEditRouteHandler,
  postApiSwissIdJoinRouteHandler,
  postApiSwissIdScheduleNextRoundRouteHandler,
  postApiSwissIdTerminateRouteHandler,
  postApiSwissIdWithdrawRouteHandler,
  postApiSwissNewTeamIdRouteHandler,
  postApiTeamTeamIdKickUserIdRouteHandler,
  postApiTeamTeamIdRequestUserIdAcceptRouteHandler,
  postApiTeamTeamIdRequestUserIdDeclineRouteHandler,
  postApiTokenAdminChallengeRouteHandler,
  postApiTokenRouteHandler,
  postApiTokenTestRouteHandler,
  postApiTournamentIdJoinRouteHandler,
  postApiTournamentIdRouteHandler,
  postApiTournamentIdTerminateRouteHandler,
  postApiTournamentIdWithdrawRouteHandler,
  postApiTournamentRouteHandler,
  postApiTournamentTeamBattleIdRouteHandler,
  postApiUsersRouteHandler,
  postApiUserUsernameNoteRouteHandler,
  postBookmarkGameIdRouteHandler,
  postBroadcastBroadcastTournamentIdEditRouteHandler,
  postBroadcastBroadcastTournamentIdNewRouteHandler,
  postBroadcastNewRouteHandler,
  postBroadcastRoundBroadcastRoundIdEditRouteHandler,
  postInboxUsernameRouteHandler,
  postTeamTeamIdJoinRouteHandler,
  postTeamTeamIdPmAllRouteHandler,
  postTeamTeamIdQuitRouteHandler,
  putApiExternalEngineIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiUsersStatusRoute, getApiUsersStatusRouteHandler)
  .openapi(getApiPlayerRoute, getApiPlayerRouteHandler)
  .openapi(getApiPlayerTopNbPerfTypeRoute, getApiPlayerTopNbPerfTypeRouteHandler)
  .openapi(getApiUserUsernameRoute, getApiUserUsernameRouteHandler)
  .openapi(getApiUserUsernameRatingHistoryRoute, getApiUserUsernameRatingHistoryRouteHandler)
  .openapi(getApiUserUsernamePerfPerfRoute, getApiUserUsernamePerfPerfRouteHandler)
  .openapi(getApiUserUsernameActivityRoute, getApiUserUsernameActivityRouteHandler)
  .openapi(getApiPuzzleDailyRoute, getApiPuzzleDailyRouteHandler)
  .openapi(getApiPuzzleIdRoute, getApiPuzzleIdRouteHandler)
  .openapi(getApiPuzzleNextRoute, getApiPuzzleNextRouteHandler)
  .openapi(getApiPuzzleBatchAngleRoute, getApiPuzzleBatchAngleRouteHandler)
  .openapi(postApiPuzzleBatchAngleRoute, postApiPuzzleBatchAngleRouteHandler)
  .openapi(getApiPuzzleActivityRoute, getApiPuzzleActivityRouteHandler)
  .openapi(getApiPuzzleReplayDaysThemeRoute, getApiPuzzleReplayDaysThemeRouteHandler)
  .openapi(getApiPuzzleDashboardDaysRoute, getApiPuzzleDashboardDaysRouteHandler)
  .openapi(getApiStormDashboardUsernameRoute, getApiStormDashboardUsernameRouteHandler)
  .openapi(postApiRacerRoute, postApiRacerRouteHandler)
  .openapi(getApiRacerIdRoute, getApiRacerIdRouteHandler)
  .openapi(postApiUsersRoute, postApiUsersRouteHandler)
  .openapi(getApiAccountRoute, getApiAccountRouteHandler)
  .openapi(getApiAccountEmailRoute, getApiAccountEmailRouteHandler)
  .openapi(getApiAccountPreferencesRoute, getApiAccountPreferencesRouteHandler)
  .openapi(getApiAccountKidRoute, getApiAccountKidRouteHandler)
  .openapi(postApiAccountKidRoute, postApiAccountKidRouteHandler)
  .openapi(getGameExportGameIdRoute, getGameExportGameIdRouteHandler)
  .openapi(getApiGameGameIdChatRoute, getApiGameGameIdChatRouteHandler)
  .openapi(getApiUserUsernameCurrentGameRoute, getApiUserUsernameCurrentGameRouteHandler)
  .openapi(getApiGamesUserUsernameRoute, getApiGamesUserUsernameRouteHandler)
  .openapi(postApiGamesExportIdsRoute, postApiGamesExportIdsRouteHandler)
  .openapi(postApiStreamGamesByUsersRoute, postApiStreamGamesByUsersRouteHandler)
  .openapi(postApiStreamGamesStreamIdRoute, postApiStreamGamesStreamIdRouteHandler)
  .openapi(postApiStreamGamesStreamIdAddRoute, postApiStreamGamesStreamIdAddRouteHandler)
  .openapi(getApiAccountPlayingRoute, getApiAccountPlayingRouteHandler)
  .openapi(getApiStreamGameIdRoute, getApiStreamGameIdRouteHandler)
  .openapi(postApiImportRoute, postApiImportRouteHandler)
  .openapi(getApiGamesExportImportsRoute, getApiGamesExportImportsRouteHandler)
  .openapi(getApiGamesExportBookmarksRoute, getApiGamesExportBookmarksRouteHandler)
  .openapi(postBookmarkGameIdRoute, postBookmarkGameIdRouteHandler)
  .openapi(getApiVersionRoute, getApiVersionRouteHandler)
  .openapi(getApiTvChannelsRoute, getApiTvChannelsRouteHandler)
  .openapi(getApiTvFeedRoute, getApiTvFeedRouteHandler)
  .openapi(getApiTvChannelFeedRoute, getApiTvChannelFeedRouteHandler)
  .openapi(getApiTvChannelRoute, getApiTvChannelRouteHandler)
  .openapi(getApiTournamentRoute, getApiTournamentRouteHandler)
  .openapi(postApiTournamentRoute, postApiTournamentRouteHandler)
  .openapi(getApiTournamentIdRoute, getApiTournamentIdRouteHandler)
  .openapi(postApiTournamentIdRoute, postApiTournamentIdRouteHandler)
  .openapi(postApiTournamentIdJoinRoute, postApiTournamentIdJoinRouteHandler)
  .openapi(postApiTournamentIdWithdrawRoute, postApiTournamentIdWithdrawRouteHandler)
  .openapi(postApiTournamentIdTerminateRoute, postApiTournamentIdTerminateRouteHandler)
  .openapi(postApiTournamentTeamBattleIdRoute, postApiTournamentTeamBattleIdRouteHandler)
  .openapi(getApiTournamentIdGamesRoute, getApiTournamentIdGamesRouteHandler)
  .openapi(getApiTournamentIdResultsRoute, getApiTournamentIdResultsRouteHandler)
  .openapi(getApiTournamentIdTeamsRoute, getApiTournamentIdTeamsRouteHandler)
  .openapi(
    getApiUserUsernameTournamentCreatedRoute,
    getApiUserUsernameTournamentCreatedRouteHandler,
  )
  .openapi(getApiUserUsernameTournamentPlayedRoute, getApiUserUsernameTournamentPlayedRouteHandler)
  .openapi(postApiSwissNewTeamIdRoute, postApiSwissNewTeamIdRouteHandler)
  .openapi(getApiSwissIdRoute, getApiSwissIdRouteHandler)
  .openapi(postApiSwissIdEditRoute, postApiSwissIdEditRouteHandler)
  .openapi(postApiSwissIdScheduleNextRoundRoute, postApiSwissIdScheduleNextRoundRouteHandler)
  .openapi(postApiSwissIdJoinRoute, postApiSwissIdJoinRouteHandler)
  .openapi(postApiSwissIdWithdrawRoute, postApiSwissIdWithdrawRouteHandler)
  .openapi(postApiSwissIdTerminateRoute, postApiSwissIdTerminateRouteHandler)
  .openapi(getSwissIdTrfRoute, getSwissIdTrfRouteHandler)
  .openapi(getApiSwissIdGamesRoute, getApiSwissIdGamesRouteHandler)
  .openapi(getApiSwissIdResultsRoute, getApiSwissIdResultsRouteHandler)
  .openapi(getApiTeamTeamIdSwissRoute, getApiTeamTeamIdSwissRouteHandler)
  .openapi(getApiStudyStudyIdChapterIdPgnRoute, getApiStudyStudyIdChapterIdPgnRouteHandler)
  .openapi(getApiStudyStudyIdPgnRoute, getApiStudyStudyIdPgnRouteHandler)
  .openapi(headApiStudyStudyIdPgnRoute, headApiStudyStudyIdPgnRouteHandler)
  .openapi(postApiStudyRoute, postApiStudyRouteHandler)
  .openapi(postApiStudyStudyIdImportPgnRoute, postApiStudyStudyIdImportPgnRouteHandler)
  .openapi(postApiStudyStudyIdChapterIdTagsRoute, postApiStudyStudyIdChapterIdTagsRouteHandler)
  .openapi(postApiStudyStudyIdChapterIdMovesRoute, postApiStudyStudyIdChapterIdMovesRouteHandler)
  .openapi(getApiStudyByUsernameExportPgnRoute, getApiStudyByUsernameExportPgnRouteHandler)
  .openapi(getApiStudyByUsernameRoute, getApiStudyByUsernameRouteHandler)
  .openapi(deleteApiStudyStudyIdChapterIdRoute, deleteApiStudyStudyIdChapterIdRouteHandler)
  .openapi(getApiBroadcastRoute, getApiBroadcastRouteHandler)
  .openapi(getApiBroadcastTopRoute, getApiBroadcastTopRouteHandler)
  .openapi(getApiBroadcastByUsernameRoute, getApiBroadcastByUsernameRouteHandler)
  .openapi(getApiBroadcastSearchRoute, getApiBroadcastSearchRouteHandler)
  .openapi(postBroadcastNewRoute, postBroadcastNewRouteHandler)
  .openapi(
    getApiBroadcastBroadcastTournamentIdRoute,
    getApiBroadcastBroadcastTournamentIdRouteHandler,
  )
  .openapi(
    getBroadcastBroadcastTournamentIdPlayersRoute,
    getBroadcastBroadcastTournamentIdPlayersRouteHandler,
  )
  .openapi(
    getBroadcastBroadcastTournamentIdPlayersPlayerIdRoute,
    getBroadcastBroadcastTournamentIdPlayersPlayerIdRouteHandler,
  )
  .openapi(
    getBroadcastBroadcastTournamentIdTeamsStandingsRoute,
    getBroadcastBroadcastTournamentIdTeamsStandingsRouteHandler,
  )
  .openapi(
    postBroadcastBroadcastTournamentIdEditRoute,
    postBroadcastBroadcastTournamentIdEditRouteHandler,
  )
  .openapi(
    postBroadcastBroadcastTournamentIdNewRoute,
    postBroadcastBroadcastTournamentIdNewRouteHandler,
  )
  .openapi(
    getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRoute,
    getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRouteHandler,
  )
  .openapi(
    postBroadcastRoundBroadcastRoundIdEditRoute,
    postBroadcastRoundBroadcastRoundIdEditRouteHandler,
  )
  .openapi(
    postApiBroadcastRoundBroadcastRoundIdResetRoute,
    postApiBroadcastRoundBroadcastRoundIdResetRouteHandler,
  )
  .openapi(
    postApiBroadcastRoundBroadcastRoundIdPushRoute,
    postApiBroadcastRoundBroadcastRoundIdPushRouteHandler,
  )
  .openapi(
    getApiStreamBroadcastRoundBroadcastRoundIdPgnRoute,
    getApiStreamBroadcastRoundBroadcastRoundIdPgnRouteHandler,
  )
  .openapi(
    getApiStreamBroadcastTourBroadcastTourIdPgnRoute,
    getApiStreamBroadcastTourBroadcastTourIdPgnRouteHandler,
  )
  .openapi(
    getApiStreamBroadcastGroupBroadcastGroupIdPgnRoute,
    getApiStreamBroadcastGroupBroadcastGroupIdPgnRouteHandler,
  )
  .openapi(
    getApiBroadcastRoundBroadcastRoundIdPgnRoute,
    getApiBroadcastRoundBroadcastRoundIdPgnRouteHandler,
  )
  .openapi(
    getApiBroadcastBroadcastTournamentIdPgnRoute,
    getApiBroadcastBroadcastTournamentIdPgnRouteHandler,
  )
  .openapi(getApiBroadcastMyRoundsRoute, getApiBroadcastMyRoundsRouteHandler)
  .openapi(getApiFidePlayerPlayerIdRoute, getApiFidePlayerPlayerIdRouteHandler)
  .openapi(getApiFidePlayerPlayerIdRatingsRoute, getApiFidePlayerPlayerIdRatingsRouteHandler)
  .openapi(getApiFidePlayerRoute, getApiFidePlayerRouteHandler)
  .openapi(getApiSimulRoute, getApiSimulRouteHandler)
  .openapi(getApiTeamTeamIdRoute, getApiTeamTeamIdRouteHandler)
  .openapi(getApiTeamAllRoute, getApiTeamAllRouteHandler)
  .openapi(getApiTeamOfUsernameRoute, getApiTeamOfUsernameRouteHandler)
  .openapi(getApiTeamSearchRoute, getApiTeamSearchRouteHandler)
  .openapi(getApiTeamTeamIdUsersRoute, getApiTeamTeamIdUsersRouteHandler)
  .openapi(getApiTeamTeamIdArenaRoute, getApiTeamTeamIdArenaRouteHandler)
  .openapi(postTeamTeamIdJoinRoute, postTeamTeamIdJoinRouteHandler)
  .openapi(postTeamTeamIdQuitRoute, postTeamTeamIdQuitRouteHandler)
  .openapi(getApiTeamTeamIdRequestsRoute, getApiTeamTeamIdRequestsRouteHandler)
  .openapi(
    postApiTeamTeamIdRequestUserIdAcceptRoute,
    postApiTeamTeamIdRequestUserIdAcceptRouteHandler,
  )
  .openapi(
    postApiTeamTeamIdRequestUserIdDeclineRoute,
    postApiTeamTeamIdRequestUserIdDeclineRouteHandler,
  )
  .openapi(postApiTeamTeamIdKickUserIdRoute, postApiTeamTeamIdKickUserIdRouteHandler)
  .openapi(getTeamUpdatesRoute, getTeamUpdatesRouteHandler)
  .openapi(getTeamUpdatesTeamIdRoute, getTeamUpdatesTeamIdRouteHandler)
  .openapi(postTeamTeamIdPmAllRoute, postTeamTeamIdPmAllRouteHandler)
  .openapi(getApiStreamerLiveRoute, getApiStreamerLiveRouteHandler)
  .openapi(getApiCrosstableUser1User2Route, getApiCrosstableUser1User2RouteHandler)
  .openapi(getApiPlayerAutocompleteRoute, getApiPlayerAutocompleteRouteHandler)
  .openapi(postApiUserUsernameNoteRoute, postApiUserUsernameNoteRouteHandler)
  .openapi(getApiUserUsernameNoteRoute, getApiUserUsernameNoteRouteHandler)
  .openapi(getApiRelFollowingRoute, getApiRelFollowingRouteHandler)
  .openapi(postApiRelFollowUsernameRoute, postApiRelFollowUsernameRouteHandler)
  .openapi(postApiRelUnfollowUsernameRoute, postApiRelUnfollowUsernameRouteHandler)
  .openapi(postApiRelBlockUsernameRoute, postApiRelBlockUsernameRouteHandler)
  .openapi(postApiRelUnblockUsernameRoute, postApiRelUnblockUsernameRouteHandler)
  .openapi(getApiStreamEventRoute, getApiStreamEventRouteHandler)
  .openapi(postApiBoardSeekRoute, postApiBoardSeekRouteHandler)
  .openapi(getApiBoardGameStreamGameIdRoute, getApiBoardGameStreamGameIdRouteHandler)
  .openapi(postApiBoardGameGameIdMoveMoveRoute, postApiBoardGameGameIdMoveMoveRouteHandler)
  .openapi(postApiBoardGameGameIdChatRoute, postApiBoardGameGameIdChatRouteHandler)
  .openapi(getApiBoardGameGameIdChatRoute, getApiBoardGameGameIdChatRouteHandler)
  .openapi(postApiBoardGameGameIdAbortRoute, postApiBoardGameGameIdAbortRouteHandler)
  .openapi(postApiBoardGameGameIdResignRoute, postApiBoardGameGameIdResignRouteHandler)
  .openapi(postApiBoardGameGameIdDrawAcceptRoute, postApiBoardGameGameIdDrawAcceptRouteHandler)
  .openapi(
    postApiBoardGameGameIdTakebackAcceptRoute,
    postApiBoardGameGameIdTakebackAcceptRouteHandler,
  )
  .openapi(postApiBoardGameGameIdClaimVictoryRoute, postApiBoardGameGameIdClaimVictoryRouteHandler)
  .openapi(postApiBoardGameGameIdClaimDrawRoute, postApiBoardGameGameIdClaimDrawRouteHandler)
  .openapi(postApiBoardGameGameIdBerserkRoute, postApiBoardGameGameIdBerserkRouteHandler)
  .openapi(getApiBotOnlineRoute, getApiBotOnlineRouteHandler)
  .openapi(postApiBotAccountUpgradeRoute, postApiBotAccountUpgradeRouteHandler)
  .openapi(getApiBotGameStreamGameIdRoute, getApiBotGameStreamGameIdRouteHandler)
  .openapi(postApiBotGameGameIdMoveMoveRoute, postApiBotGameGameIdMoveMoveRouteHandler)
  .openapi(postApiBotGameGameIdChatRoute, postApiBotGameGameIdChatRouteHandler)
  .openapi(getApiBotGameGameIdChatRoute, getApiBotGameGameIdChatRouteHandler)
  .openapi(postApiBotGameGameIdAbortRoute, postApiBotGameGameIdAbortRouteHandler)
  .openapi(postApiBotGameGameIdResignRoute, postApiBotGameGameIdResignRouteHandler)
  .openapi(postApiBotGameGameIdDrawAcceptRoute, postApiBotGameGameIdDrawAcceptRouteHandler)
  .openapi(postApiBotGameGameIdTakebackAcceptRoute, postApiBotGameGameIdTakebackAcceptRouteHandler)
  .openapi(postApiBotGameGameIdClaimVictoryRoute, postApiBotGameGameIdClaimVictoryRouteHandler)
  .openapi(postApiBotGameGameIdClaimDrawRoute, postApiBotGameGameIdClaimDrawRouteHandler)
  .openapi(getApiChallengeRoute, getApiChallengeRouteHandler)
  .openapi(postApiChallengeUsernameRoute, postApiChallengeUsernameRouteHandler)
  .openapi(getApiChallengeChallengeIdShowRoute, getApiChallengeChallengeIdShowRouteHandler)
  .openapi(postApiChallengeChallengeIdAcceptRoute, postApiChallengeChallengeIdAcceptRouteHandler)
  .openapi(postApiChallengeChallengeIdDeclineRoute, postApiChallengeChallengeIdDeclineRouteHandler)
  .openapi(postApiChallengeChallengeIdCancelRoute, postApiChallengeChallengeIdCancelRouteHandler)
  .openapi(postApiChallengeAiRoute, postApiChallengeAiRouteHandler)
  .openapi(postApiChallengeOpenRoute, postApiChallengeOpenRouteHandler)
  .openapi(postApiChallengeGameIdStartClocksRoute, postApiChallengeGameIdStartClocksRouteHandler)
  .openapi(getApiBulkPairingRoute, getApiBulkPairingRouteHandler)
  .openapi(postApiBulkPairingRoute, postApiBulkPairingRouteHandler)
  .openapi(postApiBulkPairingIdStartClocksRoute, postApiBulkPairingIdStartClocksRouteHandler)
  .openapi(getApiBulkPairingIdRoute, getApiBulkPairingIdRouteHandler)
  .openapi(deleteApiBulkPairingIdRoute, deleteApiBulkPairingIdRouteHandler)
  .openapi(getApiBulkPairingIdGamesRoute, getApiBulkPairingIdGamesRouteHandler)
  .openapi(postApiRoundGameIdAddTimeSecondsRoute, postApiRoundGameIdAddTimeSecondsRouteHandler)
  .openapi(postApiTokenAdminChallengeRoute, postApiTokenAdminChallengeRouteHandler)
  .openapi(postInboxUsernameRoute, postInboxUsernameRouteHandler)
  .openapi(getApiCloudEvalRoute, getApiCloudEvalRouteHandler)
  .openapi(getApiExternalEngineRoute, getApiExternalEngineRouteHandler)
  .openapi(postApiExternalEngineRoute, postApiExternalEngineRouteHandler)
  .openapi(getApiExternalEngineIdRoute, getApiExternalEngineIdRouteHandler)
  .openapi(putApiExternalEngineIdRoute, putApiExternalEngineIdRouteHandler)
  .openapi(deleteApiExternalEngineIdRoute, deleteApiExternalEngineIdRouteHandler)
  .openapi(postApiExternalEngineIdAnalyseRoute, postApiExternalEngineIdAnalyseRouteHandler)
  .openapi(postApiExternalEngineWorkRoute, postApiExternalEngineWorkRouteHandler)
  .openapi(postApiExternalEngineWorkIdRoute, postApiExternalEngineWorkIdRouteHandler)
  .openapi(getOauthRoute, getOauthRouteHandler)
  .openapi(postApiTokenRoute, postApiTokenRouteHandler)
  .openapi(deleteApiTokenRoute, deleteApiTokenRouteHandler)
  .openapi(postApiTokenTestRoute, postApiTokenTestRouteHandler)
  .openapi(getMastersRoute, getMastersRouteHandler)
  .openapi(getLichessRoute, getLichessRouteHandler)
  .openapi(getPlayerRoute, getPlayerRouteHandler)
  .openapi(getMastersPgnGameIdRoute, getMastersPgnGameIdRouteHandler)
  .openapi(getStandardRoute, getStandardRouteHandler)
  .openapi(getAtomicRoute, getAtomicRouteHandler)
  .openapi(getAntichessRoute, getAntichessRouteHandler)

export default app
