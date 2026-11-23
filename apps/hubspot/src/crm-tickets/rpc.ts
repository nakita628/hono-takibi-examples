import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Tickets(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tickets.$get(args, options))
}

export async function postCrmObjects202609Tickets(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tickets.$post(args, options))
}

export async function postCrmObjects202609TicketsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609TicketsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609TicketsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tickets.batch.read.$post(args, options))
}

export async function postCrmObjects202609TicketsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609TicketsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609TicketsGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609TicketsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tickets.merge.$post(args, options))
}

export async function postCrmObjects202609TicketsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tickets.search.$post(args, options))
}

export async function getCrmObjects202609TicketsTicketId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tickets[':ticketId'].$get(args, options))
}

export async function deleteCrmObjects202609TicketsTicketId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets[':ticketId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609TicketsTicketId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets[':ticketId'].$patch(args, options),
  )
}

export async function getCrmObjects202609TicketsTicketIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tickets'][':ticketId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tickets[':ticketId'].associations[':toObjectType'].$get(
      args,
      options,
    ),
  )
}

export async function putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
      ':toObjectType'
    ][':toObjectId'].$put(args, options),
  )
}

export async function putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$put(args, options),
  )
}

export async function deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$delete(args, options),
  )
}
