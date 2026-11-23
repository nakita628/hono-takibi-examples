import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postYoutubeV3AbuseReports(
  args: InferRequestType<typeof client.youtube.v3.abuseReports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.abuseReports.$post(args, options))
}

export async function getYoutubeV3Activities(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.activities.$get(args, options))
}

export async function getYoutubeV3Captions(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.captions.$get(args, options))
}

export async function putYoutubeV3Captions(
  args: InferRequestType<typeof client.youtube.v3.captions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.captions.$put(args, options))
}

export async function postYoutubeV3Captions(
  args: InferRequestType<typeof client.youtube.v3.captions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.captions.$post(args, options))
}

export async function deleteYoutubeV3Captions(
  args: InferRequestType<typeof client.youtube.v3.captions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.captions.$delete(args, options))
}

export async function getYoutubeV3CaptionsId(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.captions[':id'].$get(args, options))
}

export async function postYoutubeV3ChannelBannersInsert(
  args: InferRequestType<typeof client.youtube.v3.channelBanners.insert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channelBanners.insert.$post(args, options))
}

export async function getYoutubeV3ChannelSections(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channelSections.$get(args, options))
}

export async function putYoutubeV3ChannelSections(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channelSections.$put(args, options))
}

export async function postYoutubeV3ChannelSections(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channelSections.$post(args, options))
}

export async function deleteYoutubeV3ChannelSections(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channelSections.$delete(args, options))
}

export async function getYoutubeV3Channels(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channels.$get(args, options))
}

export async function putYoutubeV3Channels(
  args: InferRequestType<typeof client.youtube.v3.channels.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.channels.$put(args, options))
}

export async function getYoutubeV3CommentThreads(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.commentThreads.$get(args, options))
}

export async function putYoutubeV3CommentThreads(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.commentThreads.$put(args, options))
}

export async function postYoutubeV3CommentThreads(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.commentThreads.$post(args, options))
}

export async function getYoutubeV3Comments(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.comments.$get(args, options))
}

export async function putYoutubeV3Comments(
  args: InferRequestType<typeof client.youtube.v3.comments.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.comments.$put(args, options))
}

export async function postYoutubeV3Comments(
  args: InferRequestType<typeof client.youtube.v3.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.comments.$post(args, options))
}

export async function deleteYoutubeV3Comments(
  args: InferRequestType<typeof client.youtube.v3.comments.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.comments.$delete(args, options))
}

export async function postYoutubeV3CommentsMarkAsSpam(
  args: InferRequestType<typeof client.youtube.v3.comments.markAsSpam.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.comments.markAsSpam.$post(args, options))
}

export async function postYoutubeV3CommentsSetModerationStatus(
  args: InferRequestType<typeof client.youtube.v3.comments.setModerationStatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.comments.setModerationStatus.$post(args, options))
}

export async function getYoutubeV3I18nLanguages(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.i18nLanguages.$get(args, options))
}

export async function getYoutubeV3I18nRegions(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.i18nRegions.$get(args, options))
}

export async function getYoutubeV3LiveBroadcasts(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.$get(args, options))
}

export async function putYoutubeV3LiveBroadcasts(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.$put(args, options))
}

export async function postYoutubeV3LiveBroadcasts(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.$post(args, options))
}

export async function deleteYoutubeV3LiveBroadcasts(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.$delete(args, options))
}

export async function postYoutubeV3LiveBroadcastsBind(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.bind.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.bind.$post(args, options))
}

export async function postYoutubeV3LiveBroadcastsCuepoint(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.cuepoint.$post(args, options))
}

export async function postYoutubeV3LiveBroadcastsTransition(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.transition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveBroadcasts.transition.$post(args, options))
}

export async function postYoutubeV3LiveChatBans(
  args: InferRequestType<typeof client.youtube.v3.liveChat.bans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.bans.$post(args, options))
}

export async function deleteYoutubeV3LiveChatBans(
  args: InferRequestType<typeof client.youtube.v3.liveChat.bans.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.bans.$delete(args, options))
}

export async function getYoutubeV3LiveChatMessages(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.messages.$get(args, options))
}

export async function postYoutubeV3LiveChatMessages(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.messages.$post(args, options))
}

export async function deleteYoutubeV3LiveChatMessages(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.messages.$delete(args, options))
}

export async function getYoutubeV3LiveChatModerators(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.moderators.$get(args, options))
}

export async function postYoutubeV3LiveChatModerators(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.moderators.$post(args, options))
}

export async function deleteYoutubeV3LiveChatModerators(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveChat.moderators.$delete(args, options))
}

export async function getYoutubeV3LiveStreams(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveStreams.$get(args, options))
}

export async function putYoutubeV3LiveStreams(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveStreams.$put(args, options))
}

export async function postYoutubeV3LiveStreams(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveStreams.$post(args, options))
}

export async function deleteYoutubeV3LiveStreams(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.liveStreams.$delete(args, options))
}

export async function getYoutubeV3Members(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.members.$get(args, options))
}

export async function getYoutubeV3MembershipsLevels(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.membershipsLevels.$get(args, options))
}

export async function getYoutubeV3PlaylistItems(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlistItems.$get(args, options))
}

export async function putYoutubeV3PlaylistItems(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlistItems.$put(args, options))
}

export async function postYoutubeV3PlaylistItems(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlistItems.$post(args, options))
}

export async function deleteYoutubeV3PlaylistItems(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlistItems.$delete(args, options))
}

export async function getYoutubeV3Playlists(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlists.$get(args, options))
}

export async function putYoutubeV3Playlists(
  args: InferRequestType<typeof client.youtube.v3.playlists.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlists.$put(args, options))
}

export async function postYoutubeV3Playlists(
  args: InferRequestType<typeof client.youtube.v3.playlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlists.$post(args, options))
}

export async function deleteYoutubeV3Playlists(
  args: InferRequestType<typeof client.youtube.v3.playlists.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.playlists.$delete(args, options))
}

export async function getYoutubeV3Search(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.search.$get(args, options))
}

export async function getYoutubeV3Subscriptions(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.subscriptions.$get(args, options))
}

export async function postYoutubeV3Subscriptions(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.subscriptions.$post(args, options))
}

export async function deleteYoutubeV3Subscriptions(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.subscriptions.$delete(args, options))
}

export async function getYoutubeV3SuperChatEvents(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.superChatEvents.$get(args, options))
}

export async function postYoutubeV3Tests(
  args: InferRequestType<typeof client.youtube.v3.tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.tests.$post(args, options))
}

export async function getYoutubeV3ThirdPartyLinks(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.thirdPartyLinks.$get(args, options))
}

export async function putYoutubeV3ThirdPartyLinks(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.thirdPartyLinks.$put(args, options))
}

export async function postYoutubeV3ThirdPartyLinks(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.thirdPartyLinks.$post(args, options))
}

export async function deleteYoutubeV3ThirdPartyLinks(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.thirdPartyLinks.$delete(args, options))
}

export async function postYoutubeV3ThumbnailsSet(
  args: InferRequestType<typeof client.youtube.v3.thumbnails.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.thumbnails.set.$post(args, options))
}

export async function getYoutubeV3VideoAbuseReportReasons(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videoAbuseReportReasons.$get(args, options))
}

export async function getYoutubeV3VideoCategories(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videoCategories.$get(args, options))
}

export async function getYoutubeV3Videos(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.$get(args, options))
}

export async function putYoutubeV3Videos(
  args: InferRequestType<typeof client.youtube.v3.videos.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.$put(args, options))
}

export async function postYoutubeV3Videos(
  args: InferRequestType<typeof client.youtube.v3.videos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.$post(args, options))
}

export async function deleteYoutubeV3Videos(
  args: InferRequestType<typeof client.youtube.v3.videos.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.$delete(args, options))
}

export async function getYoutubeV3VideosGetRating(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.getRating.$get(args, options))
}

export async function postYoutubeV3VideosRate(
  args: InferRequestType<typeof client.youtube.v3.videos.rate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.rate.$post(args, options))
}

export async function postYoutubeV3VideosReportAbuse(
  args: InferRequestType<typeof client.youtube.v3.videos.reportAbuse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.videos.reportAbuse.$post(args, options))
}

export async function postYoutubeV3WatermarksSet(
  args: InferRequestType<typeof client.youtube.v3.watermarks.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.watermarks.set.$post(args, options))
}

export async function postYoutubeV3WatermarksUnset(
  args: InferRequestType<typeof client.youtube.v3.watermarks.unset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.youtube.v3.watermarks.unset.$post(args, options))
}
