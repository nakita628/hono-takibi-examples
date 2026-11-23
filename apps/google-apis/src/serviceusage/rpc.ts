import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Operations(
  args: InferRequestType<typeof client.v1beta1.operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.operations.$get(args, options))
}

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

export async function postV1beta1NameDisable(
  args: InferRequestType<(typeof client.v1beta1)[':name:disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:disable'].$post(args, options))
}

export async function postV1beta1NameEnable(
  args: InferRequestType<(typeof client.v1beta1)[':name:enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:enable'].$post(args, options))
}

export async function getV1beta1ParentAdminOverrides(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['adminOverrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].adminOverrides.$get(args, options))
}

export async function postV1beta1ParentAdminOverrides(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['adminOverrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].adminOverrides.$post(args, options))
}

export async function getV1beta1ParentConsumerOverrides(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consumerOverrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consumerOverrides.$get(args, options))
}

export async function postV1beta1ParentConsumerOverrides(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consumerOverrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consumerOverrides.$post(args, options))
}

export async function getV1beta1ParentConsumerQuotaMetrics(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consumerQuotaMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consumerQuotaMetrics.$get(args, options))
}

export async function postV1beta1ParentConsumerQuotaMetricsImportAdminOverrides(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['consumerQuotaMetrics:importAdminOverrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['consumerQuotaMetrics:importAdminOverrides'].$post(args, options),
  )
}

export async function postV1beta1ParentConsumerQuotaMetricsImportConsumerOverrides(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['consumerQuotaMetrics:importConsumerOverrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['consumerQuotaMetrics:importConsumerOverrides'].$post(args, options),
  )
}

export async function getV1beta1ParentServices(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].services.$get(args, options))
}

export async function postV1beta1ParentServicesBatchEnable(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['services:batchEnable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['services:batchEnable'].$post(args, options))
}

export async function postV1beta1ParentGenerateServiceIdentity(
  args: InferRequestType<(typeof client.v1beta1)[':parent:generateServiceIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:generateServiceIdentity'].$post(args, options))
}
