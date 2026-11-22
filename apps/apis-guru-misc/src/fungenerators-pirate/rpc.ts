import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPirateGenerateInsult(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pirate.generate.insult.$get(args, options))
}

export async function getPirateGenerateLoremIpsum(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pirate.generate['lorem-ipsum'].$get(args, options))
}

export async function getPirateGenerateName(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pirate.generate.name.$get(args, options))
}

export async function getPirateTranslate(
  args: InferRequestType<typeof client.pirate.translate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pirate.translate.$get(args, options))
}
