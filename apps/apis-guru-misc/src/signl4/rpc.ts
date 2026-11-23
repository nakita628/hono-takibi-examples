import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAlerts(
  args: InferRequestType<typeof client.alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$post(args, options))
}

export async function postAlertsAcknowledgeAll(
  args: InferRequestType<typeof client.alerts.acknowledgeAll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.acknowledgeAll.$post(args, options))
}

export async function postAlertsAcknowledgeMultiple(
  args: InferRequestType<typeof client.alerts.acknowledgeMultiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.acknowledgeMultiple.$post(args, options))
}

export async function postAlertsCloseAll(
  args: InferRequestType<typeof client.alerts.closeAll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.closeAll.$post(args, options))
}

export async function postAlertsCloseMultiple(
  args: InferRequestType<typeof client.alerts.closeMultiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.closeMultiple.$post(args, options))
}

export async function postAlertsPaged(
  args: InferRequestType<typeof client.alerts.paged.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.paged.$post(args, options))
}

export async function getAlertsReport(
  args: InferRequestType<typeof client.alerts.report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.report.$get(args, options))
}

export async function postAlertsUndoAcknowledgeMultiple(
  args: InferRequestType<typeof client.alerts.undoAcknowledgeMultiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.undoAcknowledgeMultiple.$post(args, options))
}

export async function postAlertsUndoCloseMultiple(
  args: InferRequestType<typeof client.alerts.undoCloseMultiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.undoCloseMultiple.$post(args, options))
}

export async function getAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alertId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].$get(args, options))
}

export async function postAlertsAlertIdAcknowledge(
  args: InferRequestType<(typeof client.alerts)[':alertId']['acknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].acknowledge.$post(args, options))
}

export async function postAlertsAlertIdAnnotate(
  args: InferRequestType<(typeof client.alerts)[':alertId']['annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].annotate.$post(args, options))
}

export async function getAlertsAlertIdAnnotations(
  args: InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].annotations.$get(args, options))
}

export async function getAlertsAlertIdAttachments(
  args: InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].attachments.$get(args, options))
}

export async function getAlertsAlertIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.alerts[':alertId'].attachments[':attachmentId'].$get(args, options),
  )
}

export async function postAlertsAlertIdClose(
  args: InferRequestType<(typeof client.alerts)[':alertId']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].close.$post(args, options))
}

export async function getAlertsAlertIdNotifications(
  args: InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].notifications.$get(args, options))
}

export async function getAlertsAlertIdOverview(
  args: InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].overview.$get(args, options))
}

export async function postAlertsAlertIdUndoAcknowledge(
  args: InferRequestType<(typeof client.alerts)[':alertId']['undoAcknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].undoAcknowledge.$post(args, options))
}

export async function postAlertsAlertIdUndoClose(
  args: InferRequestType<(typeof client.alerts)[':alertId']['undoClose']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].undoClose.$post(args, options))
}

export async function getCategoriesImages(options?: ClientRequestOptions) {
  return await parseResponse(client.categories.images.$get(undefined, options))
}

export async function getCategoriesTeamId(
  args: InferRequestType<(typeof client.categories)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':teamId'].$get(args, options))
}

export async function postCategoriesTeamId(
  args: InferRequestType<(typeof client.categories)[':teamId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':teamId'].$post(args, options))
}

export async function getCategoriesTeamIdMetrics(
  args: InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':teamId'].metrics.$get(args, options))
}

export async function getCategoriesTeamIdCategoryId(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':teamId'][':categoryId'].$get(args, options))
}

export async function putCategoriesTeamIdCategoryId(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':teamId'][':categoryId'].$put(args, options))
}

export async function deleteCategoriesTeamIdCategoryId(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':teamId'][':categoryId'].$delete(args, options))
}

export async function getCategoriesTeamIdCategoryIdMetrics(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.categories[':teamId'][':categoryId'].metrics.$get(args, options),
  )
}

export async function getCategoriesTeamIdCategoryIdSubscriptions(
  args: InferRequestType<
    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.categories[':teamId'][':categoryId'].subscriptions.$get(args, options),
  )
}

export async function postCategoriesTeamIdCategoryIdSubscriptions(
  args: InferRequestType<
    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.categories[':teamId'][':categoryId'].subscriptions.$post(args, options),
  )
}

export async function postEventsPaged(
  args: InferRequestType<typeof client.events.paged.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.paged.$post(args, options))
}

export async function getEventsEventIdOverview(
  args: InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':eventId'].overview.$get(args, options))
}

export async function getEventsEventIdParameters(
  args: InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':eventId'].parameters.$get(args, options))
}

export async function getPrepaidBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.prepaid.balance.$get(undefined, options))
}

export async function getPrepaidSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.prepaid.settings.$get(undefined, options))
}

export async function putPrepaidSettings(
  args: InferRequestType<typeof client.prepaid.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prepaid.settings.$put(args, options))
}

export async function getPrepaidTransactions(options?: ClientRequestOptions) {
  return await parseResponse(client.prepaid.transactions.$get(undefined, options))
}

export async function getScriptsInstances(
  args: InferRequestType<typeof client.scripts.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances.$get(args, options))
}

export async function postScriptsInstances(
  args: InferRequestType<typeof client.scripts.instances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances.$post(args, options))
}

export async function getScriptsInstancesInstanceId(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances[':instanceId'].$get(args, options))
}

export async function putScriptsInstancesInstanceId(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances[':instanceId'].$put(args, options))
}

export async function deleteScriptsInstancesInstanceId(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances[':instanceId'].$delete(args, options))
}

export async function putScriptsInstancesInstanceIdData(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['data']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances[':instanceId'].data.$put(args, options))
}

export async function postScriptsInstancesInstanceIdDisable(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances[':instanceId'].disable.$post(args, options))
}

export async function postScriptsInstancesInstanceIdEnable(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.instances[':instanceId'].enable.$post(args, options))
}

export async function getScriptsInventory(options?: ClientRequestOptions) {
  return await parseResponse(client.scripts.inventory.$get(undefined, options))
}

export async function getScriptsInventoryParsed(
  args: InferRequestType<typeof client.scripts.inventory.parsed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.inventory.parsed.$get(args, options))
}

export async function getScriptsInventoryParsedScriptId(
  args: InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.inventory.parsed[':scriptId'].$get(args, options))
}

export async function getSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(client.subscriptions.$get(undefined, options))
}

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$get(args, options))
}

export async function getSubscriptionsSubscriptionIdChannelPrices(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].channelPrices.$get(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdFeatures(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].features.$get(args, options))
}

export async function getSubscriptionsSubscriptionIdPrepaidBalance(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].prepaidBalance.$get(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdPrepaidSettings(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].prepaidSettings.$get(args, options),
  )
}

export async function putSubscriptionsSubscriptionIdPrepaidSettings(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].prepaidSettings.$put(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdPrepaidTransactions(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].prepaidTransactions.$get(args, options),
  )
}

export async function putSubscriptionsSubscriptionIdProfile(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].profile.$put(args, options))
}

export async function getSubscriptionsSubscriptionIdTeams(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].teams.$get(args, options))
}

export async function getSubscriptionsSubscriptionIdUserLicenses(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].userLicenses.$get(args, options),
  )
}

export async function getTeams(options?: ClientRequestOptions) {
  return await parseResponse(client.teams.$get(undefined, options))
}

export async function getTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].$get(args, options))
}

export async function getTeamsTeamIdAlertReports(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].alertReports.$get(args, options))
}

export async function getTeamsTeamIdAlertReportsFileName(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].alertReports[':fileName'].$get(args, options))
}

export async function getTeamsTeamIdAlertSettings(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].alertSettings.$get(args, options))
}

export async function postTeamsTeamIdAlertSettings(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].alertSettings.$post(args, options))
}

export async function getTeamsTeamIdDutyReports(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].dutyReports.$get(args, options))
}

export async function getTeamsTeamIdDutyReportsFileName(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].dutyReports[':fileName'].$get(args, options))
}

export async function getTeamsTeamIdDutysummary(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].dutysummary.$get(args, options))
}

export async function getTeamsTeamIdEventSources(
  args: InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].eventSources.$get(args, options))
}

export async function getTeamsTeamIdMemberships(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].memberships.$get(args, options))
}

export async function postTeamsTeamIdMemberships(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].memberships.$post(args, options))
}

export async function postTeamsTeamIdMembershipsResendInviteMail(
  args: InferRequestType<
    (typeof client.teams)[':teamId']['memberships']['resendInviteMail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':teamId'].memberships.resendInviteMail.$post(args, options),
  )
}

export async function putTeamsTeamIdMembershipsUserId(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].memberships[':userId'].$put(args, options))
}

export async function deleteTeamsTeamIdMembershipsUserId(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].memberships[':userId'].$delete(args, options))
}

export async function putTeamsTeamIdProfile(
  args: InferRequestType<(typeof client.teams)[':teamId']['profile']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].profile.$put(args, options))
}

export async function getTeamsTeamIdSchedules(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].schedules.$get(args, options))
}

export async function postTeamsTeamIdSchedules(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].schedules.$post(args, options))
}

export async function postTeamsTeamIdSchedulesDeleteRange(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].schedules.deleteRange.$post(args, options))
}

export async function postTeamsTeamIdSchedulesMultiple(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].schedules.multiple.$post(args, options))
}

export async function deleteTeamsTeamIdSchedulesDutyId(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules'][':dutyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].schedules[':dutyId'].$delete(args, options))
}

export async function getTeamsTeamIdSchedulesScheduleId(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].schedules[':scheduleId'].$get(args, options))
}

export async function getTeamsTeamIdSetupProgress(
  args: InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].setupProgress.$get(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function putUsersUserIdChangePassword(
  args: InferRequestType<(typeof client.users)[':userId']['changePassword']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].changePassword.$put(args, options))
}

export async function postUsersUserIdCheckPermissions(
  args: InferRequestType<(typeof client.users)[':userId']['checkPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].checkPermissions.$post(args, options))
}

export async function getUsersUserIdDutyStatus(
  args: InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].dutyStatus.$get(args, options))
}

export async function getUsersUserIdImage(
  args: InferRequestType<(typeof client.users)[':userId']['image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].image.$get(args, options))
}

export async function postUsersUserIdImage(
  args: InferRequestType<(typeof client.users)[':userId']['image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].image.$post(args, options))
}

export async function putUsersUserIdProfile(
  args: InferRequestType<(typeof client.users)[':userId']['profile']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].profile.$put(args, options))
}

export async function postUsersUserIdPunchIn(
  args: InferRequestType<(typeof client.users)[':userId']['punchIn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].punchIn.$post(args, options))
}

export async function postUsersUserIdPunchInAsManager(
  args: InferRequestType<(typeof client.users)[':userId']['punchInAsManager']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].punchInAsManager.$post(args, options))
}

export async function postUsersUserIdPunchOut(
  args: InferRequestType<(typeof client.users)[':userId']['punchOut']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].punchOut.$post(args, options))
}

export async function getUsersUserIdSetupProgress(
  args: InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].setupProgress.$get(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$get(args, options))
}

export async function putWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$put(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$delete(args, options))
}

export async function postWebhooksWebhookIdDisable(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].disable.$post(args, options))
}

export async function postWebhooksWebhookIdEnable(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].enable.$post(args, options))
}
