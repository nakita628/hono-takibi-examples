import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBills(
  args: InferRequestType<typeof client.bills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bills.$get(args, options))
}

export async function getBillsOcdBillOpenstatesBillId(
  args: InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bills['ocd-bill'][':openstates_bill_id'].$get(args, options))
}

export async function getBillsJurisdictionSessionBillId(
  args: InferRequestType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bills[':jurisdiction'][':session'][':bill_id'].$get(args, options),
  )
}

export async function getCommittees(
  args: InferRequestType<typeof client.committees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committees.$get(args, options))
}

export async function getCommitteesCommitteeId(
  args: InferRequestType<(typeof client.committees)[':committee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committees[':committee_id'].$get(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].$get(args, options))
}

export async function getJurisdictions(
  args: InferRequestType<typeof client.jurisdictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jurisdictions.$get(args, options))
}

export async function getJurisdictionsJurisdictionId(
  args: InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jurisdictions[':jurisdiction_id'].$get(args, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getPeople(
  args: InferRequestType<typeof client.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$get(args, options))
}

export async function getPeopleGeo(
  args: InferRequestType<(typeof client)['people.geo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['people.geo'].$get(args, options))
}
