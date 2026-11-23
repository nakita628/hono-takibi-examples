import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postReadCoreAsyncBatchAnalyze(
  args: InferRequestType<typeof client.read.core.asyncBatchAnalyze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.read.core.asyncBatchAnalyze.$post(args, options))
}

export async function getReadOperationsOperationId(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.read.operations[':operationId'].$get(args, options))
}

export async function postRecognizeText(
  args: InferRequestType<typeof client.recognizeText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recognizeText.$post(args, options))
}

export async function getTextOperationsOperationId(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.textOperations[':operationId'].$get(args, options))
}
