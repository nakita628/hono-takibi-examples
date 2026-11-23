import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFeatureCategories(
  args: InferRequestType<typeof client.featureCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.featureCategories.$get(args, options))
}

export async function getFeatureClasses(
  args: InferRequestType<typeof client.featureClasses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.featureClasses.$get(args, options))
}

export async function getFeatureTypes(
  args: InferRequestType<typeof client.featureTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.featureTypes.$get(args, options))
}

export async function getFeaturesFeatureId(
  args: InferRequestType<(typeof client.features)[':featureId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':featureId'].$get(args, options))
}

export async function getNameAuthorities(
  args: InferRequestType<typeof client.nameAuthorities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nameAuthorities.$get(args, options))
}

export async function getNamesChanges(
  args: InferRequestType<typeof client.names.changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.changes.$get(args, options))
}

export async function getNamesDecisionsRecent(
  args: InferRequestType<typeof client.names.decisions.recent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.decisions.recent.$get(args, options))
}

export async function getNamesDecisionsYear(
  args: InferRequestType<typeof client.names.decisions.year.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.decisions.year.$get(args, options))
}

export async function getNamesInside(
  args: InferRequestType<typeof client.names.inside.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.inside.$get(args, options))
}

export async function getNamesNear(
  args: InferRequestType<typeof client.names.near.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.near.$get(args, options))
}

export async function getNamesNotOfficialSearch(
  args: InferRequestType<typeof client.names.notOfficial.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.notOfficial.search.$get(args, options))
}

export async function getNamesOfficialSearch(
  args: InferRequestType<typeof client.names.official.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.official.search.$get(args, options))
}

export async function getNamesSearch(
  args: InferRequestType<typeof client.names.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.search.$get(args, options))
}

export async function getNamesNameIdOutputFormat(
  args: InferRequestType<(typeof client.names)[':nameId.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names[':nameId.{outputFormat}'].$get(args, options))
}
