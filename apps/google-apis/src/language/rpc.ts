import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1DocumentsAnalyzeEntities(
  args: InferRequestType<(typeof client.v1beta1)['documents:analyzeEntities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['documents:analyzeEntities'].$post(args, options))
}

export async function postV1beta1DocumentsAnalyzeSentiment(
  args: InferRequestType<(typeof client.v1beta1)['documents:analyzeSentiment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['documents:analyzeSentiment'].$post(args, options))
}

export async function postV1beta1DocumentsAnalyzeSyntax(
  args: InferRequestType<(typeof client.v1beta1)['documents:analyzeSyntax']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['documents:analyzeSyntax'].$post(args, options))
}

export async function postV1beta1DocumentsAnnotateText(
  args: InferRequestType<(typeof client.v1beta1)['documents:annotateText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['documents:annotateText'].$post(args, options))
}
