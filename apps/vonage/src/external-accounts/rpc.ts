import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function postMessenger(
  args: InferRequestType<typeof client.messenger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messenger.$post(args, options))
}

export async function getMessengerExternalId(
  args: InferRequestType<(typeof client.messenger)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messenger[':external_id'].$get(args, options))
}

export async function deleteMessengerExternalId(
  args: InferRequestType<(typeof client.messenger)[':external_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messenger[':external_id'].$delete(args, options))
}

export async function patchMessengerExternalId(
  args: InferRequestType<(typeof client.messenger)[':external_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messenger[':external_id'].$patch(args, options))
}

export async function getViberServiceMsgExternalId(
  args: InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.viber_service_msg[':external_id'].$get(args, options))
}

export async function getWhatsappExternalId(
  args: InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp[':external_id'].$get(args, options))
}

export async function postProviderExternalIdApplications(
  args: InferRequestType<(typeof client)[':provider'][':external_id']['applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':provider'][':external_id'].applications.$post(args, options))
}

export async function deleteProviderExternalIdApplicationsApplicationId(
  args: InferRequestType<
    (typeof client)[':provider'][':external_id']['applications'][':application_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':provider'][':external_id'].applications[':application_id'].$delete(args, options),
  )
}
