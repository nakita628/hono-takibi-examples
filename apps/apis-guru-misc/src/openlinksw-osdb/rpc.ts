import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1ActionsServiceId(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.actions[':serviceId'].$get(args, options))
}

export async function getApiV1ActionsServiceIdActionId(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.actions[':serviceId'][':actionId'].$get(args, options))
}

export async function postApiV1ActionsServiceIdActionIdExec(
  args: InferRequestType<
    (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.actions[':serviceId'][':actionId'].exec.$post(args, options),
  )
}

export async function getApiV1ActionsServiceIdActionIdHelp(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.actions[':serviceId'][':actionId'].help.$get(args, options),
  )
}

export async function getApiV1Login(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.login.$get(undefined, options))
}

export async function getApiV1Logout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.logout.$get(undefined, options))
}

export async function getApiV1Services(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.services.$get(undefined, options))
}

export async function postApiV1Services(
  args: InferRequestType<typeof client.api.v1.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.services.$post(args, options))
}

export async function getApiV1ServicesServiceId(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.services[':serviceId'].$get(args, options))
}

export async function deleteApiV1ServicesServiceId(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.services[':serviceId'].$delete(args, options))
}
