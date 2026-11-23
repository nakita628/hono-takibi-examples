import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609ObjectType(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'][':objectType'].$get(args, options))
}

export async function postCrmObjects202609ObjectType(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'][':objectType'].$post(args, options))
}

export async function postCrmObjects202609ObjectTypeBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].merge.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].search.$post(args, options),
  )
}

export async function getCrmObjects202609ObjectTypeObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609ObjectTypeObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609ObjectTypeObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].$patch(args, options),
  )
}
