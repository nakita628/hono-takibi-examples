import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1CustomerDisputes(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes.$get(args, options))
}

export async function getV1CustomerDisputesId(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id'].$get(args, options))
}

export async function patchV1CustomerDisputesId(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id'].$patch(args, options))
}

export async function postV1CustomerDisputesIdProvideEvidence(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['provide-evidence'].$post(args, options),
  )
}

export async function postV1CustomerDisputesIdAppeal(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id'].appeal.$post(args, options))
}

export async function postV1CustomerDisputesIdAcceptClaim(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['accept-claim'].$post(args, options),
  )
}

export async function postV1CustomerDisputesIdAdjudicate(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id'].adjudicate.$post(args, options))
}

export async function postV1CustomerDisputesIdRequireEvidence(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['require-evidence'].$post(args, options),
  )
}

export async function postV1CustomerDisputesIdEscalate(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id'].escalate.$post(args, options))
}

export async function postV1CustomerDisputesIdSendMessage(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['send-message'].$post(args, options),
  )
}

export async function postV1CustomerDisputesIdMakeOffer(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id']['make-offer'].$post(args, options))
}

export async function postV1CustomerDisputesIdAcceptOffer(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['accept-offer'].$post(args, options),
  )
}

export async function postV1CustomerDisputesIdDenyOffer(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customer.disputes[':id']['deny-offer'].$post(args, options))
}

export async function postV1CustomerDisputesIdAcknowledgeReturnItem(
  args: InferRequestType<
    (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['acknowledge-return-item'].$post(args, options),
  )
}

export async function postV1CustomerDisputesIdProvideSupportingInfo(
  args: InferRequestType<
    (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customer.disputes[':id']['provide-supporting-info'].$post(args, options),
  )
}
