import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatPlayByPlaySeasonWeekHometeam(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayByPlay[':season'][':week'][':hometeam'].$get(args, options),
  )
}

export async function getFormatPlayByPlayDeltaSeasonWeekMinutes(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayByPlayDelta[':season'][':week'][':minutes'].$get(args, options),
  )
}

export async function getFormatSimulatedPlayByPlayNumberofplays(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].SimulatedPlayByPlay[':numberofplays'].$get(args, options),
  )
}
