import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Contracts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contracts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contracts.$get(args, options))
}

export async function postCrmObjects202609Contracts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contracts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contracts.$post(args, options))
}

export async function postCrmObjects202609ContractsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609ContractsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609ContractsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609ContractsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609ContractsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609ContractsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609ContractsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contracts']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contracts.merge.$post(args, options))
}

export async function postCrmObjects202609ContractsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contracts']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contracts.search.$post(args, options))
}

export async function getCrmObjects202609ContractsContractId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts'][':contractId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts[':contractId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609ContractsContractId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts'][':contractId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts[':contractId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609ContractsContractId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts'][':contractId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts[':contractId'].$patch(args, options),
  )
}

export async function getCrmObjects202609ContractsContractIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contracts'][':contractId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contracts[':contractId'].associations[':toObjectType'].$get(
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
