import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolChallengesV1ChallengesChallengeIdConfigRoute,
  getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRoute,
  getLolChallengesV1ChallengesChallengeIdPercentilesRoute,
  getLolChallengesV1ChallengesConfigRoute,
  getLolChallengesV1ChallengesPercentilesRoute,
  getLolChallengesV1PlayerDataPuuidRoute,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRoute,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRoute,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRoute,
  getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRoute,
  getLolClashV1PlayersByPuuidPuuidRoute,
  getLolClashV1TeamsTeamIdRoute,
  getLolClashV1TournamentsByTeamTeamIdRoute,
  getLolClashV1TournamentsRoute,
  getLolClashV1TournamentsTournamentIdRoute,
  getLolLeagueExpV4EntriesQueueTierDivisionRoute,
  getLolLeagueV4ChallengerleaguesByQueueQueueRoute,
  getLolLeagueV4EntriesByPuuidEncryptedPUUIDRoute,
  getLolLeagueV4EntriesQueueTierDivisionRoute,
  getLolLeagueV4GrandmasterleaguesByQueueQueueRoute,
  getLolLeagueV4MasterleaguesByQueueQueueRoute,
  getLolMatchV5MatchesByPuuidPuuidIdsRoute,
  getLolMatchV5MatchesMatchIdRoute,
  getLolMatchV5MatchesMatchIdTimelineRoute,
  getLolMatchV5MatchesReplaysRoute,
  getLolPlatformV3ChampionRotationsRoute,
  getLolRsoMatchV1MatchesIdsRoute,
  getLolRsoMatchV1MatchesMatchIdRoute,
  getLolRsoMatchV1MatchesMatchIdTimelineRoute,
  getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRoute,
  getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRoute,
  getLolStatusV4PlatformDataRoute,
  getLolSummonerV4SummonersByPuuidEncryptedPUUIDRoute,
  getLolSummonerV4SummonersMeRoute,
  getLolTournamentStubV5CodesTournamentCodeRoute,
  getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRoute,
  getLolTournamentV5CodesTournamentCodeRoute,
  getLolTournamentV5GamesByCodeTournamentCodeRoute,
  getLolTournamentV5LobbyEventsByCodeTournamentCodeRoute,
  getLorDeckV1DecksMeRoute,
  getLorInventoryV1CardsMeRoute,
  getLorMatchV1MatchesByPuuidPuuidIdsRoute,
  getLorMatchV1MatchesMatchIdRoute,
  getLorRankedV1LeaderboardsRoute,
  getLorStatusV1PlatformDataRoute,
  getRiftboundContentV1ContentsRoute,
  getRiotAccountV1AccountsByPuuidPuuidRoute,
  getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute,
  getRiotAccountV1AccountsMeRoute,
  getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute,
  getRiotAccountV1RegionByGameGameByPuuidPuuidRoute,
  getTftLeagueV1ByPuuidPuuidRoute,
  getTftLeagueV1ChallengerRoute,
  getTftLeagueV1EntriesTierDivisionRoute,
  getTftLeagueV1GrandmasterRoute,
  getTftLeagueV1MasterRoute,
  getTftLeagueV1RatedLaddersQueueTopRoute,
  getTftMatchV1MatchesByPuuidPuuidIdsRoute,
  getTftMatchV1MatchesMatchIdRoute,
  getTftStatusV1PlatformDataRoute,
  getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute,
  getTftSummonerV1SummonersMeRoute,
  getValConsoleRankedV1LeaderboardsByActActIdRoute,
  getValContentV1ContentsRoute,
  getValMatchConsoleV1MatchesMatchIdRoute,
  getValMatchConsoleV1MatchlistsByPuuidPuuidRoute,
  getValMatchConsoleV1RecentMatchesByQueueQueueRoute,
  getValMatchV1MatchesMatchIdRoute,
  getValMatchV1MatchlistsByPuuidPuuidRoute,
  getValMatchV1RecentMatchesByQueueQueueRoute,
  getValRankedV1LeaderboardsByActActIdRoute,
  getValStatusV1PlatformDataRoute,
  postLolTournamentStubV5CodesRoute,
  postLolTournamentStubV5ProvidersRoute,
  postLolTournamentStubV5TournamentsRoute,
  postLolTournamentV5CodesRoute,
  postLolTournamentV5ProvidersRoute,
  postLolTournamentV5TournamentsRoute,
  postLorDeckV1DecksMeRoute,
  putLolTournamentV5CodesTournamentCodeRoute,
} from './routes'
import {
  getLolChallengesV1ChallengesChallengeIdConfigRouteHandler,
  getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRouteHandler,
  getLolChallengesV1ChallengesChallengeIdPercentilesRouteHandler,
  getLolChallengesV1ChallengesConfigRouteHandler,
  getLolChallengesV1ChallengesPercentilesRouteHandler,
  getLolChallengesV1PlayerDataPuuidRouteHandler,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRouteHandler,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRouteHandler,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRouteHandler,
  getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRouteHandler,
  getLolClashV1PlayersByPuuidPuuidRouteHandler,
  getLolClashV1TeamsTeamIdRouteHandler,
  getLolClashV1TournamentsByTeamTeamIdRouteHandler,
  getLolClashV1TournamentsRouteHandler,
  getLolClashV1TournamentsTournamentIdRouteHandler,
  getLolLeagueExpV4EntriesQueueTierDivisionRouteHandler,
  getLolLeagueV4ChallengerleaguesByQueueQueueRouteHandler,
  getLolLeagueV4EntriesByPuuidEncryptedPUUIDRouteHandler,
  getLolLeagueV4EntriesQueueTierDivisionRouteHandler,
  getLolLeagueV4GrandmasterleaguesByQueueQueueRouteHandler,
  getLolLeagueV4MasterleaguesByQueueQueueRouteHandler,
  getLolMatchV5MatchesByPuuidPuuidIdsRouteHandler,
  getLolMatchV5MatchesMatchIdRouteHandler,
  getLolMatchV5MatchesMatchIdTimelineRouteHandler,
  getLolMatchV5MatchesReplaysRouteHandler,
  getLolPlatformV3ChampionRotationsRouteHandler,
  getLolRsoMatchV1MatchesIdsRouteHandler,
  getLolRsoMatchV1MatchesMatchIdRouteHandler,
  getLolRsoMatchV1MatchesMatchIdTimelineRouteHandler,
  getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRouteHandler,
  getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRouteHandler,
  getLolStatusV4PlatformDataRouteHandler,
  getLolSummonerV4SummonersByPuuidEncryptedPUUIDRouteHandler,
  getLolSummonerV4SummonersMeRouteHandler,
  getLolTournamentStubV5CodesTournamentCodeRouteHandler,
  getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRouteHandler,
  getLolTournamentV5CodesTournamentCodeRouteHandler,
  getLolTournamentV5GamesByCodeTournamentCodeRouteHandler,
  getLolTournamentV5LobbyEventsByCodeTournamentCodeRouteHandler,
  getLorDeckV1DecksMeRouteHandler,
  getLorInventoryV1CardsMeRouteHandler,
  getLorMatchV1MatchesByPuuidPuuidIdsRouteHandler,
  getLorMatchV1MatchesMatchIdRouteHandler,
  getLorRankedV1LeaderboardsRouteHandler,
  getLorStatusV1PlatformDataRouteHandler,
  getRiftboundContentV1ContentsRouteHandler,
  getRiotAccountV1AccountsByPuuidPuuidRouteHandler,
  getRiotAccountV1AccountsByRiotIdGameNameTagLineRouteHandler,
  getRiotAccountV1AccountsMeRouteHandler,
  getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRouteHandler,
  getRiotAccountV1RegionByGameGameByPuuidPuuidRouteHandler,
  getTftLeagueV1ByPuuidPuuidRouteHandler,
  getTftLeagueV1ChallengerRouteHandler,
  getTftLeagueV1EntriesTierDivisionRouteHandler,
  getTftLeagueV1GrandmasterRouteHandler,
  getTftLeagueV1MasterRouteHandler,
  getTftLeagueV1RatedLaddersQueueTopRouteHandler,
  getTftMatchV1MatchesByPuuidPuuidIdsRouteHandler,
  getTftMatchV1MatchesMatchIdRouteHandler,
  getTftStatusV1PlatformDataRouteHandler,
  getTftSummonerV1SummonersByPuuidEncryptedPUUIDRouteHandler,
  getTftSummonerV1SummonersMeRouteHandler,
  getValConsoleRankedV1LeaderboardsByActActIdRouteHandler,
  getValContentV1ContentsRouteHandler,
  getValMatchConsoleV1MatchesMatchIdRouteHandler,
  getValMatchConsoleV1MatchlistsByPuuidPuuidRouteHandler,
  getValMatchConsoleV1RecentMatchesByQueueQueueRouteHandler,
  getValMatchV1MatchesMatchIdRouteHandler,
  getValMatchV1MatchlistsByPuuidPuuidRouteHandler,
  getValMatchV1RecentMatchesByQueueQueueRouteHandler,
  getValRankedV1LeaderboardsByActActIdRouteHandler,
  getValStatusV1PlatformDataRouteHandler,
  postLolTournamentStubV5CodesRouteHandler,
  postLolTournamentStubV5ProvidersRouteHandler,
  postLolTournamentStubV5TournamentsRouteHandler,
  postLolTournamentV5CodesRouteHandler,
  postLolTournamentV5ProvidersRouteHandler,
  postLolTournamentV5TournamentsRouteHandler,
  postLorDeckV1DecksMeRouteHandler,
  putLolTournamentV5CodesTournamentCodeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getRiotAccountV1AccountsByPuuidPuuidRoute,
    getRiotAccountV1AccountsByPuuidPuuidRouteHandler,
  )
  .openapi(
    getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute,
    getRiotAccountV1AccountsByRiotIdGameNameTagLineRouteHandler,
  )
  .openapi(getRiotAccountV1AccountsMeRoute, getRiotAccountV1AccountsMeRouteHandler)
  .openapi(
    getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute,
    getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRouteHandler,
  )
  .openapi(
    getRiotAccountV1RegionByGameGameByPuuidPuuidRoute,
    getRiotAccountV1RegionByGameGameByPuuidPuuidRouteHandler,
  )
  .openapi(
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRoute,
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRouteHandler,
  )
  .openapi(
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRoute,
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRouteHandler,
  )
  .openapi(
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRoute,
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRouteHandler,
  )
  .openapi(
    getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRoute,
    getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRouteHandler,
  )
  .openapi(getLolPlatformV3ChampionRotationsRoute, getLolPlatformV3ChampionRotationsRouteHandler)
  .openapi(getLolClashV1PlayersByPuuidPuuidRoute, getLolClashV1PlayersByPuuidPuuidRouteHandler)
  .openapi(getLolClashV1TeamsTeamIdRoute, getLolClashV1TeamsTeamIdRouteHandler)
  .openapi(getLolClashV1TournamentsRoute, getLolClashV1TournamentsRouteHandler)
  .openapi(
    getLolClashV1TournamentsByTeamTeamIdRoute,
    getLolClashV1TournamentsByTeamTeamIdRouteHandler,
  )
  .openapi(
    getLolClashV1TournamentsTournamentIdRoute,
    getLolClashV1TournamentsTournamentIdRouteHandler,
  )
  .openapi(
    getLolLeagueExpV4EntriesQueueTierDivisionRoute,
    getLolLeagueExpV4EntriesQueueTierDivisionRouteHandler,
  )
  .openapi(
    getLolLeagueV4ChallengerleaguesByQueueQueueRoute,
    getLolLeagueV4ChallengerleaguesByQueueQueueRouteHandler,
  )
  .openapi(
    getLolLeagueV4EntriesByPuuidEncryptedPUUIDRoute,
    getLolLeagueV4EntriesByPuuidEncryptedPUUIDRouteHandler,
  )
  .openapi(
    getLolLeagueV4EntriesQueueTierDivisionRoute,
    getLolLeagueV4EntriesQueueTierDivisionRouteHandler,
  )
  .openapi(
    getLolLeagueV4GrandmasterleaguesByQueueQueueRoute,
    getLolLeagueV4GrandmasterleaguesByQueueQueueRouteHandler,
  )
  .openapi(
    getLolLeagueV4MasterleaguesByQueueQueueRoute,
    getLolLeagueV4MasterleaguesByQueueQueueRouteHandler,
  )
  .openapi(getLolChallengesV1ChallengesConfigRoute, getLolChallengesV1ChallengesConfigRouteHandler)
  .openapi(
    getLolChallengesV1ChallengesPercentilesRoute,
    getLolChallengesV1ChallengesPercentilesRouteHandler,
  )
  .openapi(
    getLolChallengesV1ChallengesChallengeIdConfigRoute,
    getLolChallengesV1ChallengesChallengeIdConfigRouteHandler,
  )
  .openapi(
    getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRoute,
    getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRouteHandler,
  )
  .openapi(
    getLolChallengesV1ChallengesChallengeIdPercentilesRoute,
    getLolChallengesV1ChallengesChallengeIdPercentilesRouteHandler,
  )
  .openapi(getLolChallengesV1PlayerDataPuuidRoute, getLolChallengesV1PlayerDataPuuidRouteHandler)
  .openapi(getLolRsoMatchV1MatchesIdsRoute, getLolRsoMatchV1MatchesIdsRouteHandler)
  .openapi(getLolRsoMatchV1MatchesMatchIdRoute, getLolRsoMatchV1MatchesMatchIdRouteHandler)
  .openapi(
    getLolRsoMatchV1MatchesMatchIdTimelineRoute,
    getLolRsoMatchV1MatchesMatchIdTimelineRouteHandler,
  )
  .openapi(getLolStatusV4PlatformDataRoute, getLolStatusV4PlatformDataRouteHandler)
  .openapi(getLorDeckV1DecksMeRoute, getLorDeckV1DecksMeRouteHandler)
  .openapi(postLorDeckV1DecksMeRoute, postLorDeckV1DecksMeRouteHandler)
  .openapi(getLorInventoryV1CardsMeRoute, getLorInventoryV1CardsMeRouteHandler)
  .openapi(
    getLorMatchV1MatchesByPuuidPuuidIdsRoute,
    getLorMatchV1MatchesByPuuidPuuidIdsRouteHandler,
  )
  .openapi(getLorMatchV1MatchesMatchIdRoute, getLorMatchV1MatchesMatchIdRouteHandler)
  .openapi(getLorRankedV1LeaderboardsRoute, getLorRankedV1LeaderboardsRouteHandler)
  .openapi(getLorStatusV1PlatformDataRoute, getLorStatusV1PlatformDataRouteHandler)
  .openapi(
    getLolMatchV5MatchesByPuuidPuuidIdsRoute,
    getLolMatchV5MatchesByPuuidPuuidIdsRouteHandler,
  )
  .openapi(getLolMatchV5MatchesReplaysRoute, getLolMatchV5MatchesReplaysRouteHandler)
  .openapi(getLolMatchV5MatchesMatchIdRoute, getLolMatchV5MatchesMatchIdRouteHandler)
  .openapi(
    getLolMatchV5MatchesMatchIdTimelineRoute,
    getLolMatchV5MatchesMatchIdTimelineRouteHandler,
  )
  .openapi(getRiftboundContentV1ContentsRoute, getRiftboundContentV1ContentsRouteHandler)
  .openapi(
    getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRoute,
    getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRouteHandler,
  )
  .openapi(
    getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRoute,
    getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRouteHandler,
  )
  .openapi(
    getLolSummonerV4SummonersByPuuidEncryptedPUUIDRoute,
    getLolSummonerV4SummonersByPuuidEncryptedPUUIDRouteHandler,
  )
  .openapi(getLolSummonerV4SummonersMeRoute, getLolSummonerV4SummonersMeRouteHandler)
  .openapi(getTftLeagueV1ByPuuidPuuidRoute, getTftLeagueV1ByPuuidPuuidRouteHandler)
  .openapi(getTftLeagueV1ChallengerRoute, getTftLeagueV1ChallengerRouteHandler)
  .openapi(getTftLeagueV1EntriesTierDivisionRoute, getTftLeagueV1EntriesTierDivisionRouteHandler)
  .openapi(getTftLeagueV1GrandmasterRoute, getTftLeagueV1GrandmasterRouteHandler)
  .openapi(getTftLeagueV1MasterRoute, getTftLeagueV1MasterRouteHandler)
  .openapi(getTftLeagueV1RatedLaddersQueueTopRoute, getTftLeagueV1RatedLaddersQueueTopRouteHandler)
  .openapi(
    getTftMatchV1MatchesByPuuidPuuidIdsRoute,
    getTftMatchV1MatchesByPuuidPuuidIdsRouteHandler,
  )
  .openapi(getTftMatchV1MatchesMatchIdRoute, getTftMatchV1MatchesMatchIdRouteHandler)
  .openapi(getTftStatusV1PlatformDataRoute, getTftStatusV1PlatformDataRouteHandler)
  .openapi(
    getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute,
    getTftSummonerV1SummonersByPuuidEncryptedPUUIDRouteHandler,
  )
  .openapi(getTftSummonerV1SummonersMeRoute, getTftSummonerV1SummonersMeRouteHandler)
  .openapi(postLolTournamentStubV5CodesRoute, postLolTournamentStubV5CodesRouteHandler)
  .openapi(
    getLolTournamentStubV5CodesTournamentCodeRoute,
    getLolTournamentStubV5CodesTournamentCodeRouteHandler,
  )
  .openapi(
    getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRoute,
    getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRouteHandler,
  )
  .openapi(postLolTournamentStubV5ProvidersRoute, postLolTournamentStubV5ProvidersRouteHandler)
  .openapi(postLolTournamentStubV5TournamentsRoute, postLolTournamentStubV5TournamentsRouteHandler)
  .openapi(postLolTournamentV5CodesRoute, postLolTournamentV5CodesRouteHandler)
  .openapi(
    getLolTournamentV5CodesTournamentCodeRoute,
    getLolTournamentV5CodesTournamentCodeRouteHandler,
  )
  .openapi(
    putLolTournamentV5CodesTournamentCodeRoute,
    putLolTournamentV5CodesTournamentCodeRouteHandler,
  )
  .openapi(
    getLolTournamentV5GamesByCodeTournamentCodeRoute,
    getLolTournamentV5GamesByCodeTournamentCodeRouteHandler,
  )
  .openapi(
    getLolTournamentV5LobbyEventsByCodeTournamentCodeRoute,
    getLolTournamentV5LobbyEventsByCodeTournamentCodeRouteHandler,
  )
  .openapi(postLolTournamentV5ProvidersRoute, postLolTournamentV5ProvidersRouteHandler)
  .openapi(postLolTournamentV5TournamentsRoute, postLolTournamentV5TournamentsRouteHandler)
  .openapi(getValMatchConsoleV1MatchesMatchIdRoute, getValMatchConsoleV1MatchesMatchIdRouteHandler)
  .openapi(
    getValMatchConsoleV1MatchlistsByPuuidPuuidRoute,
    getValMatchConsoleV1MatchlistsByPuuidPuuidRouteHandler,
  )
  .openapi(
    getValMatchConsoleV1RecentMatchesByQueueQueueRoute,
    getValMatchConsoleV1RecentMatchesByQueueQueueRouteHandler,
  )
  .openapi(
    getValConsoleRankedV1LeaderboardsByActActIdRoute,
    getValConsoleRankedV1LeaderboardsByActActIdRouteHandler,
  )
  .openapi(getValContentV1ContentsRoute, getValContentV1ContentsRouteHandler)
  .openapi(getValMatchV1MatchesMatchIdRoute, getValMatchV1MatchesMatchIdRouteHandler)
  .openapi(
    getValMatchV1MatchlistsByPuuidPuuidRoute,
    getValMatchV1MatchlistsByPuuidPuuidRouteHandler,
  )
  .openapi(
    getValMatchV1RecentMatchesByQueueQueueRoute,
    getValMatchV1RecentMatchesByQueueQueueRouteHandler,
  )
  .openapi(
    getValRankedV1LeaderboardsByActActIdRoute,
    getValRankedV1LeaderboardsByActActIdRouteHandler,
  )
  .openapi(getValStatusV1PlatformDataRoute, getValStatusV1PlatformDataRouteHandler)

export default app
