import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1LexiconsLexiconName(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.lexicons[':LexiconName'].$get(args, options))
}

export async function putV1LexiconsLexiconName(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.lexicons[':LexiconName'].$put(args, options))
}

export async function deleteV1LexiconsLexiconName(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.lexicons[':LexiconName'].$delete(args, options))
}

export async function getV1Voices(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.$get(args, options))
}

export async function getV1SynthesisTasksTaskId(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.synthesisTasks[':TaskId'].$get(args, options))
}

export async function getV1Lexicons(
  args: InferRequestType<typeof client.v1.lexicons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.lexicons.$get(args, options))
}

export async function getV1SynthesisTasks(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.synthesisTasks.$get(args, options))
}

export async function postV1SynthesisTasks(
  args: InferRequestType<typeof client.v1.synthesisTasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.synthesisTasks.$post(args, options))
}

export async function postV1Speech(
  args: InferRequestType<typeof client.v1.speech.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.speech.$post(args, options))
}
