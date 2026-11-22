import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2PaymentsAuthorizationsAuthorizationId(
  args: InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments.authorizations[':authorization_id'].$get(args, options),
  )
}

export async function postV2PaymentsAuthorizationsAuthorizationIdCapture(
  args: InferRequestType<
    (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments.authorizations[':authorization_id'].capture.$post(args, options),
  )
}

export async function postV2PaymentsAuthorizationsAuthorizationIdReauthorize(
  args: InferRequestType<
    (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments.authorizations[':authorization_id'].reauthorize.$post(args, options),
  )
}

export async function postV2PaymentsAuthorizationsAuthorizationIdVoid(
  args: InferRequestType<
    (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.payments.authorizations[':authorization_id'].void.$post(args, options),
  )
}

export async function getV2PaymentsCapturesCaptureId(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.captures[':capture_id'].$get(args, options))
}

export async function postV2PaymentsCapturesCaptureIdRefund(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.captures[':capture_id'].refund.$post(args, options))
}

export async function postV2PaymentsFindEligibleMethods(
  args: InferRequestType<(typeof client.v2.payments)['find-eligible-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments['find-eligible-methods'].$post(args, options))
}

export async function getV2PaymentsRefundsRefundId(
  args: InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.refunds[':refund_id'].$get(args, options))
}
