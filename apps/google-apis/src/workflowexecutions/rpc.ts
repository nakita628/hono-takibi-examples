import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function postV1betaNameCancel(
  args: InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:cancel'].$post(args, options))
}

export async function getV1betaParentExecutions(
  args: InferRequestType<(typeof client.v1beta)[':parent']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].executions.$get(args, options))
}

export async function postV1betaParentExecutions(
  args: InferRequestType<(typeof client.v1beta)[':parent']['executions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].executions.$post(args, options))
}
