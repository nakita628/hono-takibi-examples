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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2BotChannelWebhookEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BotChannelWebhookEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotChannelWebhookTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageMessageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageMessageIdContentPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageMessageIdContentTranscodingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessagePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageNarrowcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageProgressNarrowcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageQuotaConsumptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageDeliveryReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageDeliveryPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageDeliveryMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageDeliveryBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageValidateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageValidatePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageValidateMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageValidateNarrowcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageValidateBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageAggregationInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageAggregationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotProfileUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotFollowersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotGroupGroupIdMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRoomRoomIdMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotGroupGroupIdMembersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRoomRoomIdMembersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotGroupGroupIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRoomRoomIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotGroupGroupIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotGroupGroupIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRoomRoomIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuRichMenuIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuRichMenuIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuRichMenuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BotRichmenuRichMenuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotUserAllRichmenuRichMenuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotUserAllRichmenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BotUserAllRichmenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuAliasRichMenuAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuAliasRichMenuAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BotRichmenuAliasRichMenuAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuAliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotUserUserIdRichmenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BotUserUserIdRichmenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotUserUserIdRichmenuRichMenuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuBulkLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuBulkUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuValidateBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuProgressBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotUserUserIdLinkTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessageMarkAsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotMessagePnpTemplatedPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageDeliveryPnpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageDeliveryPnpTemplatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMembershipSubscriptionUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMembershipListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMembershipMembershipIdUsersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotCouponCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BotCouponCouponIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotChatLoadingStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotChatMarkAsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
