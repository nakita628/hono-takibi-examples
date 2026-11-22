import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deletePaymentsV1AuthorizationsAuthorizationToken(
  args: InferRequestType<
    (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments.v1.authorizations[':authorizationToken'].$delete(args, options),
  )
}

export async function postPaymentsV1AuthorizationsAuthorizationTokenCustomerToken(
  args: InferRequestType<
    (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments.v1.authorizations[':authorizationToken']['customer-token'].$post(args, options),
  )
}

export async function postPaymentsV1AuthorizationsAuthorizationTokenOrder(
  args: InferRequestType<
    (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments.v1.authorizations[':authorizationToken'].order.$post(args, options),
  )
}

export async function postPaymentsV1Sessions(
  args: InferRequestType<typeof client.payments.v1.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.v1.sessions.$post(args, options))
}

export async function getPaymentsV1SessionsSessionId(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.v1.sessions[':session_id'].$get(args, options))
}

export async function postPaymentsV1SessionsSessionId(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.v1.sessions[':session_id'].$post(args, options))
}
