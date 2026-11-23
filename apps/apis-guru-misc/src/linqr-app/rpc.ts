import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBatchQrcode(
  args: InferRequestType<typeof client.batch.qrcode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.qrcode.$post(args, options))
}

export async function getImages(options?: ClientRequestOptions) {
  return await parseResponse(client.images.$get(undefined, options))
}

export async function postImages(
  args: InferRequestType<typeof client.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$post(args, options))
}

export async function getImagesId(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].$get(args, options))
}

export async function deleteImagesId(
  args: InferRequestType<(typeof client.images)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].$delete(args, options))
}

export async function postQrcode(
  args: InferRequestType<typeof client.qrcode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.$post(args, options))
}

export async function postQrcodeContact(
  args: InferRequestType<typeof client.qrcode.contact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.contact.$post(args, options))
}

export async function postQrcodeCrypto(
  args: InferRequestType<typeof client.qrcode.crypto.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.crypto.$post(args, options))
}

export async function postQrcodeEmail(
  args: InferRequestType<typeof client.qrcode.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.email.$post(args, options))
}

export async function postQrcodeGeo(
  args: InferRequestType<typeof client.qrcode.geo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.geo.$post(args, options))
}

export async function postQrcodePhone(
  args: InferRequestType<typeof client.qrcode.phone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.phone.$post(args, options))
}

export async function postQrcodeSms(
  args: InferRequestType<typeof client.qrcode.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.sms.$post(args, options))
}

export async function postQrcodeText(
  args: InferRequestType<typeof client.qrcode.text.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.text.$post(args, options))
}

export async function postQrcodeWifi(
  args: InferRequestType<typeof client.qrcode.wifi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qrcode.wifi.$post(args, options))
}
