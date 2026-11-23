import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1IntegrationsWebhooks(
  args: InferRequestType<typeof client.v1.integrations.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.webhooks.$get(args, options))
}

export async function postV1IntegrationsWebhooks(
  args: InferRequestType<typeof client.v1.integrations.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.webhooks.$post(args, options))
}

export async function deleteV1IntegrationsWebhooksId(
  args: InferRequestType<(typeof client.v1.integrations.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.webhooks[':id'].$delete(args, options))
}

export async function getV4Domains(
  args: InferRequestType<typeof client.v4.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains.$get(args, options))
}

export async function getV4DomainsName(
  args: InferRequestType<(typeof client.v4.domains)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains[':name'].$get(args, options))
}
