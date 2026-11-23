import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionNotificationExportResults(
  args: InferRequestType<typeof client.action_notification_export_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action_notification_export_results.$get(args, options))
}

export async function postActionNotificationExports(
  args: InferRequestType<typeof client.action_notification_exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action_notification_exports.$post(args, options))
}

export async function getActionNotificationExportsId(
  args: InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action_notification_exports[':id'].$get(args, options))
}

export async function postActionWebhookFailuresIdRetry(
  args: InferRequestType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action_webhook_failures[':id'].retry.$post(args, options))
}

export async function getApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.api_key.$get(undefined, options))
}

export async function deleteApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.api_key.$delete(undefined, options))
}

export async function patchApiKey(
  args: InferRequestType<typeof client.api_key.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_key.$patch(args, options))
}

export async function getApiKeys(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.$get(args, options))
}

export async function postApiKeys(
  args: InferRequestType<typeof client.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.$post(args, options))
}

export async function getApiKeysId(
  args: InferRequestType<(typeof client.api_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':id'].$get(args, options))
}

export async function deleteApiKeysId(
  args: InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':id'].$delete(args, options))
}

export async function patchApiKeysId(
  args: InferRequestType<(typeof client.api_keys)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':id'].$patch(args, options))
}

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function getAs2IncomingMessages(
  args: InferRequestType<typeof client.as2_incoming_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_incoming_messages.$get(args, options))
}

export async function getAs2OutgoingMessages(
  args: InferRequestType<typeof client.as2_outgoing_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_outgoing_messages.$get(args, options))
}

export async function getAs2Partners(
  args: InferRequestType<typeof client.as2_partners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_partners.$get(args, options))
}

export async function postAs2Partners(
  args: InferRequestType<typeof client.as2_partners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_partners.$post(args, options))
}

export async function getAs2PartnersId(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_partners[':id'].$get(args, options))
}

export async function deleteAs2PartnersId(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_partners[':id'].$delete(args, options))
}

export async function patchAs2PartnersId(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_partners[':id'].$patch(args, options))
}

export async function getAs2Stations(
  args: InferRequestType<typeof client.as2_stations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_stations.$get(args, options))
}

export async function postAs2Stations(
  args: InferRequestType<typeof client.as2_stations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_stations.$post(args, options))
}

export async function getAs2StationsId(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_stations[':id'].$get(args, options))
}

export async function deleteAs2StationsId(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_stations[':id'].$delete(args, options))
}

export async function patchAs2StationsId(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.as2_stations[':id'].$patch(args, options))
}

export async function getAutomationRuns(
  args: InferRequestType<typeof client.automation_runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_runs.$get(args, options))
}

export async function getAutomationRunsId(
  args: InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_runs[':id'].$get(args, options))
}

export async function getAutomations(
  args: InferRequestType<typeof client.automations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.$get(args, options))
}

export async function postAutomations(
  args: InferRequestType<typeof client.automations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.$post(args, options))
}

export async function getAutomationsId(
  args: InferRequestType<(typeof client.automations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':id'].$get(args, options))
}

export async function deleteAutomationsId(
  args: InferRequestType<(typeof client.automations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':id'].$delete(args, options))
}

export async function patchAutomationsId(
  args: InferRequestType<(typeof client.automations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':id'].$patch(args, options))
}

export async function getBandwidthSnapshots(
  args: InferRequestType<typeof client.bandwidth_snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bandwidth_snapshots.$get(args, options))
}

export async function getBehaviors(
  args: InferRequestType<typeof client.behaviors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors.$get(args, options))
}

export async function postBehaviors(
  args: InferRequestType<typeof client.behaviors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors.$post(args, options))
}

export async function getBehaviorsFoldersPath(
  args: InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors.folders[':path'].$get(args, options))
}

export async function postBehaviorsWebhookTest(
  args: InferRequestType<typeof client.behaviors.webhook.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors.webhook.test.$post(args, options))
}

export async function getBehaviorsId(
  args: InferRequestType<(typeof client.behaviors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors[':id'].$get(args, options))
}

export async function deleteBehaviorsId(
  args: InferRequestType<(typeof client.behaviors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors[':id'].$delete(args, options))
}

export async function patchBehaviorsId(
  args: InferRequestType<(typeof client.behaviors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.behaviors[':id'].$patch(args, options))
}

export async function getBundleDownloads(
  args: InferRequestType<typeof client.bundle_downloads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_downloads.$get(args, options))
}

export async function getBundleNotifications(
  args: InferRequestType<typeof client.bundle_notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_notifications.$get(args, options))
}

export async function postBundleNotifications(
  args: InferRequestType<typeof client.bundle_notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_notifications.$post(args, options))
}

export async function getBundleNotificationsId(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_notifications[':id'].$get(args, options))
}

export async function deleteBundleNotificationsId(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_notifications[':id'].$delete(args, options))
}

export async function patchBundleNotificationsId(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_notifications[':id'].$patch(args, options))
}

export async function getBundleRecipients(
  args: InferRequestType<typeof client.bundle_recipients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_recipients.$get(args, options))
}

export async function postBundleRecipients(
  args: InferRequestType<typeof client.bundle_recipients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_recipients.$post(args, options))
}

export async function getBundleRegistrations(
  args: InferRequestType<typeof client.bundle_registrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_registrations.$get(args, options))
}

export async function getBundles(
  args: InferRequestType<typeof client.bundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles.$get(args, options))
}

export async function postBundles(
  args: InferRequestType<typeof client.bundles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles.$post(args, options))
}

export async function getBundlesId(
  args: InferRequestType<(typeof client.bundles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles[':id'].$get(args, options))
}

export async function deleteBundlesId(
  args: InferRequestType<(typeof client.bundles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles[':id'].$delete(args, options))
}

export async function patchBundlesId(
  args: InferRequestType<(typeof client.bundles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles[':id'].$patch(args, options))
}

export async function postBundlesIdShare(
  args: InferRequestType<(typeof client.bundles)[':id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles[':id'].share.$post(args, options))
}

export async function getClickwraps(
  args: InferRequestType<typeof client.clickwraps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clickwraps.$get(args, options))
}

export async function postClickwraps(
  args: InferRequestType<typeof client.clickwraps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clickwraps.$post(args, options))
}

export async function getClickwrapsId(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clickwraps[':id'].$get(args, options))
}

export async function deleteClickwrapsId(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clickwraps[':id'].$delete(args, options))
}

export async function patchClickwrapsId(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clickwraps[':id'].$patch(args, options))
}

export async function getDnsRecords(
  args: InferRequestType<typeof client.dns_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_records.$get(args, options))
}

export async function getExternalEvents(
  args: InferRequestType<typeof client.external_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_events.$get(args, options))
}

export async function postExternalEvents(
  args: InferRequestType<typeof client.external_events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_events.$post(args, options))
}

export async function getExternalEventsId(
  args: InferRequestType<(typeof client.external_events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_events[':id'].$get(args, options))
}

export async function postFileActionsBeginUploadPath(
  args: InferRequestType<(typeof client.file_actions.begin_upload)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_actions.begin_upload[':path'].$post(args, options))
}

export async function postFileActionsCopyPath(
  args: InferRequestType<(typeof client.file_actions.copy)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_actions.copy[':path'].$post(args, options))
}

export async function getFileActionsMetadataPath(
  args: InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_actions.metadata[':path'].$get(args, options))
}

export async function postFileActionsMovePath(
  args: InferRequestType<(typeof client.file_actions.move)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_actions.move[':path'].$post(args, options))
}

export async function postFileCommentReactions(
  args: InferRequestType<typeof client.file_comment_reactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_comment_reactions.$post(args, options))
}

export async function deleteFileCommentReactionsId(
  args: InferRequestType<(typeof client.file_comment_reactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_comment_reactions[':id'].$delete(args, options))
}

export async function postFileComments(
  args: InferRequestType<typeof client.file_comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_comments.$post(args, options))
}

export async function getFileCommentsFilesPath(
  args: InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_comments.files[':path'].$get(args, options))
}

export async function deleteFileCommentsId(
  args: InferRequestType<(typeof client.file_comments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_comments[':id'].$delete(args, options))
}

export async function patchFileCommentsId(
  args: InferRequestType<(typeof client.file_comments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_comments[':id'].$patch(args, options))
}

export async function getFileMigrationsId(
  args: InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_migrations[':id'].$get(args, options))
}

export async function getFilesPath(
  args: InferRequestType<(typeof client.files)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':path'].$get(args, options))
}

export async function postFilesPath(
  args: InferRequestType<(typeof client.files)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':path'].$post(args, options))
}

export async function deleteFilesPath(
  args: InferRequestType<(typeof client.files)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':path'].$delete(args, options))
}

export async function patchFilesPath(
  args: InferRequestType<(typeof client.files)[':path']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':path'].$patch(args, options))
}

export async function getFoldersPath(
  args: InferRequestType<(typeof client.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':path'].$get(args, options))
}

export async function postFoldersPath(
  args: InferRequestType<(typeof client.folders)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':path'].$post(args, options))
}

export async function getFormFieldSets(
  args: InferRequestType<typeof client.form_field_sets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form_field_sets.$get(args, options))
}

export async function postFormFieldSets(
  args: InferRequestType<typeof client.form_field_sets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form_field_sets.$post(args, options))
}

export async function getFormFieldSetsId(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form_field_sets[':id'].$get(args, options))
}

export async function deleteFormFieldSetsId(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form_field_sets[':id'].$delete(args, options))
}

export async function patchFormFieldSetsId(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form_field_sets[':id'].$patch(args, options))
}

export async function getGroupUsers(
  args: InferRequestType<typeof client.group_users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_users.$get(args, options))
}

export async function postGroupUsers(
  args: InferRequestType<typeof client.group_users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_users.$post(args, options))
}

export async function deleteGroupUsersId(
  args: InferRequestType<(typeof client.group_users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_users[':id'].$delete(args, options))
}

export async function patchGroupUsersId(
  args: InferRequestType<(typeof client.group_users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_users[':id'].$patch(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function deleteGroupsGroupIdMembershipsUserId(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':group_id'].memberships[':user_id'].$delete(args, options),
  )
}

export async function patchGroupsGroupIdMembershipsUserId(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':group_id'].memberships[':user_id'].$patch(args, options),
  )
}

export async function getGroupsGroupIdPermissions(
  args: InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].permissions.$get(args, options))
}

export async function getGroupsGroupIdUsers(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].users.$get(args, options))
}

export async function postGroupsGroupIdUsers(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].users.$post(args, options))
}

export async function getGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$get(args, options))
}

export async function deleteGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$delete(args, options))
}

export async function patchGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$patch(args, options))
}

export async function getHistory(
  args: InferRequestType<typeof client.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.$get(args, options))
}

export async function getHistoryFilesPath(
  args: InferRequestType<(typeof client.history.files)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.files[':path'].$get(args, options))
}

export async function getHistoryFoldersPath(
  args: InferRequestType<(typeof client.history.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.folders[':path'].$get(args, options))
}

export async function getHistoryLogin(
  args: InferRequestType<typeof client.history.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.login.$get(args, options))
}

export async function getHistoryUsersUserId(
  args: InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.users[':user_id'].$get(args, options))
}

export async function getHistoryExportResults(
  args: InferRequestType<typeof client.history_export_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history_export_results.$get(args, options))
}

export async function postHistoryExports(
  args: InferRequestType<typeof client.history_exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history_exports.$post(args, options))
}

export async function getHistoryExportsId(
  args: InferRequestType<(typeof client.history_exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history_exports[':id'].$get(args, options))
}

export async function getInboxRecipients(
  args: InferRequestType<typeof client.inbox_recipients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox_recipients.$get(args, options))
}

export async function postInboxRecipients(
  args: InferRequestType<typeof client.inbox_recipients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox_recipients.$post(args, options))
}

export async function getInboxRegistrations(
  args: InferRequestType<typeof client.inbox_registrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox_registrations.$get(args, options))
}

export async function getInboxUploads(
  args: InferRequestType<typeof client.inbox_uploads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox_uploads.$get(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$get(args, options))
}

export async function getInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$get(args, options))
}

export async function getIpAddresses(
  args: InferRequestType<typeof client.ip_addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_addresses.$get(args, options))
}

export async function getIpAddressesExavaultReserved(
  args: InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_addresses['exavault-reserved'].$get(args, options))
}

export async function getIpAddressesReserved(
  args: InferRequestType<typeof client.ip_addresses.reserved.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_addresses.reserved.$get(args, options))
}

export async function getLocksPath(
  args: InferRequestType<(typeof client.locks)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locks[':path'].$get(args, options))
}

export async function postLocksPath(
  args: InferRequestType<(typeof client.locks)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locks[':path'].$post(args, options))
}

export async function deleteLocksPath(
  args: InferRequestType<(typeof client.locks)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locks[':path'].$delete(args, options))
}

export async function getMessageCommentReactions(
  args: InferRequestType<typeof client.message_comment_reactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comment_reactions.$get(args, options))
}

export async function postMessageCommentReactions(
  args: InferRequestType<typeof client.message_comment_reactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comment_reactions.$post(args, options))
}

export async function getMessageCommentReactionsId(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comment_reactions[':id'].$get(args, options))
}

export async function deleteMessageCommentReactionsId(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comment_reactions[':id'].$delete(args, options))
}

export async function getMessageComments(
  args: InferRequestType<typeof client.message_comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comments.$get(args, options))
}

export async function postMessageComments(
  args: InferRequestType<typeof client.message_comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comments.$post(args, options))
}

export async function getMessageCommentsId(
  args: InferRequestType<(typeof client.message_comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comments[':id'].$get(args, options))
}

export async function deleteMessageCommentsId(
  args: InferRequestType<(typeof client.message_comments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comments[':id'].$delete(args, options))
}

export async function patchMessageCommentsId(
  args: InferRequestType<(typeof client.message_comments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_comments[':id'].$patch(args, options))
}

export async function getMessageReactions(
  args: InferRequestType<typeof client.message_reactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_reactions.$get(args, options))
}

export async function postMessageReactions(
  args: InferRequestType<typeof client.message_reactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_reactions.$post(args, options))
}

export async function getMessageReactionsId(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_reactions[':id'].$get(args, options))
}

export async function deleteMessageReactionsId(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_reactions[':id'].$delete(args, options))
}

export async function getMessages(
  args: InferRequestType<typeof client.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$get(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function getMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$get(args, options))
}

export async function deleteMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$delete(args, options))
}

export async function patchMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$patch(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function postNotifications(
  args: InferRequestType<typeof client.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$post(args, options))
}

export async function getNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$get(args, options))
}

export async function deleteNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$delete(args, options))
}

export async function patchNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$patch(args, options))
}

export async function getPayments(
  args: InferRequestType<typeof client.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.$get(args, options))
}

export async function getPaymentsId(
  args: InferRequestType<(typeof client.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':id'].$get(args, options))
}

export async function getPermissions(
  args: InferRequestType<typeof client.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$get(args, options))
}

export async function postPermissions(
  args: InferRequestType<typeof client.permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$post(args, options))
}

export async function deletePermissionsId(
  args: InferRequestType<(typeof client.permissions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions[':id'].$delete(args, options))
}

export async function getPriorities(
  args: InferRequestType<typeof client.priorities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.priorities.$get(args, options))
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$get(args, options))
}

export async function deleteProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$delete(args, options))
}

export async function patchProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$patch(args, options))
}

export async function getPublicKeys(
  args: InferRequestType<typeof client.public_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_keys.$get(args, options))
}

export async function postPublicKeys(
  args: InferRequestType<typeof client.public_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_keys.$post(args, options))
}

export async function getPublicKeysId(
  args: InferRequestType<(typeof client.public_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_keys[':id'].$get(args, options))
}

export async function deletePublicKeysId(
  args: InferRequestType<(typeof client.public_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_keys[':id'].$delete(args, options))
}

export async function patchPublicKeysId(
  args: InferRequestType<(typeof client.public_keys)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_keys[':id'].$patch(args, options))
}

export async function getRemoteBandwidthSnapshots(
  args: InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_bandwidth_snapshots.$get(args, options))
}

export async function getRemoteServers(
  args: InferRequestType<typeof client.remote_servers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers.$get(args, options))
}

export async function postRemoteServers(
  args: InferRequestType<typeof client.remote_servers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers.$post(args, options))
}

export async function getRemoteServersId(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers[':id'].$get(args, options))
}

export async function deleteRemoteServersId(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers[':id'].$delete(args, options))
}

export async function patchRemoteServersId(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers[':id'].$patch(args, options))
}

export async function getRemoteServersIdConfigurationFile(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers[':id'].configuration_file.$get(args, options))
}

export async function postRemoteServersIdConfigurationFile(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_servers[':id'].configuration_file.$post(args, options))
}

export async function getRequests(
  args: InferRequestType<typeof client.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.$get(args, options))
}

export async function postRequests(
  args: InferRequestType<typeof client.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.$post(args, options))
}

export async function getRequestsFoldersPath(
  args: InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.folders[':path'].$get(args, options))
}

export async function deleteRequestsId(
  args: InferRequestType<(typeof client.requests)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests[':id'].$delete(args, options))
}

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}

export async function deleteSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.sessions.$delete(undefined, options))
}

export async function getSettingsChanges(
  args: InferRequestType<typeof client.settings_changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings_changes.$get(args, options))
}

export async function getSftpHostKeys(
  args: InferRequestType<typeof client.sftp_host_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sftp_host_keys.$get(args, options))
}

export async function postSftpHostKeys(
  args: InferRequestType<typeof client.sftp_host_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sftp_host_keys.$post(args, options))
}

export async function getSftpHostKeysId(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sftp_host_keys[':id'].$get(args, options))
}

export async function deleteSftpHostKeysId(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sftp_host_keys[':id'].$delete(args, options))
}

export async function patchSftpHostKeysId(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sftp_host_keys[':id'].$patch(args, options))
}

export async function getSite(options?: ClientRequestOptions) {
  return await parseResponse(client.site.$get(undefined, options))
}

export async function patchSite(
  args: InferRequestType<typeof client.site.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site.$patch(args, options))
}

export async function getSiteApiKeys(
  args: InferRequestType<typeof client.site.api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site.api_keys.$get(args, options))
}

export async function postSiteApiKeys(
  args: InferRequestType<typeof client.site.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site.api_keys.$post(args, options))
}

export async function getSiteDnsRecords(
  args: InferRequestType<typeof client.site.dns_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site.dns_records.$get(args, options))
}

export async function getSiteIpAddresses(
  args: InferRequestType<typeof client.site.ip_addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site.ip_addresses.$get(args, options))
}

export async function postSiteTestWebhook(
  args: InferRequestType<(typeof client.site)['test-webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site['test-webhook'].$post(args, options))
}

export async function getSiteUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.site.usage.$get(undefined, options))
}

export async function getSsoStrategies(
  args: InferRequestType<typeof client.sso_strategies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso_strategies.$get(args, options))
}

export async function getSsoStrategiesId(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso_strategies[':id'].$get(args, options))
}

export async function postSsoStrategiesIdSync(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso_strategies[':id'].sync.$post(args, options))
}

export async function getStylesPath(
  args: InferRequestType<(typeof client.styles)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.styles[':path'].$get(args, options))
}

export async function deleteStylesPath(
  args: InferRequestType<(typeof client.styles)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.styles[':path'].$delete(args, options))
}

export async function patchStylesPath(
  args: InferRequestType<(typeof client.styles)[':path']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.styles[':path'].$patch(args, options))
}

export async function getUsageDailySnapshots(
  args: InferRequestType<typeof client.usage_daily_snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_daily_snapshots.$get(args, options))
}

export async function getUsageSnapshots(
  args: InferRequestType<typeof client.usage_snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_snapshots.$get(args, options))
}

export async function patchUser(
  args: InferRequestType<typeof client.user.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$patch(args, options))
}

export async function getUserApiKeys(
  args: InferRequestType<typeof client.user.api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.api_keys.$get(args, options))
}

export async function postUserApiKeys(
  args: InferRequestType<typeof client.user.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.api_keys.$post(args, options))
}

export async function getUserGroups(
  args: InferRequestType<typeof client.user.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.groups.$get(args, options))
}

export async function getUserPublicKeys(
  args: InferRequestType<typeof client.user.public_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.public_keys.$get(args, options))
}

export async function postUserPublicKeys(
  args: InferRequestType<typeof client.user.public_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.public_keys.$post(args, options))
}

export async function getUserCipherUses(
  args: InferRequestType<typeof client.user_cipher_uses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_cipher_uses.$get(args, options))
}

export async function getUserRequests(
  args: InferRequestType<typeof client.user_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_requests.$get(args, options))
}

export async function postUserRequests(
  args: InferRequestType<typeof client.user_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_requests.$post(args, options))
}

export async function getUserRequestsId(
  args: InferRequestType<(typeof client.user_requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_requests[':id'].$get(args, options))
}

export async function deleteUserRequestsId(
  args: InferRequestType<(typeof client.user_requests)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_requests[':id'].$delete(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}

export async function patchUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$patch(args, options))
}

export async function postUsersId2faReset(
  args: InferRequestType<(typeof client.users)[':id']['2fa']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['2fa'].reset.$post(args, options))
}

export async function postUsersIdResendWelcomeEmail(
  args: InferRequestType<(typeof client.users)[':id']['resend_welcome_email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].resend_welcome_email.$post(args, options))
}

export async function postUsersIdUnlock(
  args: InferRequestType<(typeof client.users)[':id']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].unlock.$post(args, options))
}

export async function getUsersUserIdApiKeys(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].api_keys.$get(args, options))
}

export async function postUsersUserIdApiKeys(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].api_keys.$post(args, options))
}

export async function getUsersUserIdCipherUses(
  args: InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].cipher_uses.$get(args, options))
}

export async function getUsersUserIdGroups(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].groups.$get(args, options))
}

export async function getUsersUserIdPermissions(
  args: InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].permissions.$get(args, options))
}

export async function getUsersUserIdPublicKeys(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].public_keys.$get(args, options))
}

export async function postUsersUserIdPublicKeys(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].public_keys.$post(args, options))
}

export async function postWebhookTests(
  args: InferRequestType<typeof client.webhook_tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_tests.$post(args, options))
}
