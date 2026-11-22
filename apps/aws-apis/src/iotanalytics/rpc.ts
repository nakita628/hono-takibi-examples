import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMessagesBatch(
  args: InferRequestType<typeof client.messages.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.batch.$post(args, options))
}

export async function deletePipelinesPipelineNameReprocessingReprocessingId(
  args: InferRequestType<
    (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pipelines[':pipelineName'].reprocessing[':reprocessingId'].$delete(args, options),
  )
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function postChannels(
  args: InferRequestType<typeof client.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$post(args, options))
}

export async function getDatasets(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.$get(args, options))
}

export async function postDatasets(
  args: InferRequestType<typeof client.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.$post(args, options))
}

export async function getDatasetsDatasetNameContent(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].content.$get(args, options))
}

export async function postDatasetsDatasetNameContent(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].content.$post(args, options))
}

export async function deleteDatasetsDatasetNameContent(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].content.$delete(args, options))
}

export async function getDatastores(
  args: InferRequestType<typeof client.datastores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datastores.$get(args, options))
}

export async function postDatastores(
  args: InferRequestType<typeof client.datastores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datastores.$post(args, options))
}

export async function getPipelines(
  args: InferRequestType<typeof client.pipelines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelines.$get(args, options))
}

export async function postPipelines(
  args: InferRequestType<typeof client.pipelines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelines.$post(args, options))
}

export async function getChannelsChannelName(
  args: InferRequestType<(typeof client.channels)[':channelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelName'].$get(args, options))
}

export async function putChannelsChannelName(
  args: InferRequestType<(typeof client.channels)[':channelName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelName'].$put(args, options))
}

export async function deleteChannelsChannelName(
  args: InferRequestType<(typeof client.channels)[':channelName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelName'].$delete(args, options))
}

export async function getDatasetsDatasetName(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].$get(args, options))
}

export async function putDatasetsDatasetName(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].$put(args, options))
}

export async function deleteDatasetsDatasetName(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].$delete(args, options))
}

export async function getDatastoresDatastoreName(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datastores[':datastoreName'].$get(args, options))
}

export async function putDatastoresDatastoreName(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datastores[':datastoreName'].$put(args, options))
}

export async function deleteDatastoresDatastoreName(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datastores[':datastoreName'].$delete(args, options))
}

export async function getPipelinesPipelineName(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelines[':pipelineName'].$get(args, options))
}

export async function putPipelinesPipelineName(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelines[':pipelineName'].$put(args, options))
}

export async function deletePipelinesPipelineName(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelines[':pipelineName'].$delete(args, options))
}

export async function getLogging(
  args: InferRequestType<typeof client.logging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logging.$get(args, options))
}

export async function putLogging(
  args: InferRequestType<typeof client.logging.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logging.$put(args, options))
}

export async function getDatasetsDatasetNameContents(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetName'].contents.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$post(args, options))
}

export async function postPipelineactivitiesRun(
  args: InferRequestType<typeof client.pipelineactivities.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelineactivities.run.$post(args, options))
}

export async function getChannelsChannelNameSample(
  args: InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelName'].sample.$get(args, options))
}

export async function postPipelinesPipelineNameReprocessing(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipelines[':pipelineName'].reprocessing.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
}
