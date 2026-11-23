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

export async function getFormatCanceledMemberships(
  args: InferRequestType<(typeof client)[':format']['CanceledMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CanceledMemberships.$get(args, options))
}

export async function getFormatCompetitionDetailsCompetition(
  args: InferRequestType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].CompetitionDetails[':competition'].$get(args, options),
  )
}

export async function getFormatCompetitionHierarchy(
  args: InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CompetitionHierarchy.$get(args, options))
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

export async function getFormatHistoricalMembershipsByCompetitionCompetition(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].HistoricalMembershipsByCompetition[':competition'].$get(args, options),
  )
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

export async function getFormatMembershipsByCompetitionCompetition(
  args: InferRequestType<
    (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].MembershipsByCompetition[':competition'].$get(args, options),
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

export async function getFormatRecentlyChangedMembershipsDays(
  args: InferRequestType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RecentlyChangedMemberships[':days'].$get(args, options),
  )
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

export async function getFormatTeamGameStatsByDateDate(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].TeamGameStatsByDate[':date'].$get(args, options))
}

export async function getFormatTeamSeasonStatsRoundid(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].TeamSeasonStats[':roundid'].$get(args, options))
}

export async function getFormatTeams(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Teams.$get(args, options))
}

export async function getFormatUpcomingScheduleByPlayerPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].UpcomingScheduleByPlayer[':playerid'].$get(args, options),
  )
}

export async function getFormatVenues(
  args: InferRequestType<(typeof client)[':format']['Venues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Venues.$get(args, options))
}
