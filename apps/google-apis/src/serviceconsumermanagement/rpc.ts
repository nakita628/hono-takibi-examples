import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1ParentConsumerQuotaMetrics(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consumerQuotaMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consumerQuotaMetrics.$get(args, options))
}

export async function postV1beta1ParentConsumerQuotaMetricsImportProducerOverrides(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['consumerQuotaMetrics:importProducerOverrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['consumerQuotaMetrics:importProducerOverrides'].$post(args, options),
  )
}

export async function getV1beta1ParentProducerOverrides(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['producerOverrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].producerOverrides.$get(args, options))
}

export async function postV1beta1ParentProducerOverrides(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['producerOverrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].producerOverrides.$post(args, options))
}
