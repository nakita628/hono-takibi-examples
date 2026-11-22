import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putConfigureLogsChannel(
  args: InferRequestType<typeof client.configureLogs.channel.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configureLogs.channel.$put(args, options))
}

export async function putConfigureLogsPlaybackConfiguration(
  args: InferRequestType<typeof client.configureLogs.playbackConfiguration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configureLogs.playbackConfiguration.$put(args, options))
}

export async function getChannelChannelName(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].$get(args, options))
}

export async function putChannelChannelName(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].$put(args, options))
}

export async function postChannelChannelName(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].$post(args, options))
}

export async function deleteChannelChannelName(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].$delete(args, options))
}

export async function getSourceLocationSourceLocationNameLiveSourceLiveSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$get(args, options),
  )
}

export async function putSourceLocationSourceLocationNameLiveSourceLiveSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$put(args, options),
  )
}

export async function postSourceLocationSourceLocationNameLiveSourceLiveSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$post(args, options),
  )
}

export async function deleteSourceLocationSourceLocationNameLiveSourceLiveSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$delete(
      args,
      options,
    ),
  )
}

export async function getPrefetchSchedulePlaybackConfigurationNameName(
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$get(args, options),
  )
}

export async function postPrefetchSchedulePlaybackConfigurationNameName(
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$post(args, options),
  )
}

export async function deletePrefetchSchedulePlaybackConfigurationNameName(
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$delete(args, options),
  )
}

export async function getChannelChannelNameProgramProgramName(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channel[':ChannelName'].program[':ProgramName'].$get(args, options),
  )
}

export async function putChannelChannelNameProgramProgramName(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channel[':ChannelName'].program[':ProgramName'].$put(args, options),
  )
}

export async function postChannelChannelNameProgramProgramName(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channel[':ChannelName'].program[':ProgramName'].$post(args, options),
  )
}

export async function deleteChannelChannelNameProgramProgramName(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channel[':ChannelName'].program[':ProgramName'].$delete(args, options),
  )
}

export async function getSourceLocationSourceLocationName(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sourceLocation[':SourceLocationName'].$get(args, options))
}

export async function putSourceLocationSourceLocationName(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sourceLocation[':SourceLocationName'].$put(args, options))
}

export async function postSourceLocationSourceLocationName(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sourceLocation[':SourceLocationName'].$post(args, options))
}

export async function deleteSourceLocationSourceLocationName(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sourceLocation[':SourceLocationName'].$delete(args, options))
}

export async function getSourceLocationSourceLocationNameVodSourceVodSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$get(args, options),
  )
}

export async function putSourceLocationSourceLocationNameVodSourceVodSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$put(args, options),
  )
}

export async function postSourceLocationSourceLocationNameVodSourceVodSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$post(args, options),
  )
}

export async function deleteSourceLocationSourceLocationNameVodSourceVodSourceName(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$delete(args, options),
  )
}

export async function getChannelChannelNamePolicy(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].policy.$get(args, options))
}

export async function putChannelChannelNamePolicy(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].policy.$put(args, options))
}

export async function deleteChannelChannelNamePolicy(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].policy.$delete(args, options))
}

export async function getPlaybackConfigurationName(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playbackConfiguration[':Name'].$get(args, options))
}

export async function deletePlaybackConfigurationName(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playbackConfiguration[':Name'].$delete(args, options))
}

export async function getChannelChannelNameSchedule(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].schedule.$get(args, options))
}

export async function getAlertsResourceArn(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alerts#resourceArn'].$get(args, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function getSourceLocationSourceLocationNameLiveSources(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].liveSources.$get(args, options),
  )
}

export async function getPlaybackConfigurations(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playbackConfigurations.$get(args, options))
}

export async function postPrefetchSchedulePlaybackConfigurationName(
  args: InferRequestType<(typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prefetchSchedule[':PlaybackConfigurationName'].$post(args, options),
  )
}

export async function getSourceLocations(
  args: InferRequestType<typeof client.sourceLocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sourceLocations.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function getSourceLocationSourceLocationNameVodSources(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sourceLocation[':SourceLocationName'].vodSources.$get(args, options),
  )
}

export async function putPlaybackConfiguration(
  args: InferRequestType<typeof client.playbackConfiguration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playbackConfiguration.$put(args, options))
}

export async function putChannelChannelNameStart(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].start.$put(args, options))
}

export async function putChannelChannelNameStop(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['stop']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':ChannelName'].stop.$put(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}
