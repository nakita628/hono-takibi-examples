import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alpha1Customers(
  args: InferRequestType<typeof client.v1alpha1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1.customers.$get(args, options))
}

export async function postV1alpha1CustomersProvisionDeployment(
  args: InferRequestType<(typeof client.v1alpha1)['customers:provisionDeployment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['customers:provisionDeployment'].$post(args, options))
}

export async function postV1alpha1InstallerGenerateSecret(
  args: InferRequestType<(typeof client.v1alpha1)['installer:generateSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['installer:generateSecret'].$post(args, options))
}

export async function postV1alpha1InstallerValidate(
  args: InferRequestType<(typeof client.v1alpha1)['installer:validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['installer:validate'].$post(args, options))
}

export async function postV1alpha1PoliciesGet(
  args: InferRequestType<(typeof client.v1alpha1)['policies:get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['policies:get'].$post(args, options))
}

export async function postV1alpha1PoliciesSet(
  args: InferRequestType<(typeof client.v1alpha1)['policies:set']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['policies:set'].$post(args, options))
}

export async function postV1alpha1PoliciesTest(
  args: InferRequestType<(typeof client.v1alpha1)['policies:test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['policies:test'].$post(args, options))
}

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}

export async function patchV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$patch(args, options))
}

export async function postV1alpha1NameMove(
  args: InferRequestType<(typeof client.v1alpha1)[':name:move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:move'].$post(args, options))
}

export async function postV1alpha1NameSignDevice(
  args: InferRequestType<(typeof client.v1alpha1)[':name:signDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:signDevice'].$post(args, options))
}

export async function patchV1alpha1NameUpdateSigned(
  args: InferRequestType<(typeof client.v1alpha1)[':name:updateSigned']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:updateSigned'].$patch(args, options))
}

export async function getV1alpha1ParentDeployments(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].deployments.$get(args, options))
}

export async function postV1alpha1ParentDeployments(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].deployments.$post(args, options))
}

export async function getV1alpha1ParentDevices(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].devices.$get(args, options))
}

export async function postV1alpha1ParentDevices(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].devices.$post(args, options))
}

export async function postV1alpha1ParentDevicesCreateSigned(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['devices:createSigned']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1alpha1[':parent']['devices:createSigned'].$post(args, options),
  )
}

export async function getV1alpha1ParentNodes(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].nodes.$get(args, options))
}

export async function postV1alpha1ParentNodes(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].nodes.$post(args, options))
}
