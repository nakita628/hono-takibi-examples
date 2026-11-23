import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBarcodeDecode(
  args: InferRequestType<typeof client.barcode.decode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.barcode.decode.$post(args, options))
}

export async function getBarcodeDecodeTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.barcode.decode.types.$get(undefined, options))
}

export async function getBarcodeEncode(
  args: InferRequestType<typeof client.barcode.encode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.barcode.encode.$get(args, options))
}

export async function getBarcodeEncodeTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.barcode.encode.types.$get(undefined, options))
}
