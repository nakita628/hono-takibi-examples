import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmProperties202609ObjectType(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.properties['2026-09'][':objectType'].$get(args, options))
}

export async function postCrmProperties202609ObjectType(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.properties['2026-09'][':objectType'].$post(args, options))
}

export async function postCrmProperties202609ObjectTypeBatchArchive(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].batch.archive.$post(args, options),
  )
}

export async function postCrmProperties202609ObjectTypeBatchCreate(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].batch.create.$post(args, options),
  )
}

export async function postCrmProperties202609ObjectTypeBatchRead(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].batch.read.$post(args, options),
  )
}

export async function getCrmProperties202609ObjectTypeGroups(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].groups.$get(args, options),
  )
}

export async function postCrmProperties202609ObjectTypeGroups(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].groups.$post(args, options),
  )
}

export async function getCrmProperties202609ObjectTypeGroupsGroupName(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$get(args, options),
  )
}

export async function deleteCrmProperties202609ObjectTypeGroupsGroupName(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$delete(args, options),
  )
}

export async function patchCrmProperties202609ObjectTypeGroupsGroupName(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$patch(args, options),
  )
}

export async function getCrmProperties202609ObjectTypePropertyName(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'][':propertyName'].$get(args, options),
  )
}

export async function deleteCrmProperties202609ObjectTypePropertyName(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'][':propertyName'].$delete(args, options),
  )
}

export async function patchCrmProperties202609ObjectTypePropertyName(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.properties['2026-09'][':objectType'][':propertyName'].$patch(args, options),
  )
}
