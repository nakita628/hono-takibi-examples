import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiBulkPairingIdRoute,
  deleteApiExternalEngineIdRoute,
  deleteApiStudyStudyIdChapterIdRoute,
  deleteApiTokenRoute,
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
  putApiExternalEngineIdRoute,
} from '../routes'

export const getApiUsersStatusRouteHandler: RouteHandler<typeof getApiUsersStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPlayerRouteHandler: RouteHandler<typeof getApiPlayerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPlayerTopNbPerfTypeRouteHandler: RouteHandler<
  typeof getApiPlayerTopNbPerfTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameRouteHandler: RouteHandler<typeof getApiUserUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameRatingHistoryRouteHandler: RouteHandler<
  typeof getApiUserUsernameRatingHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernamePerfPerfRouteHandler: RouteHandler<
  typeof getApiUserUsernamePerfPerfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameActivityRouteHandler: RouteHandler<
  typeof getApiUserUsernameActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleDailyRouteHandler: RouteHandler<typeof getApiPuzzleDailyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleIdRouteHandler: RouteHandler<typeof getApiPuzzleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleNextRouteHandler: RouteHandler<typeof getApiPuzzleNextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleBatchAngleRouteHandler: RouteHandler<
  typeof getApiPuzzleBatchAngleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPuzzleBatchAngleRouteHandler: RouteHandler<
  typeof postApiPuzzleBatchAngleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleActivityRouteHandler: RouteHandler<
  typeof getApiPuzzleActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleReplayDaysThemeRouteHandler: RouteHandler<
  typeof getApiPuzzleReplayDaysThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPuzzleDashboardDaysRouteHandler: RouteHandler<
  typeof getApiPuzzleDashboardDaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStormDashboardUsernameRouteHandler: RouteHandler<
  typeof getApiStormDashboardUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRacerRouteHandler: RouteHandler<typeof postApiRacerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRacerIdRouteHandler: RouteHandler<typeof getApiRacerIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUsersRouteHandler: RouteHandler<typeof postApiUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountRouteHandler: RouteHandler<typeof getApiAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountEmailRouteHandler: RouteHandler<typeof getApiAccountEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAccountPreferencesRouteHandler: RouteHandler<
  typeof getApiAccountPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountKidRouteHandler: RouteHandler<typeof getApiAccountKidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAccountKidRouteHandler: RouteHandler<typeof postApiAccountKidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiGameGameIdChatRouteHandler: RouteHandler<
  typeof getApiGameGameIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameCurrentGameRouteHandler: RouteHandler<
  typeof getApiUserUsernameCurrentGameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGamesUserUsernameRouteHandler: RouteHandler<
  typeof getApiGamesUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiGamesExportIdsRouteHandler: RouteHandler<
  typeof postApiGamesExportIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamGamesByUsersRouteHandler: RouteHandler<
  typeof postApiStreamGamesByUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamGamesStreamIdRouteHandler: RouteHandler<
  typeof postApiStreamGamesStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamGamesStreamIdAddRouteHandler: RouteHandler<
  typeof postApiStreamGamesStreamIdAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountPlayingRouteHandler: RouteHandler<
  typeof getApiAccountPlayingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamGameIdRouteHandler: RouteHandler<typeof getApiStreamGameIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiImportRouteHandler: RouteHandler<typeof postApiImportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGamesExportImportsRouteHandler: RouteHandler<
  typeof getApiGamesExportImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGamesExportBookmarksRouteHandler: RouteHandler<
  typeof getApiGamesExportBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionRouteHandler: RouteHandler<typeof getApiVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTvChannelsRouteHandler: RouteHandler<typeof getApiTvChannelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTvFeedRouteHandler: RouteHandler<typeof getApiTvFeedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTvChannelFeedRouteHandler: RouteHandler<
  typeof getApiTvChannelFeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTvChannelRouteHandler: RouteHandler<typeof getApiTvChannelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTournamentRouteHandler: RouteHandler<typeof getApiTournamentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiTournamentRouteHandler: RouteHandler<typeof postApiTournamentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTournamentIdRouteHandler: RouteHandler<typeof getApiTournamentIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiTournamentIdRouteHandler: RouteHandler<
  typeof postApiTournamentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTournamentIdJoinRouteHandler: RouteHandler<
  typeof postApiTournamentIdJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTournamentIdWithdrawRouteHandler: RouteHandler<
  typeof postApiTournamentIdWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTournamentIdTerminateRouteHandler: RouteHandler<
  typeof postApiTournamentIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTournamentTeamBattleIdRouteHandler: RouteHandler<
  typeof postApiTournamentTeamBattleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTournamentIdGamesRouteHandler: RouteHandler<
  typeof getApiTournamentIdGamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTournamentIdResultsRouteHandler: RouteHandler<
  typeof getApiTournamentIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTournamentIdTeamsRouteHandler: RouteHandler<
  typeof getApiTournamentIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameTournamentCreatedRouteHandler: RouteHandler<
  typeof getApiUserUsernameTournamentCreatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameTournamentPlayedRouteHandler: RouteHandler<
  typeof getApiUserUsernameTournamentPlayedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSwissNewTeamIdRouteHandler: RouteHandler<
  typeof postApiSwissNewTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSwissIdRouteHandler: RouteHandler<typeof getApiSwissIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSwissIdEditRouteHandler: RouteHandler<typeof postApiSwissIdEditRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiSwissIdScheduleNextRoundRouteHandler: RouteHandler<
  typeof postApiSwissIdScheduleNextRoundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSwissIdJoinRouteHandler: RouteHandler<typeof postApiSwissIdJoinRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiSwissIdWithdrawRouteHandler: RouteHandler<
  typeof postApiSwissIdWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSwissIdTerminateRouteHandler: RouteHandler<
  typeof postApiSwissIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSwissIdGamesRouteHandler: RouteHandler<typeof getApiSwissIdGamesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSwissIdResultsRouteHandler: RouteHandler<
  typeof getApiSwissIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamTeamIdSwissRouteHandler: RouteHandler<
  typeof getApiTeamTeamIdSwissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStudyStudyIdChapterIdPgnRouteHandler: RouteHandler<
  typeof getApiStudyStudyIdChapterIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStudyStudyIdPgnRouteHandler: RouteHandler<
  typeof getApiStudyStudyIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiStudyStudyIdPgnRouteHandler: RouteHandler<
  typeof headApiStudyStudyIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStudyRouteHandler: RouteHandler<typeof postApiStudyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStudyStudyIdImportPgnRouteHandler: RouteHandler<
  typeof postApiStudyStudyIdImportPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStudyStudyIdChapterIdTagsRouteHandler: RouteHandler<
  typeof postApiStudyStudyIdChapterIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStudyStudyIdChapterIdMovesRouteHandler: RouteHandler<
  typeof postApiStudyStudyIdChapterIdMovesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStudyByUsernameExportPgnRouteHandler: RouteHandler<
  typeof getApiStudyByUsernameExportPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStudyByUsernameRouteHandler: RouteHandler<
  typeof getApiStudyByUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiStudyStudyIdChapterIdRouteHandler: RouteHandler<
  typeof deleteApiStudyStudyIdChapterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastRouteHandler: RouteHandler<typeof getApiBroadcastRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastTopRouteHandler: RouteHandler<typeof getApiBroadcastTopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastByUsernameRouteHandler: RouteHandler<
  typeof getApiBroadcastByUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastSearchRouteHandler: RouteHandler<
  typeof getApiBroadcastSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastBroadcastTournamentIdRouteHandler: RouteHandler<
  typeof getApiBroadcastBroadcastTournamentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRouteHandler: RouteHandler<
  typeof getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBroadcastRoundBroadcastRoundIdResetRouteHandler: RouteHandler<
  typeof postApiBroadcastRoundBroadcastRoundIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBroadcastRoundBroadcastRoundIdPushRouteHandler: RouteHandler<
  typeof postApiBroadcastRoundBroadcastRoundIdPushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamBroadcastRoundBroadcastRoundIdPgnRouteHandler: RouteHandler<
  typeof getApiStreamBroadcastRoundBroadcastRoundIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamBroadcastTourBroadcastTourIdPgnRouteHandler: RouteHandler<
  typeof getApiStreamBroadcastTourBroadcastTourIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamBroadcastGroupBroadcastGroupIdPgnRouteHandler: RouteHandler<
  typeof getApiStreamBroadcastGroupBroadcastGroupIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastRoundBroadcastRoundIdPgnRouteHandler: RouteHandler<
  typeof getApiBroadcastRoundBroadcastRoundIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastBroadcastTournamentIdPgnRouteHandler: RouteHandler<
  typeof getApiBroadcastBroadcastTournamentIdPgnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBroadcastMyRoundsRouteHandler: RouteHandler<
  typeof getApiBroadcastMyRoundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFidePlayerPlayerIdRouteHandler: RouteHandler<
  typeof getApiFidePlayerPlayerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFidePlayerPlayerIdRatingsRouteHandler: RouteHandler<
  typeof getApiFidePlayerPlayerIdRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFidePlayerRouteHandler: RouteHandler<typeof getApiFidePlayerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSimulRouteHandler: RouteHandler<typeof getApiSimulRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamTeamIdRouteHandler: RouteHandler<typeof getApiTeamTeamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTeamAllRouteHandler: RouteHandler<typeof getApiTeamAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamOfUsernameRouteHandler: RouteHandler<
  typeof getApiTeamOfUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamSearchRouteHandler: RouteHandler<typeof getApiTeamSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTeamTeamIdUsersRouteHandler: RouteHandler<
  typeof getApiTeamTeamIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamTeamIdArenaRouteHandler: RouteHandler<
  typeof getApiTeamTeamIdArenaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamTeamIdRequestsRouteHandler: RouteHandler<
  typeof getApiTeamTeamIdRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTeamTeamIdRequestUserIdAcceptRouteHandler: RouteHandler<
  typeof postApiTeamTeamIdRequestUserIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTeamTeamIdRequestUserIdDeclineRouteHandler: RouteHandler<
  typeof postApiTeamTeamIdRequestUserIdDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTeamTeamIdKickUserIdRouteHandler: RouteHandler<
  typeof postApiTeamTeamIdKickUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamerLiveRouteHandler: RouteHandler<typeof getApiStreamerLiveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCrosstableUser1User2RouteHandler: RouteHandler<
  typeof getApiCrosstableUser1User2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPlayerAutocompleteRouteHandler: RouteHandler<
  typeof getApiPlayerAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserUsernameNoteRouteHandler: RouteHandler<
  typeof postApiUserUsernameNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserUsernameNoteRouteHandler: RouteHandler<
  typeof getApiUserUsernameNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRelFollowingRouteHandler: RouteHandler<typeof getApiRelFollowingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiRelFollowUsernameRouteHandler: RouteHandler<
  typeof postApiRelFollowUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRelUnfollowUsernameRouteHandler: RouteHandler<
  typeof postApiRelUnfollowUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRelBlockUsernameRouteHandler: RouteHandler<
  typeof postApiRelBlockUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRelUnblockUsernameRouteHandler: RouteHandler<
  typeof postApiRelUnblockUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamEventRouteHandler: RouteHandler<typeof getApiStreamEventRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiBoardSeekRouteHandler: RouteHandler<typeof postApiBoardSeekRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiBoardGameStreamGameIdRouteHandler: RouteHandler<
  typeof getApiBoardGameStreamGameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdMoveMoveRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdMoveMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdChatRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBoardGameGameIdChatRouteHandler: RouteHandler<
  typeof getApiBoardGameGameIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdAbortRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdAbortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdResignRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdResignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdDrawAcceptRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdDrawAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdTakebackAcceptRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdTakebackAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdClaimVictoryRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdClaimVictoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdClaimDrawRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdClaimDrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBoardGameGameIdBerserkRouteHandler: RouteHandler<
  typeof postApiBoardGameGameIdBerserkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBotOnlineRouteHandler: RouteHandler<typeof getApiBotOnlineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotAccountUpgradeRouteHandler: RouteHandler<
  typeof postApiBotAccountUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBotGameStreamGameIdRouteHandler: RouteHandler<
  typeof getApiBotGameStreamGameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdMoveMoveRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdMoveMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdChatRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBotGameGameIdChatRouteHandler: RouteHandler<
  typeof getApiBotGameGameIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdAbortRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdAbortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdResignRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdResignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdDrawAcceptRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdDrawAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdTakebackAcceptRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdTakebackAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdClaimVictoryRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdClaimVictoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBotGameGameIdClaimDrawRouteHandler: RouteHandler<
  typeof postApiBotGameGameIdClaimDrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiChallengeRouteHandler: RouteHandler<typeof getApiChallengeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChallengeUsernameRouteHandler: RouteHandler<
  typeof postApiChallengeUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiChallengeChallengeIdShowRouteHandler: RouteHandler<
  typeof getApiChallengeChallengeIdShowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChallengeChallengeIdAcceptRouteHandler: RouteHandler<
  typeof postApiChallengeChallengeIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChallengeChallengeIdDeclineRouteHandler: RouteHandler<
  typeof postApiChallengeChallengeIdDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChallengeChallengeIdCancelRouteHandler: RouteHandler<
  typeof postApiChallengeChallengeIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChallengeAiRouteHandler: RouteHandler<typeof postApiChallengeAiRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiChallengeOpenRouteHandler: RouteHandler<
  typeof postApiChallengeOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChallengeGameIdStartClocksRouteHandler: RouteHandler<
  typeof postApiChallengeGameIdStartClocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBulkPairingRouteHandler: RouteHandler<typeof getApiBulkPairingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiBulkPairingRouteHandler: RouteHandler<typeof postApiBulkPairingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiBulkPairingIdStartClocksRouteHandler: RouteHandler<
  typeof postApiBulkPairingIdStartClocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBulkPairingIdRouteHandler: RouteHandler<
  typeof getApiBulkPairingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiBulkPairingIdRouteHandler: RouteHandler<
  typeof deleteApiBulkPairingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBulkPairingIdGamesRouteHandler: RouteHandler<
  typeof getApiBulkPairingIdGamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRoundGameIdAddTimeSecondsRouteHandler: RouteHandler<
  typeof postApiRoundGameIdAddTimeSecondsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTokenAdminChallengeRouteHandler: RouteHandler<
  typeof postApiTokenAdminChallengeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudEvalRouteHandler: RouteHandler<typeof getApiCloudEvalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiExternalEngineRouteHandler: RouteHandler<
  typeof getApiExternalEngineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalEngineRouteHandler: RouteHandler<
  typeof postApiExternalEngineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiExternalEngineIdRouteHandler: RouteHandler<
  typeof getApiExternalEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiExternalEngineIdRouteHandler: RouteHandler<
  typeof putApiExternalEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiExternalEngineIdRouteHandler: RouteHandler<
  typeof deleteApiExternalEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalEngineIdAnalyseRouteHandler: RouteHandler<
  typeof postApiExternalEngineIdAnalyseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalEngineWorkRouteHandler: RouteHandler<
  typeof postApiExternalEngineWorkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiExternalEngineWorkIdRouteHandler: RouteHandler<
  typeof postApiExternalEngineWorkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTokenRouteHandler: RouteHandler<typeof postApiTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTokenRouteHandler: RouteHandler<typeof deleteApiTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTokenTestRouteHandler: RouteHandler<typeof postApiTokenTestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
