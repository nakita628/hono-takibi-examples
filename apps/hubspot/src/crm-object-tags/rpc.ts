import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjectTags202609ObjectTypeId(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-tags']['2026-09'][':objectTypeId'].$get(args, options),
  )
}

export async function postCrmObjectTags202609ObjectTypeId(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-tags']['2026-09'][':objectTypeId'].$post(args, options),
  )
}

export async function getCrmObjectTags202609ObjectTypeIdTagId(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$get(args, options),
  )
}

export async function putCrmObjectTags202609ObjectTypeIdTagId(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$put(args, options),
  )
}

export async function deleteCrmObjectTags202609ObjectTypeIdTagId(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$delete(args, options),
  )
}

export async function patchCrmObjectTags202609ObjectTypeIdTagId(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$patch(args, options),
  )
}
