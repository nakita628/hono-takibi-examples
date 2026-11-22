import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBatchGetChannel(
  args: InferRequestType<typeof client.BatchGetChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchGetChannel.$post(args, options))
}

export async function postBatchGetStreamKey(
  args: InferRequestType<typeof client.BatchGetStreamKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchGetStreamKey.$post(args, options))
}

export async function postCreateChannel(
  args: InferRequestType<typeof client.CreateChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateChannel.$post(args, options))
}

export async function postCreateRecordingConfiguration(
  args: InferRequestType<typeof client.CreateRecordingConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateRecordingConfiguration.$post(args, options))
}

export async function postCreateStreamKey(
  args: InferRequestType<typeof client.CreateStreamKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateStreamKey.$post(args, options))
}

export async function postDeleteChannel(
  args: InferRequestType<typeof client.DeleteChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteChannel.$post(args, options))
}

export async function postDeletePlaybackKeyPair(
  args: InferRequestType<typeof client.DeletePlaybackKeyPair.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeletePlaybackKeyPair.$post(args, options))
}

export async function postDeleteRecordingConfiguration(
  args: InferRequestType<typeof client.DeleteRecordingConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteRecordingConfiguration.$post(args, options))
}

export async function postDeleteStreamKey(
  args: InferRequestType<typeof client.DeleteStreamKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteStreamKey.$post(args, options))
}

export async function postGetChannel(
  args: InferRequestType<typeof client.GetChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetChannel.$post(args, options))
}

export async function postGetPlaybackKeyPair(
  args: InferRequestType<typeof client.GetPlaybackKeyPair.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetPlaybackKeyPair.$post(args, options))
}

export async function postGetRecordingConfiguration(
  args: InferRequestType<typeof client.GetRecordingConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetRecordingConfiguration.$post(args, options))
}

export async function postGetStream(
  args: InferRequestType<typeof client.GetStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetStream.$post(args, options))
}

export async function postGetStreamKey(
  args: InferRequestType<typeof client.GetStreamKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetStreamKey.$post(args, options))
}

export async function postGetStreamSession(
  args: InferRequestType<typeof client.GetStreamSession.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetStreamSession.$post(args, options))
}

export async function postImportPlaybackKeyPair(
  args: InferRequestType<typeof client.ImportPlaybackKeyPair.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ImportPlaybackKeyPair.$post(args, options))
}

export async function postListChannels(
  args: InferRequestType<typeof client.ListChannels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListChannels.$post(args, options))
}

export async function postListPlaybackKeyPairs(
  args: InferRequestType<typeof client.ListPlaybackKeyPairs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListPlaybackKeyPairs.$post(args, options))
}

export async function postListRecordingConfigurations(
  args: InferRequestType<typeof client.ListRecordingConfigurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListRecordingConfigurations.$post(args, options))
}

export async function postListStreamKeys(
  args: InferRequestType<typeof client.ListStreamKeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListStreamKeys.$post(args, options))
}

export async function postListStreamSessions(
  args: InferRequestType<typeof client.ListStreamSessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListStreamSessions.$post(args, options))
}

export async function postListStreams(
  args: InferRequestType<typeof client.ListStreams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListStreams.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postPutMetadata(
  args: InferRequestType<typeof client.PutMetadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutMetadata.$post(args, options))
}

export async function postStopStream(
  args: InferRequestType<typeof client.StopStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopStream.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateChannel(
  args: InferRequestType<typeof client.UpdateChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateChannel.$post(args, options))
}
