import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Environments(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.environments.$get(undefined, options))
}

export async function postV1Environments(
  args: InferRequestType<typeof client.v1.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments.$post(args, options))
}

export async function putV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':environmentId'].$put(args, options))
}

export async function deleteV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':environmentId'].$delete(args, options))
}

export async function postV1EventsTrigger(
  args: InferRequestType<typeof client.v1.events.trigger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.trigger.$post(args, options))
}

export async function postV1EventsTriggerBulk(
  args: InferRequestType<typeof client.v1.events.trigger.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.trigger.bulk.$post(args, options))
}

export async function postV1EventsTriggerBroadcast(
  args: InferRequestType<typeof client.v1.events.trigger.broadcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.trigger.broadcast.$post(args, options))
}

export async function deleteV1EventsTriggerTransactionId(
  args: InferRequestType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.trigger[':transactionId'].$delete(args, options))
}

export async function getV1Notifications(
  args: InferRequestType<typeof client.v1.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.$get(args, options))
}

export async function getV1NotificationsNotificationId(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications[':notificationId'].$get(args, options))
}

export async function getV1Agents(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.$get(args, options))
}

export async function postV1Agents(
  args: InferRequestType<typeof client.v1.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.$post(args, options))
}

export async function putV1AgentsIdentifierBridge(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':identifier'].bridge.$put(args, options))
}

export async function getV1AgentsIdentifier(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':identifier'].$get(args, options))
}

export async function deleteV1AgentsIdentifier(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':identifier'].$delete(args, options))
}

export async function patchV1AgentsIdentifier(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':identifier'].$patch(args, options))
}

export async function getV1AgentsIdentifierIntegrations(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':identifier'].integrations.$get(args, options))
}

export async function postV1AgentsIdentifierIntegrations(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':identifier'].integrations.$post(args, options))
}

export async function deleteV1AgentsIdentifierIntegrationsAgentIntegrationId(
  args: InferRequestType<
    (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.agents[':identifier'].integrations[':agentIntegrationId'].$delete(args, options),
  )
}

export async function patchV1AgentsIdentifierIntegrationsAgentIntegrationId(
  args: InferRequestType<
    (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.agents[':identifier'].integrations[':agentIntegrationId'].$patch(args, options),
  )
}

export async function postV1AgentsAgentIdReply(
  args: InferRequestType<(typeof client.v1.agents)[':agentId']['reply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agentId'].reply.$post(args, options))
}

export async function getV1Domains(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.$get(args, options))
}

export async function postV1Domains(
  args: InferRequestType<typeof client.v1.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.$post(args, options))
}

export async function getV1DomainsDomain(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].$get(args, options))
}

export async function deleteV1DomainsDomain(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].$delete(args, options))
}

export async function patchV1DomainsDomain(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].$patch(args, options))
}

export async function postV1DomainsDomainVerify(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].verify.$post(args, options))
}

export async function postV1DomainsDomainDiagnose(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].diagnose.$post(args, options))
}

export async function getV1DomainsDomainRoutes(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].routes.$get(args, options))
}

export async function postV1DomainsDomainRoutes(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].routes.$post(args, options))
}

export async function getV1DomainsDomainRoutesAddress(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].routes[':address'].$get(args, options))
}

export async function deleteV1DomainsDomainRoutesAddress(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].routes[':address'].$delete(args, options))
}

export async function patchV1DomainsDomainRoutesAddress(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].routes[':address'].$patch(args, options))
}

export async function postV1DomainsDomainRoutesAddressTest(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domains[':domain'].routes[':address'].test.$post(args, options),
  )
}

export async function getV1DomainsDomainAutoConfigure(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain']['auto-configure'].$get(args, options))
}

export async function postV1DomainsDomainAutoConfigureStart(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domains[':domain']['auto-configure'].start.$post(args, options),
  )
}

export async function getV1Integrations(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.integrations.$get(undefined, options))
}

export async function postV1Integrations(
  args: InferRequestType<typeof client.v1.integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.$post(args, options))
}

export async function getV1IntegrationsActive(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.integrations.active.$get(undefined, options))
}

export async function putV1IntegrationsIntegrationId(
  args: InferRequestType<(typeof client.v1.integrations)[':integrationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations[':integrationId'].$put(args, options))
}

export async function deleteV1IntegrationsIntegrationId(
  args: InferRequestType<(typeof client.v1.integrations)[':integrationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations[':integrationId'].$delete(args, options))
}

export async function postV1IntegrationsIntegrationIdAutoConfigure(
  args: InferRequestType<
    (typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations[':integrationId']['auto-configure'].$post(args, options),
  )
}

export async function postV1IntegrationsIntegrationIdSetPrimary(
  args: InferRequestType<(typeof client.v1.integrations)[':integrationId']['set-primary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations[':integrationId']['set-primary'].$post(args, options),
  )
}

export async function postV1IntegrationsChatOauth(
  args: InferRequestType<typeof client.v1.integrations.chat.oauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.chat.oauth.$post(args, options))
}

export async function postV1IntegrationsChannelConnectionsOauth(
  args: InferRequestType<(typeof client.v1.integrations)['channel-connections']['oauth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations['channel-connections'].oauth.$post(args, options),
  )
}

export async function postV1IntegrationsChannelEndpointsOauth(
  args: InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['channel-endpoints'].oauth.$post(args, options))
}

export async function postV1IntegrationsChannelEndpointsLink(
  args: InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['channel-endpoints'].link.$post(args, options))
}

export async function postV1IntegrationsIntegrationIdentifierWebhookConfigure(
  args: InferRequestType<
    (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations[':integrationIdentifier'].webhook.configure.$post(args, options),
  )
}

export async function postV1IntegrationsIntegrationIdentifierMobileLink(
  args: InferRequestType<
    (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations[':integrationIdentifier']['mobile-link'].$post(args, options),
  )
}

export async function getV2Contexts(
  args: InferRequestType<typeof client.v2.contexts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contexts.$get(args, options))
}

export async function postV2Contexts(
  args: InferRequestType<typeof client.v2.contexts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contexts.$post(args, options))
}

export async function getV2ContextsTypeId(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contexts[':type'][':id'].$get(args, options))
}

export async function deleteV2ContextsTypeId(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contexts[':type'][':id'].$delete(args, options))
}

export async function patchV2ContextsTypeId(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contexts[':type'][':id'].$patch(args, options))
}

export async function postV1SubscribersBulk(
  args: InferRequestType<typeof client.v1.subscribers.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscribers.bulk.$post(args, options))
}

export async function putV1SubscribersSubscriberIdCredentials(
  args: InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscribers[':subscriberId'].credentials.$put(args, options))
}

export async function patchV1SubscribersSubscriberIdCredentials(
  args: InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].credentials.$patch(args, options),
  )
}

export async function deleteV1SubscribersSubscriberIdCredentialsProviderId(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].credentials[':providerId'].$delete(args, options),
  )
}

export async function patchV1SubscribersSubscriberIdOnlineStatus(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId']['online-status'].$patch(args, options),
  )
}

export async function getV1SubscribersSubscriberIdNotificationsFeed(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].notifications.feed.$get(args, options),
  )
}

export async function getV1SubscribersSubscriberIdNotificationsUnseen(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].notifications.unseen.$get(args, options),
  )
}

export async function postV1SubscribersSubscriberIdMessagesMarkAs(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].messages['mark-as'].$post(args, options),
  )
}

export async function postV1SubscribersSubscriberIdMessagesMarkAll(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].messages['mark-all'].$post(args, options),
  )
}

export async function postV1SubscribersSubscriberIdMessagesMessageIdActionsType(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscribers[':subscriberId'].messages[':messageId'].actions[':type'].$post(
      args,
      options,
    ),
  )
}

export async function getV2Subscribers(
  args: InferRequestType<typeof client.v2.subscribers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers.$get(args, options))
}

export async function postV2Subscribers(
  args: InferRequestType<typeof client.v2.subscribers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers.$post(args, options))
}

export async function getV2SubscribersSubscriberId(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers[':subscriberId'].$get(args, options))
}

export async function deleteV2SubscribersSubscriberId(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers[':subscriberId'].$delete(args, options))
}

export async function patchV2SubscribersSubscriberId(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers[':subscriberId'].$patch(args, options))
}

export async function getV2SubscribersSubscriberIdPreferences(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers[':subscriberId'].preferences.$get(args, options))
}

export async function patchV2SubscribersSubscriberIdPreferences(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].preferences.$patch(args, options),
  )
}

export async function patchV2SubscribersSubscriberIdPreferencesBulk(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].preferences.bulk.$patch(args, options),
  )
}

export async function getV2SubscribersSubscriberIdSubscriptions(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].subscriptions.$get(args, options),
  )
}

export async function postV2SubscribersSubscriberIdTokens(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscribers[':subscriberId'].tokens.$post(args, options))
}

export async function getV2SubscribersSubscriberIdNotifications(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications.$get(args, options),
  )
}

export async function getV2SubscribersSubscriberIdNotificationsCount(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications.count.$get(args, options),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdRead(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].read.$patch(
      args,
      options,
    ),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdUnread(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unread.$patch(
      args,
      options,
    ),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdArchive(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].archive.$patch(
      args,
      options,
    ),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchive(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unarchive.$patch(
      args,
      options,
    ),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdSnooze(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].snooze.$patch(
      args,
      options,
    ),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnooze(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unsnooze.$patch(
      args,
      options,
    ),
  )
}

export async function deleteV2SubscribersSubscriberIdNotificationsNotificationId(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].$delete(args, options),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeComplete(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].actions[
      ':actionType'
    ].complete.$patch(args, options),
  )
}

export async function patchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevert(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications[':notificationId'].actions[
      ':actionType'
    ].revert.$patch(args, options),
  )
}

export async function postV2SubscribersSubscriberIdNotificationsSeen(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications.seen.$post(args, options),
  )
}

export async function postV2SubscribersSubscriberIdNotificationsRead(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications.read.$post(args, options),
  )
}

export async function postV2SubscribersSubscriberIdNotificationsArchive(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications.archive.$post(args, options),
  )
}

export async function postV2SubscribersSubscriberIdNotificationsReadArchive(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications['read-archive'].$post(args, options),
  )
}

export async function postV2SubscribersSubscriberIdNotificationsDelete(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscribers[':subscriberId'].notifications.delete.$post(args, options),
  )
}

export async function getV2Layouts(
  args: InferRequestType<typeof client.v2.layouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts.$get(args, options))
}

export async function postV2Layouts(
  args: InferRequestType<typeof client.v2.layouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts.$post(args, options))
}

export async function getV2LayoutsLayoutId(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts[':layoutId'].$get(args, options))
}

export async function putV2LayoutsLayoutId(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts[':layoutId'].$put(args, options))
}

export async function deleteV2LayoutsLayoutId(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts[':layoutId'].$delete(args, options))
}

export async function postV2LayoutsLayoutIdDuplicate(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts[':layoutId'].duplicate.$post(args, options))
}

export async function postV2LayoutsLayoutIdPreview(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts[':layoutId'].preview.$post(args, options))
}

export async function getV2LayoutsLayoutIdUsage(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.layouts[':layoutId'].usage.$get(args, options))
}

export async function getV1Messages(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.$get(args, options))
}

export async function deleteV1MessagesMessageId(
  args: InferRequestType<(typeof client.v1.messages)[':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':messageId'].$delete(args, options))
}

export async function deleteV1MessagesTransactionTransactionId(
  args: InferRequestType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.messages.transaction[':transactionId'].$delete(args, options),
  )
}

export async function getV1TopicsTopicKeySubscribersExternalSubscriberId(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.topics[':topicKey'].subscribers[':externalSubscriberId'].$get(args, options),
  )
}

export async function getV2Topics(
  args: InferRequestType<typeof client.v2.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics.$get(args, options))
}

export async function postV2Topics(
  args: InferRequestType<typeof client.v2.topics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics.$post(args, options))
}

export async function getV2TopicsTopicKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':topicKey'].$get(args, options))
}

export async function deleteV2TopicsTopicKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':topicKey'].$delete(args, options))
}

export async function patchV2TopicsTopicKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':topicKey'].$patch(args, options))
}

export async function getV2TopicsTopicKeySubscriptions(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':topicKey'].subscriptions.$get(args, options))
}

export async function postV2TopicsTopicKeySubscriptions(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':topicKey'].subscriptions.$post(args, options))
}

export async function deleteV2TopicsTopicKeySubscriptions(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':topicKey'].subscriptions.$delete(args, options))
}

export async function getV2TopicsTopicKeySubscriptionsIdentifier(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.topics[':topicKey'].subscriptions[':identifier'].$get(args, options),
  )
}

export async function patchV2TopicsTopicKeySubscriptionsIdentifier(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.topics[':topicKey'].subscriptions[':identifier'].$patch(args, options),
  )
}

export async function getV1EnvironmentVariables(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['environment-variables'].$get(args, options))
}

export async function postV1EnvironmentVariables(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['environment-variables'].$post(args, options))
}

export async function getV1EnvironmentVariablesVariableKeyUsage(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['environment-variables'][':variableKey'].usage.$get(args, options),
  )
}

export async function getV1EnvironmentVariablesVariableKey(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['environment-variables'][':variableKey'].$get(args, options))
}

export async function deleteV1EnvironmentVariablesVariableKey(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['environment-variables'][':variableKey'].$delete(args, options),
  )
}

export async function patchV1EnvironmentVariablesVariableKey(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['environment-variables'][':variableKey'].$patch(args, options),
  )
}

export async function getV2Workflows(
  args: InferRequestType<typeof client.v2.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.$get(args, options))
}

export async function postV2Workflows(
  args: InferRequestType<typeof client.v2.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.$post(args, options))
}

export async function putV2WorkflowsWorkflowIdSync(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows[':workflowId'].sync.$put(args, options))
}

export async function getV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows[':workflowId'].$get(args, options))
}

export async function putV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows[':workflowId'].$put(args, options))
}

export async function deleteV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows[':workflowId'].$delete(args, options))
}

export async function patchV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows[':workflowId'].$patch(args, options))
}

export async function postV2WorkflowsWorkflowIdStepStepIdPreview(
  args: InferRequestType<
    (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.workflows[':workflowId'].step[':stepId'].preview.$post(args, options),
  )
}

export async function getV2WorkflowsWorkflowIdStepsStepId(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.workflows[':workflowId'].steps[':stepId'].$get(args, options),
  )
}

export async function getV2EnvironmentsEnvironmentIdTags(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.environments[':environmentId'].tags.$get(args, options))
}

export async function postV2EnvironmentsTargetEnvironmentIdPublish(
  args: InferRequestType<
    (typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.environments[':targetEnvironmentId'].publish.$post(args, options),
  )
}

export async function postV2EnvironmentsTargetEnvironmentIdDiff(
  args: InferRequestType<(typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.environments[':targetEnvironmentId'].diff.$post(args, options),
  )
}

export async function getV1ChannelConnections(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-connections'].$get(args, options))
}

export async function postV1ChannelConnections(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-connections'].$post(args, options))
}

export async function getV1ChannelConnectionsIdentifier(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-connections'][':identifier'].$get(args, options))
}

export async function deleteV1ChannelConnectionsIdentifier(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-connections'][':identifier'].$delete(args, options))
}

export async function patchV1ChannelConnectionsIdentifier(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-connections'][':identifier'].$patch(args, options))
}

export async function getV1ChannelEndpoints(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-endpoints'].$get(args, options))
}

export async function postV1ChannelEndpoints(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-endpoints'].$post(args, options))
}

export async function getV1ChannelEndpointsIdentifier(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-endpoints'][':identifier'].$get(args, options))
}

export async function deleteV1ChannelEndpointsIdentifier(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-endpoints'][':identifier'].$delete(args, options))
}

export async function patchV1ChannelEndpointsIdentifier(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['channel-endpoints'][':identifier'].$patch(args, options))
}

export async function postV2TranslationsUpload(
  args: InferRequestType<typeof client.v2.translations.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.translations.upload.$post(args, options))
}

export async function postV2Translations(
  args: InferRequestType<typeof client.v2.translations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.translations.$post(args, options))
}

export async function getV2TranslationsMasterJson(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.translations['master-json'].$get(args, options))
}

export async function postV2TranslationsMasterJson(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.translations['master-json'].$post(args, options))
}

export async function postV2TranslationsMasterJsonUpload(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.translations['master-json'].upload.$post(args, options))
}

export async function getV2TranslationsGroupResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.translations.group[':resourceType'][':resourceId'].$get(args, options),
  )
}

export async function getV2TranslationsResourceTypeResourceIdLocale(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.translations[':resourceType'][':resourceId'][':locale'].$get(args, options),
  )
}

export async function deleteV2TranslationsResourceTypeResourceIdLocale(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.translations[':resourceType'][':resourceId'][':locale'].$delete(args, options),
  )
}

export async function deleteV2TranslationsResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.translations[':resourceType'][':resourceId'].$delete(args, options),
  )
}

export async function postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationId(
  args: InferRequestType<
    (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId'].$post(
      args,
      options,
    ),
  )
}
