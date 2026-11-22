import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function postDeleteGroup(
  args: InferRequestType<(typeof client)['delete-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['delete-group'].$post(args, options))
}

export async function postGetAccountSettings(
  args: InferRequestType<(typeof client)['get-account-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-account-settings'].$post(args, options))
}

export async function postGetGroup(
  args: InferRequestType<(typeof client)['get-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-group'].$post(args, options))
}

export async function postGetGroupConfiguration(
  args: InferRequestType<(typeof client)['get-group-configuration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-group-configuration'].$post(args, options))
}

export async function postGetGroupQuery(
  args: InferRequestType<(typeof client)['get-group-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-group-query'].$post(args, options))
}

export async function getResourcesArnTags(
  args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':Arn'].tags.$get(args, options))
}

export async function putResourcesArnTags(
  args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':Arn'].tags.$put(args, options))
}

export async function patchResourcesArnTags(
  args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':Arn'].tags.$patch(args, options))
}

export async function postGroupResources(
  args: InferRequestType<(typeof client)['group-resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['group-resources'].$post(args, options))
}

export async function postListGroupResources(
  args: InferRequestType<(typeof client)['list-group-resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['list-group-resources'].$post(args, options))
}

export async function postGroupsList(
  args: InferRequestType<(typeof client)['groups-list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups-list'].$post(args, options))
}

export async function postPutGroupConfiguration(
  args: InferRequestType<(typeof client)['put-group-configuration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['put-group-configuration'].$post(args, options))
}

export async function postResourcesSearch(
  args: InferRequestType<typeof client.resources.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.search.$post(args, options))
}

export async function postUngroupResources(
  args: InferRequestType<(typeof client)['ungroup-resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ungroup-resources'].$post(args, options))
}

export async function postUpdateAccountSettings(
  args: InferRequestType<(typeof client)['update-account-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update-account-settings'].$post(args, options))
}

export async function postUpdateGroup(
  args: InferRequestType<(typeof client)['update-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update-group'].$post(args, options))
}

export async function postUpdateGroupQuery(
  args: InferRequestType<(typeof client)['update-group-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update-group-query'].$post(args, options))
}
