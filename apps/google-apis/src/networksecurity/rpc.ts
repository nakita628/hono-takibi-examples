import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1AddressGroupAddItems(
  args: InferRequestType<(typeof client.v1beta1)[':addressGroup:addItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':addressGroup:addItems'].$post(args, options))
}

export async function postV1beta1AddressGroupCloneItems(
  args: InferRequestType<(typeof client.v1beta1)[':addressGroup:cloneItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':addressGroup:cloneItems'].$post(args, options))
}

export async function getV1beta1AddressGroupListReferences(
  args: InferRequestType<(typeof client.v1beta1)[':addressGroup:listReferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':addressGroup:listReferences'].$get(args, options))
}

export async function postV1beta1AddressGroupRemoveItems(
  args: InferRequestType<(typeof client.v1beta1)[':addressGroup:removeItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':addressGroup:removeItems'].$post(args, options))
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

export async function getV1beta1ParentAddressGroups(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['addressGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].addressGroups.$get(args, options))
}

export async function postV1beta1ParentAddressGroups(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['addressGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].addressGroups.$post(args, options))
}

export async function getV1beta1ParentAuthorizationPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['authorizationPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].authorizationPolicies.$get(args, options))
}

export async function postV1beta1ParentAuthorizationPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['authorizationPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].authorizationPolicies.$post(args, options))
}

export async function getV1beta1ParentClientTlsPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clientTlsPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].clientTlsPolicies.$get(args, options))
}

export async function postV1beta1ParentClientTlsPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clientTlsPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].clientTlsPolicies.$post(args, options))
}

export async function getV1beta1ParentGatewaySecurityPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['gatewaySecurityPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].gatewaySecurityPolicies.$get(args, options))
}

export async function postV1beta1ParentGatewaySecurityPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['gatewaySecurityPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].gatewaySecurityPolicies.$post(args, options))
}

export async function getV1beta1ParentRules(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].rules.$get(args, options))
}

export async function postV1beta1ParentRules(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].rules.$post(args, options))
}

export async function getV1beta1ParentServerTlsPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['serverTlsPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].serverTlsPolicies.$get(args, options))
}

export async function postV1beta1ParentServerTlsPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['serverTlsPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].serverTlsPolicies.$post(args, options))
}

export async function getV1beta1ParentTlsInspectionPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tlsInspectionPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tlsInspectionPolicies.$get(args, options))
}

export async function postV1beta1ParentTlsInspectionPolicies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tlsInspectionPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tlsInspectionPolicies.$post(args, options))
}

export async function getV1beta1ParentUrlLists(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['urlLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].urlLists.$get(args, options))
}

export async function postV1beta1ParentUrlLists(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['urlLists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].urlLists.$post(args, options))
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
