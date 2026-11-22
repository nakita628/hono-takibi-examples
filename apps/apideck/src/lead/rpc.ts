import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLeadLeads(
  args: InferRequestType<typeof client.lead.leads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lead.leads.$get(args, options))
}

export async function postLeadLeads(
  args: InferRequestType<typeof client.lead.leads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lead.leads.$post(args, options))
}

export async function getLeadLeadsId(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lead.leads[':id'].$get(args, options))
}

export async function deleteLeadLeadsId(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lead.leads[':id'].$delete(args, options))
}

export async function patchLeadLeadsId(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lead.leads[':id'].$patch(args, options))
}
