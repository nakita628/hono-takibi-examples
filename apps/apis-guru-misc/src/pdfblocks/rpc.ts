import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AddPassword(
  args: InferRequestType<typeof client.v1.add_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.add_password.$post(args, options))
}

export async function postV1AddRestrictions(
  args: InferRequestType<typeof client.v1.add_restrictions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.add_restrictions.$post(args, options))
}

export async function postV1AddWatermarkImage(
  args: InferRequestType<typeof client.v1.add_watermark.image.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.add_watermark.image.$post(args, options))
}

export async function postV1AddWatermarkText(
  args: InferRequestType<typeof client.v1.add_watermark.text.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.add_watermark.text.$post(args, options))
}

export async function postV1ExtractPages(
  args: InferRequestType<typeof client.v1.extract_pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.extract_pages.$post(args, options))
}

export async function postV1MergeDocuments(
  args: InferRequestType<typeof client.v1.merge_documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.merge_documents.$post(args, options))
}

export async function postV1RemovePages(
  args: InferRequestType<typeof client.v1.remove_pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.remove_pages.$post(args, options))
}

export async function postV1RemovePassword(
  args: InferRequestType<typeof client.v1.remove_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.remove_password.$post(args, options))
}

export async function postV1RemoveRestrictions(
  args: InferRequestType<typeof client.v1.remove_restrictions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.remove_restrictions.$post(args, options))
}

export async function postV1RemoveSignatures(
  args: InferRequestType<typeof client.v1.remove_signatures.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.remove_signatures.$post(args, options))
}

export async function postV1ReversePages(
  args: InferRequestType<typeof client.v1.reverse_pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reverse_pages.$post(args, options))
}

export async function postV1RotatePages(
  args: InferRequestType<typeof client.v1.rotate_pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rotate_pages.$post(args, options))
}
