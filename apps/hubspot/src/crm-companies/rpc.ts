import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Companies(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].companies.$get(args, options))
}

export async function postCrmObjects202609Companies(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['companies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].companies.$post(args, options))
}

export async function postCrmObjects202609CompaniesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609CompaniesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609CompaniesBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609CompaniesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609CompaniesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609CompaniesGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609CompaniesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['companies']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].companies.merge.$post(args, options))
}

export async function postCrmObjects202609CompaniesSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['companies']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].companies.search.$post(args, options))
}

export async function getCrmObjects202609CompaniesCompanyId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['companies'][':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies[':companyId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609CompaniesCompanyId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies'][':companyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies[':companyId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609CompaniesCompanyId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies'][':companyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies[':companyId'].$patch(args, options),
  )
}

export async function getCrmObjects202609CompaniesCompanyIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['companies'][':companyId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].companies[':companyId'].associations[':toObjectType'].$get(
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
