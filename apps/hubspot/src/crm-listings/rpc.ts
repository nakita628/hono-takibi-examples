import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects2026090420(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-420'].$get(args, options))
}

export async function postCrmObjects2026090420(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-420'].$post(args, options))
}

export async function postCrmObjects2026090420BatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-420']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'].batch.archive.$post(args, options),
  )
}

export async function postCrmObjects2026090420BatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-420']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'].batch.create.$post(args, options),
  )
}

export async function postCrmObjects2026090420BatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-420'].batch.read.$post(args, options))
}

export async function postCrmObjects2026090420BatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-420']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'].batch.update.$post(args, options),
  )
}

export async function postCrmObjects2026090420BatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-420']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'].batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects2026090420Search(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-420'].search.$post(args, options))
}

export async function getCrmObjects2026090420ListingId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'][':listingId'].$get(args, options),
  )
}

export async function deleteCrmObjects2026090420ListingId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'][':listingId'].$delete(args, options),
  )
}

export async function patchCrmObjects2026090420ListingId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-420'][':listingId'].$patch(args, options),
  )
}

export async function postCrmObjects202609ListingsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['listings']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].listings['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609ListingsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['listings']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].listings.merge.$post(args, options))
}

export async function getCrmObjects202609ListingsListingIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].listings[':listingId'].associations[':toObjectType'].$get(
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
