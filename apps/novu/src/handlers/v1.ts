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
  patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
  patchV1AgentsIdentifierRoute,
  patchV1ChannelConnectionsIdentifierRoute,
  patchV1ChannelEndpointsIdentifierRoute,
  patchV1DomainsDomainRoute,
  patchV1DomainsDomainRoutesAddressRoute,
  patchV1EnvironmentVariablesVariableKeyRoute,
  patchV1SubscribersSubscriberIdCredentialsRoute,
  patchV1SubscribersSubscriberIdOnlineStatusRoute,
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
  putV1AgentsIdentifierBridgeRoute,
  putV1EnvironmentsEnvironmentIdRoute,
  putV1IntegrationsIntegrationIdRoute,
  putV1SubscribersSubscriberIdCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventsTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventsTriggerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventsTriggerBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EventsTriggerTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AgentsIdentifierBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AgentsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AgentsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentsIdentifierIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentsIdentifierIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentsAgentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainDiagnoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoutesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainRoutesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainRoutesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainRoutesAddressTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainAutoConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainAutoConfigureStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1IntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdAutoConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdSetPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChatOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChannelConnectionsOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChannelEndpointsOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChannelEndpointsLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdentifierWebhookConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdentifierMobileLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getV1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesTransactionTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TopicsTopicKeySubscribersExternalSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentVariablesVariableKeyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvironmentVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChannelConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelConnectionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ChannelConnectionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChannelConnectionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChannelEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelEndpointsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ChannelEndpointsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChannelEndpointsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
