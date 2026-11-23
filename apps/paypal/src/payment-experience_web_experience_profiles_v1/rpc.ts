import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1PaymentExperienceWebProfiles(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1['payment-experience']['web-profiles'].$get(undefined, options),
  )
}

export async function postV1PaymentExperienceWebProfiles(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-experience']['web-profiles'].$post(args, options))
}

export async function getV1PaymentExperienceWebProfilesId(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-experience']['web-profiles'][':id'].$get(args, options),
  )
}

export async function putV1PaymentExperienceWebProfilesId(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-experience']['web-profiles'][':id'].$put(args, options),
  )
}

export async function deleteV1PaymentExperienceWebProfilesId(
  args: InferRequestType<
    (typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-experience']['web-profiles'][':id'].$delete(args, options),
  )
}

export async function patchV1PaymentExperienceWebProfilesId(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-experience']['web-profiles'][':id'].$patch(args, options),
  )
}
