import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiPizza(
  args: InferRequestType<typeof client.api.pizza.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pizza.$post(args, options))
}

export async function getApiPizzaId(
  args: InferRequestType<(typeof client.api.pizza)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pizza[':id'].$get(args, options))
}

export async function getApiIngredientsType(
  args: InferRequestType<(typeof client.api.ingredients)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ingredients[':type'].$get(args, options))
}

export async function getApiDoughs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.doughs.$get(undefined, options))
}

export async function getApiTools(options?: ClientRequestOptions) {
  return await parseResponse(client.api.tools.$get(undefined, options))
}

export async function getApiRatings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.ratings.$get(undefined, options))
}

export async function postApiRatings(
  args: InferRequestType<typeof client.api.ratings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ratings.$post(args, options))
}

export async function deleteApiRatings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.ratings.$delete(undefined, options))
}

export async function getApiRatingsId(
  args: InferRequestType<(typeof client.api.ratings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ratings[':id'].$get(args, options))
}

export async function putApiRatingsId(
  args: InferRequestType<(typeof client.api.ratings)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ratings[':id'].$put(args, options))
}

export async function deleteApiRatingsId(
  args: InferRequestType<(typeof client.api.ratings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ratings[':id'].$delete(args, options))
}

export async function patchApiRatingsId(
  args: InferRequestType<(typeof client.api.ratings)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ratings[':id'].$patch(args, options))
}

export async function postApiUsers(
  args: InferRequestType<typeof client.api.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$post(args, options))
}

export async function postApiUsersTokenLogin(
  args: InferRequestType<typeof client.api.users.token.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.token.login.$post(args, options))
}

export async function postApiUsersTokenLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.users.token.logout.$post(undefined, options))
}

export async function postApiAdminLogin(
  args: InferRequestType<typeof client.api.admin.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.login.$post(args, options))
}

export async function postApiCsrfToken(options?: ClientRequestOptions) {
  return await parseResponse(client.api['csrf-token'].$post(undefined, options))
}

export async function getApiQuotes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.quotes.$get(undefined, options))
}

export async function getApiNames(options?: ClientRequestOptions) {
  return await parseResponse(client.api.names.$get(undefined, options))
}

export async function getApiAdjectives(options?: ClientRequestOptions) {
  return await parseResponse(client.api.adjectives.$get(undefined, options))
}

export async function getApiConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.config.$get(undefined, options))
}

export async function getReady(options?: ClientRequestOptions) {
  return await parseResponse(client.ready.$get(undefined, options))
}

export async function getHealthz(options?: ClientRequestOptions) {
  return await parseResponse(client.healthz.$get(undefined, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getApiStatusStatus(
  args: InferRequestType<(typeof client.api.status)[':status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.status[':status'].$get(args, options))
}

export async function getApiBytesN(
  args: InferRequestType<(typeof client.api.bytes)[':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bytes[':n'].$get(args, options))
}

export async function getApiDelayDelay(
  args: InferRequestType<(typeof client.api.delay)[':delay']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.delay[':delay'].$get(args, options))
}

export async function getApiGet(options?: ClientRequestOptions) {
  return await parseResponse(client.api.get.$get(undefined, options))
}

export async function deleteApiDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.api.delete.$delete(undefined, options))
}

export async function postApiPost(
  args: InferRequestType<typeof client.api.post.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.post.$post(args, options))
}

export async function putApiPut(
  args: InferRequestType<typeof client.api.put.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.put.$put(args, options))
}

export async function patchApiPatch(
  args: InferRequestType<typeof client.api.patch.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.$patch(args, options))
}

export async function getApiCookies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.cookies.$get(undefined, options))
}

export async function postApiCookies(
  args: InferRequestType<typeof client.api.cookies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cookies.$post(args, options))
}

export async function getApiHeaders(options?: ClientRequestOptions) {
  return await parseResponse(client.api.headers.$get(undefined, options))
}

export async function getApiBasicAuthUsernamePassword(
  args: InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['basic-auth'][':username'][':password'].$get(args, options))
}

export async function getApiJson(
  args: InferRequestType<typeof client.api.json.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.json.$get(args, options))
}

export async function getApiXml(
  args: InferRequestType<typeof client.api.xml.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.xml.$get(args, options))
}
