import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmExtensionsCardsDev202609SampleResponse(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09']['sample-response'].$get(undefined, options),
  )
}

export async function getCrmExtensionsCardsDev202609AppId(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09'][':appId'].$get(args, options),
  )
}

export async function postCrmExtensionsCardsDev202609AppId(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09'][':appId'].$post(args, options),
  )
}

export async function postCrmExtensionsCardsDev202609AppIdViewsMigrate(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09'][':appId'].views.migrate.$post(args, options),
  )
}

export async function getCrmExtensionsCardsDev202609AppIdCardId(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$get(args, options),
  )
}

export async function deleteCrmExtensionsCardsDev202609AppIdCardId(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$delete(args, options),
  )
}

export async function patchCrmExtensionsCardsDev202609AppIdCardId(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$patch(args, options),
  )
}
