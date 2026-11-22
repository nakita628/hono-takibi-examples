import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1CustomerPoliciesFilesUploadPolicyFile(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['files:uploadPolicyFile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['files:uploadPolicyFile'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesGroupsBatchDelete(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['groups:batchDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['groups:batchDelete'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesGroupsBatchModify(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['groups:batchModify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['groups:batchModify'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesGroupsListGroupPriorityOrdering(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['groups:listGroupPriorityOrdering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['groups:listGroupPriorityOrdering'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesGroupsUpdateGroupPriorityOrdering(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['groups:updateGroupPriorityOrdering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['groups:updateGroupPriorityOrdering'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesNetworksDefineCertificate(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['networks:defineCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['networks:defineCertificate'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesNetworksDefineNetwork(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['networks:defineNetwork']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['networks:defineNetwork'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesNetworksRemoveCertificate(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['networks:removeCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['networks:removeCertificate'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesNetworksRemoveNetwork(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['networks:removeNetwork']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['networks:removeNetwork'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesOrgunitsBatchInherit(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['orgunits:batchInherit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['orgunits:batchInherit'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesOrgunitsBatchModify(
  args: InferRequestType<
    (typeof client.v1)[':customer']['policies']['orgunits:batchModify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer'].policies['orgunits:batchModify'].$post(args, options),
  )
}

export async function postV1CustomerPoliciesResolve(
  args: InferRequestType<(typeof client.v1)[':customer']['policies:resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':customer']['policies:resolve'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function getV1ParentPolicySchemas(
  args: InferRequestType<(typeof client.v1)[':parent']['policySchemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].policySchemas.$get(args, options))
}
