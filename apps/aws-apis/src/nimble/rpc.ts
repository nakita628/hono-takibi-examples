import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20200801StudiosStudioIdEulaAcceptances(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['eula-acceptances'].$get(args, options),
  )
}

export async function post20200801StudiosStudioIdEulaAcceptances(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['eula-acceptances'].$post(args, options),
  )
}

export async function get20200801StudiosStudioIdLaunchProfiles(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'].$get(args, options),
  )
}

export async function post20200801StudiosStudioIdLaunchProfiles(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'].$post(args, options),
  )
}

export async function get20200801StudiosStudioIdStreamingImages(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-images'].$get(args, options),
  )
}

export async function post20200801StudiosStudioIdStreamingImages(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-images'].$post(args, options),
  )
}

export async function get20200801StudiosStudioIdStreamingSessions(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'].$get(args, options),
  )
}

export async function post20200801StudiosStudioIdStreamingSessions(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'].$post(args, options),
  )
}

export async function post20200801StudiosStudioIdStreamingSessionsSessionIdStreams(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].streams.$post(
      args,
      options,
    ),
  )
}

export async function get20200801Studios(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].studios.$get(args, options))
}

export async function post20200801Studios(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].studios.$post(args, options))
}

export async function get20200801StudiosStudioIdStudioComponents(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['studio-components'].$get(args, options),
  )
}

export async function post20200801StudiosStudioIdStudioComponents(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['studio-components'].$post(args, options),
  )
}

export async function get20200801StudiosStudioIdLaunchProfilesLaunchProfileId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$get(
      args,
      options,
    ),
  )
}

export async function delete20200801StudiosStudioIdLaunchProfilesLaunchProfileId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$delete(
      args,
      options,
    ),
  )
}

export async function patch20200801StudiosStudioIdLaunchProfilesLaunchProfileId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$patch(
      args,
      options,
    ),
  )
}

export async function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].membership[
      ':principalId'
    ].$get(args, options),
  )
}

export async function delete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].membership[
      ':principalId'
    ].$delete(args, options),
  )
}

export async function patch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].membership[
      ':principalId'
    ].$patch(args, options),
  )
}

export async function get20200801StudiosStudioIdStreamingImagesStreamingImageId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$get(
      args,
      options,
    ),
  )
}

export async function delete20200801StudiosStudioIdStreamingImagesStreamingImageId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$delete(
      args,
      options,
    ),
  )
}

export async function patch20200801StudiosStudioIdStreamingImagesStreamingImageId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$patch(
      args,
      options,
    ),
  )
}

export async function get20200801StudiosStudioIdStreamingSessionsSessionId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$get(
      args,
      options,
    ),
  )
}

export async function delete20200801StudiosStudioIdStreamingSessionsSessionId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$delete(
      args,
      options,
    ),
  )
}

export async function get20200801StudiosStudioId(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].studios[':studioId'].$get(args, options))
}

export async function delete20200801StudiosStudioId(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].studios[':studioId'].$delete(args, options))
}

export async function patch20200801StudiosStudioId(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].studios[':studioId'].$patch(args, options))
}

export async function get20200801StudiosStudioIdStudioComponentsStudioComponentId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$get(
      args,
      options,
    ),
  )
}

export async function delete20200801StudiosStudioIdStudioComponentsStudioComponentId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patch20200801StudiosStudioIdStudioComponentsStudioComponentId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$patch(
      args,
      options,
    ),
  )
}

export async function get20200801StudiosStudioIdMembershipPrincipalId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId'].membership[':principalId'].$get(args, options),
  )
}

export async function delete20200801StudiosStudioIdMembershipPrincipalId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId'].membership[':principalId'].$delete(args, options),
  )
}

export async function get20200801EulasEulaId(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].eulas[':eulaId'].$get(args, options))
}

export async function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetails(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].details.$get(
      args,
      options,
    ),
  )
}

export async function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatform(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'][
      'init#launchProfileProtocolVersions&launchPurpose&platform'
    ].$get(args, options),
  )
}

export async function get20200801StudiosStudioIdStreamingSessionBackupsBackupId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-session-backups'][':backupId'].$get(
      args,
      options,
    ),
  )
}

export async function get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamId(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].streams[
      ':streamId'
    ].$get(args, options),
  )
}

export async function get20200801Eulas(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].eulas.$get(args, options))
}

export async function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][
      ':launchProfileId'
    ].membership.$get(args, options),
  )
}

export async function post20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['launch-profiles'][
      ':launchProfileId'
    ].membership.$post(args, options),
  )
}

export async function get20200801StudiosStudioIdStreamingSessionBackups(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-session-backups'].$get(args, options),
  )
}

export async function get20200801StudiosStudioIdMembership(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId'].membership.$get(args, options),
  )
}

export async function post20200801StudiosStudioIdMembership(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId'].membership.$post(args, options),
  )
}

export async function get20200801TagsResourceArn(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].tags[':resourceArn'].$get(args, options))
}

export async function post20200801TagsResourceArn(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-08-01'].tags[':resourceArn'].$post(args, options))
}

export async function post20200801StudiosStudioIdStreamingSessionsSessionIdStart(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].start.$post(
      args,
      options,
    ),
  )
}

export async function put20200801StudiosStudioIdSsoConfiguration(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['sso-configuration'].$put(args, options),
  )
}

export async function post20200801StudiosStudioIdStreamingSessionsSessionIdStop(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].stop.$post(
      args,
      options,
    ),
  )
}

export async function delete20200801TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-08-01'].tags[':resourceArn#tagKeys'].$delete(args, options),
  )
}
