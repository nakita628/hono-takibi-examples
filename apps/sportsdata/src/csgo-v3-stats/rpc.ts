import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatActiveMemberships(
  args: InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].ActiveMemberships.$get(args, options))
}

export async function getFormatAreas(
  args: InferRequestType<(typeof client)[':format']['Areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Areas.$get(args, options))
}

export async function getFormatBoxScoreGameid(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].BoxScore[':gameid'].$get(args, options))
}

export async function getFormatBoxScoresDate(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].BoxScores[':date'].$get(args, options))
}

export async function getFormatCompetitionDetailsCompetitionid(
  args: InferRequestType<
    (typeof client)[':format']['CompetitionDetails'][':competitionid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].CompetitionDetails[':competitionid'].$get(args, options),
  )
}

export async function getFormatCompetitions(
  args: InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Competitions.$get(args, options))
}

export async function getFormatGamesByDateDate(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].GamesByDate[':date'].$get(args, options))
}

export async function getFormatHistoricalMemberships(
  args: InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].HistoricalMemberships.$get(args, options))
}

export async function getFormatHistoricalMembershipsByTeamTeamid(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].HistoricalMembershipsByTeam[':teamid'].$get(args, options),
  )
}

export async function getFormatMembershipsByTeamTeamid(
  args: InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].MembershipsByTeam[':teamid'].$get(args, options))
}

export async function getFormatPlayerPlayerid(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Player[':playerid'].$get(args, options))
}

export async function getFormatPlayers(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Players.$get(args, options))
}

export async function getFormatPlayersByTeamTeamid(
  args: InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayersByTeam[':teamid'].$get(args, options))
}

export async function getFormatScheduleRoundid(
  args: InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Schedule[':roundid'].$get(args, options))
}

export async function getFormatSeasonTeamsSeasonid(
  args: InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].SeasonTeams[':seasonid'].$get(args, options))
}

export async function getFormatStandingsRoundid(
  args: InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Standings[':roundid'].$get(args, options))
}

export async function getFormatTeams(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Teams.$get(args, options))
}

export async function getFormatVenues(
  args: InferRequestType<(typeof client)[':format']['Venues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Venues.$get(args, options))
}
