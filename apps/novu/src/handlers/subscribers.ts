import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SubscribersSubscriberIdCredentialsProviderIdRoute,
  deleteV2SubscribersSubscriberIdNotificationsNotificationIdRoute,
  deleteV2SubscribersSubscriberIdRoute,
  getV1SubscribersSubscriberIdNotificationsFeedRoute,
  getV1SubscribersSubscriberIdNotificationsUnseenRoute,
  getV2SubscribersRoute,
  getV2SubscribersSubscriberIdNotificationsCountRoute,
  getV2SubscribersSubscriberIdNotificationsRoute,
  getV2SubscribersSubscriberIdPreferencesRoute,
  getV2SubscribersSubscriberIdRoute,
  getV2SubscribersSubscriberIdSubscriptionsRoute,
  patchV1SubscribersSubscriberIdCredentialsRoute,
  patchV1SubscribersSubscriberIdOnlineStatusRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdReadRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadRoute,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeRoute,
  patchV2SubscribersSubscriberIdPreferencesBulkRoute,
  patchV2SubscribersSubscriberIdPreferencesRoute,
  patchV2SubscribersSubscriberIdRoute,
  postV1SubscribersBulkRoute,
  postV1SubscribersSubscriberIdMessagesMarkAllRoute,
  postV1SubscribersSubscriberIdMessagesMarkAsRoute,
  postV1SubscribersSubscriberIdMessagesMessageIdActionsTypeRoute,
  postV2SubscribersRoute,
  postV2SubscribersSubscriberIdNotificationsArchiveRoute,
  postV2SubscribersSubscriberIdNotificationsDeleteRoute,
  postV2SubscribersSubscriberIdNotificationsReadArchiveRoute,
  postV2SubscribersSubscriberIdNotificationsReadRoute,
  postV2SubscribersSubscriberIdNotificationsSeenRoute,
  postV2SubscribersSubscriberIdTokensRoute,
  putV1SubscribersSubscriberIdCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscribersHandler = app
  .openapi(postV1SubscribersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscribersSubscriberIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscribersSubscriberIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscribersSubscriberIdCredentialsProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscribersSubscriberIdOnlineStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscribersSubscriberIdNotificationsFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscribersSubscriberIdNotificationsUnseenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscribersSubscriberIdMessagesMarkAsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscribersSubscriberIdMessagesMarkAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscribersSubscriberIdMessagesMessageIdActionsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscribersSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SubscribersSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscribersSubscriberIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdPreferencesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscribersSubscriberIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscribersSubscriberIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscribersSubscriberIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscribersSubscriberIdNotificationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdNotificationsNotificationIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SubscribersSubscriberIdNotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2SubscribersSubscriberIdNotificationsSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscribersSubscriberIdNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscribersSubscriberIdNotificationsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscribersSubscriberIdNotificationsReadArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscribersSubscriberIdNotificationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
