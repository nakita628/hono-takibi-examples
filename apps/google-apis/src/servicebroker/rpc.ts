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

export async function getV1beta1NameLastOperation(
  args: InferRequestType<(typeof client.v1beta1)[':name']['last_operation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].last_operation.$get(args, options))
}

export async function getV1beta1ParentBindings(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['bindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].bindings.$get(args, options))
}

export async function getV1beta1ParentBrokers(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['brokers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].brokers.$get(args, options))
}

export async function postV1beta1ParentBrokers(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['brokers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].brokers.$post(args, options))
}

export async function getV1beta1ParentInstances(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].instances.$get(args, options))
}

export async function putV1beta1ParentServiceBindingsBindingId(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['service_bindings'][':binding_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].service_bindings[':binding_id'].$put(args, options),
  )
}

export async function getV1beta1ParentV2Catalog(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['v2']['catalog']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].v2.catalog.$get(args, options))
}

export async function putV1beta1ParentV2ServiceInstancesInstanceId(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['v2']['service_instances'][':instance_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].v2.service_instances[':instance_id'].$put(args, options),
  )
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}
