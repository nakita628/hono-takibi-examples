import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ContextsTypeIdRoute,
  deleteV2LayoutsLayoutIdRoute,
  deleteV2SubscribersSubscriberIdNotificationsNotificationIdRoute,
  deleteV2SubscribersSubscriberIdRoute,
  deleteV2TopicsTopicKeyRoute,
  deleteV2TopicsTopicKeySubscriptionsRoute,
  deleteV2TranslationsResourceTypeResourceIdLocaleRoute,
  deleteV2TranslationsResourceTypeResourceIdRoute,
  deleteV2WorkflowsWorkflowIdRoute,
  getV2ContextsRoute,
  getV2ContextsTypeIdRoute,
  getV2EnvironmentsEnvironmentIdTagsRoute,
  getV2LayoutsLayoutIdRoute,
  getV2LayoutsLayoutIdUsageRoute,
  getV2LayoutsRoute,
  getV2SubscribersRoute,
  getV2SubscribersSubscriberIdNotificationsCountRoute,
  getV2SubscribersSubscriberIdNotificationsRoute,
  getV2SubscribersSubscriberIdPreferencesRoute,
  getV2SubscribersSubscriberIdRoute,
  getV2SubscribersSubscriberIdSubscriptionsRoute,
  getV2TopicsRoute,
  getV2TopicsTopicKeyRoute,
  getV2TopicsTopicKeySubscriptionsIdentifierRoute,
  getV2TopicsTopicKeySubscriptionsRoute,
  getV2TranslationsGroupResourceTypeResourceIdRoute,
  getV2TranslationsMasterJsonRoute,
  getV2TranslationsResourceTypeResourceIdLocaleRoute,
  getV2WorkflowsRoute,
  getV2WorkflowsWorkflowIdRoute,
  getV2WorkflowsWorkflowIdStepsStepIdRoute,
  patchV2ContextsTypeIdRoute,
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
  patchV2TopicsTopicKeyRoute,
  patchV2TopicsTopicKeySubscriptionsIdentifierRoute,
  patchV2WorkflowsWorkflowIdRoute,
  postV2ContextsRoute,
  postV2EnvironmentsTargetEnvironmentIdDiffRoute,
  postV2EnvironmentsTargetEnvironmentIdPublishRoute,
  postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRoute,
  postV2LayoutsLayoutIdDuplicateRoute,
  postV2LayoutsLayoutIdPreviewRoute,
  postV2LayoutsRoute,
  postV2SubscribersRoute,
  postV2SubscribersSubscriberIdNotificationsArchiveRoute,
  postV2SubscribersSubscriberIdNotificationsDeleteRoute,
  postV2SubscribersSubscriberIdNotificationsReadArchiveRoute,
  postV2SubscribersSubscriberIdNotificationsReadRoute,
  postV2SubscribersSubscriberIdNotificationsSeenRoute,
  postV2SubscribersSubscriberIdTokensRoute,
  postV2TopicsRoute,
  postV2TopicsTopicKeySubscriptionsRoute,
  postV2TranslationsMasterJsonRoute,
  postV2TranslationsMasterJsonUploadRoute,
  postV2TranslationsRoute,
  postV2TranslationsUploadRoute,
  postV2WorkflowsRoute,
  postV2WorkflowsWorkflowIdStepStepIdPreviewRoute,
  putV2LayoutsLayoutIdRoute,
  putV2WorkflowsWorkflowIdRoute,
  putV2WorkflowsWorkflowIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ContextsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContextsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ContextsTypeIdRoute, (c) => {
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
  .openapi(postV2LayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LayoutsLayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LayoutsLayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LayoutsLayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LayoutsLayoutIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LayoutsLayoutIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LayoutsLayoutIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsTopicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TopicsTopicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsTopicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsTopicKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopicsTopicKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsTopicKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsTopicKeySubscriptionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TopicsTopicKeySubscriptionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WorkflowsWorkflowIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsWorkflowIdStepStepIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsWorkflowIdStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EnvironmentsEnvironmentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EnvironmentsTargetEnvironmentIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EnvironmentsTargetEnvironmentIdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TranslationsMasterJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsMasterJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsMasterJsonUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TranslationsGroupResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TranslationsResourceTypeResourceIdLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TranslationsResourceTypeResourceIdLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TranslationsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
