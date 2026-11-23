import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$get(args, options))
}

export async function postApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$post(args, options))
}

export async function getApiV1UsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.users.me.$get(undefined, options))
}

export async function getApiV1UsersUserId(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].$get(args, options))
}

export async function putApiV1UsersUserId(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].$put(args, options))
}

export async function getApiV1UsersUserIdAppLinks(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].appLinks.$get(args, options))
}

export async function postApiV1UsersUserIdCredentialsChangePassword(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['credentials']['change_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].credentials.change_password.$post(args, options),
  )
}

export async function postApiV1UsersUserIdCredentialsChangeRecoveryQuestion(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['credentials']['change_recovery_question']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].credentials.change_recovery_question.$post(args, options),
  )
}

export async function postApiV1UsersUserIdCredentialsForgotPassword(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['credentials']['forgot_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].credentials.forgot_password.$post(args, options),
  )
}

export async function getApiV1UsersUserIdGroups(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].groups.$get(args, options))
}

export async function postApiV1UsersUserIdLifecycleActivate(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].lifecycle.activate.$post(args, options))
}

export async function postApiV1UsersUserIdLifecycleDeactivate(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['lifecycle']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].lifecycle.deactivate.$post(args, options),
  )
}

export async function postApiV1UsersUserIdLifecycleExpirePassword(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['lifecycle']['expire_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].lifecycle.expire_password.$post(args, options),
  )
}

export async function postApiV1UsersUserIdLifecycleResetFactors(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['lifecycle']['reset_factors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].lifecycle.reset_factors.$post(args, options),
  )
}

export async function postApiV1UsersUserIdLifecycleResetPassword(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['lifecycle']['reset_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].lifecycle.reset_password.$post(args, options),
  )
}

export async function postApiV1UsersUserIdLifecycleSuspend(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].lifecycle.suspend.$post(args, options))
}

export async function postApiV1UsersUserIdLifecycleUnlock(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].lifecycle.unlock.$post(args, options))
}

export async function postApiV1UsersUserIdLifecycleUnsuspend(
  args: InferRequestType<
    (typeof client.api.v1.users)[':userId']['lifecycle']['unsuspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':userId'].lifecycle.unsuspend.$post(args, options),
  )
}

export async function deleteApiV1UsersUserIdSessions(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['sessions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':userId'].sessions.$delete(args, options))
}
