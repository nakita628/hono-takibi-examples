import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609PostalMail(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['postal_mail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].postal_mail.$get(args, options))
}

export async function postCrmObjects202609PostalMail(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['postal_mail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].postal_mail.$post(args, options))
}

export async function postCrmObjects202609PostalMailBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609PostalMailBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609PostalMailBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609PostalMailBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609PostalMailBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609PostalMailGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609PostalMailMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['postal_mail']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].postal_mail.merge.$post(args, options))
}

export async function postCrmObjects202609PostalMailSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['postal_mail']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].postal_mail.search.$post(args, options))
}

export async function getCrmObjects202609PostalMailPostalMailId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail'][':postalMailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail[':postalMailId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609PostalMailPostalMailId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail'][':postalMailId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail[':postalMailId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609PostalMailPostalMailId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail'][':postalMailId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail[':postalMailId'].$patch(args, options),
  )
}

export async function getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['postal_mail'][':postalMailId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].postal_mail[':postalMailId'].associations[':toObjectType'].$get(
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
