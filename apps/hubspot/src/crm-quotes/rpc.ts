import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Quotes(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.$get(args, options))
}

export async function postCrmObjects202609Quotes(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.$post(args, options))
}

export async function postCrmObjects202609QuotesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['quotes']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].quotes.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609QuotesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['quotes']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.batch.create.$post(args, options))
}

export async function postCrmObjects202609QuotesBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['quotes']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.batch.read.$post(args, options))
}

export async function postCrmObjects202609QuotesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['quotes']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.batch.update.$post(args, options))
}

export async function postCrmObjects202609QuotesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['quotes']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609QuotesGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].quotes['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609QuotesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.merge.$post(args, options))
}

export async function postCrmObjects202609QuotesSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes.search.$post(args, options))
}

export async function getCrmObjects202609QuotesQuoteId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes'][':quoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes[':quoteId'].$get(args, options))
}

export async function deleteCrmObjects202609QuotesQuoteId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes'][':quoteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].quotes[':quoteId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609QuotesQuoteId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['quotes'][':quoteId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].quotes[':quoteId'].$patch(args, options))
}

export async function getCrmObjects202609QuotesQuoteIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['quotes'][':quoteId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].quotes[':quoteId'].associations[':toObjectType'].$get(
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
