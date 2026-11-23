import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getProjectUsernameProject(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':username'][':project'].$get(args, options))
}

export async function postProjectUsernameProject(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':username'][':project'].$post(args, options))
}

export async function deleteProjectUsernameProjectBuildCache(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['build-cache']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project']['build-cache'].$delete(args, options),
  )
}

export async function getProjectUsernameProjectCheckoutKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project']['checkout-key'].$get(args, options),
  )
}

export async function postProjectUsernameProjectCheckoutKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project']['checkout-key'].$post(args, options),
  )
}

export async function getProjectUsernameProjectCheckoutKeyFingerprint(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project']['checkout-key'][':fingerprint'].$get(args, options),
  )
}

export async function deleteProjectUsernameProjectCheckoutKeyFingerprint(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project']['checkout-key'][':fingerprint'].$delete(args, options),
  )
}

export async function getProjectUsernameProjectEnvvar(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':username'][':project'].envvar.$get(args, options))
}

export async function postProjectUsernameProjectEnvvar(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':username'][':project'].envvar.$post(args, options))
}

export async function getProjectUsernameProjectEnvvarName(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'].envvar[':name'].$get(args, options),
  )
}

export async function deleteProjectUsernameProjectEnvvarName(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'].envvar[':name'].$delete(args, options),
  )
}

export async function postProjectUsernameProjectSshKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project']['ssh-key'].$post(args, options),
  )
}

export async function postProjectUsernameProjectTreeBranch(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['tree'][':branch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'].tree[':branch'].$post(args, options),
  )
}

export async function getProjectUsernameProjectBuildNum(
  args: InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'][':build_num'].$get(args, options),
  )
}

export async function getProjectUsernameProjectBuildNumArtifacts(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'][':build_num'].artifacts.$get(args, options),
  )
}

export async function postProjectUsernameProjectBuildNumCancel(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'][':build_num'].cancel.$post(args, options),
  )
}

export async function postProjectUsernameProjectBuildNumRetry(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'][':build_num'].retry.$post(args, options),
  )
}

export async function getProjectUsernameProjectBuildNumTests(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':username'][':project'][':build_num'].tests.$get(args, options),
  )
}

export async function getProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.projects.$get(undefined, options))
}

export async function getRecentBuilds(
  args: InferRequestType<(typeof client)['recent-builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recent-builds'].$get(args, options))
}

export async function postUserHerokuKey(options?: ClientRequestOptions) {
  return await parseResponse(client.user['heroku-key'].$post(undefined, options))
}
