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

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function getV1beta1ParentEndpointPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['endpointPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].endpointPolicies.$get(args, options))
}

export async function postV1beta1ParentEndpointPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['endpointPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].endpointPolicies.$post(args, options))
}

export async function getV1beta1ParentGateways(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].gateways.$get(args, options))
}

export async function postV1beta1ParentGateways(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['gateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].gateways.$post(args, options))
}

export async function getV1beta1ParentGrpcRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['grpcRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].grpcRoutes.$get(args, options))
}

export async function postV1beta1ParentGrpcRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['grpcRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].grpcRoutes.$post(args, options))
}

export async function getV1beta1ParentHttpRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['httpRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].httpRoutes.$get(args, options))
}

export async function postV1beta1ParentHttpRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['httpRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].httpRoutes.$post(args, options))
}

export async function getV1beta1ParentMeshes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['meshes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].meshes.$get(args, options))
}

export async function postV1beta1ParentMeshes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['meshes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].meshes.$post(args, options))
}

export async function getV1beta1ParentServiceBindings(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['serviceBindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].serviceBindings.$get(args, options))
}

export async function postV1beta1ParentServiceBindings(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['serviceBindings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].serviceBindings.$post(args, options))
}

export async function getV1beta1ParentTcpRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tcpRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tcpRoutes.$get(args, options))
}

export async function postV1beta1ParentTcpRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tcpRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tcpRoutes.$post(args, options))
}

export async function getV1beta1ParentTlsRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tlsRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tlsRoutes.$get(args, options))
}

export async function postV1beta1ParentTlsRoutes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tlsRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tlsRoutes.$post(args, options))
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
