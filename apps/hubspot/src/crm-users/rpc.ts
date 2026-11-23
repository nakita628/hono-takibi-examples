import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Users(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.$get(args, options))
}

export async function postCrmObjects202609Users(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.$post(args, options))
}

export async function postCrmObjects202609UsersBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['users']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.batch.archive.$post(args, options))
}

export async function postCrmObjects202609UsersBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['users']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.batch.create.$post(args, options))
}

export async function postCrmObjects202609UsersBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.batch.read.$post(args, options))
}

export async function postCrmObjects202609UsersBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['users']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.batch.update.$post(args, options))
}

export async function postCrmObjects202609UsersBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['users']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609UsersGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].users['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609UsersMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.merge.$post(args, options))
}

export async function postCrmObjects202609UsersSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users.search.$post(args, options))
}

export async function getCrmObjects202609UsersUserId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users[':userId'].$get(args, options))
}

export async function deleteCrmObjects202609UsersUserId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users[':userId'].$delete(args, options))
}

export async function patchCrmObjects202609UsersUserId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['users'][':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].users[':userId'].$patch(args, options))
}

export async function getCrmObjects202609UsersUserIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['users'][':userId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].users[':userId'].associations[':toObjectType'].$get(
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
