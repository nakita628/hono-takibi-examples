import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatRotoBallerPremiumNews(
  args: InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].RotoBallerPremiumNews.$get(args, options))
}

export async function getFormatRotoBallerPremiumNewsByDateDate(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RotoBallerPremiumNewsByDate[':date'].$get(args, options),
  )
}

export async function getFormatRotoBallerPremiumNewsByPlayerIDPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RotoBallerPremiumNewsByPlayerID[':playerid'].$get(args, options),
  )
}

export async function getFormatRotoBallerPremiumNewsByTeamTeam(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByTeam'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RotoBallerPremiumNewsByTeam[':team'].$get(args, options),
  )
}
