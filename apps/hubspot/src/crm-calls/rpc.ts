import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Calls(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.$get(args, options))
}

export async function postCrmObjects202609Calls(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.$post(args, options))
}

export async function postCrmObjects202609CallsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['calls']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.batch.archive.$post(args, options))
}

export async function postCrmObjects202609CallsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['calls']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.batch.create.$post(args, options))
}

export async function postCrmObjects202609CallsBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.batch.read.$post(args, options))
}

export async function postCrmObjects202609CallsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['calls']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.batch.update.$post(args, options))
}

export async function postCrmObjects202609CallsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['calls']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609CallsGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].calls['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609CallsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.merge.$post(args, options))
}

export async function postCrmObjects202609CallsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls.search.$post(args, options))
}

export async function getCrmObjects202609CallsCallId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls'][':callId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls[':callId'].$get(args, options))
}

export async function deleteCrmObjects202609CallsCallId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls'][':callId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls[':callId'].$delete(args, options))
}

export async function patchCrmObjects202609CallsCallId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['calls'][':callId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].calls[':callId'].$patch(args, options))
}

export async function getCrmObjects202609CallsCallIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['calls'][':callId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].calls[':callId'].associations[':toObjectType'].$get(
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
