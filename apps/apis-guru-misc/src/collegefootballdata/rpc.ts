import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCalendar(
  args: InferRequestType<typeof client.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendar.$get(args, options))
}

export async function getCoaches(
  args: InferRequestType<typeof client.coaches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coaches.$get(args, options))
}

export async function getConferences(options?: ClientRequestOptions) {
  return await parseResponse(client.conferences.$get(undefined, options))
}

export async function getDraftPicks(
  args: InferRequestType<typeof client.draft.picks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.draft.picks.$get(args, options))
}

export async function getDraftPositions(options?: ClientRequestOptions) {
  return await parseResponse(client.draft.positions.$get(undefined, options))
}

export async function getDraftTeams(options?: ClientRequestOptions) {
  return await parseResponse(client.draft.teams.$get(undefined, options))
}

export async function getDrives(
  args: InferRequestType<typeof client.drives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives.$get(args, options))
}

export async function getGameBoxAdvanced(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.game.box.advanced.$get(args, options))
}

export async function getGames(
  args: InferRequestType<typeof client.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.$get(args, options))
}

export async function getGamesMedia(
  args: InferRequestType<typeof client.games.media.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.media.$get(args, options))
}

export async function getGamesPlayers(
  args: InferRequestType<typeof client.games.players.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.players.$get(args, options))
}

export async function getGamesTeams(
  args: InferRequestType<typeof client.games.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.teams.$get(args, options))
}

export async function getGamesWeather(
  args: InferRequestType<typeof client.games.weather.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.weather.$get(args, options))
}

export async function getLines(
  args: InferRequestType<typeof client.lines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lines.$get(args, options))
}

export async function getLivePlays(
  args: InferRequestType<typeof client.live.plays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.plays.$get(args, options))
}

export async function getMetricsWp(
  args: InferRequestType<typeof client.metrics.wp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.wp.$get(args, options))
}

export async function getMetricsWpPregame(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.wp.pregame.$get(args, options))
}

export async function getPlayStatTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.play.stat.types.$get(undefined, options))
}

export async function getPlayStats(
  args: InferRequestType<typeof client.play.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.play.stats.$get(args, options))
}

export async function getPlayTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.play.types.$get(undefined, options))
}

export async function getPlayerPortal(
  args: InferRequestType<typeof client.player.portal.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.player.portal.$get(args, options))
}

export async function getPlayerReturning(
  args: InferRequestType<typeof client.player.returning.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.player.returning.$get(args, options))
}

export async function getPlayerSearch(
  args: InferRequestType<typeof client.player.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.player.search.$get(args, options))
}

export async function getPlayerUsage(
  args: InferRequestType<typeof client.player.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.player.usage.$get(args, options))
}

export async function getPlays(
  args: InferRequestType<typeof client.plays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plays.$get(args, options))
}

export async function getPpaGames(
  args: InferRequestType<typeof client.ppa.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ppa.games.$get(args, options))
}

export async function getPpaPlayersGames(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ppa.players.games.$get(args, options))
}

export async function getPpaPlayersSeason(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ppa.players.season.$get(args, options))
}

export async function getPpaPredicted(
  args: InferRequestType<typeof client.ppa.predicted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ppa.predicted.$get(args, options))
}

export async function getPpaTeams(
  args: InferRequestType<typeof client.ppa.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ppa.teams.$get(args, options))
}

export async function getRankings(
  args: InferRequestType<typeof client.rankings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rankings.$get(args, options))
}

export async function getRatingsElo(
  args: InferRequestType<typeof client.ratings.elo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ratings.elo.$get(args, options))
}

export async function getRatingsSp(
  args: InferRequestType<typeof client.ratings.sp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ratings.sp.$get(args, options))
}

export async function getRatingsSpConferences(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ratings.sp.conferences.$get(args, options))
}

export async function getRatingsSrs(
  args: InferRequestType<typeof client.ratings.srs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ratings.srs.$get(args, options))
}

export async function getRecords(
  args: InferRequestType<typeof client.records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records.$get(args, options))
}

export async function getRecruitingGroups(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recruiting.groups.$get(args, options))
}

export async function getRecruitingPlayers(
  args: InferRequestType<typeof client.recruiting.players.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recruiting.players.$get(args, options))
}

export async function getRecruitingTeams(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recruiting.teams.$get(args, options))
}

export async function getRoster(
  args: InferRequestType<typeof client.roster.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roster.$get(args, options))
}

export async function getScoreboard(
  args: InferRequestType<typeof client.scoreboard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scoreboard.$get(args, options))
}

export async function getStatsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.categories.$get(undefined, options))
}

export async function getStatsGameAdvanced(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.game.advanced.$get(args, options))
}

export async function getStatsPlayerSeason(
  args: InferRequestType<typeof client.stats.player.season.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.player.season.$get(args, options))
}

export async function getStatsSeason(
  args: InferRequestType<typeof client.stats.season.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.season.$get(args, options))
}

export async function getStatsSeasonAdvanced(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.season.advanced.$get(args, options))
}

export async function getTalent(
  args: InferRequestType<typeof client.talent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.talent.$get(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function getTeamsFbs(
  args: InferRequestType<typeof client.teams.fbs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.fbs.$get(args, options))
}

export async function getTeamsMatchup(
  args: InferRequestType<typeof client.teams.matchup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.matchup.$get(args, options))
}

export async function getVenues(options?: ClientRequestOptions) {
  return await parseResponse(client.venues.$get(undefined, options))
}
