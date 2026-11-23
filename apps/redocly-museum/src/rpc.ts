import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMuseumHours(
  args: InferRequestType<(typeof client)['museum-hours']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['museum-hours'].$get(args, options))
}

export async function getSpecialEvents(
  args: InferRequestType<(typeof client)['special-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['special-events'].$get(args, options))
}

export async function postSpecialEvents(
  args: InferRequestType<(typeof client)['special-events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['special-events'].$post(args, options))
}

export async function getSpecialEventsEventId(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['special-events'][':eventId'].$get(args, options))
}

export async function deleteSpecialEventsEventId(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['special-events'][':eventId'].$delete(args, options))
}

export async function patchSpecialEventsEventId(
  args: InferRequestType<(typeof client)['special-events'][':eventId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['special-events'][':eventId'].$patch(args, options))
}

export async function postTickets(
  args: InferRequestType<typeof client.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets.$post(args, options))
}

export async function getTicketsTicketIdQr(
  args: InferRequestType<(typeof client.tickets)[':ticketId']['qr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticketId'].qr.$get(args, options))
}
