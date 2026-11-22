import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEarlyDayMotionId(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarlyDayMotion[':id'].$get(args, options))
}

export async function getEarlyDayMotionsList(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarlyDayMotions.list.$get(args, options))
}

export async function getOralquestionsList(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oralquestions.list.$get(args, options))
}

export async function getOralquestiontimesList(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oralquestiontimes.list.$get(args, options))
}
