import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreatePermit(
  args: InferRequestType<typeof client.createPermit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createPermit.$post(args, options))
}

export async function postDisable(
  args: InferRequestType<typeof client.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disable.$post(args, options))
}

export async function postDisablePermit(
  args: InferRequestType<typeof client.disablePermit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disablePermit.$post(args, options))
}

export async function postListRecurringDetails(
  args: InferRequestType<typeof client.listRecurringDetails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listRecurringDetails.$post(args, options))
}

export async function postNotifyShopper(
  args: InferRequestType<typeof client.notifyShopper.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifyShopper.$post(args, options))
}

export async function postScheduleAccountUpdater(
  args: InferRequestType<typeof client.scheduleAccountUpdater.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scheduleAccountUpdater.$post(args, options))
}
