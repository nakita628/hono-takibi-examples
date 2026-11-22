import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDisableUser(
  args: InferRequestType<(typeof client)['disable-user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['disable-user'].$post(args, options))
}

export async function postEnableUser(
  args: InferRequestType<(typeof client)['enable-user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['enable-user'].$post(args, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function postRegister(
  args: InferRequestType<typeof client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.register.$post(args, options))
}

export async function getServerSummaries(options?: ClientRequestOptions) {
  return await parseResponse(client['server-summaries'].$get(undefined, options))
}

export async function getServers(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.$get(undefined, options))
}

export async function postUsernameAvailable(
  args: InferRequestType<(typeof client)['username-available']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['username-available'].$post(args, options))
}
