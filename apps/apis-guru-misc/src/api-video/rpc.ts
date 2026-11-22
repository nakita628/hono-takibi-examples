import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getAnalyticsLiveStreamsLiveStreamId(
  args: InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics['live-streams'][':liveStreamId'].$get(args, options))
}

export async function getAnalyticsSessionsSessionIdEvents(
  args: InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.sessions[':sessionId'].events.$get(args, options))
}

export async function getAnalyticsVideosVideoId(
  args: InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.videos[':videoId'].$get(args, options))
}

export async function postAuthApiKey(
  args: InferRequestType<(typeof client.auth)['api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'].$post(args, options))
}

export async function postAuthRefresh(
  args: InferRequestType<typeof client.auth.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.refresh.$post(args, options))
}

export async function getLiveStreams(
  args: InferRequestType<(typeof client)['live-streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['live-streams'].$get(args, options))
}

export async function postLiveStreams(
  args: InferRequestType<(typeof client)['live-streams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['live-streams'].$post(args, options))
}

export async function getLiveStreamsLiveStreamId(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['live-streams'][':liveStreamId'].$get(args, options))
}

export async function deleteLiveStreamsLiveStreamId(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['live-streams'][':liveStreamId'].$delete(args, options))
}

export async function patchLiveStreamsLiveStreamId(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['live-streams'][':liveStreamId'].$patch(args, options))
}

export async function postLiveStreamsLiveStreamIdThumbnail(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['live-streams'][':liveStreamId'].thumbnail.$post(args, options))
}

export async function deleteLiveStreamsLiveStreamIdThumbnail(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['live-streams'][':liveStreamId'].thumbnail.$delete(args, options),
  )
}

export async function getPlayers(
  args: InferRequestType<typeof client.players.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players.$get(args, options))
}

export async function postPlayers(
  args: InferRequestType<typeof client.players.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players.$post(args, options))
}

export async function getPlayersPlayerId(
  args: InferRequestType<(typeof client.players)[':playerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':playerId'].$get(args, options))
}

export async function deletePlayersPlayerId(
  args: InferRequestType<(typeof client.players)[':playerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':playerId'].$delete(args, options))
}

export async function patchPlayersPlayerId(
  args: InferRequestType<(typeof client.players)[':playerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':playerId'].$patch(args, options))
}

export async function postPlayersPlayerIdLogo(
  args: InferRequestType<(typeof client.players)[':playerId']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':playerId'].logo.$post(args, options))
}

export async function deletePlayersPlayerIdLogo(
  args: InferRequestType<(typeof client.players)[':playerId']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.players[':playerId'].logo.$delete(args, options))
}

export async function postUpload(
  args: InferRequestType<typeof client.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upload.$post(args, options))
}

export async function getUploadTokens(
  args: InferRequestType<(typeof client)['upload-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['upload-tokens'].$get(args, options))
}

export async function postUploadTokens(
  args: InferRequestType<(typeof client)['upload-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['upload-tokens'].$post(args, options))
}

export async function getUploadTokensUploadToken(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['upload-tokens'][':uploadToken'].$get(args, options))
}

export async function deleteUploadTokensUploadToken(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['upload-tokens'][':uploadToken'].$delete(args, options))
}

export async function getVideos(
  args: InferRequestType<typeof client.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$get(args, options))
}

export async function postVideos(
  args: InferRequestType<typeof client.videos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$post(args, options))
}

export async function getVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':videoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].$get(args, options))
}

export async function deleteVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':videoId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].$delete(args, options))
}

export async function patchVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':videoId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].$patch(args, options))
}

export async function getVideosVideoIdCaptions(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].captions.$get(args, options))
}

export async function getVideosVideoIdCaptionsLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].captions[':language'].$get(args, options))
}

export async function postVideosVideoIdCaptionsLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].captions[':language'].$post(args, options))
}

export async function deleteVideosVideoIdCaptionsLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].captions[':language'].$delete(args, options))
}

export async function patchVideosVideoIdCaptionsLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].captions[':language'].$patch(args, options))
}

export async function getVideosVideoIdChapters(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].chapters.$get(args, options))
}

export async function getVideosVideoIdChaptersLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].chapters[':language'].$get(args, options))
}

export async function postVideosVideoIdChaptersLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].chapters[':language'].$post(args, options))
}

export async function deleteVideosVideoIdChaptersLanguage(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].chapters[':language'].$delete(args, options))
}

export async function postVideosVideoIdSource(
  args: InferRequestType<(typeof client.videos)[':videoId']['source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].source.$post(args, options))
}

export async function getVideosVideoIdStatus(
  args: InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].status.$get(args, options))
}

export async function postVideosVideoIdThumbnail(
  args: InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].thumbnail.$post(args, options))
}

export async function patchVideosVideoIdThumbnail(
  args: InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':videoId'].thumbnail.$patch(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$get(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$delete(args, options))
}
