import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteAccounts(
  args: InferRequestType<typeof client.accounts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$delete(args, options))
}

export async function postAccountsUpsert(
  args: InferRequestType<typeof client.accounts.upsert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.upsert.$post(args, options))
}

export async function postAccountsUsersAdd(
  args: InferRequestType<typeof client.accounts.users.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.users.add.$post(args, options))
}

export async function postAccountsUsersRemove(
  args: InferRequestType<typeof client.accounts.users.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.users.remove.$post(args, options))
}

export async function getEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.events.$get(undefined, options))
}

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postLink(
  args: InferRequestType<typeof client.link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.link.$post(args, options))
}

export async function getPropertiesAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.properties.accounts.$get(undefined, options))
}

export async function getPropertiesUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.properties.users.$get(undefined, options))
}

export async function getSegmentsAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.segments.accounts.$get(undefined, options))
}

export async function getSegmentsUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.segments.users.$get(undefined, options))
}

export async function postTrack(
  args: InferRequestType<typeof client.track.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.track.$post(args, options))
}

export async function getTrackingSnippet(
  args: InferRequestType<typeof client.tracking.snippet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking.snippet.$get(args, options))
}

export async function deleteUsers(
  args: InferRequestType<typeof client.users.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$delete(args, options))
}

export async function postUsersUpsert(
  args: InferRequestType<typeof client.users.upsert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.upsert.$post(args, options))
}

export async function getValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.validate.$get(undefined, options))
}
