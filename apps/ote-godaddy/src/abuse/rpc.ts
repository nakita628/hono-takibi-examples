import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AbuseTickets(
  args: InferRequestType<typeof client.v1.abuse.tickets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.abuse.tickets.$get(args, options))
}

export async function postV1AbuseTickets(
  args: InferRequestType<typeof client.v1.abuse.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.abuse.tickets.$post(args, options))
}

export async function getV1AbuseTicketsTicketId(
  args: InferRequestType<(typeof client.v1.abuse.tickets)[':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.abuse.tickets[':ticketId'].$get(args, options))
}
