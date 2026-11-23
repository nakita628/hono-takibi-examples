import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postScheduler202609MeetingsCalendar(
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scheduler['2026-09'].meetings.calendar.$post(args, options))
}

export async function getScheduler202609MeetingsMeetingLinks(
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scheduler['2026-09'].meetings['meeting-links'].$get(args, options),
  )
}

export async function postScheduler202609MeetingsMeetingLinksBook(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scheduler['2026-09'].meetings['meeting-links'].book.$post(args, options),
  )
}

export async function getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlug(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scheduler['2026-09'].meetings['meeting-links'].book['availability-page'][':slug'].$get(
      args,
      options,
    ),
  )
}

export async function getScheduler202609MeetingsMeetingLinksBookSlug(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scheduler['2026-09'].meetings['meeting-links'].book[':slug'].$get(args, options),
  )
}
