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
  postLolTournamentStubV5CodesRoute,
  postLolTournamentStubV5ProvidersRoute,
  postLolTournamentStubV5TournamentsRoute,
  postLolTournamentV5CodesRoute,
  postLolTournamentV5ProvidersRoute,
  postLolTournamentV5TournamentsRoute,
  putLolTournamentV5CodesTournamentCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lolHandler = app
  .openapi(getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolPlatformV3ChampionRotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1PlayersByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TournamentsByTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TournamentsTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueExpV4EntriesQueueTierDivisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4ChallengerleaguesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4EntriesByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4EntriesQueueTierDivisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4GrandmasterleaguesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4MasterleaguesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesChallengeIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesChallengeIdPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1PlayerDataPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolRsoMatchV1MatchesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolRsoMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolRsoMatchV1MatchesMatchIdTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolStatusV4PlatformDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesByPuuidPuuidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesReplaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesMatchIdTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolSummonerV4SummonersByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolSummonerV4SummonersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentStubV5CodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentStubV5CodesTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentStubV5ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentStubV5TournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentV5CodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentV5CodesTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLolTournamentV5CodesTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentV5GamesByCodeTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentV5LobbyEventsByCodeTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentV5ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentV5TournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
