import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiUsersStatus(
  args: InferRequestType<typeof client.api.users.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.status.$get(args, options))
}

export async function getApiPlayer(options?: ClientRequestOptions) {
  return await parseResponse(client.api.player.$get(undefined, options))
}

export async function getApiPlayerTopNbPerfType(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.player.top[':nb'][':perfType'].$get(args, options))
}

export async function getApiUserUsername(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].$get(args, options))
}

export async function getApiUserUsernameRatingHistory(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username']['rating-history'].$get(args, options))
}

export async function getApiUserUsernamePerfPerf(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].perf[':perf'].$get(args, options))
}

export async function getApiUserUsernameActivity(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].activity.$get(args, options))
}

export async function getApiPuzzleDaily(options?: ClientRequestOptions) {
  return await parseResponse(client.api.puzzle.daily.$get(undefined, options))
}

export async function getApiPuzzleId(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle[':id'].$get(args, options))
}

export async function getApiPuzzleNext(
  args: InferRequestType<typeof client.api.puzzle.next.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle.next.$get(args, options))
}

export async function getApiPuzzleBatchAngle(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle.batch[':angle'].$get(args, options))
}

export async function postApiPuzzleBatchAngle(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle.batch[':angle'].$post(args, options))
}

export async function getApiPuzzleActivity(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle.activity.$get(args, options))
}

export async function getApiPuzzleReplayDaysTheme(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle.replay[':days'][':theme'].$get(args, options))
}

export async function getApiPuzzleDashboardDays(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.puzzle.dashboard[':days'].$get(args, options))
}

export async function getApiStormDashboardUsername(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.storm.dashboard[':username'].$get(args, options))
}

export async function postApiRacer(options?: ClientRequestOptions) {
  return await parseResponse(client.api.racer.$post(undefined, options))
}

export async function getApiRacerId(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.racer[':id'].$get(args, options))
}

export async function postApiUsers(
  args: InferRequestType<typeof client.api.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$post(args, options))
}

export async function getApiAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.account.$get(undefined, options))
}

export async function getApiAccountEmail(options?: ClientRequestOptions) {
  return await parseResponse(client.api.account.email.$get(undefined, options))
}

export async function getApiAccountPreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.api.account.preferences.$get(undefined, options))
}

export async function getApiAccountKid(options?: ClientRequestOptions) {
  return await parseResponse(client.api.account.kid.$get(undefined, options))
}

export async function postApiAccountKid(
  args: InferRequestType<typeof client.api.account.kid.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.account.kid.$post(args, options))
}

export async function getGameExportGameId(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.game.export[':gameId'].$get(args, options))
}

export async function getApiGameGameIdChat(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.game[':gameId'].chat.$get(args, options))
}

export async function getApiUserUsernameCurrentGame(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username']['current-game'].$get(args, options))
}

export async function getApiGamesUserUsername(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.games.user[':username'].$get(args, options))
}

export async function postApiGamesExportIds(
  args: InferRequestType<typeof client.api.games.export._ids.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.games.export._ids.$post(args, options))
}

export async function postApiStreamGamesByUsers(
  args: InferRequestType<(typeof client.api.stream)['games-by-users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.stream['games-by-users'].$post(args, options))
}

export async function postApiStreamGamesStreamId(
  args: InferRequestType<(typeof client.api.stream.games)[':streamId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.stream.games[':streamId'].$post(args, options))
}

export async function postApiStreamGamesStreamIdAdd(
  args: InferRequestType<(typeof client.api.stream.games)[':streamId']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.stream.games[':streamId'].add.$post(args, options))
}

export async function getApiAccountPlaying(
  args: InferRequestType<typeof client.api.account.playing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.account.playing.$get(args, options))
}

export async function getApiStreamGameId(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.stream.game[':id'].$get(args, options))
}

export async function postApiImport(
  args: InferRequestType<typeof client.api.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.import.$post(args, options))
}

export async function getApiGamesExportImports(options?: ClientRequestOptions) {
  return await parseResponse(client.api.games.export.imports.$get(undefined, options))
}

export async function getApiGamesExportBookmarks(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.games.export.bookmarks.$get(args, options))
}

export async function postBookmarkGameId(
  args: InferRequestType<(typeof client.bookmark)[':gameId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmark[':gameId'].$post(args, options))
}

export async function getApiVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.version.$get(undefined, options))
}

export async function getApiTvChannels(options?: ClientRequestOptions) {
  return await parseResponse(client.api.tv.channels.$get(undefined, options))
}

export async function getApiTvFeed(options?: ClientRequestOptions) {
  return await parseResponse(client.api.tv.feed.$get(undefined, options))
}

export async function getApiTvChannelFeed(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tv[':channel'].feed.$get(args, options))
}

export async function getApiTvChannel(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tv[':channel'].$get(args, options))
}

export async function getApiTournament(options?: ClientRequestOptions) {
  return await parseResponse(client.api.tournament.$get(undefined, options))
}

export async function postApiTournament(
  args: InferRequestType<typeof client.api.tournament.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament.$post(args, options))
}

export async function getApiTournamentId(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].$get(args, options))
}

export async function postApiTournamentId(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].$post(args, options))
}

export async function postApiTournamentIdJoin(
  args: InferRequestType<(typeof client.api.tournament)[':id']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].join.$post(args, options))
}

export async function postApiTournamentIdWithdraw(
  args: InferRequestType<(typeof client.api.tournament)[':id']['withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].withdraw.$post(args, options))
}

export async function postApiTournamentIdTerminate(
  args: InferRequestType<(typeof client.api.tournament)[':id']['terminate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].terminate.$post(args, options))
}

export async function postApiTournamentTeamBattleId(
  args: InferRequestType<(typeof client.api.tournament)['team-battle'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament['team-battle'][':id'].$post(args, options))
}

export async function getApiTournamentIdGames(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].games.$get(args, options))
}

export async function getApiTournamentIdResults(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].results.$get(args, options))
}

export async function getApiTournamentIdTeams(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tournament[':id'].teams.$get(args, options))
}

export async function getApiUserUsernameTournamentCreated(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].tournament.created.$get(args, options))
}

export async function getApiUserUsernameTournamentPlayed(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].tournament.played.$get(args, options))
}

export async function postApiSwissNewTeamId(
  args: InferRequestType<(typeof client.api.swiss.new)[':teamId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss.new[':teamId'].$post(args, options))
}

export async function getApiSwissId(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].$get(args, options))
}

export async function postApiSwissIdEdit(
  args: InferRequestType<(typeof client.api.swiss)[':id']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].edit.$post(args, options))
}

export async function postApiSwissIdScheduleNextRound(
  args: InferRequestType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id']['schedule-next-round'].$post(args, options))
}

export async function postApiSwissIdJoin(
  args: InferRequestType<(typeof client.api.swiss)[':id']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].join.$post(args, options))
}

export async function postApiSwissIdWithdraw(
  args: InferRequestType<(typeof client.api.swiss)[':id']['withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].withdraw.$post(args, options))
}

export async function postApiSwissIdTerminate(
  args: InferRequestType<(typeof client.api.swiss)[':id']['terminate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].terminate.$post(args, options))
}

export async function getSwissIdTrf(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.swiss[':id.trf'].$get(args, options))
}

export async function getApiSwissIdGames(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].games.$get(args, options))
}

export async function getApiSwissIdResults(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.swiss[':id'].results.$get(args, options))
}

export async function getApiTeamTeamIdSwiss(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team[':teamId'].swiss.$get(args, options))
}

export async function getApiStudyStudyIdChapterIdPgn(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId'][':chapterId.pgn'].$get(args, options))
}

export async function getApiStudyStudyIdPgn(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId.pgn'].$get(args, options))
}

export async function headApiStudyStudyIdPgn(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId.pgn'].$head(args, options))
}

export async function postApiStudy(
  args: InferRequestType<typeof client.api.study.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study.$post(args, options))
}

export async function postApiStudyStudyIdImportPgn(
  args: InferRequestType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId']['import-pgn'].$post(args, options))
}

export async function postApiStudyStudyIdChapterIdTags(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId'][':chapterId'].tags.$post(args, options))
}

export async function postApiStudyStudyIdChapterIdMoves(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId'][':chapterId'].moves.$post(args, options))
}

export async function getApiStudyByUsernameExportPgn(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study.by[':username']['export.pgn'].$get(args, options))
}

export async function getApiStudyByUsername(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study.by[':username'].$get(args, options))
}

export async function deleteApiStudyStudyIdChapterId(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.study[':studyId'][':chapterId'].$delete(args, options))
}

export async function getApiBroadcast(
  args: InferRequestType<typeof client.api.broadcast.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast.$get(args, options))
}

export async function getApiBroadcastTop(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast.top.$get(args, options))
}

export async function getApiBroadcastByUsername(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast.by[':username'].$get(args, options))
}

export async function getApiBroadcastSearch(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast.search.$get(args, options))
}

export async function postBroadcastNew(
  args: InferRequestType<typeof client.broadcast.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcast.new.$post(args, options))
}

export async function getApiBroadcastBroadcastTournamentId(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast[':broadcastTournamentId'].$get(args, options))
}

export async function getBroadcastBroadcastTournamentIdPlayers(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcast[':broadcastTournamentId'].players.$get(args, options))
}

export async function getBroadcastBroadcastTournamentIdPlayersPlayerId(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.broadcast[':broadcastTournamentId'].players[':playerId'].$get(args, options),
  )
}

export async function getBroadcastBroadcastTournamentIdTeamsStandings(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.broadcast[':broadcastTournamentId'].teams.standings.$get(args, options),
  )
}

export async function postBroadcastBroadcastTournamentIdEdit(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcast[':broadcastTournamentId'].edit.$post(args, options))
}

export async function postBroadcastBroadcastTournamentIdNew(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcast[':broadcastTournamentId'].new.$post(args, options))
}

export async function getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundId(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.broadcast[':broadcastTournamentSlug'][':broadcastRoundSlug'][
      ':broadcastRoundId'
    ].$get(args, options),
  )
}

export async function postBroadcastRoundBroadcastRoundIdEdit(
  args: InferRequestType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcast.round[':broadcastRoundId'].edit.$post(args, options))
}

export async function postApiBroadcastRoundBroadcastRoundIdReset(
  args: InferRequestType<
    (typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.broadcast.round[':broadcastRoundId'].reset.$post(args, options),
  )
}

export async function postApiBroadcastRoundBroadcastRoundIdPush(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.broadcast.round[':broadcastRoundId'].push.$post(args, options),
  )
}

export async function getApiStreamBroadcastRoundBroadcastRoundIdPgn(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.stream.broadcast.round[':broadcastRoundId.pgn'].$get(args, options),
  )
}

export async function getApiStreamBroadcastTourBroadcastTourIdPgn(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.stream.broadcast.tour[':broadcastTourId.pgn'].$get(args, options),
  )
}

export async function getApiStreamBroadcastGroupBroadcastGroupIdPgn(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.stream.broadcast.group[':broadcastGroupId.pgn'].$get(args, options),
  )
}

export async function getApiBroadcastRoundBroadcastRoundIdPgn(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.broadcast.round[':broadcastRoundId.pgn'].$get(args, options),
  )
}

export async function getApiBroadcastBroadcastTournamentIdPgn(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast[':broadcastTournamentId.pgn'].$get(args, options))
}

export async function getApiBroadcastMyRounds(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.broadcast['my-rounds'].$get(args, options))
}

export async function getApiFidePlayerPlayerId(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fide.player[':playerId'].$get(args, options))
}

export async function getApiFidePlayerPlayerIdRatings(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fide.player[':playerId'].ratings.$get(args, options))
}

export async function getApiFidePlayer(
  args: InferRequestType<typeof client.api.fide.player.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fide.player.$get(args, options))
}

export async function getApiSimul(options?: ClientRequestOptions) {
  return await parseResponse(client.api.simul.$get(undefined, options))
}

export async function getApiTeamTeamId(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team[':teamId'].$get(args, options))
}

export async function getApiTeamAll(
  args: InferRequestType<typeof client.api.team.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team.all.$get(args, options))
}

export async function getApiTeamOfUsername(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team.of[':username'].$get(args, options))
}

export async function getApiTeamSearch(
  args: InferRequestType<typeof client.api.team.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team.search.$get(args, options))
}

export async function getApiTeamTeamIdUsers(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team[':teamId'].users.$get(args, options))
}

export async function getApiTeamTeamIdArena(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team[':teamId'].arena.$get(args, options))
}

export async function postTeamTeamIdJoin(
  args: InferRequestType<(typeof client.team)[':teamId']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':teamId'].join.$post(args, options))
}

export async function postTeamTeamIdQuit(
  args: InferRequestType<(typeof client.team)[':teamId']['quit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':teamId'].quit.$post(args, options))
}

export async function getApiTeamTeamIdRequests(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team[':teamId'].requests.$get(args, options))
}

export async function postApiTeamTeamIdRequestUserIdAccept(
  args: InferRequestType<
    (typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.team[':teamId'].request[':userId'].accept.$post(args, options),
  )
}

export async function postApiTeamTeamIdRequestUserIdDecline(
  args: InferRequestType<
    (typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.team[':teamId'].request[':userId'].decline.$post(args, options),
  )
}

export async function postApiTeamTeamIdKickUserId(
  args: InferRequestType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.team[':teamId'].kick[':userId'].$post(args, options))
}

export async function getTeamUpdates(
  args: InferRequestType<typeof client.team.updates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.updates.$get(args, options))
}

export async function getTeamUpdatesTeamId(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.updates[':teamId'].$get(args, options))
}

export async function postTeamTeamIdPmAll(
  args: InferRequestType<(typeof client.team)[':teamId']['pm-all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':teamId']['pm-all'].$post(args, options))
}

export async function getApiStreamerLive(options?: ClientRequestOptions) {
  return await parseResponse(client.api.streamer.live.$get(undefined, options))
}

export async function getApiCrosstableUser1User2(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.crosstable[':user1'][':user2'].$get(args, options))
}

export async function getApiPlayerAutocomplete(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.player.autocomplete.$get(args, options))
}

export async function getApiUserUsernameNote(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].note.$get(args, options))
}

export async function postApiUserUsernameNote(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':username'].note.$post(args, options))
}

export async function getApiRelFollowing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.rel.following.$get(undefined, options))
}

export async function postApiRelFollowUsername(
  args: InferRequestType<(typeof client.api.rel.follow)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rel.follow[':username'].$post(args, options))
}

export async function postApiRelUnfollowUsername(
  args: InferRequestType<(typeof client.api.rel.unfollow)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rel.unfollow[':username'].$post(args, options))
}

export async function postApiRelBlockUsername(
  args: InferRequestType<(typeof client.api.rel.block)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rel.block[':username'].$post(args, options))
}

export async function postApiRelUnblockUsername(
  args: InferRequestType<(typeof client.api.rel.unblock)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rel.unblock[':username'].$post(args, options))
}

export async function getApiStreamEvent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.stream.event.$get(undefined, options))
}

export async function postApiBoardSeek(
  args: InferRequestType<typeof client.api.board.seek.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.seek.$post(args, options))
}

export async function getApiBoardGameStreamGameId(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game.stream[':gameId'].$get(args, options))
}

export async function postApiBoardGameGameIdMoveMove(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].move[':move'].$post(args, options))
}

export async function getApiBoardGameGameIdChat(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].chat.$get(args, options))
}

export async function postApiBoardGameGameIdChat(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].chat.$post(args, options))
}

export async function postApiBoardGameGameIdAbort(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['abort']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].abort.$post(args, options))
}

export async function postApiBoardGameGameIdResign(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['resign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].resign.$post(args, options))
}

export async function postApiBoardGameGameIdDrawAccept(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].draw[':accept'].$post(args, options))
}

export async function postApiBoardGameGameIdTakebackAccept(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.board.game[':gameId'].takeback[':accept'].$post(args, options),
  )
}

export async function postApiBoardGameGameIdClaimVictory(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId']['claim-victory'].$post(args, options))
}

export async function postApiBoardGameGameIdClaimDraw(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId']['claim-draw'].$post(args, options))
}

export async function postApiBoardGameGameIdBerserk(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.board.game[':gameId'].berserk.$post(args, options))
}

export async function getApiBotOnline(
  args: InferRequestType<typeof client.api.bot.online.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.online.$get(args, options))
}

export async function postApiBotAccountUpgrade(options?: ClientRequestOptions) {
  return await parseResponse(client.api.bot.account.upgrade.$post(undefined, options))
}

export async function getApiBotGameStreamGameId(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game.stream[':gameId'].$get(args, options))
}

export async function postApiBotGameGameIdMoveMove(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId'].move[':move'].$post(args, options))
}

export async function getApiBotGameGameIdChat(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId'].chat.$get(args, options))
}

export async function postApiBotGameGameIdChat(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId'].chat.$post(args, options))
}

export async function postApiBotGameGameIdAbort(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId'].abort.$post(args, options))
}

export async function postApiBotGameGameIdResign(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId'].resign.$post(args, options))
}

export async function postApiBotGameGameIdDrawAccept(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId'].draw[':accept'].$post(args, options))
}

export async function postApiBotGameGameIdTakebackAccept(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.bot.game[':gameId'].takeback[':accept'].$post(args, options),
  )
}

export async function postApiBotGameGameIdClaimVictory(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId']['claim-victory'].$post(args, options))
}

export async function postApiBotGameGameIdClaimDraw(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bot.game[':gameId']['claim-draw'].$post(args, options))
}

export async function getApiChallenge(options?: ClientRequestOptions) {
  return await parseResponse(client.api.challenge.$get(undefined, options))
}

export async function postApiChallengeUsername(
  args: InferRequestType<(typeof client.api.challenge)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge[':username'].$post(args, options))
}

export async function getApiChallengeChallengeIdShow(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge[':challengeId'].show.$get(args, options))
}

export async function postApiChallengeChallengeIdAccept(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge[':challengeId'].accept.$post(args, options))
}

export async function postApiChallengeChallengeIdDecline(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge[':challengeId'].decline.$post(args, options))
}

export async function postApiChallengeChallengeIdCancel(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge[':challengeId'].cancel.$post(args, options))
}

export async function postApiChallengeAi(
  args: InferRequestType<typeof client.api.challenge.ai.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge.ai.$post(args, options))
}

export async function postApiChallengeOpen(
  args: InferRequestType<typeof client.api.challenge.open.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge.open.$post(args, options))
}

export async function postApiChallengeGameIdStartClocks(
  args: InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.challenge[':gameId']['start-clocks'].$post(args, options))
}

export async function getApiBulkPairing(options?: ClientRequestOptions) {
  return await parseResponse(client.api['bulk-pairing'].$get(undefined, options))
}

export async function postApiBulkPairing(
  args: InferRequestType<(typeof client.api)['bulk-pairing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['bulk-pairing'].$post(args, options))
}

export async function postApiBulkPairingIdStartClocks(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['bulk-pairing'][':id']['start-clocks'].$post(args, options))
}

export async function getApiBulkPairingId(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['bulk-pairing'][':id'].$get(args, options))
}

export async function deleteApiBulkPairingId(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['bulk-pairing'][':id'].$delete(args, options))
}

export async function getApiBulkPairingIdGames(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['bulk-pairing'][':id'].games.$get(args, options))
}

export async function postApiRoundGameIdAddTimeSeconds(
  args: InferRequestType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.round[':gameId']['add-time'][':seconds'].$post(args, options),
  )
}

export async function postApiTokenAdminChallenge(
  args: InferRequestType<(typeof client.api.token)['admin-challenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.token['admin-challenge'].$post(args, options))
}

export async function postInboxUsername(
  args: InferRequestType<(typeof client.inbox)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox[':username'].$post(args, options))
}

export async function getApiCloudEval(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['cloud-eval'].$get(args, options))
}

export async function getApiExternalEngine(options?: ClientRequestOptions) {
  return await parseResponse(client.api['external-engine'].$get(undefined, options))
}

export async function postApiExternalEngine(
  args: InferRequestType<(typeof client.api)['external-engine']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'].$post(args, options))
}

export async function getApiExternalEngineId(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'][':id'].$get(args, options))
}

export async function putApiExternalEngineId(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'][':id'].$put(args, options))
}

export async function deleteApiExternalEngineId(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'][':id'].$delete(args, options))
}

export async function postApiExternalEngineIdAnalyse(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'][':id'].analyse.$post(args, options))
}

export async function postApiExternalEngineWork(
  args: InferRequestType<(typeof client.api)['external-engine']['work']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'].work.$post(args, options))
}

export async function postApiExternalEngineWorkId(
  args: InferRequestType<(typeof client.api)['external-engine']['work'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['external-engine'].work[':id'].$post(args, options))
}

export async function getOauth(
  args: InferRequestType<typeof client.oauth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.$get(args, options))
}

export async function postApiToken(
  args: InferRequestType<typeof client.api.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.token.$post(args, options))
}

export async function deleteApiToken(options?: ClientRequestOptions) {
  return await parseResponse(client.api.token.$delete(undefined, options))
}

export async function postApiTokenTest(
  args: InferRequestType<typeof client.api.token.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.token.test.$post(args, options))
}

export async function getMasters(
  args: InferRequestType<typeof client.masters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masters.$get(args, options))
}

export async function getLichess(
  args: InferRequestType<typeof client.lichess.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lichess.$get(args, options))
}

export async function getPlayer(
  args: InferRequestType<typeof client.player.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.player.$get(args, options))
}

export async function getMastersPgnGameId(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masters.pgn[':gameId'].$get(args, options))
}

export async function getStandard(
  args: InferRequestType<typeof client.standard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standard.$get(args, options))
}

export async function getAtomic(
  args: InferRequestType<typeof client.atomic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.atomic.$get(args, options))
}

export async function getAntichess(
  args: InferRequestType<typeof client.antichess.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.antichess.$get(args, options))
}
