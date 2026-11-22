import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Tasks(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.$get(args, options))
}

export async function postCrmObjects202609Tasks(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.$post(args, options))
}

export async function postCrmObjects202609TasksBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tasks']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.batch.archive.$post(args, options))
}

export async function postCrmObjects202609TasksBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tasks']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.batch.create.$post(args, options))
}

export async function postCrmObjects202609TasksBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.batch.read.$post(args, options))
}

export async function postCrmObjects202609TasksBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tasks']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.batch.update.$post(args, options))
}

export async function postCrmObjects202609TasksBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tasks']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609TasksGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tasks['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609TasksMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.merge.$post(args, options))
}

export async function postCrmObjects202609TasksSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks.search.$post(args, options))
}

export async function getCrmObjects202609TasksTaskId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks[':taskId'].$get(args, options))
}

export async function deleteCrmObjects202609TasksTaskId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks'][':taskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks[':taskId'].$delete(args, options))
}

export async function patchCrmObjects202609TasksTaskId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['tasks'][':taskId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].tasks[':taskId'].$patch(args, options))
}

export async function getCrmObjects202609TasksTaskIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['tasks'][':taskId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].tasks[':taskId'].associations[':toObjectType'].$get(
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
