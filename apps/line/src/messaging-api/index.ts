import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2BotRichmenuAliasRichMenuAliasIdRoute,
  deleteV2BotRichmenuRichMenuIdRoute,
  deleteV2BotUserAllRichmenuRoute,
  deleteV2BotUserUserIdRichmenuRoute,
  getV2BotChannelWebhookEndpointRoute,
  getV2BotCouponCouponIdRoute,
  getV2BotCouponRoute,
  getV2BotFollowersIdsRoute,
  getV2BotGroupGroupIdMembersCountRoute,
  getV2BotGroupGroupIdMembersIdsRoute,
  getV2BotGroupGroupIdMemberUserIdRoute,
  getV2BotGroupGroupIdSummaryRoute,
  getV2BotInfoRoute,
  getV2BotMembershipListRoute,
  getV2BotMembershipMembershipIdUsersIdsRoute,
  getV2BotMembershipSubscriptionUserIdRoute,
  getV2BotMessageAggregationInfoRoute,
  getV2BotMessageAggregationListRoute,
  getV2BotMessageDeliveryBroadcastRoute,
  getV2BotMessageDeliveryMulticastRoute,
  getV2BotMessageDeliveryPnpRoute,
  getV2BotMessageDeliveryPnpTemplatedRoute,
  getV2BotMessageDeliveryPushRoute,
  getV2BotMessageDeliveryReplyRoute,
  getV2BotMessageMessageIdContentPreviewRoute,
  getV2BotMessageMessageIdContentRoute,
  getV2BotMessageMessageIdContentTranscodingRoute,
  getV2BotMessageProgressNarrowcastRoute,
  getV2BotMessageQuotaConsumptionRoute,
  getV2BotMessageQuotaRoute,
  getV2BotProfileUserIdRoute,
  getV2BotRichmenuAliasListRoute,
  getV2BotRichmenuAliasRichMenuAliasIdRoute,
  getV2BotRichmenuListRoute,
  getV2BotRichmenuProgressBatchRoute,
  getV2BotRichmenuRichMenuIdContentRoute,
  getV2BotRichmenuRichMenuIdRoute,
  getV2BotRoomRoomIdMembersCountRoute,
  getV2BotRoomRoomIdMembersIdsRoute,
  getV2BotRoomRoomIdMemberUserIdRoute,
  getV2BotUserAllRichmenuRoute,
  getV2BotUserUserIdRichmenuRoute,
  postBotPnpPushRoute,
  postV2BotChannelWebhookTestRoute,
  postV2BotChatLoadingStartRoute,
  postV2BotChatMarkAsReadRoute,
  postV2BotCouponRoute,
  postV2BotGroupGroupIdLeaveRoute,
  postV2BotMessageBroadcastRoute,
  postV2BotMessageMarkAsReadRoute,
  postV2BotMessageMulticastRoute,
  postV2BotMessageNarrowcastRoute,
  postV2BotMessagePnpTemplatedPushRoute,
  postV2BotMessagePushRoute,
  postV2BotMessageReplyRoute,
  postV2BotMessageValidateBroadcastRoute,
  postV2BotMessageValidateMulticastRoute,
  postV2BotMessageValidateNarrowcastRoute,
  postV2BotMessageValidatePushRoute,
  postV2BotMessageValidateReplyRoute,
  postV2BotRichmenuAliasRichMenuAliasIdRoute,
  postV2BotRichmenuAliasRoute,
  postV2BotRichmenuBatchRoute,
  postV2BotRichmenuBulkLinkRoute,
  postV2BotRichmenuBulkUnlinkRoute,
  postV2BotRichmenuRichMenuIdContentRoute,
  postV2BotRichmenuRoute,
  postV2BotRichmenuValidateBatchRoute,
  postV2BotRichmenuValidateRoute,
  postV2BotRoomRoomIdLeaveRoute,
  postV2BotUserAllRichmenuRichMenuIdRoute,
  postV2BotUserUserIdLinkTokenRoute,
  postV2BotUserUserIdRichmenuRichMenuIdRoute,
  putV2BotChannelWebhookEndpointRoute,
  putV2BotCouponCouponIdCloseRoute,
} from './routes'
import {
  deleteV2BotRichmenuAliasRichMenuAliasIdRouteHandler,
  deleteV2BotRichmenuRichMenuIdRouteHandler,
  deleteV2BotUserAllRichmenuRouteHandler,
  deleteV2BotUserUserIdRichmenuRouteHandler,
  getV2BotChannelWebhookEndpointRouteHandler,
  getV2BotCouponCouponIdRouteHandler,
  getV2BotCouponRouteHandler,
  getV2BotFollowersIdsRouteHandler,
  getV2BotGroupGroupIdMembersCountRouteHandler,
  getV2BotGroupGroupIdMembersIdsRouteHandler,
  getV2BotGroupGroupIdMemberUserIdRouteHandler,
  getV2BotGroupGroupIdSummaryRouteHandler,
  getV2BotInfoRouteHandler,
  getV2BotMembershipListRouteHandler,
  getV2BotMembershipMembershipIdUsersIdsRouteHandler,
  getV2BotMembershipSubscriptionUserIdRouteHandler,
  getV2BotMessageAggregationInfoRouteHandler,
  getV2BotMessageAggregationListRouteHandler,
  getV2BotMessageDeliveryBroadcastRouteHandler,
  getV2BotMessageDeliveryMulticastRouteHandler,
  getV2BotMessageDeliveryPnpRouteHandler,
  getV2BotMessageDeliveryPnpTemplatedRouteHandler,
  getV2BotMessageDeliveryPushRouteHandler,
  getV2BotMessageDeliveryReplyRouteHandler,
  getV2BotMessageMessageIdContentPreviewRouteHandler,
  getV2BotMessageMessageIdContentRouteHandler,
  getV2BotMessageMessageIdContentTranscodingRouteHandler,
  getV2BotMessageProgressNarrowcastRouteHandler,
  getV2BotMessageQuotaConsumptionRouteHandler,
  getV2BotMessageQuotaRouteHandler,
  getV2BotProfileUserIdRouteHandler,
  getV2BotRichmenuAliasListRouteHandler,
  getV2BotRichmenuAliasRichMenuAliasIdRouteHandler,
  getV2BotRichmenuListRouteHandler,
  getV2BotRichmenuProgressBatchRouteHandler,
  getV2BotRichmenuRichMenuIdContentRouteHandler,
  getV2BotRichmenuRichMenuIdRouteHandler,
  getV2BotRoomRoomIdMembersCountRouteHandler,
  getV2BotRoomRoomIdMembersIdsRouteHandler,
  getV2BotRoomRoomIdMemberUserIdRouteHandler,
  getV2BotUserAllRichmenuRouteHandler,
  getV2BotUserUserIdRichmenuRouteHandler,
  postBotPnpPushRouteHandler,
  postV2BotChannelWebhookTestRouteHandler,
  postV2BotChatLoadingStartRouteHandler,
  postV2BotChatMarkAsReadRouteHandler,
  postV2BotCouponRouteHandler,
  postV2BotGroupGroupIdLeaveRouteHandler,
  postV2BotMessageBroadcastRouteHandler,
  postV2BotMessageMarkAsReadRouteHandler,
  postV2BotMessageMulticastRouteHandler,
  postV2BotMessageNarrowcastRouteHandler,
  postV2BotMessagePnpTemplatedPushRouteHandler,
  postV2BotMessagePushRouteHandler,
  postV2BotMessageReplyRouteHandler,
  postV2BotMessageValidateBroadcastRouteHandler,
  postV2BotMessageValidateMulticastRouteHandler,
  postV2BotMessageValidateNarrowcastRouteHandler,
  postV2BotMessageValidatePushRouteHandler,
  postV2BotMessageValidateReplyRouteHandler,
  postV2BotRichmenuAliasRichMenuAliasIdRouteHandler,
  postV2BotRichmenuAliasRouteHandler,
  postV2BotRichmenuBatchRouteHandler,
  postV2BotRichmenuBulkLinkRouteHandler,
  postV2BotRichmenuBulkUnlinkRouteHandler,
  postV2BotRichmenuRichMenuIdContentRouteHandler,
  postV2BotRichmenuRouteHandler,
  postV2BotRichmenuValidateBatchRouteHandler,
  postV2BotRichmenuValidateRouteHandler,
  postV2BotRoomRoomIdLeaveRouteHandler,
  postV2BotUserAllRichmenuRichMenuIdRouteHandler,
  postV2BotUserUserIdLinkTokenRouteHandler,
  postV2BotUserUserIdRichmenuRichMenuIdRouteHandler,
  putV2BotChannelWebhookEndpointRouteHandler,
  putV2BotCouponCouponIdCloseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2BotChannelWebhookEndpointRoute, getV2BotChannelWebhookEndpointRouteHandler)
  .openapi(putV2BotChannelWebhookEndpointRoute, putV2BotChannelWebhookEndpointRouteHandler)
  .openapi(postV2BotChannelWebhookTestRoute, postV2BotChannelWebhookTestRouteHandler)
  .openapi(getV2BotMessageMessageIdContentRoute, getV2BotMessageMessageIdContentRouteHandler)
  .openapi(
    getV2BotMessageMessageIdContentPreviewRoute,
    getV2BotMessageMessageIdContentPreviewRouteHandler,
  )
  .openapi(
    getV2BotMessageMessageIdContentTranscodingRoute,
    getV2BotMessageMessageIdContentTranscodingRouteHandler,
  )
  .openapi(postV2BotMessageReplyRoute, postV2BotMessageReplyRouteHandler)
  .openapi(postV2BotMessagePushRoute, postV2BotMessagePushRouteHandler)
  .openapi(postV2BotMessageMulticastRoute, postV2BotMessageMulticastRouteHandler)
  .openapi(postV2BotMessageNarrowcastRoute, postV2BotMessageNarrowcastRouteHandler)
  .openapi(getV2BotMessageProgressNarrowcastRoute, getV2BotMessageProgressNarrowcastRouteHandler)
  .openapi(postV2BotMessageBroadcastRoute, postV2BotMessageBroadcastRouteHandler)
  .openapi(getV2BotMessageQuotaRoute, getV2BotMessageQuotaRouteHandler)
  .openapi(getV2BotMessageQuotaConsumptionRoute, getV2BotMessageQuotaConsumptionRouteHandler)
  .openapi(getV2BotMessageDeliveryReplyRoute, getV2BotMessageDeliveryReplyRouteHandler)
  .openapi(getV2BotMessageDeliveryPushRoute, getV2BotMessageDeliveryPushRouteHandler)
  .openapi(getV2BotMessageDeliveryMulticastRoute, getV2BotMessageDeliveryMulticastRouteHandler)
  .openapi(getV2BotMessageDeliveryBroadcastRoute, getV2BotMessageDeliveryBroadcastRouteHandler)
  .openapi(postV2BotMessageValidateReplyRoute, postV2BotMessageValidateReplyRouteHandler)
  .openapi(postV2BotMessageValidatePushRoute, postV2BotMessageValidatePushRouteHandler)
  .openapi(postV2BotMessageValidateMulticastRoute, postV2BotMessageValidateMulticastRouteHandler)
  .openapi(postV2BotMessageValidateNarrowcastRoute, postV2BotMessageValidateNarrowcastRouteHandler)
  .openapi(postV2BotMessageValidateBroadcastRoute, postV2BotMessageValidateBroadcastRouteHandler)
  .openapi(getV2BotMessageAggregationInfoRoute, getV2BotMessageAggregationInfoRouteHandler)
  .openapi(getV2BotMessageAggregationListRoute, getV2BotMessageAggregationListRouteHandler)
  .openapi(getV2BotProfileUserIdRoute, getV2BotProfileUserIdRouteHandler)
  .openapi(getV2BotFollowersIdsRoute, getV2BotFollowersIdsRouteHandler)
  .openapi(getV2BotInfoRoute, getV2BotInfoRouteHandler)
  .openapi(getV2BotGroupGroupIdMemberUserIdRoute, getV2BotGroupGroupIdMemberUserIdRouteHandler)
  .openapi(getV2BotRoomRoomIdMemberUserIdRoute, getV2BotRoomRoomIdMemberUserIdRouteHandler)
  .openapi(getV2BotGroupGroupIdMembersIdsRoute, getV2BotGroupGroupIdMembersIdsRouteHandler)
  .openapi(getV2BotRoomRoomIdMembersIdsRoute, getV2BotRoomRoomIdMembersIdsRouteHandler)
  .openapi(postV2BotGroupGroupIdLeaveRoute, postV2BotGroupGroupIdLeaveRouteHandler)
  .openapi(postV2BotRoomRoomIdLeaveRoute, postV2BotRoomRoomIdLeaveRouteHandler)
  .openapi(getV2BotGroupGroupIdSummaryRoute, getV2BotGroupGroupIdSummaryRouteHandler)
  .openapi(getV2BotGroupGroupIdMembersCountRoute, getV2BotGroupGroupIdMembersCountRouteHandler)
  .openapi(getV2BotRoomRoomIdMembersCountRoute, getV2BotRoomRoomIdMembersCountRouteHandler)
  .openapi(postV2BotRichmenuRoute, postV2BotRichmenuRouteHandler)
  .openapi(postV2BotRichmenuValidateRoute, postV2BotRichmenuValidateRouteHandler)
  .openapi(getV2BotRichmenuRichMenuIdContentRoute, getV2BotRichmenuRichMenuIdContentRouteHandler)
  .openapi(postV2BotRichmenuRichMenuIdContentRoute, postV2BotRichmenuRichMenuIdContentRouteHandler)
  .openapi(getV2BotRichmenuRichMenuIdRoute, getV2BotRichmenuRichMenuIdRouteHandler)
  .openapi(deleteV2BotRichmenuRichMenuIdRoute, deleteV2BotRichmenuRichMenuIdRouteHandler)
  .openapi(getV2BotRichmenuListRoute, getV2BotRichmenuListRouteHandler)
  .openapi(postV2BotUserAllRichmenuRichMenuIdRoute, postV2BotUserAllRichmenuRichMenuIdRouteHandler)
  .openapi(getV2BotUserAllRichmenuRoute, getV2BotUserAllRichmenuRouteHandler)
  .openapi(deleteV2BotUserAllRichmenuRoute, deleteV2BotUserAllRichmenuRouteHandler)
  .openapi(postV2BotRichmenuAliasRoute, postV2BotRichmenuAliasRouteHandler)
  .openapi(
    getV2BotRichmenuAliasRichMenuAliasIdRoute,
    getV2BotRichmenuAliasRichMenuAliasIdRouteHandler,
  )
  .openapi(
    postV2BotRichmenuAliasRichMenuAliasIdRoute,
    postV2BotRichmenuAliasRichMenuAliasIdRouteHandler,
  )
  .openapi(
    deleteV2BotRichmenuAliasRichMenuAliasIdRoute,
    deleteV2BotRichmenuAliasRichMenuAliasIdRouteHandler,
  )
  .openapi(getV2BotRichmenuAliasListRoute, getV2BotRichmenuAliasListRouteHandler)
  .openapi(getV2BotUserUserIdRichmenuRoute, getV2BotUserUserIdRichmenuRouteHandler)
  .openapi(deleteV2BotUserUserIdRichmenuRoute, deleteV2BotUserUserIdRichmenuRouteHandler)
  .openapi(
    postV2BotUserUserIdRichmenuRichMenuIdRoute,
    postV2BotUserUserIdRichmenuRichMenuIdRouteHandler,
  )
  .openapi(postV2BotRichmenuBulkLinkRoute, postV2BotRichmenuBulkLinkRouteHandler)
  .openapi(postV2BotRichmenuBulkUnlinkRoute, postV2BotRichmenuBulkUnlinkRouteHandler)
  .openapi(postV2BotRichmenuBatchRoute, postV2BotRichmenuBatchRouteHandler)
  .openapi(postV2BotRichmenuValidateBatchRoute, postV2BotRichmenuValidateBatchRouteHandler)
  .openapi(getV2BotRichmenuProgressBatchRoute, getV2BotRichmenuProgressBatchRouteHandler)
  .openapi(postV2BotUserUserIdLinkTokenRoute, postV2BotUserUserIdLinkTokenRouteHandler)
  .openapi(postV2BotMessageMarkAsReadRoute, postV2BotMessageMarkAsReadRouteHandler)
  .openapi(postBotPnpPushRoute, postBotPnpPushRouteHandler)
  .openapi(postV2BotMessagePnpTemplatedPushRoute, postV2BotMessagePnpTemplatedPushRouteHandler)
  .openapi(getV2BotMessageDeliveryPnpRoute, getV2BotMessageDeliveryPnpRouteHandler)
  .openapi(
    getV2BotMessageDeliveryPnpTemplatedRoute,
    getV2BotMessageDeliveryPnpTemplatedRouteHandler,
  )
  .openapi(
    getV2BotMembershipSubscriptionUserIdRoute,
    getV2BotMembershipSubscriptionUserIdRouteHandler,
  )
  .openapi(getV2BotMembershipListRoute, getV2BotMembershipListRouteHandler)
  .openapi(
    getV2BotMembershipMembershipIdUsersIdsRoute,
    getV2BotMembershipMembershipIdUsersIdsRouteHandler,
  )
  .openapi(getV2BotCouponRoute, getV2BotCouponRouteHandler)
  .openapi(postV2BotCouponRoute, postV2BotCouponRouteHandler)
  .openapi(getV2BotCouponCouponIdRoute, getV2BotCouponCouponIdRouteHandler)
  .openapi(putV2BotCouponCouponIdCloseRoute, putV2BotCouponCouponIdCloseRouteHandler)
  .openapi(postV2BotChatLoadingStartRoute, postV2BotChatLoadingStartRouteHandler)
  .openapi(postV2BotChatMarkAsReadRoute, postV2BotChatMarkAsReadRouteHandler)

export default app
