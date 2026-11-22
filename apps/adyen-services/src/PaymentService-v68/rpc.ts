import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAdjustAuthorisation(
  args: InferRequestType<typeof client.adjustAuthorisation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adjustAuthorisation.$post(args, options))
}

export async function postAuthorise(
  args: InferRequestType<typeof client.authorise.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorise.$post(args, options))
}

export async function postAuthorise3d(
  args: InferRequestType<typeof client.authorise3d.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorise3d.$post(args, options))
}

export async function postAuthorise3ds2(
  args: InferRequestType<typeof client.authorise3ds2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorise3ds2.$post(args, options))
}

export async function postCancel(
  args: InferRequestType<typeof client.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancel.$post(args, options))
}

export async function postCancelOrRefund(
  args: InferRequestType<typeof client.cancelOrRefund.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelOrRefund.$post(args, options))
}

export async function postCapture(
  args: InferRequestType<typeof client.capture.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.capture.$post(args, options))
}

export async function postDonate(
  args: InferRequestType<typeof client.donate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.donate.$post(args, options))
}

export async function postGetAuthenticationResult(
  args: InferRequestType<typeof client.getAuthenticationResult.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getAuthenticationResult.$post(args, options))
}

export async function postRefund(
  args: InferRequestType<typeof client.refund.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refund.$post(args, options))
}

export async function postRetrieve3ds2Result(
  args: InferRequestType<typeof client.retrieve3ds2Result.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retrieve3ds2Result.$post(args, options))
}

export async function postTechnicalCancel(
  args: InferRequestType<typeof client.technicalCancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.technicalCancel.$post(args, options))
}

export async function postVoidPendingRefund(
  args: InferRequestType<typeof client.voidPendingRefund.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voidPendingRefund.$post(args, options))
}
