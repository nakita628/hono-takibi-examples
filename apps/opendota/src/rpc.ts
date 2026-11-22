import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMatchesMatchId(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches[':match_id'].$get(args, options))
}

export async function getPlayersAccountId(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].$get(args, options))
}

export async function getPlayersAccountIdWl(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].wl.$get(args, options))
}

export async function getPlayersAccountIdRecentMatches(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].recentMatches.$get(args, options))
}

export async function getPlayersAccountIdMatches(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].matches.$get(args, options))
}

export async function getPlayersAccountIdHeroes(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].heroes.$get(args, options))
}

export async function getPlayersAccountIdPeers(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].peers.$get(args, options))
}

export async function getPlayersAccountIdPros(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].pros.$get(args, options))
}

export async function getPlayersAccountIdTotals(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].totals.$get(args, options))
}

export async function getPlayersAccountIdCounts(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].counts.$get(args, options))
}

export async function getPlayersAccountIdHistogramsField(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].histograms[':field'].$get(args, options))
}

export async function getPlayersAccountIdWardmap(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].wardmap.$get(args, options))
}

export async function getPlayersAccountIdWordcloud(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].wordcloud.$get(args, options))
}

export async function getPlayersAccountIdRatings(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].ratings.$get(args, options))
}

export async function getPlayersAccountIdRankings(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].rankings.$get(args, options))
}

export async function postPlayersAccountIdRefresh(
  args: InferRequestType<(typeof client.players)[':account_id']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':account_id'].refresh.$post(args, options))
}

export async function getTopPlayers(
  args: InferRequestType<typeof client.topPlayers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topPlayers.$get(args, options))
}

export async function getProPlayers(options?: ClientRequestOptions) {
  return await parseResponse(client.proPlayers.$get(undefined, options))
}

export async function getProMatches(
  args: InferRequestType<typeof client.proMatches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proMatches.$get(args, options))
}

export async function getPublicMatches(
  args: InferRequestType<typeof client.publicMatches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publicMatches.$get(args, options))
}

export async function getParsedMatches(
  args: InferRequestType<typeof client.parsedMatches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parsedMatches.$get(args, options))
}

export async function getExplorer(
  args: InferRequestType<typeof client.explorer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.explorer.$get(args, options))
}

export async function getMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.metadata.$get(undefined, options))
}

export async function getDistributions(options?: ClientRequestOptions) {
  return await parseResponse(client.distributions.$get(undefined, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getRankings(
  args: InferRequestType<typeof client.rankings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rankings.$get(args, options))
}

export async function getBenchmarks(
  args: InferRequestType<typeof client.benchmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benchmarks.$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getRequestJobId(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':jobId'].$get(args, options))
}

export async function postRequestMatchId(
  args: InferRequestType<(typeof client.request)[':match_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':match_id'].$post(args, options))
}

export async function getFindMatches(
  args: InferRequestType<typeof client.findMatches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findMatches.$get(args, options))
}

export async function getHeroes(options?: ClientRequestOptions) {
  return await parseResponse(client.heroes.$get(undefined, options))
}

export async function getHeroStats(options?: ClientRequestOptions) {
  return await parseResponse(client.heroStats.$get(undefined, options))
}

export async function getHeroesHeroIdMatches(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.heroes[':hero_id'].matches.$get(args, options))
}

export async function getHeroesHeroIdMatchups(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.heroes[':hero_id'].matchups.$get(args, options))
}

export async function getHeroesHeroIdDurations(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.heroes[':hero_id'].durations.$get(args, options))
}

export async function getHeroesHeroIdPlayers(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.heroes[':hero_id'].players.$get(args, options))
}

export async function getHeroesHeroIdItemPopularity(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.heroes[':hero_id'].itemPopularity.$get(args, options))
}

export async function getLeagues(options?: ClientRequestOptions) {
  return await parseResponse(client.leagues.$get(undefined, options))
}

export async function getLeaguesLeagueId(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id'].$get(args, options))
}

export async function getLeaguesLeagueIdMatches(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id'].matches.$get(args, options))
}

export async function getLeaguesLeagueIdMatchIds(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id'].matchIds.$get(args, options))
}

export async function getLeaguesLeagueIdTeams(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id'].teams.$get(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function getTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$get(args, options))
}

export async function getTeamsTeamIdMatches(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].matches.$get(args, options))
}

export async function getTeamsTeamIdPlayers(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].players.$get(args, options))
}

export async function getTeamsTeamIdHeroes(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].heroes.$get(args, options))
}

export async function getRecordsField(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':field'].$get(args, options))
}

export async function getLive(options?: ClientRequestOptions) {
  return await parseResponse(client.live.$get(undefined, options))
}

export async function getScenariosItemTimings(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenarios.itemTimings.$get(args, options))
}

export async function getScenariosLaneRoles(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenarios.laneRoles.$get(args, options))
}

export async function getScenariosMisc(
  args: InferRequestType<typeof client.scenarios.misc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenarios.misc.$get(args, options))
}

export async function getSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.schema.$get(undefined, options))
}

export async function getConstantsResource(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.constants[':resource'].$get(args, options))
}
