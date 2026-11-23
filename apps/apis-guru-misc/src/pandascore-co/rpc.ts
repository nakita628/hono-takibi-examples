import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdditions(
  args: InferRequestType<typeof client.additions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.additions.$get(args, options))
}

export async function getChanges(
  args: InferRequestType<typeof client.changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changes.$get(args, options))
}

export async function getDeletions(
  args: InferRequestType<typeof client.deletions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deletions.$get(args, options))
}

export async function getIncidents(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.$get(args, options))
}

export async function getLeagues(
  args: InferRequestType<typeof client.leagues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues.$get(args, options))
}

export async function getLeaguesLeagueIdOrSlug(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id_or_slug'].$get(args, options))
}

export async function getLeaguesLeagueIdOrSlugMatches(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id_or_slug'].matches.$get(args, options))
}

export async function getLeaguesLeagueIdOrSlugMatchesPast(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id_or_slug'].matches.past.$get(args, options))
}

export async function getLeaguesLeagueIdOrSlugMatchesRunning(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.leagues[':league_id_or_slug'].matches.running.$get(args, options),
  )
}

export async function getLeaguesLeagueIdOrSlugMatchesUpcoming(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.leagues[':league_id_or_slug'].matches.upcoming.$get(args, options),
  )
}

export async function getLeaguesLeagueIdOrSlugSeries(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id_or_slug'].series.$get(args, options))
}

export async function getLeaguesLeagueIdOrSlugTournaments(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leagues[':league_id_or_slug'].tournaments.$get(args, options))
}

export async function getLives(
  args: InferRequestType<typeof client.lives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lives.$get(args, options))
}

export async function getMatches(
  args: InferRequestType<typeof client.matches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches.$get(args, options))
}

export async function getMatchesPast(
  args: InferRequestType<typeof client.matches.past.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches.past.$get(args, options))
}

export async function getMatchesRunning(
  args: InferRequestType<typeof client.matches.running.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches.running.$get(args, options))
}

export async function getMatchesUpcoming(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches.upcoming.$get(args, options))
}

export async function getMatchesMatchIdOrSlug(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches[':match_id_or_slug'].$get(args, options))
}

export async function getMatchesMatchIdOrSlugOpponents(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matches[':match_id_or_slug'].opponents.$get(args, options))
}

export async function getPlayers(
  args: InferRequestType<typeof client.players.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players.$get(args, options))
}

export async function getPlayersPlayerIdOrSlug(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':player_id_or_slug'].$get(args, options))
}

export async function getPlayersPlayerIdOrSlugMatches(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':player_id_or_slug'].matches.$get(args, options))
}

export async function getSeries(
  args: InferRequestType<typeof client.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.$get(args, options))
}

export async function getSeriesPast(
  args: InferRequestType<typeof client.series.past.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.past.$get(args, options))
}

export async function getSeriesRunning(
  args: InferRequestType<typeof client.series.running.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.running.$get(args, options))
}

export async function getSeriesUpcoming(
  args: InferRequestType<typeof client.series.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.upcoming.$get(args, options))
}

export async function getSeriesSerieIdOrSlug(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie_id_or_slug'].$get(args, options))
}

export async function getSeriesSerieIdOrSlugMatches(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie_id_or_slug'].matches.$get(args, options))
}

export async function getSeriesSerieIdOrSlugMatchesPast(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie_id_or_slug'].matches.past.$get(args, options))
}

export async function getSeriesSerieIdOrSlugMatchesRunning(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie_id_or_slug'].matches.running.$get(args, options))
}

export async function getSeriesSerieIdOrSlugMatchesUpcoming(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':serie_id_or_slug'].matches.upcoming.$get(args, options),
  )
}

export async function getSeriesSerieIdOrSlugPlayers(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie_id_or_slug'].players.$get(args, options))
}

export async function getSeriesSerieIdOrSlugTournaments(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie_id_or_slug'].tournaments.$get(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function getTeamsTeamIdOrSlug(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id_or_slug'].$get(args, options))
}

export async function getTeamsTeamIdOrSlugLeagues(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id_or_slug'].leagues.$get(args, options))
}

export async function getTeamsTeamIdOrSlugMatches(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id_or_slug'].matches.$get(args, options))
}

export async function getTeamsTeamIdOrSlugSeries(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id_or_slug'].series.$get(args, options))
}

export async function getTeamsTeamIdOrSlugTournaments(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id_or_slug'].tournaments.$get(args, options))
}

export async function getTournaments(
  args: InferRequestType<typeof client.tournaments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tournaments.$get(args, options))
}

export async function getTournamentsPast(
  args: InferRequestType<typeof client.tournaments.past.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tournaments.past.$get(args, options))
}

export async function getTournamentsRunning(
  args: InferRequestType<typeof client.tournaments.running.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tournaments.running.$get(args, options))
}

export async function getTournamentsUpcoming(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tournaments.upcoming.$get(args, options))
}

export async function getTournamentsTournamentIdOrSlug(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tournaments[':tournament_id_or_slug'].$get(args, options))
}

export async function getTournamentsTournamentIdOrSlugBrackets(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tournaments[':tournament_id_or_slug'].brackets.$get(args, options),
  )
}

export async function getTournamentsTournamentIdOrSlugMatches(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tournaments[':tournament_id_or_slug'].matches.$get(args, options),
  )
}

export async function getTournamentsTournamentIdOrSlugPlayers(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tournaments[':tournament_id_or_slug'].players.$get(args, options),
  )
}

export async function getTournamentsTournamentIdOrSlugRosters(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tournaments[':tournament_id_or_slug'].rosters.$get(args, options),
  )
}

export async function getTournamentsTournamentIdOrSlugStandings(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tournaments[':tournament_id_or_slug'].standings.$get(args, options),
  )
}

export async function getTournamentsTournamentIdOrSlugTeams(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tournaments[':tournament_id_or_slug'].teams.$get(args, options))
}

export async function getVideogames(
  args: InferRequestType<typeof client.videogames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videogames.$get(args, options))
}

export async function getVideogamesVideogameIdOrSlug(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videogames[':videogame_id_or_slug'].$get(args, options))
}

export async function getVideogamesVideogameIdOrSlugLeagues(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videogames[':videogame_id_or_slug'].leagues.$get(args, options))
}

export async function getVideogamesVideogameIdOrSlugSeries(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videogames[':videogame_id_or_slug'].series.$get(args, options))
}

export async function getVideogamesVideogameIdOrSlugTournaments(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videogames[':videogame_id_or_slug'].tournaments.$get(args, options),
  )
}

export async function getVideogamesVideogameIdOrSlugVersions(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videogames[':videogame_id_or_slug'].versions.$get(args, options),
  )
}
