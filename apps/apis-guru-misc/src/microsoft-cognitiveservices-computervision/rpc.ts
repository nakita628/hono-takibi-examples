import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnalyze(
  args: InferRequestType<typeof client.analyze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyze.$post(args, options))
}

export async function postAreaOfInterest(
  args: InferRequestType<typeof client.areaOfInterest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.areaOfInterest.$post(args, options))
}

export async function postDescribe(
  args: InferRequestType<typeof client.describe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describe.$post(args, options))
}

export async function postDetect(
  args: InferRequestType<typeof client.detect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detect.$post(args, options))
}

export async function postGenerateThumbnail(
  args: InferRequestType<typeof client.generateThumbnail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generateThumbnail.$post(args, options))
}

export async function getModels(options?: ClientRequestOptions) {
  return await parseResponse(client.models.$get(undefined, options))
}

export async function postModelsModelAnalyze(
  args: InferRequestType<(typeof client.models)[':model']['analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model'].analyze.$post(args, options))
}

export async function postOcr(
  args: InferRequestType<typeof client.ocr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.$post(args, options))
}

export async function postTag(
  args: InferRequestType<typeof client.tag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tag.$post(args, options))
}
