import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
  deleteV1AgentsIdentifierRoute,
  deleteV1ChannelConnectionsIdentifierRoute,
  deleteV1ChannelEndpointsIdentifierRoute,
  deleteV1DomainsDomainRoute,
  deleteV1DomainsDomainRoutesAddressRoute,
  deleteV1EnvironmentsEnvironmentIdRoute,
  deleteV1EnvironmentVariablesVariableKeyRoute,
  deleteV1EventsTriggerTransactionIdRoute,
  deleteV1IntegrationsIntegrationIdRoute,
  deleteV1MessagesMessageIdRoute,
  deleteV1MessagesTransactionTransactionIdRoute,
  deleteV1SubscribersSubscriberIdCredentialsProviderIdRoute,
  deleteV2ContextsTypeIdRoute,
  deleteV2LayoutsLayoutIdRoute,
  deleteV2SubscribersSubscriberIdNotificationsNotificationIdRoute,
  deleteV2SubscribersSubscriberIdRoute,
  deleteV2TopicsTopicKeyRoute,
  deleteV2TopicsTopicKeySubscriptionsRoute,
  deleteV2TranslationsResourceTypeResourceIdLocaleRoute,
  deleteV2TranslationsResourceTypeResourceIdRoute,
  deleteV2WorkflowsWorkflowIdRoute,
  getV1AgentsIdentifierIntegrationsRoute,
  getV1AgentsIdentifierRoute,
  getV1AgentsRoute,
  getV1ChannelConnectionsIdentifierRoute,
  getV1ChannelConnectionsRoute,
  getV1ChannelEndpointsIdentifierRoute,
  getV1ChannelEndpointsRoute,
  getV1DomainsDomainAutoConfigureRoute,
  getV1DomainsDomainRoute,
  getV1DomainsDomainRoutesAddressRoute,
  getV1DomainsDomainRoutesRoute,
  getV1DomainsRoute,
  getV1EnvironmentsRoute,
  getV1EnvironmentVariablesRoute,
  getV1EnvironmentVariablesVariableKeyRoute,
  getV1EnvironmentVariablesVariableKeyUsageRoute,
  getV1IntegrationsActiveRoute,
  getV1IntegrationsRoute,
  getV1MessagesRoute,
  getV1NotificationsNotificationIdRoute,
  getV1NotificationsRoute,
  getV1SubscribersSubscriberIdNotificationsFeedRoute,
  getV1SubscribersSubscriberIdNotificationsUnseenRoute,
  getV1TopicsTopicKeySubscribersExternalSubscriberIdRoute,
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
  patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
  patchV1AgentsIdentifierRoute,
  patchV1ChannelConnectionsIdentifierRoute,
  patchV1ChannelEndpointsIdentifierRoute,
  patchV1DomainsDomainRoute,
  patchV1DomainsDomainRoutesAddressRoute,
  patchV1EnvironmentVariablesVariableKeyRoute,
  patchV1SubscribersSubscriberIdCredentialsRoute,
  patchV1SubscribersSubscriberIdOnlineStatusRoute,
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
  postV1AgentsAgentIdReplyRoute,
  postV1AgentsIdentifierIntegrationsRoute,
  postV1AgentsRoute,
  postV1ChannelConnectionsRoute,
  postV1ChannelEndpointsRoute,
  postV1DomainsDomainAutoConfigureStartRoute,
  postV1DomainsDomainDiagnoseRoute,
  postV1DomainsDomainRoutesAddressTestRoute,
  postV1DomainsDomainRoutesRoute,
  postV1DomainsDomainVerifyRoute,
  postV1DomainsRoute,
  postV1EnvironmentsRoute,
  postV1EnvironmentVariablesRoute,
  postV1EventsTriggerBroadcastRoute,
  postV1EventsTriggerBulkRoute,
  postV1EventsTriggerRoute,
  postV1IntegrationsChannelConnectionsOauthRoute,
  postV1IntegrationsChannelEndpointsLinkRoute,
  postV1IntegrationsChannelEndpointsOauthRoute,
  postV1IntegrationsChatOauthRoute,
  postV1IntegrationsIntegrationIdAutoConfigureRoute,
  postV1IntegrationsIntegrationIdentifierMobileLinkRoute,
  postV1IntegrationsIntegrationIdentifierWebhookConfigureRoute,
  postV1IntegrationsIntegrationIdSetPrimaryRoute,
  postV1IntegrationsRoute,
  postV1SubscribersBulkRoute,
  postV1SubscribersSubscriberIdMessagesMarkAllRoute,
  postV1SubscribersSubscriberIdMessagesMarkAsRoute,
  postV1SubscribersSubscriberIdMessagesMessageIdActionsTypeRoute,
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
  putV1AgentsIdentifierBridgeRoute,
  putV1EnvironmentsEnvironmentIdRoute,
  putV1IntegrationsIntegrationIdRoute,
  putV1SubscribersSubscriberIdCredentialsRoute,
  putV2LayoutsLayoutIdRoute,
  putV2WorkflowsWorkflowIdRoute,
  putV2WorkflowsWorkflowIdSyncRoute,
} from './routes'
import {
  deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRouteHandler,
  deleteV1AgentsIdentifierRouteHandler,
  deleteV1ChannelConnectionsIdentifierRouteHandler,
  deleteV1ChannelEndpointsIdentifierRouteHandler,
  deleteV1DomainsDomainRouteHandler,
  deleteV1DomainsDomainRoutesAddressRouteHandler,
  deleteV1EnvironmentsEnvironmentIdRouteHandler,
  deleteV1EnvironmentVariablesVariableKeyRouteHandler,
  deleteV1EventsTriggerTransactionIdRouteHandler,
  deleteV1IntegrationsIntegrationIdRouteHandler,
  deleteV1MessagesMessageIdRouteHandler,
  deleteV1MessagesTransactionTransactionIdRouteHandler,
  deleteV1SubscribersSubscriberIdCredentialsProviderIdRouteHandler,
  deleteV2ContextsTypeIdRouteHandler,
  deleteV2LayoutsLayoutIdRouteHandler,
  deleteV2SubscribersSubscriberIdNotificationsNotificationIdRouteHandler,
  deleteV2SubscribersSubscriberIdRouteHandler,
  deleteV2TopicsTopicKeyRouteHandler,
  deleteV2TopicsTopicKeySubscriptionsRouteHandler,
  deleteV2TranslationsResourceTypeResourceIdLocaleRouteHandler,
  deleteV2TranslationsResourceTypeResourceIdRouteHandler,
  deleteV2WorkflowsWorkflowIdRouteHandler,
  getV1AgentsIdentifierIntegrationsRouteHandler,
  getV1AgentsIdentifierRouteHandler,
  getV1AgentsRouteHandler,
  getV1ChannelConnectionsIdentifierRouteHandler,
  getV1ChannelConnectionsRouteHandler,
  getV1ChannelEndpointsIdentifierRouteHandler,
  getV1ChannelEndpointsRouteHandler,
  getV1DomainsDomainAutoConfigureRouteHandler,
  getV1DomainsDomainRouteHandler,
  getV1DomainsDomainRoutesAddressRouteHandler,
  getV1DomainsDomainRoutesRouteHandler,
  getV1DomainsRouteHandler,
  getV1EnvironmentsRouteHandler,
  getV1EnvironmentVariablesRouteHandler,
  getV1EnvironmentVariablesVariableKeyRouteHandler,
  getV1EnvironmentVariablesVariableKeyUsageRouteHandler,
  getV1IntegrationsActiveRouteHandler,
  getV1IntegrationsRouteHandler,
  getV1MessagesRouteHandler,
  getV1NotificationsNotificationIdRouteHandler,
  getV1NotificationsRouteHandler,
  getV1SubscribersSubscriberIdNotificationsFeedRouteHandler,
  getV1SubscribersSubscriberIdNotificationsUnseenRouteHandler,
  getV1TopicsTopicKeySubscribersExternalSubscriberIdRouteHandler,
  getV2ContextsRouteHandler,
  getV2ContextsTypeIdRouteHandler,
  getV2EnvironmentsEnvironmentIdTagsRouteHandler,
  getV2LayoutsLayoutIdRouteHandler,
  getV2LayoutsLayoutIdUsageRouteHandler,
  getV2LayoutsRouteHandler,
  getV2SubscribersRouteHandler,
  getV2SubscribersSubscriberIdNotificationsCountRouteHandler,
  getV2SubscribersSubscriberIdNotificationsRouteHandler,
  getV2SubscribersSubscriberIdPreferencesRouteHandler,
  getV2SubscribersSubscriberIdRouteHandler,
  getV2SubscribersSubscriberIdSubscriptionsRouteHandler,
  getV2TopicsRouteHandler,
  getV2TopicsTopicKeyRouteHandler,
  getV2TopicsTopicKeySubscriptionsIdentifierRouteHandler,
  getV2TopicsTopicKeySubscriptionsRouteHandler,
  getV2TranslationsGroupResourceTypeResourceIdRouteHandler,
  getV2TranslationsMasterJsonRouteHandler,
  getV2TranslationsResourceTypeResourceIdLocaleRouteHandler,
  getV2WorkflowsRouteHandler,
  getV2WorkflowsWorkflowIdRouteHandler,
  getV2WorkflowsWorkflowIdStepsStepIdRouteHandler,
  patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRouteHandler,
  patchV1AgentsIdentifierRouteHandler,
  patchV1ChannelConnectionsIdentifierRouteHandler,
  patchV1ChannelEndpointsIdentifierRouteHandler,
  patchV1DomainsDomainRouteHandler,
  patchV1DomainsDomainRoutesAddressRouteHandler,
  patchV1EnvironmentVariablesVariableKeyRouteHandler,
  patchV1SubscribersSubscriberIdCredentialsRouteHandler,
  patchV1SubscribersSubscriberIdOnlineStatusRouteHandler,
  patchV2ContextsTypeIdRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdReadRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadRouteHandler,
  patchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeRouteHandler,
  patchV2SubscribersSubscriberIdPreferencesBulkRouteHandler,
  patchV2SubscribersSubscriberIdPreferencesRouteHandler,
  patchV2SubscribersSubscriberIdRouteHandler,
  patchV2TopicsTopicKeyRouteHandler,
  patchV2TopicsTopicKeySubscriptionsIdentifierRouteHandler,
  patchV2WorkflowsWorkflowIdRouteHandler,
  postV1AgentsAgentIdReplyRouteHandler,
  postV1AgentsIdentifierIntegrationsRouteHandler,
  postV1AgentsRouteHandler,
  postV1ChannelConnectionsRouteHandler,
  postV1ChannelEndpointsRouteHandler,
  postV1DomainsDomainAutoConfigureStartRouteHandler,
  postV1DomainsDomainDiagnoseRouteHandler,
  postV1DomainsDomainRoutesAddressTestRouteHandler,
  postV1DomainsDomainRoutesRouteHandler,
  postV1DomainsDomainVerifyRouteHandler,
  postV1DomainsRouteHandler,
  postV1EnvironmentsRouteHandler,
  postV1EnvironmentVariablesRouteHandler,
  postV1EventsTriggerBroadcastRouteHandler,
  postV1EventsTriggerBulkRouteHandler,
  postV1EventsTriggerRouteHandler,
  postV1IntegrationsChannelConnectionsOauthRouteHandler,
  postV1IntegrationsChannelEndpointsLinkRouteHandler,
  postV1IntegrationsChannelEndpointsOauthRouteHandler,
  postV1IntegrationsChatOauthRouteHandler,
  postV1IntegrationsIntegrationIdAutoConfigureRouteHandler,
  postV1IntegrationsIntegrationIdentifierMobileLinkRouteHandler,
  postV1IntegrationsIntegrationIdentifierWebhookConfigureRouteHandler,
  postV1IntegrationsIntegrationIdSetPrimaryRouteHandler,
  postV1IntegrationsRouteHandler,
  postV1SubscribersBulkRouteHandler,
  postV1SubscribersSubscriberIdMessagesMarkAllRouteHandler,
  postV1SubscribersSubscriberIdMessagesMarkAsRouteHandler,
  postV1SubscribersSubscriberIdMessagesMessageIdActionsTypeRouteHandler,
  postV2ContextsRouteHandler,
  postV2EnvironmentsTargetEnvironmentIdDiffRouteHandler,
  postV2EnvironmentsTargetEnvironmentIdPublishRouteHandler,
  postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRouteHandler,
  postV2LayoutsLayoutIdDuplicateRouteHandler,
  postV2LayoutsLayoutIdPreviewRouteHandler,
  postV2LayoutsRouteHandler,
  postV2SubscribersRouteHandler,
  postV2SubscribersSubscriberIdNotificationsArchiveRouteHandler,
  postV2SubscribersSubscriberIdNotificationsDeleteRouteHandler,
  postV2SubscribersSubscriberIdNotificationsReadArchiveRouteHandler,
  postV2SubscribersSubscriberIdNotificationsReadRouteHandler,
  postV2SubscribersSubscriberIdNotificationsSeenRouteHandler,
  postV2SubscribersSubscriberIdTokensRouteHandler,
  postV2TopicsRouteHandler,
  postV2TopicsTopicKeySubscriptionsRouteHandler,
  postV2TranslationsMasterJsonRouteHandler,
  postV2TranslationsMasterJsonUploadRouteHandler,
  postV2TranslationsRouteHandler,
  postV2TranslationsUploadRouteHandler,
  postV2WorkflowsRouteHandler,
  postV2WorkflowsWorkflowIdStepStepIdPreviewRouteHandler,
  putV1AgentsIdentifierBridgeRouteHandler,
  putV1EnvironmentsEnvironmentIdRouteHandler,
  putV1IntegrationsIntegrationIdRouteHandler,
  putV1SubscribersSubscriberIdCredentialsRouteHandler,
  putV2LayoutsLayoutIdRouteHandler,
  putV2WorkflowsWorkflowIdRouteHandler,
  putV2WorkflowsWorkflowIdSyncRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1EnvironmentsRoute, postV1EnvironmentsRouteHandler)
  .openapi(getV1EnvironmentsRoute, getV1EnvironmentsRouteHandler)
  .openapi(putV1EnvironmentsEnvironmentIdRoute, putV1EnvironmentsEnvironmentIdRouteHandler)
  .openapi(deleteV1EnvironmentsEnvironmentIdRoute, deleteV1EnvironmentsEnvironmentIdRouteHandler)
  .openapi(postV1EventsTriggerRoute, postV1EventsTriggerRouteHandler)
  .openapi(postV1EventsTriggerBulkRoute, postV1EventsTriggerBulkRouteHandler)
  .openapi(postV1EventsTriggerBroadcastRoute, postV1EventsTriggerBroadcastRouteHandler)
  .openapi(deleteV1EventsTriggerTransactionIdRoute, deleteV1EventsTriggerTransactionIdRouteHandler)
  .openapi(getV1NotificationsRoute, getV1NotificationsRouteHandler)
  .openapi(getV1NotificationsNotificationIdRoute, getV1NotificationsNotificationIdRouteHandler)
  .openapi(postV1AgentsRoute, postV1AgentsRouteHandler)
  .openapi(getV1AgentsRoute, getV1AgentsRouteHandler)
  .openapi(putV1AgentsIdentifierBridgeRoute, putV1AgentsIdentifierBridgeRouteHandler)
  .openapi(getV1AgentsIdentifierRoute, getV1AgentsIdentifierRouteHandler)
  .openapi(patchV1AgentsIdentifierRoute, patchV1AgentsIdentifierRouteHandler)
  .openapi(deleteV1AgentsIdentifierRoute, deleteV1AgentsIdentifierRouteHandler)
  .openapi(postV1AgentsIdentifierIntegrationsRoute, postV1AgentsIdentifierIntegrationsRouteHandler)
  .openapi(getV1AgentsIdentifierIntegrationsRoute, getV1AgentsIdentifierIntegrationsRouteHandler)
  .openapi(
    patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
    patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRouteHandler,
  )
  .openapi(
    deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
    deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRouteHandler,
  )
  .openapi(postV1AgentsAgentIdReplyRoute, postV1AgentsAgentIdReplyRouteHandler)
  .openapi(getV1DomainsRoute, getV1DomainsRouteHandler)
  .openapi(postV1DomainsRoute, postV1DomainsRouteHandler)
  .openapi(getV1DomainsDomainRoute, getV1DomainsDomainRouteHandler)
  .openapi(patchV1DomainsDomainRoute, patchV1DomainsDomainRouteHandler)
  .openapi(deleteV1DomainsDomainRoute, deleteV1DomainsDomainRouteHandler)
  .openapi(postV1DomainsDomainVerifyRoute, postV1DomainsDomainVerifyRouteHandler)
  .openapi(postV1DomainsDomainDiagnoseRoute, postV1DomainsDomainDiagnoseRouteHandler)
  .openapi(getV1DomainsDomainRoutesRoute, getV1DomainsDomainRoutesRouteHandler)
  .openapi(postV1DomainsDomainRoutesRoute, postV1DomainsDomainRoutesRouteHandler)
  .openapi(getV1DomainsDomainRoutesAddressRoute, getV1DomainsDomainRoutesAddressRouteHandler)
  .openapi(patchV1DomainsDomainRoutesAddressRoute, patchV1DomainsDomainRoutesAddressRouteHandler)
  .openapi(deleteV1DomainsDomainRoutesAddressRoute, deleteV1DomainsDomainRoutesAddressRouteHandler)
  .openapi(
    postV1DomainsDomainRoutesAddressTestRoute,
    postV1DomainsDomainRoutesAddressTestRouteHandler,
  )
  .openapi(getV1DomainsDomainAutoConfigureRoute, getV1DomainsDomainAutoConfigureRouteHandler)
  .openapi(
    postV1DomainsDomainAutoConfigureStartRoute,
    postV1DomainsDomainAutoConfigureStartRouteHandler,
  )
  .openapi(getV1IntegrationsRoute, getV1IntegrationsRouteHandler)
  .openapi(postV1IntegrationsRoute, postV1IntegrationsRouteHandler)
  .openapi(getV1IntegrationsActiveRoute, getV1IntegrationsActiveRouteHandler)
  .openapi(putV1IntegrationsIntegrationIdRoute, putV1IntegrationsIntegrationIdRouteHandler)
  .openapi(deleteV1IntegrationsIntegrationIdRoute, deleteV1IntegrationsIntegrationIdRouteHandler)
  .openapi(
    postV1IntegrationsIntegrationIdAutoConfigureRoute,
    postV1IntegrationsIntegrationIdAutoConfigureRouteHandler,
  )
  .openapi(
    postV1IntegrationsIntegrationIdSetPrimaryRoute,
    postV1IntegrationsIntegrationIdSetPrimaryRouteHandler,
  )
  .openapi(postV1IntegrationsChatOauthRoute, postV1IntegrationsChatOauthRouteHandler)
  .openapi(
    postV1IntegrationsChannelConnectionsOauthRoute,
    postV1IntegrationsChannelConnectionsOauthRouteHandler,
  )
  .openapi(
    postV1IntegrationsChannelEndpointsOauthRoute,
    postV1IntegrationsChannelEndpointsOauthRouteHandler,
  )
  .openapi(
    postV1IntegrationsChannelEndpointsLinkRoute,
    postV1IntegrationsChannelEndpointsLinkRouteHandler,
  )
  .openapi(
    postV1IntegrationsIntegrationIdentifierWebhookConfigureRoute,
    postV1IntegrationsIntegrationIdentifierWebhookConfigureRouteHandler,
  )
  .openapi(
    postV1IntegrationsIntegrationIdentifierMobileLinkRoute,
    postV1IntegrationsIntegrationIdentifierMobileLinkRouteHandler,
  )
  .openapi(postV2ContextsRoute, postV2ContextsRouteHandler)
  .openapi(getV2ContextsRoute, getV2ContextsRouteHandler)
  .openapi(patchV2ContextsTypeIdRoute, patchV2ContextsTypeIdRouteHandler)
  .openapi(getV2ContextsTypeIdRoute, getV2ContextsTypeIdRouteHandler)
  .openapi(deleteV2ContextsTypeIdRoute, deleteV2ContextsTypeIdRouteHandler)
  .openapi(postV1SubscribersBulkRoute, postV1SubscribersBulkRouteHandler)
  .openapi(
    putV1SubscribersSubscriberIdCredentialsRoute,
    putV1SubscribersSubscriberIdCredentialsRouteHandler,
  )
  .openapi(
    patchV1SubscribersSubscriberIdCredentialsRoute,
    patchV1SubscribersSubscriberIdCredentialsRouteHandler,
  )
  .openapi(
    deleteV1SubscribersSubscriberIdCredentialsProviderIdRoute,
    deleteV1SubscribersSubscriberIdCredentialsProviderIdRouteHandler,
  )
  .openapi(
    patchV1SubscribersSubscriberIdOnlineStatusRoute,
    patchV1SubscribersSubscriberIdOnlineStatusRouteHandler,
  )
  .openapi(
    getV1SubscribersSubscriberIdNotificationsFeedRoute,
    getV1SubscribersSubscriberIdNotificationsFeedRouteHandler,
  )
  .openapi(
    getV1SubscribersSubscriberIdNotificationsUnseenRoute,
    getV1SubscribersSubscriberIdNotificationsUnseenRouteHandler,
  )
  .openapi(
    postV1SubscribersSubscriberIdMessagesMarkAsRoute,
    postV1SubscribersSubscriberIdMessagesMarkAsRouteHandler,
  )
  .openapi(
    postV1SubscribersSubscriberIdMessagesMarkAllRoute,
    postV1SubscribersSubscriberIdMessagesMarkAllRouteHandler,
  )
  .openapi(
    postV1SubscribersSubscriberIdMessagesMessageIdActionsTypeRoute,
    postV1SubscribersSubscriberIdMessagesMessageIdActionsTypeRouteHandler,
  )
  .openapi(getV2SubscribersRoute, getV2SubscribersRouteHandler)
  .openapi(postV2SubscribersRoute, postV2SubscribersRouteHandler)
  .openapi(getV2SubscribersSubscriberIdRoute, getV2SubscribersSubscriberIdRouteHandler)
  .openapi(patchV2SubscribersSubscriberIdRoute, patchV2SubscribersSubscriberIdRouteHandler)
  .openapi(deleteV2SubscribersSubscriberIdRoute, deleteV2SubscribersSubscriberIdRouteHandler)
  .openapi(
    getV2SubscribersSubscriberIdPreferencesRoute,
    getV2SubscribersSubscriberIdPreferencesRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdPreferencesRoute,
    patchV2SubscribersSubscriberIdPreferencesRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdPreferencesBulkRoute,
    patchV2SubscribersSubscriberIdPreferencesBulkRouteHandler,
  )
  .openapi(
    getV2SubscribersSubscriberIdSubscriptionsRoute,
    getV2SubscribersSubscriberIdSubscriptionsRouteHandler,
  )
  .openapi(
    postV2SubscribersSubscriberIdTokensRoute,
    postV2SubscribersSubscriberIdTokensRouteHandler,
  )
  .openapi(
    getV2SubscribersSubscriberIdNotificationsRoute,
    getV2SubscribersSubscriberIdNotificationsRouteHandler,
  )
  .openapi(
    getV2SubscribersSubscriberIdNotificationsCountRoute,
    getV2SubscribersSubscriberIdNotificationsCountRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdReadRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdReadRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeRouteHandler,
  )
  .openapi(
    deleteV2SubscribersSubscriberIdNotificationsNotificationIdRoute,
    deleteV2SubscribersSubscriberIdNotificationsNotificationIdRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteRouteHandler,
  )
  .openapi(
    patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertRoute,
    patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertRouteHandler,
  )
  .openapi(
    postV2SubscribersSubscriberIdNotificationsSeenRoute,
    postV2SubscribersSubscriberIdNotificationsSeenRouteHandler,
  )
  .openapi(
    postV2SubscribersSubscriberIdNotificationsReadRoute,
    postV2SubscribersSubscriberIdNotificationsReadRouteHandler,
  )
  .openapi(
    postV2SubscribersSubscriberIdNotificationsArchiveRoute,
    postV2SubscribersSubscriberIdNotificationsArchiveRouteHandler,
  )
  .openapi(
    postV2SubscribersSubscriberIdNotificationsReadArchiveRoute,
    postV2SubscribersSubscriberIdNotificationsReadArchiveRouteHandler,
  )
  .openapi(
    postV2SubscribersSubscriberIdNotificationsDeleteRoute,
    postV2SubscribersSubscriberIdNotificationsDeleteRouteHandler,
  )
  .openapi(postV2LayoutsRoute, postV2LayoutsRouteHandler)
  .openapi(getV2LayoutsRoute, getV2LayoutsRouteHandler)
  .openapi(putV2LayoutsLayoutIdRoute, putV2LayoutsLayoutIdRouteHandler)
  .openapi(getV2LayoutsLayoutIdRoute, getV2LayoutsLayoutIdRouteHandler)
  .openapi(deleteV2LayoutsLayoutIdRoute, deleteV2LayoutsLayoutIdRouteHandler)
  .openapi(postV2LayoutsLayoutIdDuplicateRoute, postV2LayoutsLayoutIdDuplicateRouteHandler)
  .openapi(postV2LayoutsLayoutIdPreviewRoute, postV2LayoutsLayoutIdPreviewRouteHandler)
  .openapi(getV2LayoutsLayoutIdUsageRoute, getV2LayoutsLayoutIdUsageRouteHandler)
  .openapi(getV1MessagesRoute, getV1MessagesRouteHandler)
  .openapi(deleteV1MessagesMessageIdRoute, deleteV1MessagesMessageIdRouteHandler)
  .openapi(
    deleteV1MessagesTransactionTransactionIdRoute,
    deleteV1MessagesTransactionTransactionIdRouteHandler,
  )
  .openapi(
    getV1TopicsTopicKeySubscribersExternalSubscriberIdRoute,
    getV1TopicsTopicKeySubscribersExternalSubscriberIdRouteHandler,
  )
  .openapi(getV2TopicsRoute, getV2TopicsRouteHandler)
  .openapi(postV2TopicsRoute, postV2TopicsRouteHandler)
  .openapi(getV2TopicsTopicKeyRoute, getV2TopicsTopicKeyRouteHandler)
  .openapi(patchV2TopicsTopicKeyRoute, patchV2TopicsTopicKeyRouteHandler)
  .openapi(deleteV2TopicsTopicKeyRoute, deleteV2TopicsTopicKeyRouteHandler)
  .openapi(getV2TopicsTopicKeySubscriptionsRoute, getV2TopicsTopicKeySubscriptionsRouteHandler)
  .openapi(postV2TopicsTopicKeySubscriptionsRoute, postV2TopicsTopicKeySubscriptionsRouteHandler)
  .openapi(
    deleteV2TopicsTopicKeySubscriptionsRoute,
    deleteV2TopicsTopicKeySubscriptionsRouteHandler,
  )
  .openapi(
    getV2TopicsTopicKeySubscriptionsIdentifierRoute,
    getV2TopicsTopicKeySubscriptionsIdentifierRouteHandler,
  )
  .openapi(
    patchV2TopicsTopicKeySubscriptionsIdentifierRoute,
    patchV2TopicsTopicKeySubscriptionsIdentifierRouteHandler,
  )
  .openapi(getV1EnvironmentVariablesRoute, getV1EnvironmentVariablesRouteHandler)
  .openapi(postV1EnvironmentVariablesRoute, postV1EnvironmentVariablesRouteHandler)
  .openapi(
    getV1EnvironmentVariablesVariableKeyUsageRoute,
    getV1EnvironmentVariablesVariableKeyUsageRouteHandler,
  )
  .openapi(
    getV1EnvironmentVariablesVariableKeyRoute,
    getV1EnvironmentVariablesVariableKeyRouteHandler,
  )
  .openapi(
    patchV1EnvironmentVariablesVariableKeyRoute,
    patchV1EnvironmentVariablesVariableKeyRouteHandler,
  )
  .openapi(
    deleteV1EnvironmentVariablesVariableKeyRoute,
    deleteV1EnvironmentVariablesVariableKeyRouteHandler,
  )
  .openapi(postV2WorkflowsRoute, postV2WorkflowsRouteHandler)
  .openapi(getV2WorkflowsRoute, getV2WorkflowsRouteHandler)
  .openapi(putV2WorkflowsWorkflowIdSyncRoute, putV2WorkflowsWorkflowIdSyncRouteHandler)
  .openapi(putV2WorkflowsWorkflowIdRoute, putV2WorkflowsWorkflowIdRouteHandler)
  .openapi(getV2WorkflowsWorkflowIdRoute, getV2WorkflowsWorkflowIdRouteHandler)
  .openapi(deleteV2WorkflowsWorkflowIdRoute, deleteV2WorkflowsWorkflowIdRouteHandler)
  .openapi(patchV2WorkflowsWorkflowIdRoute, patchV2WorkflowsWorkflowIdRouteHandler)
  .openapi(
    postV2WorkflowsWorkflowIdStepStepIdPreviewRoute,
    postV2WorkflowsWorkflowIdStepStepIdPreviewRouteHandler,
  )
  .openapi(
    getV2WorkflowsWorkflowIdStepsStepIdRoute,
    getV2WorkflowsWorkflowIdStepsStepIdRouteHandler,
  )
  .openapi(getV2EnvironmentsEnvironmentIdTagsRoute, getV2EnvironmentsEnvironmentIdTagsRouteHandler)
  .openapi(
    postV2EnvironmentsTargetEnvironmentIdPublishRoute,
    postV2EnvironmentsTargetEnvironmentIdPublishRouteHandler,
  )
  .openapi(
    postV2EnvironmentsTargetEnvironmentIdDiffRoute,
    postV2EnvironmentsTargetEnvironmentIdDiffRouteHandler,
  )
  .openapi(getV1ChannelConnectionsRoute, getV1ChannelConnectionsRouteHandler)
  .openapi(postV1ChannelConnectionsRoute, postV1ChannelConnectionsRouteHandler)
  .openapi(getV1ChannelConnectionsIdentifierRoute, getV1ChannelConnectionsIdentifierRouteHandler)
  .openapi(
    patchV1ChannelConnectionsIdentifierRoute,
    patchV1ChannelConnectionsIdentifierRouteHandler,
  )
  .openapi(
    deleteV1ChannelConnectionsIdentifierRoute,
    deleteV1ChannelConnectionsIdentifierRouteHandler,
  )
  .openapi(getV1ChannelEndpointsRoute, getV1ChannelEndpointsRouteHandler)
  .openapi(postV1ChannelEndpointsRoute, postV1ChannelEndpointsRouteHandler)
  .openapi(getV1ChannelEndpointsIdentifierRoute, getV1ChannelEndpointsIdentifierRouteHandler)
  .openapi(patchV1ChannelEndpointsIdentifierRoute, patchV1ChannelEndpointsIdentifierRouteHandler)
  .openapi(deleteV1ChannelEndpointsIdentifierRoute, deleteV1ChannelEndpointsIdentifierRouteHandler)
  .openapi(postV2TranslationsUploadRoute, postV2TranslationsUploadRouteHandler)
  .openapi(postV2TranslationsRoute, postV2TranslationsRouteHandler)
  .openapi(getV2TranslationsMasterJsonRoute, getV2TranslationsMasterJsonRouteHandler)
  .openapi(postV2TranslationsMasterJsonRoute, postV2TranslationsMasterJsonRouteHandler)
  .openapi(postV2TranslationsMasterJsonUploadRoute, postV2TranslationsMasterJsonUploadRouteHandler)
  .openapi(
    getV2TranslationsGroupResourceTypeResourceIdRoute,
    getV2TranslationsGroupResourceTypeResourceIdRouteHandler,
  )
  .openapi(
    getV2TranslationsResourceTypeResourceIdLocaleRoute,
    getV2TranslationsResourceTypeResourceIdLocaleRouteHandler,
  )
  .openapi(
    deleteV2TranslationsResourceTypeResourceIdLocaleRoute,
    deleteV2TranslationsResourceTypeResourceIdLocaleRouteHandler,
  )
  .openapi(
    deleteV2TranslationsResourceTypeResourceIdRoute,
    deleteV2TranslationsResourceTypeResourceIdRouteHandler,
  )
  .openapi(
    postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRoute,
    postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRouteHandler,
  )

export default app
