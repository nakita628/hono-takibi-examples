import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatDfsSlateOwnershipProjectionsBySlateIDSlateId(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].DfsSlateOwnershipProjectionsBySlateID[':slateId'].$get(args, options),
  )
}

export async function getFormatDfsSlatesByDateDate(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, options))
}

export async function getFormatDfsSlatesByWeekSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].DfsSlatesByWeek[':season'][':week'].$get(args, options),
  )
}

export async function getFormatFantasyDefenseProjectionsByGameSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].FantasyDefenseProjectionsByGame[':season'][':week'].$get(args, options),
  )
}

export async function getFormatFantasyDefenseProjectionsBySeasonSeason(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].FantasyDefenseProjectionsBySeason[':season'].$get(args, options),
  )
}

export async function getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].IdpPlayerGameProjectionStatsByPlayerID[':season'][':week'][':playerid'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeam(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].IdpPlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].IdpPlayerGameProjectionStatsByWeek[':season'][':week'].$get(args, options),
  )
}

export async function getFormatInjuredPlayers(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].InjuredPlayers.$get(args, options))
}

export async function getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameProjectionStatsByPlayerID[':season'][':week'][':playerid'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeam(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatPlayerGameProjectionStatsByWeekSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameProjectionStatsByWeek[':season'][':week'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonProjectionStatsSeason(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonProjectionStats[':season'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonProjectionStatsByPlayerID[':season'][':playerid'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatPlayerSeasonProjectionStatsByTeamSeasonTeam(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonProjectionStatsByTeam[':season'][':team'].$get(args, options),
  )
}

export async function getFormatUpcomingDfsSlateOwnershipProjections(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].UpcomingDfsSlateOwnershipProjections.$get(args, options),
  )
}
