import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDesignerTemplatesIndex(
  args: InferRequestType<typeof client.designer.templates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates.index.$get(args, options))
}

export async function postDesignerTemplatesIndex(
  args: InferRequestType<typeof client.designer.templates.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates.index.$post(args, options))
}

export async function postDesignerTemplatesPreview(
  args: InferRequestType<typeof client.designer.templates.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates.preview.$post(args, options))
}

export async function getDesignerTemplatesId(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates[':id'].$get(args, options))
}

export async function putDesignerTemplatesId(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates[':id'].$put(args, options))
}

export async function deleteDesignerTemplatesId(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates[':id'].$delete(args, options))
}

export async function postDesignerTemplatesIdGenerate(
  args: InferRequestType<(typeof client.designer.templates)[':id']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designer.templates[':id'].generate.$post(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function postTemplates(
  args: InferRequestType<typeof client.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$post(args, options))
}

export async function getTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$get(args, options))
}

export async function putTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$put(args, options))
}

export async function deleteTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$delete(args, options))
}

export async function getTemplatesIdFile(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].file.$get(args, options))
}

export async function postTemplatesIdFill(
  args: InferRequestType<(typeof client.templates)[':id']['fill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].fill.$post(args, options))
}
