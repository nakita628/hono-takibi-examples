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
  putYoutubeV3PlaylistItemsRoute,
  putYoutubeV3PlaylistsRoute,
  putYoutubeV3ThirdPartyLinksRoute,
  putYoutubeV3VideosRoute,
} from './routes'
import {
  deleteYoutubeV3CaptionsRouteHandler,
  deleteYoutubeV3ChannelSectionsRouteHandler,
  deleteYoutubeV3CommentsRouteHandler,
  deleteYoutubeV3LiveBroadcastsRouteHandler,
  deleteYoutubeV3LiveChatBansRouteHandler,
  deleteYoutubeV3LiveChatMessagesRouteHandler,
  deleteYoutubeV3LiveChatModeratorsRouteHandler,
  deleteYoutubeV3LiveStreamsRouteHandler,
  deleteYoutubeV3PlaylistItemsRouteHandler,
  deleteYoutubeV3PlaylistsRouteHandler,
  deleteYoutubeV3SubscriptionsRouteHandler,
  deleteYoutubeV3ThirdPartyLinksRouteHandler,
  deleteYoutubeV3VideosRouteHandler,
  getYoutubeV3ActivitiesRouteHandler,
  getYoutubeV3CaptionsIdRouteHandler,
  getYoutubeV3CaptionsRouteHandler,
  getYoutubeV3ChannelSectionsRouteHandler,
  getYoutubeV3ChannelsRouteHandler,
  getYoutubeV3CommentsRouteHandler,
  getYoutubeV3CommentThreadsRouteHandler,
  getYoutubeV3I18nLanguagesRouteHandler,
  getYoutubeV3I18nRegionsRouteHandler,
  getYoutubeV3LiveBroadcastsRouteHandler,
  getYoutubeV3LiveChatMessagesRouteHandler,
  getYoutubeV3LiveChatModeratorsRouteHandler,
  getYoutubeV3LiveStreamsRouteHandler,
  getYoutubeV3MembershipsLevelsRouteHandler,
  getYoutubeV3MembersRouteHandler,
  getYoutubeV3PlaylistItemsRouteHandler,
  getYoutubeV3PlaylistsRouteHandler,
  getYoutubeV3SearchRouteHandler,
  getYoutubeV3SubscriptionsRouteHandler,
  getYoutubeV3SuperChatEventsRouteHandler,
  getYoutubeV3ThirdPartyLinksRouteHandler,
  getYoutubeV3VideoAbuseReportReasonsRouteHandler,
  getYoutubeV3VideoCategoriesRouteHandler,
  getYoutubeV3VideosGetRatingRouteHandler,
  getYoutubeV3VideosRouteHandler,
  postYoutubeV3AbuseReportsRouteHandler,
  postYoutubeV3CaptionsRouteHandler,
  postYoutubeV3ChannelBannersInsertRouteHandler,
  postYoutubeV3ChannelSectionsRouteHandler,
  postYoutubeV3CommentsMarkAsSpamRouteHandler,
  postYoutubeV3CommentsRouteHandler,
  postYoutubeV3CommentsSetModerationStatusRouteHandler,
  postYoutubeV3CommentThreadsRouteHandler,
  postYoutubeV3LiveBroadcastsBindRouteHandler,
  postYoutubeV3LiveBroadcastsCuepointRouteHandler,
  postYoutubeV3LiveBroadcastsRouteHandler,
  postYoutubeV3LiveBroadcastsTransitionRouteHandler,
  postYoutubeV3LiveChatBansRouteHandler,
  postYoutubeV3LiveChatMessagesRouteHandler,
  postYoutubeV3LiveChatModeratorsRouteHandler,
  postYoutubeV3LiveStreamsRouteHandler,
  postYoutubeV3PlaylistItemsRouteHandler,
  postYoutubeV3PlaylistsRouteHandler,
  postYoutubeV3SubscriptionsRouteHandler,
  postYoutubeV3TestsRouteHandler,
  postYoutubeV3ThirdPartyLinksRouteHandler,
  postYoutubeV3ThumbnailsSetRouteHandler,
  postYoutubeV3VideosRateRouteHandler,
  postYoutubeV3VideosReportAbuseRouteHandler,
  postYoutubeV3VideosRouteHandler,
  postYoutubeV3WatermarksSetRouteHandler,
  postYoutubeV3WatermarksUnsetRouteHandler,
  putYoutubeV3CaptionsRouteHandler,
  putYoutubeV3ChannelSectionsRouteHandler,
  putYoutubeV3ChannelsRouteHandler,
  putYoutubeV3CommentsRouteHandler,
  putYoutubeV3CommentThreadsRouteHandler,
  putYoutubeV3LiveBroadcastsRouteHandler,
  putYoutubeV3LiveStreamsRouteHandler,
  putYoutubeV3PlaylistItemsRouteHandler,
  putYoutubeV3PlaylistsRouteHandler,
  putYoutubeV3ThirdPartyLinksRouteHandler,
  putYoutubeV3VideosRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postYoutubeV3AbuseReportsRoute, postYoutubeV3AbuseReportsRouteHandler)
  .openapi(getYoutubeV3ActivitiesRoute, getYoutubeV3ActivitiesRouteHandler)
  .openapi(deleteYoutubeV3CaptionsRoute, deleteYoutubeV3CaptionsRouteHandler)
  .openapi(getYoutubeV3CaptionsRoute, getYoutubeV3CaptionsRouteHandler)
  .openapi(postYoutubeV3CaptionsRoute, postYoutubeV3CaptionsRouteHandler)
  .openapi(putYoutubeV3CaptionsRoute, putYoutubeV3CaptionsRouteHandler)
  .openapi(getYoutubeV3CaptionsIdRoute, getYoutubeV3CaptionsIdRouteHandler)
  .openapi(postYoutubeV3ChannelBannersInsertRoute, postYoutubeV3ChannelBannersInsertRouteHandler)
  .openapi(deleteYoutubeV3ChannelSectionsRoute, deleteYoutubeV3ChannelSectionsRouteHandler)
  .openapi(getYoutubeV3ChannelSectionsRoute, getYoutubeV3ChannelSectionsRouteHandler)
  .openapi(postYoutubeV3ChannelSectionsRoute, postYoutubeV3ChannelSectionsRouteHandler)
  .openapi(putYoutubeV3ChannelSectionsRoute, putYoutubeV3ChannelSectionsRouteHandler)
  .openapi(getYoutubeV3ChannelsRoute, getYoutubeV3ChannelsRouteHandler)
  .openapi(putYoutubeV3ChannelsRoute, putYoutubeV3ChannelsRouteHandler)
  .openapi(getYoutubeV3CommentThreadsRoute, getYoutubeV3CommentThreadsRouteHandler)
  .openapi(postYoutubeV3CommentThreadsRoute, postYoutubeV3CommentThreadsRouteHandler)
  .openapi(putYoutubeV3CommentThreadsRoute, putYoutubeV3CommentThreadsRouteHandler)
  .openapi(deleteYoutubeV3CommentsRoute, deleteYoutubeV3CommentsRouteHandler)
  .openapi(getYoutubeV3CommentsRoute, getYoutubeV3CommentsRouteHandler)
  .openapi(postYoutubeV3CommentsRoute, postYoutubeV3CommentsRouteHandler)
  .openapi(putYoutubeV3CommentsRoute, putYoutubeV3CommentsRouteHandler)
  .openapi(postYoutubeV3CommentsMarkAsSpamRoute, postYoutubeV3CommentsMarkAsSpamRouteHandler)
  .openapi(
    postYoutubeV3CommentsSetModerationStatusRoute,
    postYoutubeV3CommentsSetModerationStatusRouteHandler,
  )
  .openapi(getYoutubeV3I18nLanguagesRoute, getYoutubeV3I18nLanguagesRouteHandler)
  .openapi(getYoutubeV3I18nRegionsRoute, getYoutubeV3I18nRegionsRouteHandler)
  .openapi(deleteYoutubeV3LiveBroadcastsRoute, deleteYoutubeV3LiveBroadcastsRouteHandler)
  .openapi(getYoutubeV3LiveBroadcastsRoute, getYoutubeV3LiveBroadcastsRouteHandler)
  .openapi(postYoutubeV3LiveBroadcastsRoute, postYoutubeV3LiveBroadcastsRouteHandler)
  .openapi(putYoutubeV3LiveBroadcastsRoute, putYoutubeV3LiveBroadcastsRouteHandler)
  .openapi(postYoutubeV3LiveBroadcastsBindRoute, postYoutubeV3LiveBroadcastsBindRouteHandler)
  .openapi(
    postYoutubeV3LiveBroadcastsCuepointRoute,
    postYoutubeV3LiveBroadcastsCuepointRouteHandler,
  )
  .openapi(
    postYoutubeV3LiveBroadcastsTransitionRoute,
    postYoutubeV3LiveBroadcastsTransitionRouteHandler,
  )
  .openapi(deleteYoutubeV3LiveChatBansRoute, deleteYoutubeV3LiveChatBansRouteHandler)
  .openapi(postYoutubeV3LiveChatBansRoute, postYoutubeV3LiveChatBansRouteHandler)
  .openapi(deleteYoutubeV3LiveChatMessagesRoute, deleteYoutubeV3LiveChatMessagesRouteHandler)
  .openapi(getYoutubeV3LiveChatMessagesRoute, getYoutubeV3LiveChatMessagesRouteHandler)
  .openapi(postYoutubeV3LiveChatMessagesRoute, postYoutubeV3LiveChatMessagesRouteHandler)
  .openapi(deleteYoutubeV3LiveChatModeratorsRoute, deleteYoutubeV3LiveChatModeratorsRouteHandler)
  .openapi(getYoutubeV3LiveChatModeratorsRoute, getYoutubeV3LiveChatModeratorsRouteHandler)
  .openapi(postYoutubeV3LiveChatModeratorsRoute, postYoutubeV3LiveChatModeratorsRouteHandler)
  .openapi(deleteYoutubeV3LiveStreamsRoute, deleteYoutubeV3LiveStreamsRouteHandler)
  .openapi(getYoutubeV3LiveStreamsRoute, getYoutubeV3LiveStreamsRouteHandler)
  .openapi(postYoutubeV3LiveStreamsRoute, postYoutubeV3LiveStreamsRouteHandler)
  .openapi(putYoutubeV3LiveStreamsRoute, putYoutubeV3LiveStreamsRouteHandler)
  .openapi(getYoutubeV3MembersRoute, getYoutubeV3MembersRouteHandler)
  .openapi(getYoutubeV3MembershipsLevelsRoute, getYoutubeV3MembershipsLevelsRouteHandler)
  .openapi(deleteYoutubeV3PlaylistItemsRoute, deleteYoutubeV3PlaylistItemsRouteHandler)
  .openapi(getYoutubeV3PlaylistItemsRoute, getYoutubeV3PlaylistItemsRouteHandler)
  .openapi(postYoutubeV3PlaylistItemsRoute, postYoutubeV3PlaylistItemsRouteHandler)
  .openapi(putYoutubeV3PlaylistItemsRoute, putYoutubeV3PlaylistItemsRouteHandler)
  .openapi(deleteYoutubeV3PlaylistsRoute, deleteYoutubeV3PlaylistsRouteHandler)
  .openapi(getYoutubeV3PlaylistsRoute, getYoutubeV3PlaylistsRouteHandler)
  .openapi(postYoutubeV3PlaylistsRoute, postYoutubeV3PlaylistsRouteHandler)
  .openapi(putYoutubeV3PlaylistsRoute, putYoutubeV3PlaylistsRouteHandler)
  .openapi(getYoutubeV3SearchRoute, getYoutubeV3SearchRouteHandler)
  .openapi(deleteYoutubeV3SubscriptionsRoute, deleteYoutubeV3SubscriptionsRouteHandler)
  .openapi(getYoutubeV3SubscriptionsRoute, getYoutubeV3SubscriptionsRouteHandler)
  .openapi(postYoutubeV3SubscriptionsRoute, postYoutubeV3SubscriptionsRouteHandler)
  .openapi(getYoutubeV3SuperChatEventsRoute, getYoutubeV3SuperChatEventsRouteHandler)
  .openapi(postYoutubeV3TestsRoute, postYoutubeV3TestsRouteHandler)
  .openapi(deleteYoutubeV3ThirdPartyLinksRoute, deleteYoutubeV3ThirdPartyLinksRouteHandler)
  .openapi(getYoutubeV3ThirdPartyLinksRoute, getYoutubeV3ThirdPartyLinksRouteHandler)
  .openapi(postYoutubeV3ThirdPartyLinksRoute, postYoutubeV3ThirdPartyLinksRouteHandler)
  .openapi(putYoutubeV3ThirdPartyLinksRoute, putYoutubeV3ThirdPartyLinksRouteHandler)
  .openapi(postYoutubeV3ThumbnailsSetRoute, postYoutubeV3ThumbnailsSetRouteHandler)
  .openapi(
    getYoutubeV3VideoAbuseReportReasonsRoute,
    getYoutubeV3VideoAbuseReportReasonsRouteHandler,
  )
  .openapi(getYoutubeV3VideoCategoriesRoute, getYoutubeV3VideoCategoriesRouteHandler)
  .openapi(deleteYoutubeV3VideosRoute, deleteYoutubeV3VideosRouteHandler)
  .openapi(getYoutubeV3VideosRoute, getYoutubeV3VideosRouteHandler)
  .openapi(postYoutubeV3VideosRoute, postYoutubeV3VideosRouteHandler)
  .openapi(putYoutubeV3VideosRoute, putYoutubeV3VideosRouteHandler)
  .openapi(getYoutubeV3VideosGetRatingRoute, getYoutubeV3VideosGetRatingRouteHandler)
  .openapi(postYoutubeV3VideosRateRoute, postYoutubeV3VideosRateRouteHandler)
  .openapi(postYoutubeV3VideosReportAbuseRoute, postYoutubeV3VideosReportAbuseRouteHandler)
  .openapi(postYoutubeV3WatermarksSetRoute, postYoutubeV3WatermarksSetRouteHandler)
  .openapi(postYoutubeV3WatermarksUnsetRoute, postYoutubeV3WatermarksUnsetRouteHandler)

export default app
