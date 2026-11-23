import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOrder(
  args: InferRequestType<typeof client.order.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order.$get(args, options))
}

export async function getOrderOrderId(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order[':orderId'].$get(args, options))
}

export async function getOrderOrderIdShippingFulfillment(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order[':orderId'].shipping_fulfillment.$get(args, options))
}

export async function postOrderOrderIdShippingFulfillment(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order[':orderId'].shipping_fulfillment.$post(args, options))
}

export async function getOrderOrderIdShippingFulfillmentFulfillmentId(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.order[':orderId'].shipping_fulfillment[':fulfillmentId'].$get(args, options),
  )
}

export async function postOrderOrderIdIssueRefund(
  args: InferRequestType<(typeof client.order)[':order_id']['issue_refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order[':order_id'].issue_refund.$post(args, options))
}

export async function getPaymentDisputePaymentDisputeId(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_dispute[':payment_dispute_id'].$get(args, options))
}

export async function postPaymentDisputePaymentDisputeIdAccept(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].accept.$post(args, options),
  )
}

export async function getPaymentDisputePaymentDisputeIdActivity(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].activity.$get(args, options),
  )
}

export async function postPaymentDisputePaymentDisputeIdAddEvidence(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].add_evidence.$post(args, options),
  )
}

export async function postPaymentDisputePaymentDisputeIdContest(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].contest.$post(args, options),
  )
}

export async function getPaymentDisputePaymentDisputeIdFetchEvidenceContent(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].fetch_evidence_content.$get(args, options),
  )
}

export async function postPaymentDisputePaymentDisputeIdUpdateEvidence(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].update_evidence.$post(args, options),
  )
}

export async function postPaymentDisputePaymentDisputeIdUploadEvidenceFile(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_dispute[':payment_dispute_id'].upload_evidence_file.$post(args, options),
  )
}

export async function getPaymentDisputeSummary(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_dispute_summary.$get(args, options))
}
