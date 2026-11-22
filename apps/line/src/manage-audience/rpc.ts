import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putV2BotAudienceGroupUpload(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.upload.$put(args, options))
}

export async function postV2BotAudienceGroupUpload(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.upload.$post(args, options))
}

export async function putV2BotAudienceGroupUploadByFile(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.upload.byFile.$put(args, options))
}

export async function postV2BotAudienceGroupUploadByFile(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.upload.byFile.$post(args, options))
}

export async function postV2BotAudienceGroupClick(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.click.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.click.$post(args, options))
}

export async function postV2BotAudienceGroupImp(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.imp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.imp.$post(args, options))
}

export async function putV2BotAudienceGroupAudienceGroupIdUpdateDescription(
  args: InferRequestType<
    (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.audienceGroup[':audienceGroupId'].updateDescription.$put(args, options),
  )
}

export async function getV2BotAudienceGroupAudienceGroupId(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup[':audienceGroupId'].$get(args, options))
}

export async function deleteV2BotAudienceGroupAudienceGroupId(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup[':audienceGroupId'].$delete(args, options))
}

export async function getV2BotAudienceGroupList(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.list.$get(args, options))
}

export async function getV2BotAudienceGroupSharedAudienceGroupId(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.audienceGroup.shared[':audienceGroupId'].$get(args, options),
  )
}

export async function getV2BotAudienceGroupSharedList(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.audienceGroup.shared.list.$get(args, options))
}
