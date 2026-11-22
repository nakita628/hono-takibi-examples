import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRiotAccountV1AccountsByPuuidPuuid(
  args: InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.riot.account.v1.accounts['by-puuid'][':puuid'].$get(args, options),
  )
}

export async function getRiotAccountV1AccountsByRiotIdGameNameTagLine(
  args: InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.riot.account.v1.accounts['by-riot-id'][':gameName'][':tagLine'].$get(args, options),
  )
}

export async function getRiotAccountV1AccountsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.riot.account.v1.accounts.me.$get(undefined, options))
}

export async function getRiotAccountV1ActiveShardsByGameGameByPuuidPuuid(
  args: InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.riot.account.v1['active-shards']['by-game'][':game']['by-puuid'][':puuid'].$get(
      args,
      options,
    ),
  )
}

export async function getRiotAccountV1RegionByGameGameByPuuidPuuid(
  args: InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.riot.account.v1.region['by-game'][':game']['by-puuid'][':puuid'].$get(args, options),
  )
}

export async function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUID(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'].$get(
      args,
      options,
    ),
  )
}

export async function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionId(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'][
      'by-champion'
    ][':championId'].$get(args, options),
  )
}

export async function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTop(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'].top.$get(
      args,
      options,
    ),
  )
}

export async function getLolChampionMasteryV4ScoresByPuuidEncryptedPUUID(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['champion-mastery'].v4.scores['by-puuid'][':encryptedPUUID'].$get(args, options),
  )
}

export async function getLolPlatformV3ChampionRotations(options?: ClientRequestOptions) {
  return await parseResponse(client.lol.platform.v3['champion-rotations'].$get(undefined, options))
}

export async function getLolClashV1PlayersByPuuidPuuid(
  args: InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.clash.v1.players['by-puuid'][':puuid'].$get(args, options))
}

export async function getLolClashV1TeamsTeamId(
  args: InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.clash.v1.teams[':teamId'].$get(args, options))
}

export async function getLolClashV1Tournaments(options?: ClientRequestOptions) {
  return await parseResponse(client.lol.clash.v1.tournaments.$get(undefined, options))
}

export async function getLolClashV1TournamentsByTeamTeamId(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.clash.v1.tournaments['by-team'][':teamId'].$get(args, options),
  )
}

export async function getLolClashV1TournamentsTournamentId(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.clash.v1.tournaments[':tournamentId'].$get(args, options))
}

export async function getLolLeagueExpV4EntriesQueueTierDivision(
  args: InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['league-exp'].v4.entries[':queue'][':tier'][':division'].$get(args, options),
  )
}

export async function getLolLeagueV4ChallengerleaguesByQueueQueue(
  args: InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.league.v4.challengerleagues['by-queue'][':queue'].$get(args, options),
  )
}

export async function getLolLeagueV4EntriesByPuuidEncryptedPUUID(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.league.v4.entries['by-puuid'][':encryptedPUUID'].$get(args, options),
  )
}

export async function getLolLeagueV4EntriesQueueTierDivision(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.league.v4.entries[':queue'][':tier'][':division'].$get(args, options),
  )
}

export async function getLolLeagueV4GrandmasterleaguesByQueueQueue(
  args: InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.league.v4.grandmasterleagues['by-queue'][':queue'].$get(args, options),
  )
}

export async function getLolLeagueV4MasterleaguesByQueueQueue(
  args: InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.league.v4.masterleagues['by-queue'][':queue'].$get(args, options),
  )
}

export async function getLolChallengesV1ChallengesConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.lol.challenges.v1.challenges.config.$get(undefined, options))
}

export async function getLolChallengesV1ChallengesPercentiles(options?: ClientRequestOptions) {
  return await parseResponse(
    client.lol.challenges.v1.challenges.percentiles.$get(undefined, options),
  )
}

export async function getLolChallengesV1ChallengesChallengeIdConfig(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.challenges.v1.challenges[':challengeId'].config.$get(args, options),
  )
}

export async function getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevel(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.challenges.v1.challenges[':challengeId'].leaderboards['by-level'][':level'].$get(
      args,
      options,
    ),
  )
}

export async function getLolChallengesV1ChallengesChallengeIdPercentiles(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.challenges.v1.challenges[':challengeId'].percentiles.$get(args, options),
  )
}

export async function getLolChallengesV1PlayerDataPuuid(
  args: InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.challenges.v1['player-data'][':puuid'].$get(args, options))
}

export async function getLolRsoMatchV1MatchesIds(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol['rso-match'].v1.matches.ids.$get(args, options))
}

export async function getLolRsoMatchV1MatchesMatchId(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol['rso-match'].v1.matches[':matchId'].$get(args, options))
}

export async function getLolRsoMatchV1MatchesMatchIdTimeline(
  args: InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['rso-match'].v1.matches[':matchId'].timeline.$get(args, options),
  )
}

export async function getLolStatusV4PlatformData(options?: ClientRequestOptions) {
  return await parseResponse(client.lol.status.v4['platform-data'].$get(undefined, options))
}

export async function getLorDeckV1DecksMe(options?: ClientRequestOptions) {
  return await parseResponse(client.lor.deck.v1.decks.me.$get(undefined, options))
}

export async function postLorDeckV1DecksMe(
  args: InferRequestType<typeof client.lor.deck.v1.decks.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lor.deck.v1.decks.me.$post(args, options))
}

export async function getLorInventoryV1CardsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.lor.inventory.v1.cards.me.$get(undefined, options))
}

export async function getLorMatchV1MatchesByPuuidPuuidIds(
  args: InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lor.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, options),
  )
}

export async function getLorMatchV1MatchesMatchId(
  args: InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lor.match.v1.matches[':matchId'].$get(args, options))
}

export async function getLorRankedV1Leaderboards(options?: ClientRequestOptions) {
  return await parseResponse(client.lor.ranked.v1.leaderboards.$get(undefined, options))
}

export async function getLorStatusV1PlatformData(options?: ClientRequestOptions) {
  return await parseResponse(client.lor.status.v1['platform-data'].$get(undefined, options))
}

export async function getLolMatchV5MatchesByPuuidPuuidIds(
  args: InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.match.v5.matches['by-puuid'][':puuid'].ids.$get(args, options),
  )
}

export async function getLolMatchV5MatchesReplays(options?: ClientRequestOptions) {
  return await parseResponse(client.lol.match.v5.matches.replays.$get(undefined, options))
}

export async function getLolMatchV5MatchesMatchId(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.match.v5.matches[':matchId'].$get(args, options))
}

export async function getLolMatchV5MatchesMatchIdTimeline(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.match.v5.matches[':matchId'].timeline.$get(args, options))
}

export async function getRiftboundContentV1Contents(
  args: InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riftbound.content.v1.contents.$get(args, options))
}

export async function getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUID(
  args: InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.spectator.tft.v5['active-games']['by-puuid'][':encryptedPUUID'].$get(args, options),
  )
}

export async function getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUID(
  args: InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.spectator.v5['active-games']['by-summoner'][':encryptedPUUID'].$get(args, options),
  )
}

export async function getLolSummonerV4SummonersByPuuidEncryptedPUUID(
  args: InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.summoner.v4.summoners['by-puuid'][':encryptedPUUID'].$get(args, options),
  )
}

export async function getLolSummonerV4SummonersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.lol.summoner.v4.summoners.me.$get(undefined, options))
}

export async function getTftLeagueV1ByPuuidPuuid(
  args: InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tft.league.v1['by-puuid'][':puuid'].$get(args, options))
}

export async function getTftLeagueV1Challenger(
  args: InferRequestType<typeof client.tft.league.v1.challenger.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tft.league.v1.challenger.$get(args, options))
}

export async function getTftLeagueV1EntriesTierDivision(
  args: InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tft.league.v1.entries[':tier'][':division'].$get(args, options))
}

export async function getTftLeagueV1Grandmaster(
  args: InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tft.league.v1.grandmaster.$get(args, options))
}

export async function getTftLeagueV1Master(
  args: InferRequestType<typeof client.tft.league.v1.master.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tft.league.v1.master.$get(args, options))
}

export async function getTftLeagueV1RatedLaddersQueueTop(
  args: InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tft.league.v1['rated-ladders'][':queue'].top.$get(args, options),
  )
}

export async function getTftMatchV1MatchesByPuuidPuuidIds(
  args: InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tft.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, options),
  )
}

export async function getTftMatchV1MatchesMatchId(
  args: InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tft.match.v1.matches[':matchId'].$get(args, options))
}

export async function getTftStatusV1PlatformData(options?: ClientRequestOptions) {
  return await parseResponse(client.tft.status.v1['platform-data'].$get(undefined, options))
}

export async function getTftSummonerV1SummonersByPuuidEncryptedPUUID(
  args: InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tft.summoner.v1.summoners['by-puuid'][':encryptedPUUID'].$get(args, options),
  )
}

export async function getTftSummonerV1SummonersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.tft.summoner.v1.summoners.me.$get(undefined, options))
}

export async function postLolTournamentStubV5Codes(
  args: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol['tournament-stub'].v5.codes.$post(args, options))
}

export async function getLolTournamentStubV5CodesTournamentCode(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['tournament-stub'].v5.codes[':tournamentCode'].$get(args, options),
  )
}

export async function getLolTournamentStubV5LobbyEventsByCodeTournamentCode(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol['tournament-stub'].v5['lobby-events']['by-code'][':tournamentCode'].$get(
      args,
      options,
    ),
  )
}

export async function postLolTournamentStubV5Providers(
  args: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol['tournament-stub'].v5.providers.$post(args, options))
}

export async function postLolTournamentStubV5Tournaments(
  args: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol['tournament-stub'].v5.tournaments.$post(args, options))
}

export async function postLolTournamentV5Codes(
  args: InferRequestType<typeof client.lol.tournament.v5.codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.tournament.v5.codes.$post(args, options))
}

export async function getLolTournamentV5CodesTournamentCode(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.tournament.v5.codes[':tournamentCode'].$get(args, options))
}

export async function putLolTournamentV5CodesTournamentCode(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.tournament.v5.codes[':tournamentCode'].$put(args, options))
}

export async function getLolTournamentV5GamesByCodeTournamentCode(
  args: InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.tournament.v5.games['by-code'][':tournamentCode'].$get(args, options),
  )
}

export async function getLolTournamentV5LobbyEventsByCodeTournamentCode(
  args: InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lol.tournament.v5['lobby-events']['by-code'][':tournamentCode'].$get(args, options),
  )
}

export async function postLolTournamentV5Providers(
  args: InferRequestType<typeof client.lol.tournament.v5.providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.tournament.v5.providers.$post(args, options))
}

export async function postLolTournamentV5Tournaments(
  args: InferRequestType<typeof client.lol.tournament.v5.tournaments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lol.tournament.v5.tournaments.$post(args, options))
}

export async function getValMatchConsoleV1MatchesMatchId(
  args: InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.val.match.console.v1.matches[':matchId'].$get(args, options))
}

export async function getValMatchConsoleV1MatchlistsByPuuidPuuid(
  args: InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.val.match.console.v1.matchlists['by-puuid'][':puuid'].$get(args, options),
  )
}

export async function getValMatchConsoleV1RecentMatchesByQueueQueue(
  args: InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.val.match.console.v1['recent-matches']['by-queue'][':queue'].$get(args, options),
  )
}

export async function getValConsoleRankedV1LeaderboardsByActActId(
  args: InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.val.console.ranked.v1.leaderboards['by-act'][':actId'].$get(args, options),
  )
}

export async function getValContentV1Contents(
  args: InferRequestType<typeof client.val.content.v1.contents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.val.content.v1.contents.$get(args, options))
}

export async function getValMatchV1MatchesMatchId(
  args: InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.val.match.v1.matches[':matchId'].$get(args, options))
}

export async function getValMatchV1MatchlistsByPuuidPuuid(
  args: InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.val.match.v1.matchlists['by-puuid'][':puuid'].$get(args, options),
  )
}

export async function getValMatchV1RecentMatchesByQueueQueue(
  args: InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.val.match.v1['recent-matches']['by-queue'][':queue'].$get(args, options),
  )
}

export async function getValRankedV1LeaderboardsByActActId(
  args: InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.val.ranked.v1.leaderboards['by-act'][':actId'].$get(args, options),
  )
}

export async function getValStatusV1PlatformData(options?: ClientRequestOptions) {
  return await parseResponse(client.val.status.v1['platform-data'].$get(undefined, options))
}
