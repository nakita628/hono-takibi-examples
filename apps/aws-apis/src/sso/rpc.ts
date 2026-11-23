import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFederationCredentialsRoleNameAccountIdXAmzSsoBearerToken(
  args: InferRequestType<
    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.federation['credentials#role_name&account_id&x-amz-sso_bearer_token'].$get(
      args,
      options,
    ),
  )
}

export async function getAssignmentRolesXAmzSsoBearerTokenAccountId(
  args: InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assignment['roles#x-amz-sso_bearer_token&account_id'].$get(args, options),
  )
}

export async function getAssignmentAccountsXAmzSsoBearerToken(
  args: InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assignment['accounts#x-amz-sso_bearer_token'].$get(args, options),
  )
}

export async function postLogoutXAmzSsoBearerToken(
  args: InferRequestType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['logout#x-amz-sso_bearer_token'].$post(args, options))
}
