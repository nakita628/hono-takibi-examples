import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects20260903(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].$get(args, options))
}

export async function postCrmObjects20260903(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].$post(args, options))
}

export async function postCrmObjects20260903BatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-3']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-3'].batch.archive.$post(args, options),
  )
}

export async function postCrmObjects20260903BatchCreate(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['batch']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].batch.create.$post(args, options))
}

export async function postCrmObjects20260903BatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].batch.read.$post(args, options))
}

export async function postCrmObjects20260903BatchUpdate(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['batch']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].batch.update.$post(args, options))
}

export async function postCrmObjects20260903BatchUpsert(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['batch']['upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].batch.upsert.$post(args, options))
}

export async function postCrmObjects20260903GdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-3']['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects20260903Merge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].merge.$post(args, options))
}

export async function postCrmObjects20260903Search(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'].search.$post(args, options))
}

export async function getCrmObjects20260903DealId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3'][':dealId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'][':dealId'].$get(args, options))
}

export async function deleteCrmObjects20260903DealId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3'][':dealId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'][':dealId'].$delete(args, options))
}

export async function patchCrmObjects20260903DealId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-3'][':dealId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-3'][':dealId'].$patch(args, options))
}

export async function getCrmObjects20260903DealIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-3'][':dealId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-3'][':dealId'].associations[':toObjectType'].$get(
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
