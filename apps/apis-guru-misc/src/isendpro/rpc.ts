import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCampagne(
  args: InferRequestType<typeof client.campagne.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campagne.$get(args, options))
}

export async function postComptage(
  args: InferRequestType<typeof client.comptage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comptage.$post(args, options))
}

export async function getCredit(
  args: InferRequestType<typeof client.credit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit.$get(args, options))
}

export async function postDellistenoire(
  args: InferRequestType<typeof client.dellistenoire.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dellistenoire.$post(args, options))
}

export async function postGetlistenoire(
  args: InferRequestType<typeof client.getlistenoire.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getlistenoire.$post(args, options))
}

export async function postHlr(
  args: InferRequestType<typeof client.hlr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hlr.$post(args, options))
}

export async function putRepertoire(
  args: InferRequestType<typeof client.repertoire.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repertoire.$put(args, options))
}

export async function postRepertoire(
  args: InferRequestType<typeof client.repertoire.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repertoire.$post(args, options))
}

export async function postSetlistenoire(
  args: InferRequestType<typeof client.setlistenoire.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setlistenoire.$post(args, options))
}

export async function postShortlink(
  args: InferRequestType<typeof client.shortlink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shortlink.$post(args, options))
}

export async function postSms(
  args: InferRequestType<typeof client.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.$post(args, options))
}

export async function postSmsmulti(
  args: InferRequestType<typeof client.smsmulti.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsmulti.$post(args, options))
}

export async function putSubaccount(
  args: InferRequestType<typeof client.subaccount.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccount.$put(args, options))
}

export async function postSubaccount(
  args: InferRequestType<typeof client.subaccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccount.$post(args, options))
}
