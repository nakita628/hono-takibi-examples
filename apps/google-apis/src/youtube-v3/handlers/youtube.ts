import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3CaptionsRoute,
  deleteYoutubeV3ChannelSectionsRoute,
  deleteYoutubeV3CommentsRoute,
  deleteYoutubeV3LiveBroadcastsRoute,
  deleteYoutubeV3LiveChatBansRoute,
  deleteYoutubeV3LiveChatMessagesRoute,
  deleteYoutubeV3LiveChatModeratorsRoute,
  deleteYoutubeV3LiveStreamsRoute,
  deleteYoutubeV3PlaylistImagesRoute,
  deleteYoutubeV3PlaylistItemsRoute,
  deleteYoutubeV3PlaylistsRoute,
  deleteYoutubeV3SubscriptionsRoute,
  deleteYoutubeV3ThirdPartyLinksRoute,
  deleteYoutubeV3VideosRoute,
  getYoutubeV3ActivitiesRoute,
  getYoutubeV3CaptionsIdRoute,
  getYoutubeV3CaptionsRoute,
  getYoutubeV3ChannelSectionsRoute,
  getYoutubeV3ChannelsRoute,
  getYoutubeV3CommentsRoute,
  getYoutubeV3CommentThreadsRoute,
  getYoutubeV3I18nLanguagesRoute,
  getYoutubeV3I18nRegionsRoute,
  getYoutubeV3LiveBroadcastsRoute,
  getYoutubeV3LiveChatMessagesRoute,
  getYoutubeV3LiveChatModeratorsRoute,
  getYoutubeV3LiveStreamsRoute,
  getYoutubeV3MembershipsLevelsRoute,
  getYoutubeV3MembersRoute,
  getYoutubeV3PlaylistImagesRoute,
  getYoutubeV3PlaylistItemsRoute,
  getYoutubeV3PlaylistsRoute,
  getYoutubeV3SearchRoute,
  getYoutubeV3SubscriptionsRoute,
  getYoutubeV3SuperChatEventsRoute,
  getYoutubeV3ThirdPartyLinksRoute,
  getYoutubeV3VideoAbuseReportReasonsRoute,
  getYoutubeV3VideoCategoriesRoute,
  getYoutubeV3VideosGetRatingRoute,
  getYoutubeV3VideosRoute,
  postYoutubeV3AbuseReportsRoute,
  postYoutubeV3CaptionsRoute,
  postYoutubeV3ChannelBannersInsertRoute,
  postYoutubeV3ChannelSectionsRoute,
  postYoutubeV3CommentsMarkAsSpamRoute,
  postYoutubeV3CommentsRoute,
  postYoutubeV3CommentsSetModerationStatusRoute,
  postYoutubeV3CommentThreadsRoute,
  postYoutubeV3LiveBroadcastsBindRoute,
  postYoutubeV3LiveBroadcastsCuepointRoute,
  postYoutubeV3LiveBroadcastsRoute,
  postYoutubeV3LiveBroadcastsTransitionRoute,
  postYoutubeV3LiveChatBansRoute,
  postYoutubeV3LiveChatMessagesRoute,
  postYoutubeV3LiveChatModeratorsRoute,
  postYoutubeV3LiveStreamsRoute,
  postYoutubeV3PlaylistImagesRoute,
  postYoutubeV3PlaylistItemsRoute,
  postYoutubeV3PlaylistsRoute,
  postYoutubeV3SubscriptionsRoute,
  postYoutubeV3TestsRoute,
  postYoutubeV3ThirdPartyLinksRoute,
  postYoutubeV3ThumbnailsSetRoute,
  postYoutubeV3VideosRateRoute,
  postYoutubeV3VideosReportAbuseRoute,
  postYoutubeV3VideosRoute,
  postYoutubeV3WatermarksSetRoute,
  postYoutubeV3WatermarksUnsetRoute,
  putYoutubeV3CaptionsRoute,
  putYoutubeV3ChannelSectionsRoute,
  putYoutubeV3ChannelsRoute,
  putYoutubeV3CommentsRoute,
  putYoutubeV3CommentThreadsRoute,
  putYoutubeV3LiveBroadcastsRoute,
  putYoutubeV3LiveStreamsRoute,
  putYoutubeV3PlaylistImagesRoute,
  putYoutubeV3PlaylistItemsRoute,
  putYoutubeV3PlaylistsRoute,
  putYoutubeV3ThirdPartyLinksRoute,
  putYoutubeV3VideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const youtubeHandler = app
  .openapi(postYoutubeV3AbuseReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CaptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3ChannelBannersInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3CommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentsMarkAsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentsSetModerationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3I18nLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3I18nRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsBindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsCuepointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3LiveChatBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveChatBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3LiveChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3LiveChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3MembershipsLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3SuperChatEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3TestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3ThumbnailsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3VideoAbuseReportReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3VideoCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3VideosGetRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3VideosRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3VideosReportAbuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3WatermarksSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3WatermarksUnsetRoute, (c) => {
    throw new Error('Not implemented')
  })
