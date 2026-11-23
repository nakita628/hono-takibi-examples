import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatDriverRaceProjectionsRaceid(
  args: InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DriverRaceProjections[':raceid'].$get(args, options))
}

export async function getFormatDriverDriverid(
  args: InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].driver[':driverid'].$get(args, options))
}

export async function getFormatDrivers(
  args: InferRequestType<(typeof client)[':format']['drivers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].drivers.$get(args, options))
}

export async function getFormatRaceresultRaceid(
  args: InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].raceresult[':raceid'].$get(args, options))
}

export async function getFormatRacesSeason(
  args: InferRequestType<(typeof client)[':format']['races'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].races[':season'].$get(args, options))
}

export async function getFormatSeries(
  args: InferRequestType<(typeof client)[':format']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].series.$get(args, options))
}
