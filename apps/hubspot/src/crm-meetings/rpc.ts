import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Meetings(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['meetings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].meetings.$get(args, options))
}

export async function postCrmObjects202609Meetings(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['meetings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].meetings.$post(args, options))
}

export async function postCrmObjects202609MeetingsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609MeetingsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609MeetingsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].meetings.batch.read.$post(args, options))
}

export async function postCrmObjects202609MeetingsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609MeetingsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609MeetingsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609MeetingsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['meetings']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].meetings.merge.$post(args, options))
}

export async function postCrmObjects202609MeetingsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['meetings']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].meetings.search.$post(args, options))
}

export async function getCrmObjects202609MeetingsMeetingId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['meetings'][':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings[':meetingId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609MeetingsMeetingId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings'][':meetingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings[':meetingId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609MeetingsMeetingId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings'][':meetingId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings[':meetingId'].$patch(args, options),
  )
}

export async function getCrmObjects202609MeetingsMeetingIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['meetings'][':meetingId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].meetings[':meetingId'].associations[':toObjectType'].$get(
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
