import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiUsersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPlayerTopNbPerfTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameRatingHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernamePerfPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleBatchAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPuzzleBatchAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleReplayDaysThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleDashboardDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStormDashboardUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRacerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRacerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameCurrentGameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGamesUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGamesExportIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamGamesByUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamGamesStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamGamesStreamIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountPlayingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGamesExportImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGamesExportBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvChannelFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentTeamBattleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameTournamentCreatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameTournamentPlayedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissNewTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSwissIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdScheduleNextRoundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSwissIdGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSwissIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdSwissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyStudyIdChapterIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyStudyIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiStudyStudyIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyStudyIdImportPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyStudyIdChapterIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyStudyIdChapterIdMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyByUsernameExportPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyByUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStudyStudyIdChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastByUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastBroadcastTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBroadcastRoundBroadcastRoundIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBroadcastRoundBroadcastRoundIdPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamBroadcastRoundBroadcastRoundIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamBroadcastTourBroadcastTourIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamBroadcastGroupBroadcastGroupIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastRoundBroadcastRoundIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastBroadcastTournamentIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastMyRoundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFidePlayerPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFidePlayerPlayerIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFidePlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSimulRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamOfUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdArenaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamTeamIdRequestUserIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamTeamIdRequestUserIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamTeamIdKickUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamerLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCrosstableUser1User2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPlayerAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserUsernameNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRelFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelFollowUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelUnfollowUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelBlockUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelUnblockUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardSeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBoardGameStreamGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdMoveMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBoardGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdResignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdDrawAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdTakebackAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdClaimVictoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdClaimDrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdBerserkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBotOnlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotAccountUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBotGameStreamGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdMoveMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBotGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdResignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdDrawAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdTakebackAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdClaimVictoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdClaimDrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChallengeChallengeIdShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeChallengeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeChallengeIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeChallengeIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeAiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeGameIdStartClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkPairingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBulkPairingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBulkPairingIdStartClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkPairingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiBulkPairingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkPairingIdGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRoundGameIdAddTimeSecondsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTokenAdminChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExternalEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExternalEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExternalEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExternalEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineIdAnalyseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineWorkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineWorkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTokenTestRoute, (c) => {
    throw new Error('Not implemented')
  })
