import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getShakespeareGenerateInsult(
  args: InferRequestType<typeof client.shakespeare.generate.insult.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shakespeare.generate.insult.$get(args, options))
}

export async function getShakespeareGenerateLoremIpsum(
  args: InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shakespeare.generate['lorem-ipsum'].$get(args, options))
}

export async function getShakespeareGenerateName(
  args: InferRequestType<typeof client.shakespeare.generate.name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shakespeare.generate.name.$get(args, options))
}

export async function getShakespeareQuote(options?: ClientRequestOptions) {
  return await parseResponse(client.shakespeare.quote.$get(undefined, options))
}

export async function getShakespeareTranslate(
  args: InferRequestType<typeof client.shakespeare.translate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shakespeare.translate.$get(args, options))
}
