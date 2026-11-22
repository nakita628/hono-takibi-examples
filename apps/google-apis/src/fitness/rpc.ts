import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUserIdDataSources(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].dataSources.$get(args, options))
}

export async function postUserIdDataSources(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].dataSources.$post(args, options))
}

export async function getUserIdDataSourcesDataSourceId(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].dataSources[':dataSourceId'].$get(args, options))
}

export async function putUserIdDataSourcesDataSourceId(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].dataSources[':dataSourceId'].$put(args, options))
}

export async function deleteUserIdDataSourcesDataSourceId(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].dataSources[':dataSourceId'].$delete(args, options))
}

export async function getUserIdDataSourcesDataSourceIdDataPointChanges(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':userId'].dataSources[':dataSourceId'].dataPointChanges.$get(args, options),
  )
}

export async function getUserIdDataSourcesDataSourceIdDatasetsDatasetId(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$get(args, options),
  )
}

export async function deleteUserIdDataSourcesDataSourceIdDatasetsDatasetId(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$delete(args, options),
  )
}

export async function patchUserIdDataSourcesDataSourceIdDatasetsDatasetId(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$patch(args, options),
  )
}

export async function postUserIdDatasetAggregate(
  args: InferRequestType<(typeof client)[':userId']['dataset:aggregate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['dataset:aggregate'].$post(args, options))
}

export async function getUserIdSessions(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].sessions.$get(args, options))
}

export async function putUserIdSessionsSessionId(
  args: InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].sessions[':sessionId'].$put(args, options))
}

export async function deleteUserIdSessionsSessionId(
  args: InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].sessions[':sessionId'].$delete(args, options))
}
