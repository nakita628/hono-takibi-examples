import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDynamicOffers(
  args: InferRequestType<typeof client.dynamicOffers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamicOffers.$get(args, options))
}

export async function postDynamicOffersIdCalculate(
  args: InferRequestType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamicOffers[':id'].calculate.$post(args, options))
}

export async function postDynamicOffersIdGrantOffer(
  args: InferRequestType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamicOffers[':id'].grantOffer.$post(args, options))
}

export async function getGrantAccountsId(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grantAccounts[':id'].$get(args, options))
}

export async function getGrantOffers(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grantOffers.$get(args, options))
}

export async function getGrantOffersId(
  args: InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grantOffers[':id'].$get(args, options))
}

export async function getGrants(
  args: InferRequestType<typeof client.grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants.$get(args, options))
}

export async function postGrants(
  args: InferRequestType<typeof client.grants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants.$post(args, options))
}

export async function getGrantsGrantId(
  args: InferRequestType<(typeof client.grants)[':grantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants[':grantId'].$get(args, options))
}

export async function getGrantsGrantIdDisbursements(
  args: InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants[':grantId'].disbursements.$get(args, options))
}

export async function getGrantsGrantIdDisbursementsDisbursementId(
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.grants[':grantId'].disbursements[':disbursementId'].$get(args, options),
  )
}

export async function patchGrantsGrantIdDisbursementsDisbursementId(
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.grants[':grantId'].disbursements[':disbursementId'].$patch(args, options),
  )
}
