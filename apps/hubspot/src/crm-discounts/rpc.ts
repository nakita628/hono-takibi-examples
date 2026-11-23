import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Discounts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['discounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].discounts.$get(args, options))
}

export async function postCrmObjects202609Discounts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['discounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].discounts.$post(args, options))
}

export async function postCrmObjects202609DiscountsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609DiscountsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609DiscountsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609DiscountsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609DiscountsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609DiscountsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609DiscountsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['discounts']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].discounts.merge.$post(args, options))
}

export async function postCrmObjects202609DiscountsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['discounts']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].discounts.search.$post(args, options))
}

export async function getCrmObjects202609DiscountsDiscountId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts'][':discountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts[':discountId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609DiscountsDiscountId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts'][':discountId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts[':discountId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609DiscountsDiscountId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts'][':discountId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts[':discountId'].$patch(args, options),
  )
}

export async function getCrmObjects202609DiscountsDiscountIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['discounts'][':discountId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].discounts[':discountId'].associations[':toObjectType'].$get(
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
