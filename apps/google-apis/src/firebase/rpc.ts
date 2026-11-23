import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1AvailableProjects(
  args: InferRequestType<typeof client.v1beta1.availableProjects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.availableProjects.$get(args, options))
}

export async function getV1beta1Projects(
  args: InferRequestType<typeof client.v1beta1.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.projects.$get(args, options))
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

export async function postV1beta1NameRemove(
  args: InferRequestType<(typeof client.v1beta1)[':name:remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:remove'].$post(args, options))
}

export async function postV1beta1NameUndelete(
  args: InferRequestType<(typeof client.v1beta1)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:undelete'].$post(args, options))
}

export async function getV1beta1ParentAndroidApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].androidApps.$get(args, options))
}

export async function postV1beta1ParentAndroidApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].androidApps.$post(args, options))
}

export async function getV1beta1ParentAvailableLocations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].availableLocations.$get(args, options))
}

export async function postV1beta1ParentDefaultLocationFinalize(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['defaultLocation:finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['defaultLocation:finalize'].$post(args, options),
  )
}

export async function getV1beta1ParentIosApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].iosApps.$get(args, options))
}

export async function postV1beta1ParentIosApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].iosApps.$post(args, options))
}

export async function getV1beta1ParentSha(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].sha.$get(args, options))
}

export async function postV1beta1ParentSha(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].sha.$post(args, options))
}

export async function getV1beta1ParentWebApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].webApps.$get(args, options))
}

export async function postV1beta1ParentWebApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].webApps.$post(args, options))
}

export async function postV1beta1ParentAddGoogleAnalytics(
  args: InferRequestType<(typeof client.v1beta1)[':parent:addGoogleAnalytics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:addGoogleAnalytics'].$post(args, options))
}

export async function postV1beta1ParentRemoveAnalytics(
  args: InferRequestType<(typeof client.v1beta1)[':parent:removeAnalytics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:removeAnalytics'].$post(args, options))
}

export async function getV1beta1ParentSearchApps(
  args: InferRequestType<(typeof client.v1beta1)[':parent:searchApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:searchApps'].$get(args, options))
}

export async function postV1beta1ProjectAddFirebase(
  args: InferRequestType<(typeof client.v1beta1)[':project:addFirebase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':project:addFirebase'].$post(args, options))
}
