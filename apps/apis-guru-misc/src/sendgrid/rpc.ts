import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccessSettingsActivity(
  args: InferRequestType<typeof client.access_settings.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_settings.activity.$get(args, options))
}

export async function getAccessSettingsWhitelist(
  args: InferRequestType<typeof client.access_settings.whitelist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_settings.whitelist.$get(args, options))
}

export async function postAccessSettingsWhitelist(
  args: InferRequestType<typeof client.access_settings.whitelist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_settings.whitelist.$post(args, options))
}

export async function deleteAccessSettingsWhitelist(
  args: InferRequestType<typeof client.access_settings.whitelist.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_settings.whitelist.$delete(args, options))
}

export async function getAccessSettingsWhitelistRuleId(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_settings.whitelist[':rule_id'].$get(args, options))
}

export async function deleteAccessSettingsWhitelistRuleId(
  args: InferRequestType<(typeof client.access_settings.whitelist)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_settings.whitelist[':rule_id'].$delete(args, options))
}

export async function getAlerts(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$get(args, options))
}

export async function postAlerts(
  args: InferRequestType<typeof client.alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$post(args, options))
}

export async function getAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert_id'].$get(args, options))
}

export async function deleteAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert_id'].$delete(args, options))
}

export async function patchAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alert_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert_id'].$patch(args, options))
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

export async function getApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':api_key_id'].$get(args, options))
}

export async function putApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':api_key_id'].$put(args, options))
}

export async function deleteApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':api_key_id'].$delete(args, options))
}

export async function patchApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api_keys)[':api_key_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':api_key_id'].$patch(args, options))
}

export async function getAsmGroups(
  args: InferRequestType<typeof client.asm.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups.$get(args, options))
}

export async function postAsmGroups(
  args: InferRequestType<typeof client.asm.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups.$post(args, options))
}

export async function getAsmGroupsGroupId(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups[':group_id'].$get(args, options))
}

export async function deleteAsmGroupsGroupId(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups[':group_id'].$delete(args, options))
}

export async function patchAsmGroupsGroupId(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups[':group_id'].$patch(args, options))
}

export async function getAsmGroupsGroupIdSuppressions(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups[':group_id'].suppressions.$get(args, options))
}

export async function postAsmGroupsGroupIdSuppressions(
  args: InferRequestType<(typeof client.asm.groups)[':group_id']['suppressions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.groups[':group_id'].suppressions.$post(args, options))
}

export async function postAsmGroupsGroupIdSuppressionsSearch(
  args: InferRequestType<
    (typeof client.asm.groups)[':group_id']['suppressions']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.asm.groups[':group_id'].suppressions.search.$post(args, options),
  )
}

export async function deleteAsmGroupsGroupIdSuppressionsEmail(
  args: InferRequestType<
    (typeof client.asm.groups)[':group_id']['suppressions'][':email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.asm.groups[':group_id'].suppressions[':email'].$delete(args, options),
  )
}

export async function getAsmSuppressions(
  args: InferRequestType<typeof client.asm.suppressions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.suppressions.$get(args, options))
}

export async function postAsmSuppressionsGlobal(
  args: InferRequestType<typeof client.asm.suppressions.global.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.suppressions.global.$post(args, options))
}

export async function getAsmSuppressionsGlobalEmail(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.suppressions.global[':email'].$get(args, options))
}

export async function deleteAsmSuppressionsGlobalEmail(
  args: InferRequestType<(typeof client.asm.suppressions.global)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.suppressions.global[':email'].$delete(args, options))
}

export async function getAsmSuppressionsEmail(
  args: InferRequestType<(typeof client.asm.suppressions)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asm.suppressions[':email'].$get(args, options))
}

export async function getBrowsersStats(
  args: InferRequestType<typeof client.browsers.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browsers.stats.$get(args, options))
}

export async function getCampaigns(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$get(args, options))
}

export async function postCampaigns(
  args: InferRequestType<typeof client.campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$post(args, options))
}

export async function getCampaignsCampaignId(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].$get(args, options))
}

export async function deleteCampaignsCampaignId(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].$delete(args, options))
}

export async function patchCampaignsCampaignId(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].$patch(args, options))
}

export async function getCampaignsCampaignIdSchedules(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].schedules.$get(args, options))
}

export async function postCampaignsCampaignIdSchedules(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].schedules.$post(args, options))
}

export async function deleteCampaignsCampaignIdSchedules(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].schedules.$delete(args, options))
}

export async function patchCampaignsCampaignIdSchedules(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].schedules.$patch(args, options))
}

export async function postCampaignsCampaignIdSchedulesNow(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['now']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].schedules.now.$post(args, options))
}

export async function postCampaignsCampaignIdSchedulesTest(
  args: InferRequestType<(typeof client.campaigns)[':campaign_id']['schedules']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':campaign_id'].schedules.test.$post(args, options))
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function getCategoriesStats(
  args: InferRequestType<typeof client.categories.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.stats.$get(args, options))
}

export async function getCategoriesStatsSums(
  args: InferRequestType<typeof client.categories.stats.sums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.stats.sums.$get(args, options))
}

export async function getClientsStats(
  args: InferRequestType<typeof client.clients.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.stats.$get(args, options))
}

export async function getClientsClientTypeStats(
  args: InferRequestType<(typeof client.clients)[':client_type']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':client_type'].stats.$get(args, options))
}

export async function getContactdbCustomFields(
  args: InferRequestType<typeof client.contactdb.custom_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.custom_fields.$get(args, options))
}

export async function postContactdbCustomFields(
  args: InferRequestType<typeof client.contactdb.custom_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.custom_fields.$post(args, options))
}

export async function getContactdbCustomFieldsCustomFieldId(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.custom_fields[':custom_field_id'].$get(args, options))
}

export async function deleteContactdbCustomFieldsCustomFieldId(
  args: InferRequestType<(typeof client.contactdb.custom_fields)[':custom_field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contactdb.custom_fields[':custom_field_id'].$delete(args, options),
  )
}

export async function getContactdbLists(
  args: InferRequestType<typeof client.contactdb.lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists.$get(args, options))
}

export async function postContactdbLists(
  args: InferRequestType<typeof client.contactdb.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists.$post(args, options))
}

export async function deleteContactdbLists(
  args: InferRequestType<typeof client.contactdb.lists.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists.$delete(args, options))
}

export async function getContactdbListsListId(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists[':list_id'].$get(args, options))
}

export async function deleteContactdbListsListId(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists[':list_id'].$delete(args, options))
}

export async function patchContactdbListsListId(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists[':list_id'].$patch(args, options))
}

export async function getContactdbListsListIdRecipients(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists[':list_id'].recipients.$get(args, options))
}

export async function postContactdbListsListIdRecipients(
  args: InferRequestType<(typeof client.contactdb.lists)[':list_id']['recipients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.lists[':list_id'].recipients.$post(args, options))
}

export async function postContactdbListsListIdRecipientsRecipientId(
  args: InferRequestType<
    (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contactdb.lists[':list_id'].recipients[':recipient_id'].$post(args, options),
  )
}

export async function deleteContactdbListsListIdRecipientsRecipientId(
  args: InferRequestType<
    (typeof client.contactdb.lists)[':list_id']['recipients'][':recipient_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contactdb.lists[':list_id'].recipients[':recipient_id'].$delete(args, options),
  )
}

export async function getContactdbRecipients(
  args: InferRequestType<typeof client.contactdb.recipients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.$get(args, options))
}

export async function postContactdbRecipients(
  args: InferRequestType<typeof client.contactdb.recipients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.$post(args, options))
}

export async function deleteContactdbRecipients(
  args: InferRequestType<typeof client.contactdb.recipients.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.$delete(args, options))
}

export async function patchContactdbRecipients(
  args: InferRequestType<typeof client.contactdb.recipients.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.$patch(args, options))
}

export async function getContactdbRecipientsBillableCount(
  args: InferRequestType<typeof client.contactdb.recipients.billable_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.billable_count.$get(args, options))
}

export async function getContactdbRecipientsCount(
  args: InferRequestType<typeof client.contactdb.recipients.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.count.$get(args, options))
}

export async function getContactdbRecipientsSearch(
  args: InferRequestType<typeof client.contactdb.recipients.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.search.$get(args, options))
}

export async function postContactdbRecipientsSearch(
  args: InferRequestType<typeof client.contactdb.recipients.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients.search.$post(args, options))
}

export async function getContactdbRecipientsRecipientId(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients[':recipient_id'].$get(args, options))
}

export async function deleteContactdbRecipientsRecipientId(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients[':recipient_id'].$delete(args, options))
}

export async function getContactdbRecipientsRecipientIdLists(
  args: InferRequestType<(typeof client.contactdb.recipients)[':recipient_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.recipients[':recipient_id'].lists.$get(args, options))
}

export async function getContactdbReservedFields(
  args: InferRequestType<typeof client.contactdb.reserved_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.reserved_fields.$get(args, options))
}

export async function getContactdbSegments(
  args: InferRequestType<typeof client.contactdb.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.segments.$get(args, options))
}

export async function postContactdbSegments(
  args: InferRequestType<typeof client.contactdb.segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.segments.$post(args, options))
}

export async function getContactdbSegmentsSegmentId(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.segments[':segment_id'].$get(args, options))
}

export async function deleteContactdbSegmentsSegmentId(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.segments[':segment_id'].$delete(args, options))
}

export async function patchContactdbSegmentsSegmentId(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.segments[':segment_id'].$patch(args, options))
}

export async function getContactdbSegmentsSegmentIdRecipients(
  args: InferRequestType<(typeof client.contactdb.segments)[':segment_id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contactdb.segments[':segment_id'].recipients.$get(args, options),
  )
}

export async function getContactdbStatus(
  args: InferRequestType<typeof client.contactdb.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contactdb.status.$get(args, options))
}

export async function getDesigns(
  args: InferRequestType<typeof client.designs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs.$get(args, options))
}

export async function postDesigns(
  args: InferRequestType<typeof client.designs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs.$post(args, options))
}

export async function getDesignsPreBuilts(
  args: InferRequestType<(typeof client.designs)['pre-builts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs['pre-builts'].$get(args, options))
}

export async function getDesignsPreBuiltsId(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs['pre-builts'][':id'].$get(args, options))
}

export async function postDesignsPreBuiltsId(
  args: InferRequestType<(typeof client.designs)['pre-builts'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs['pre-builts'][':id'].$post(args, options))
}

export async function getDesignsId(
  args: InferRequestType<(typeof client.designs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs[':id'].$get(args, options))
}

export async function postDesignsId(
  args: InferRequestType<(typeof client.designs)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs[':id'].$post(args, options))
}

export async function deleteDesignsId(
  args: InferRequestType<(typeof client.designs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs[':id'].$delete(args, options))
}

export async function patchDesignsId(
  args: InferRequestType<(typeof client.designs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.designs[':id'].$patch(args, options))
}

export async function getDevicesStats(
  args: InferRequestType<typeof client.devices.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.stats.$get(args, options))
}

export async function getGeoStats(
  args: InferRequestType<typeof client.geo.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geo.stats.$get(args, options))
}

export async function getIps(
  args: InferRequestType<typeof client.ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$get(args, options))
}

export async function postIps(
  args: InferRequestType<typeof client.ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$post(args, options))
}

export async function getIpsAssigned(options?: ClientRequestOptions) {
  return await parseResponse(client.ips.assigned.$get(undefined, options))
}

export async function getIpsPools(options?: ClientRequestOptions) {
  return await parseResponse(client.ips.pools.$get(undefined, options))
}

export async function postIpsPools(
  args: InferRequestType<typeof client.ips.pools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.pools.$post(args, options))
}

export async function getIpsPoolsPoolName(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.pools[':pool_name'].$get(args, options))
}

export async function putIpsPoolsPoolName(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.pools[':pool_name'].$put(args, options))
}

export async function deleteIpsPoolsPoolName(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.pools[':pool_name'].$delete(args, options))
}

export async function postIpsPoolsPoolNameIps(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.pools[':pool_name'].ips.$post(args, options))
}

export async function deleteIpsPoolsPoolNameIpsIp(
  args: InferRequestType<(typeof client.ips.pools)[':pool_name']['ips'][':ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.pools[':pool_name'].ips[':ip'].$delete(args, options))
}

export async function getIpsRemaining(options?: ClientRequestOptions) {
  return await parseResponse(client.ips.remaining.$get(undefined, options))
}

export async function getIpsWarmup(options?: ClientRequestOptions) {
  return await parseResponse(client.ips.warmup.$get(undefined, options))
}

export async function postIpsWarmup(
  args: InferRequestType<typeof client.ips.warmup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.warmup.$post(args, options))
}

export async function getIpsWarmupIpAddress(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.warmup[':ip_address'].$get(args, options))
}

export async function deleteIpsWarmupIpAddress(
  args: InferRequestType<(typeof client.ips.warmup)[':ip_address']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.warmup[':ip_address'].$delete(args, options))
}

export async function getIpsIpAddress(
  args: InferRequestType<(typeof client.ips)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':ip_address'].$get(args, options))
}

export async function postMailBatch(
  args: InferRequestType<typeof client.mail.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail.batch.$post(args, options))
}

export async function getMailBatchBatchId(
  args: InferRequestType<(typeof client.mail.batch)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail.batch[':batch_id'].$get(args, options))
}

export async function postMailSend(
  args: InferRequestType<typeof client.mail.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail.send.$post(args, options))
}

export async function getMailSettings(
  args: InferRequestType<typeof client.mail_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.$get(args, options))
}

export async function getMailSettingsAddressWhitelist(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.address_whitelist.$get(args, options))
}

export async function patchMailSettingsAddressWhitelist(
  args: InferRequestType<typeof client.mail_settings.address_whitelist.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.address_whitelist.$patch(args, options))
}

export async function getMailSettingsBouncePurge(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.bounce_purge.$get(args, options))
}

export async function patchMailSettingsBouncePurge(
  args: InferRequestType<typeof client.mail_settings.bounce_purge.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.bounce_purge.$patch(args, options))
}

export async function getMailSettingsFooter(
  args: InferRequestType<typeof client.mail_settings.footer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.footer.$get(args, options))
}

export async function patchMailSettingsFooter(
  args: InferRequestType<typeof client.mail_settings.footer.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.footer.$patch(args, options))
}

export async function getMailSettingsForwardBounce(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.forward_bounce.$get(args, options))
}

export async function patchMailSettingsForwardBounce(
  args: InferRequestType<typeof client.mail_settings.forward_bounce.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.forward_bounce.$patch(args, options))
}

export async function getMailSettingsForwardSpam(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.forward_spam.$get(args, options))
}

export async function patchMailSettingsForwardSpam(
  args: InferRequestType<typeof client.mail_settings.forward_spam.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.forward_spam.$patch(args, options))
}

export async function getMailSettingsTemplate(
  args: InferRequestType<typeof client.mail_settings.template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.template.$get(args, options))
}

export async function patchMailSettingsTemplate(
  args: InferRequestType<typeof client.mail_settings.template.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mail_settings.template.$patch(args, options))
}

export async function getMailboxProvidersStats(
  args: InferRequestType<typeof client.mailbox_providers.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailbox_providers.stats.$get(args, options))
}

export async function getMarketingContacts(options?: ClientRequestOptions) {
  return await parseResponse(client.marketing.contacts.$get(undefined, options))
}

export async function putMarketingContacts(
  args: InferRequestType<typeof client.marketing.contacts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.$put(args, options))
}

export async function deleteMarketingContacts(
  args: InferRequestType<typeof client.marketing.contacts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.$delete(args, options))
}

export async function postMarketingContactsBatch(
  args: InferRequestType<typeof client.marketing.contacts.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.batch.$post(args, options))
}

export async function getMarketingContactsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.marketing.contacts.count.$get(undefined, options))
}

export async function getMarketingContactsExports(options?: ClientRequestOptions) {
  return await parseResponse(client.marketing.contacts.exports.$get(undefined, options))
}

export async function postMarketingContactsExports(
  args: InferRequestType<typeof client.marketing.contacts.exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.exports.$post(args, options))
}

export async function getMarketingContactsExportsId(
  args: InferRequestType<(typeof client.marketing.contacts.exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.exports[':id'].$get(args, options))
}

export async function putMarketingContactsImports(
  args: InferRequestType<typeof client.marketing.contacts.imports.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.imports.$put(args, options))
}

export async function getMarketingContactsImportsId(
  args: InferRequestType<(typeof client.marketing.contacts.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.imports[':id'].$get(args, options))
}

export async function postMarketingContactsSearch(
  args: InferRequestType<typeof client.marketing.contacts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.search.$post(args, options))
}

export async function postMarketingContactsSearchEmails(
  args: InferRequestType<typeof client.marketing.contacts.search.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts.search.emails.$post(args, options))
}

export async function getMarketingContactsId(
  args: InferRequestType<(typeof client.marketing.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.contacts[':id'].$get(args, options))
}

export async function getMarketingFieldDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.marketing.field_definitions.$get(undefined, options))
}

export async function postMarketingFieldDefinitions(
  args: InferRequestType<typeof client.marketing.field_definitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.field_definitions.$post(args, options))
}

export async function deleteMarketingFieldDefinitionsCustomFieldId(
  args: InferRequestType<
    (typeof client.marketing.field_definitions)[':custom_field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.field_definitions[':custom_field_id'].$delete(args, options),
  )
}

export async function patchMarketingFieldDefinitionsCustomFieldId(
  args: InferRequestType<(typeof client.marketing.field_definitions)[':custom_field_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.field_definitions[':custom_field_id'].$patch(args, options),
  )
}

export async function getMarketingLists(
  args: InferRequestType<typeof client.marketing.lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists.$get(args, options))
}

export async function postMarketingLists(
  args: InferRequestType<typeof client.marketing.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists.$post(args, options))
}

export async function getMarketingListsId(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists[':id'].$get(args, options))
}

export async function deleteMarketingListsId(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists[':id'].$delete(args, options))
}

export async function patchMarketingListsId(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists[':id'].$patch(args, options))
}

export async function deleteMarketingListsIdContacts(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists[':id'].contacts.$delete(args, options))
}

export async function getMarketingListsIdContactsCount(
  args: InferRequestType<(typeof client.marketing.lists)[':id']['contacts']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.lists[':id'].contacts.count.$get(args, options))
}

export async function getMarketingSegments(
  args: InferRequestType<typeof client.marketing.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments.$get(args, options))
}

export async function postMarketingSegments(
  args: InferRequestType<typeof client.marketing.segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments.$post(args, options))
}

export async function getMarketingSegments20(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments['2.0'].$get(args, options))
}

export async function postMarketingSegments20(
  args: InferRequestType<(typeof client.marketing.segments)['2.0']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments['2.0'].$post(args, options))
}

export async function getMarketingSegments20SegmentId(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments['2.0'][':segment_id'].$get(args, options))
}

export async function deleteMarketingSegments20SegmentId(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments['2.0'][':segment_id'].$delete(args, options))
}

export async function patchMarketingSegments20SegmentId(
  args: InferRequestType<(typeof client.marketing.segments)['2.0'][':segment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments['2.0'][':segment_id'].$patch(args, options))
}

export async function postMarketingSegmentsDelete(
  args: InferRequestType<typeof client.marketing.segments.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments.delete.$post(args, options))
}

export async function getMarketingSegmentsSegmentId(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments[':segment_id'].$get(args, options))
}

export async function deleteMarketingSegmentsSegmentId(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments[':segment_id'].$delete(args, options))
}

export async function patchMarketingSegmentsSegmentId(
  args: InferRequestType<(typeof client.marketing.segments)[':segment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.segments[':segment_id'].$patch(args, options))
}

export async function postMarketingSenders(
  args: InferRequestType<typeof client.marketing.senders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.senders.$post(args, options))
}

export async function getMarketingSinglesends(
  args: InferRequestType<typeof client.marketing.singlesends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends.$get(args, options))
}

export async function postMarketingSinglesends(
  args: InferRequestType<typeof client.marketing.singlesends.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends.$post(args, options))
}

export async function deleteMarketingSinglesends(
  args: InferRequestType<typeof client.marketing.singlesends.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends.$delete(args, options))
}

export async function getMarketingSinglesendsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.marketing.singlesends.categories.$get(undefined, options))
}

export async function postMarketingSinglesendsSearch(
  args: InferRequestType<typeof client.marketing.singlesends.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends.search.$post(args, options))
}

export async function getMarketingSinglesendsId(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends[':id'].$get(args, options))
}

export async function postMarketingSinglesendsId(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends[':id'].$post(args, options))
}

export async function deleteMarketingSinglesendsId(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends[':id'].$delete(args, options))
}

export async function patchMarketingSinglesendsId(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends[':id'].$patch(args, options))
}

export async function putMarketingSinglesendsIdSchedule(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends[':id'].schedule.$put(args, options))
}

export async function deleteMarketingSinglesendsIdSchedule(
  args: InferRequestType<(typeof client.marketing.singlesends)[':id']['schedule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.singlesends[':id'].schedule.$delete(args, options))
}

export async function getMarketingStatsAutomations(
  args: InferRequestType<typeof client.marketing.stats.automations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.automations.$get(args, options))
}

export async function getMarketingStatsAutomationsExport(
  args: InferRequestType<typeof client.marketing.stats.automations.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.automations.export.$get(args, options))
}

export async function getMarketingStatsAutomationsId(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.automations[':id'].$get(args, options))
}

export async function getMarketingStatsAutomationsIdLinks(
  args: InferRequestType<(typeof client.marketing.stats.automations)[':id']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.automations[':id'].links.$get(args, options))
}

export async function getMarketingStatsSinglesends(
  args: InferRequestType<typeof client.marketing.stats.singlesends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.singlesends.$get(args, options))
}

export async function getMarketingStatsSinglesendsExport(
  args: InferRequestType<typeof client.marketing.stats.singlesends.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.singlesends.export.$get(args, options))
}

export async function getMarketingStatsSinglesendsId(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.singlesends[':id'].$get(args, options))
}

export async function getMarketingStatsSinglesendsIdLinks(
  args: InferRequestType<(typeof client.marketing.stats.singlesends)[':id']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.stats.singlesends[':id'].links.$get(args, options))
}

export async function postMarketingTestSendEmail(
  args: InferRequestType<typeof client.marketing.test.send_email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.test.send_email.$post(args, options))
}

export async function getMessages(
  args: InferRequestType<typeof client.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$get(args, options))
}

export async function postMessagesDownload(
  args: InferRequestType<typeof client.messages.download.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.download.$post(args, options))
}

export async function getMessagesDownloadDownloadUuid(
  args: InferRequestType<(typeof client.messages.download)[':download_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.download[':download_uuid'].$get(args, options))
}

export async function getMessagesMsgId(
  args: InferRequestType<(typeof client.messages)[':msg_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':msg_id'].$get(args, options))
}

export async function getPartnerSettings(
  args: InferRequestType<typeof client.partner_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner_settings.$get(args, options))
}

export async function getPartnerSettingsNewRelic(
  args: InferRequestType<typeof client.partner_settings.new_relic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner_settings.new_relic.$get(args, options))
}

export async function patchPartnerSettingsNewRelic(
  args: InferRequestType<typeof client.partner_settings.new_relic.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partner_settings.new_relic.$patch(args, options))
}

export async function getScopes(
  args: InferRequestType<typeof client.scopes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scopes.$get(args, options))
}

export async function getScopesRequests(
  args: InferRequestType<typeof client.scopes.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scopes.requests.$get(args, options))
}

export async function deleteScopesRequestsRequestId(
  args: InferRequestType<(typeof client.scopes.requests)[':request_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scopes.requests[':request_id'].$delete(args, options))
}

export async function patchScopesRequestsRequestIdApprove(
  args: InferRequestType<(typeof client.scopes.requests)[':request_id']['approve']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scopes.requests[':request_id'].approve.$patch(args, options))
}

export async function getSenders(
  args: InferRequestType<typeof client.senders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.$get(args, options))
}

export async function postSenders(
  args: InferRequestType<typeof client.senders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.$post(args, options))
}

export async function getSendersSenderId(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':sender_id'].$get(args, options))
}

export async function deleteSendersSenderId(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':sender_id'].$delete(args, options))
}

export async function patchSendersSenderId(
  args: InferRequestType<(typeof client.senders)[':sender_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':sender_id'].$patch(args, options))
}

export async function postSendersSenderIdResendVerification(
  args: InferRequestType<(typeof client.senders)[':sender_id']['resend_verification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':sender_id'].resend_verification.$post(args, options))
}

export async function postSsoCertificates(
  args: InferRequestType<typeof client.sso.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.certificates.$post(args, options))
}

export async function getSsoCertificatesCertId(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.certificates[':cert_id'].$get(args, options))
}

export async function deleteSsoCertificatesCertId(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.certificates[':cert_id'].$delete(args, options))
}

export async function patchSsoCertificatesCertId(
  args: InferRequestType<(typeof client.sso.certificates)[':cert_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.certificates[':cert_id'].$patch(args, options))
}

export async function getSsoIntegrations(
  args: InferRequestType<typeof client.sso.integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.integrations.$get(args, options))
}

export async function postSsoIntegrations(
  args: InferRequestType<typeof client.sso.integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.integrations.$post(args, options))
}

export async function getSsoIntegrationsId(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.integrations[':id'].$get(args, options))
}

export async function deleteSsoIntegrationsId(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.integrations[':id'].$delete(args, options))
}

export async function patchSsoIntegrationsId(
  args: InferRequestType<(typeof client.sso.integrations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.integrations[':id'].$patch(args, options))
}

export async function getSsoIntegrationsIntegrationIdCertificates(
  args: InferRequestType<
    (typeof client.sso.integrations)[':integration_id']['certificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sso.integrations[':integration_id'].certificates.$get(args, options),
  )
}

export async function postSsoTeammates(
  args: InferRequestType<typeof client.sso.teammates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.teammates.$post(args, options))
}

export async function patchSsoTeammatesUsername(
  args: InferRequestType<(typeof client.sso.teammates)[':username']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.teammates[':username'].$patch(args, options))
}

export async function getStats(
  args: InferRequestType<typeof client.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.$get(args, options))
}

export async function getSubusers(
  args: InferRequestType<typeof client.subusers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers.$get(args, options))
}

export async function postSubusers(
  args: InferRequestType<typeof client.subusers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers.$post(args, options))
}

export async function getSubusersReputations(
  args: InferRequestType<typeof client.subusers.reputations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers.reputations.$get(args, options))
}

export async function getSubusersStats(
  args: InferRequestType<typeof client.subusers.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers.stats.$get(args, options))
}

export async function getSubusersStatsMonthly(
  args: InferRequestType<typeof client.subusers.stats.monthly.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers.stats.monthly.$get(args, options))
}

export async function getSubusersStatsSums(
  args: InferRequestType<typeof client.subusers.stats.sums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers.stats.sums.$get(args, options))
}

export async function deleteSubusersSubuserName(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].$delete(args, options))
}

export async function patchSubusersSubuserName(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].$patch(args, options))
}

export async function putSubusersSubuserNameIps(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['ips']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].ips.$put(args, options))
}

export async function getSubusersSubuserNameMonitor(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].monitor.$get(args, options))
}

export async function putSubusersSubuserNameMonitor(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].monitor.$put(args, options))
}

export async function postSubusersSubuserNameMonitor(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].monitor.$post(args, options))
}

export async function deleteSubusersSubuserNameMonitor(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['monitor']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].monitor.$delete(args, options))
}

export async function getSubusersSubuserNameStatsMonthly(
  args: InferRequestType<(typeof client.subusers)[':subuser_name']['stats']['monthly']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subusers[':subuser_name'].stats.monthly.$get(args, options))
}

export async function getSuppressionBlocks(
  args: InferRequestType<typeof client.suppression.blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.blocks.$get(args, options))
}

export async function deleteSuppressionBlocks(
  args: InferRequestType<typeof client.suppression.blocks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.blocks.$delete(args, options))
}

export async function getSuppressionBlocksEmail(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.blocks[':email'].$get(args, options))
}

export async function deleteSuppressionBlocksEmail(
  args: InferRequestType<(typeof client.suppression.blocks)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.blocks[':email'].$delete(args, options))
}

export async function getSuppressionBounces(
  args: InferRequestType<typeof client.suppression.bounces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.bounces.$get(args, options))
}

export async function deleteSuppressionBounces(
  args: InferRequestType<typeof client.suppression.bounces.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.bounces.$delete(args, options))
}

export async function getSuppressionBouncesEmail(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.bounces[':email'].$get(args, options))
}

export async function deleteSuppressionBouncesEmail(
  args: InferRequestType<(typeof client.suppression.bounces)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.bounces[':email'].$delete(args, options))
}

export async function getSuppressionInvalidEmails(
  args: InferRequestType<typeof client.suppression.invalid_emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.invalid_emails.$get(args, options))
}

export async function deleteSuppressionInvalidEmails(
  args: InferRequestType<typeof client.suppression.invalid_emails.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.invalid_emails.$delete(args, options))
}

export async function getSuppressionInvalidEmailsEmail(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.invalid_emails[':email'].$get(args, options))
}

export async function deleteSuppressionInvalidEmailsEmail(
  args: InferRequestType<(typeof client.suppression.invalid_emails)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.invalid_emails[':email'].$delete(args, options))
}

export async function getSuppressionSpamReports(
  args: InferRequestType<typeof client.suppression.spam_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.spam_reports.$get(args, options))
}

export async function deleteSuppressionSpamReports(
  args: InferRequestType<typeof client.suppression.spam_reports.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.spam_reports.$delete(args, options))
}

export async function getSuppressionSpamReportsEmail(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.spam_reports[':email'].$get(args, options))
}

export async function deleteSuppressionSpamReportsEmail(
  args: InferRequestType<(typeof client.suppression.spam_reports)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.spam_reports[':email'].$delete(args, options))
}

export async function getSuppressionUnsubscribes(
  args: InferRequestType<typeof client.suppression.unsubscribes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppression.unsubscribes.$get(args, options))
}

export async function getTeammates(
  args: InferRequestType<typeof client.teammates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates.$get(args, options))
}

export async function postTeammates(
  args: InferRequestType<typeof client.teammates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates.$post(args, options))
}

export async function getTeammatesPending(
  args: InferRequestType<typeof client.teammates.pending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates.pending.$get(args, options))
}

export async function deleteTeammatesPendingToken(
  args: InferRequestType<(typeof client.teammates.pending)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates.pending[':token'].$delete(args, options))
}

export async function postTeammatesPendingTokenResend(
  args: InferRequestType<(typeof client.teammates.pending)[':token']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates.pending[':token'].resend.$post(args, options))
}

export async function getTeammatesUsername(
  args: InferRequestType<(typeof client.teammates)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates[':username'].$get(args, options))
}

export async function deleteTeammatesUsername(
  args: InferRequestType<(typeof client.teammates)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates[':username'].$delete(args, options))
}

export async function patchTeammatesUsername(
  args: InferRequestType<(typeof client.teammates)[':username']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teammates[':username'].$patch(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function postTemplates(
  args: InferRequestType<typeof client.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$post(args, options))
}

export async function getTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].$get(args, options))
}

export async function postTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].$post(args, options))
}

export async function deleteTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].$delete(args, options))
}

export async function patchTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':template_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].$patch(args, options))
}

export async function postTemplatesTemplateIdVersions(
  args: InferRequestType<(typeof client.templates)[':template_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].versions.$post(args, options))
}

export async function getTemplatesTemplateIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_id'].versions[':version_id'].$get(args, options),
  )
}

export async function deleteTemplatesTemplateIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_id'].versions[':version_id'].$delete(args, options),
  )
}

export async function patchTemplatesTemplateIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_id'].versions[':version_id'].$patch(args, options),
  )
}

export async function postTemplatesTemplateIdVersionsVersionIdActivate(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['versions'][':version_id']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_id'].versions[':version_id'].activate.$post(args, options),
  )
}

export async function getTrackingSettings(
  args: InferRequestType<typeof client.tracking_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.$get(args, options))
}

export async function getTrackingSettingsClick(
  args: InferRequestType<typeof client.tracking_settings.click.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.click.$get(args, options))
}

export async function patchTrackingSettingsClick(
  args: InferRequestType<typeof client.tracking_settings.click.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.click.$patch(args, options))
}

export async function getTrackingSettingsGoogleAnalytics(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.google_analytics.$get(args, options))
}

export async function patchTrackingSettingsGoogleAnalytics(
  args: InferRequestType<typeof client.tracking_settings.google_analytics.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.google_analytics.$patch(args, options))
}

export async function getTrackingSettingsOpen(
  args: InferRequestType<typeof client.tracking_settings.open.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.open.$get(args, options))
}

export async function patchTrackingSettingsOpen(
  args: InferRequestType<typeof client.tracking_settings.open.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.open.$patch(args, options))
}

export async function getTrackingSettingsSubscription(
  args: InferRequestType<typeof client.tracking_settings.subscription.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.subscription.$get(args, options))
}

export async function patchTrackingSettingsSubscription(
  args: InferRequestType<typeof client.tracking_settings.subscription.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_settings.subscription.$patch(args, options))
}

export async function getUserAccount(
  args: InferRequestType<typeof client.user.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.account.$get(args, options))
}

export async function getUserCredits(
  args: InferRequestType<typeof client.user.credits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.credits.$get(args, options))
}

export async function getUserEmail(
  args: InferRequestType<typeof client.user.email.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.email.$get(args, options))
}

export async function putUserEmail(
  args: InferRequestType<typeof client.user.email.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.email.$put(args, options))
}

export async function putUserPassword(
  args: InferRequestType<typeof client.user.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.password.$put(args, options))
}

export async function getUserProfile(
  args: InferRequestType<typeof client.user.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.profile.$get(args, options))
}

export async function patchUserProfile(
  args: InferRequestType<typeof client.user.profile.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.profile.$patch(args, options))
}

export async function getUserScheduledSends(
  args: InferRequestType<typeof client.user.scheduled_sends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.scheduled_sends.$get(args, options))
}

export async function postUserScheduledSends(
  args: InferRequestType<typeof client.user.scheduled_sends.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.scheduled_sends.$post(args, options))
}

export async function getUserScheduledSendsBatchId(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.scheduled_sends[':batch_id'].$get(args, options))
}

export async function deleteUserScheduledSendsBatchId(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.scheduled_sends[':batch_id'].$delete(args, options))
}

export async function patchUserScheduledSendsBatchId(
  args: InferRequestType<(typeof client.user.scheduled_sends)[':batch_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.scheduled_sends[':batch_id'].$patch(args, options))
}

export async function getUserSettingsEnforcedTls(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.settings.enforced_tls.$get(args, options))
}

export async function patchUserSettingsEnforcedTls(
  args: InferRequestType<typeof client.user.settings.enforced_tls.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.settings.enforced_tls.$patch(args, options))
}

export async function getUserUsername(
  args: InferRequestType<typeof client.user.username.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.username.$get(args, options))
}

export async function putUserUsername(
  args: InferRequestType<typeof client.user.username.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.username.$put(args, options))
}

export async function getUserWebhooksEventSettings(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.event.settings.$get(args, options))
}

export async function patchUserWebhooksEventSettings(
  args: InferRequestType<typeof client.user.webhooks.event.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.event.settings.$patch(args, options))
}

export async function getUserWebhooksEventSettingsSigned(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.event.settings.signed.$get(args, options))
}

export async function patchUserWebhooksEventSettingsSigned(
  args: InferRequestType<typeof client.user.webhooks.event.settings.signed.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.event.settings.signed.$patch(args, options))
}

export async function postUserWebhooksEventTest(
  args: InferRequestType<typeof client.user.webhooks.event.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.event.test.$post(args, options))
}

export async function getUserWebhooksParseSettings(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.parse.settings.$get(args, options))
}

export async function postUserWebhooksParseSettings(
  args: InferRequestType<typeof client.user.webhooks.parse.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.parse.settings.$post(args, options))
}

export async function getUserWebhooksParseSettingsHostname(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.parse.settings[':hostname'].$get(args, options))
}

export async function deleteUserWebhooksParseSettingsHostname(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.webhooks.parse.settings[':hostname'].$delete(args, options),
  )
}

export async function patchUserWebhooksParseSettingsHostname(
  args: InferRequestType<(typeof client.user.webhooks.parse.settings)[':hostname']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.parse.settings[':hostname'].$patch(args, options))
}

export async function getUserWebhooksParseStats(
  args: InferRequestType<typeof client.user.webhooks.parse.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.webhooks.parse.stats.$get(args, options))
}

export async function postValidationsEmail(
  args: InferRequestType<typeof client.validations.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validations.email.$post(args, options))
}

export async function getVerifiedSenders(
  args: InferRequestType<typeof client.verified_senders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_senders.$get(args, options))
}

export async function postVerifiedSenders(
  args: InferRequestType<typeof client.verified_senders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_senders.$post(args, options))
}

export async function getVerifiedSendersDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.verified_senders.domains.$get(undefined, options))
}

export async function postVerifiedSendersResendId(
  args: InferRequestType<(typeof client.verified_senders.resend)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_senders.resend[':id'].$post(args, options))
}

export async function getVerifiedSendersStepsCompleted(options?: ClientRequestOptions) {
  return await parseResponse(client.verified_senders.steps_completed.$get(undefined, options))
}

export async function getVerifiedSendersVerifyToken(
  args: InferRequestType<(typeof client.verified_senders.verify)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_senders.verify[':token'].$get(args, options))
}

export async function deleteVerifiedSendersId(
  args: InferRequestType<(typeof client.verified_senders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_senders[':id'].$delete(args, options))
}

export async function patchVerifiedSendersId(
  args: InferRequestType<(typeof client.verified_senders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_senders[':id'].$patch(args, options))
}

export async function postWhitelabelDnsEmail(
  args: InferRequestType<typeof client.whitelabel.dns.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.dns.email.$post(args, options))
}

export async function getWhitelabelDomains(
  args: InferRequestType<typeof client.whitelabel.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains.$get(args, options))
}

export async function postWhitelabelDomains(
  args: InferRequestType<typeof client.whitelabel.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains.$post(args, options))
}

export async function getWhitelabelDomainsDefault(
  args: InferRequestType<typeof client.whitelabel.domains.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains.default.$get(args, options))
}

export async function getWhitelabelDomainsSubuser(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains.subuser.$get(args, options))
}

export async function deleteWhitelabelDomainsSubuser(
  args: InferRequestType<typeof client.whitelabel.domains.subuser.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains.subuser.$delete(args, options))
}

export async function getWhitelabelDomainsDomainId(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':domain_id'].$get(args, options))
}

export async function deleteWhitelabelDomainsDomainId(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':domain_id'].$delete(args, options))
}

export async function patchWhitelabelDomainsDomainId(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':domain_id'].$patch(args, options))
}

export async function postWhitelabelDomainsDomainIdSubuser(
  args: InferRequestType<(typeof client.whitelabel.domains)[':domain_id']['subuser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':domain_id'].subuser.$post(args, options))
}

export async function postWhitelabelDomainsIdIps(
  args: InferRequestType<(typeof client.whitelabel.domains)[':id']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':id'].ips.$post(args, options))
}

export async function deleteWhitelabelDomainsIdIpsIp(
  args: InferRequestType<(typeof client.whitelabel.domains)[':id']['ips'][':ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':id'].ips[':ip'].$delete(args, options))
}

export async function postWhitelabelDomainsIdValidate(
  args: InferRequestType<(typeof client.whitelabel.domains)[':id']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.domains[':id'].validate.$post(args, options))
}

export async function getWhitelabelIps(
  args: InferRequestType<typeof client.whitelabel.ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.ips.$get(args, options))
}

export async function postWhitelabelIps(
  args: InferRequestType<typeof client.whitelabel.ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.ips.$post(args, options))
}

export async function getWhitelabelIpsId(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.ips[':id'].$get(args, options))
}

export async function deleteWhitelabelIpsId(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.ips[':id'].$delete(args, options))
}

export async function postWhitelabelIpsIdValidate(
  args: InferRequestType<(typeof client.whitelabel.ips)[':id']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.ips[':id'].validate.$post(args, options))
}

export async function getWhitelabelLinks(
  args: InferRequestType<typeof client.whitelabel.links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links.$get(args, options))
}

export async function postWhitelabelLinks(
  args: InferRequestType<typeof client.whitelabel.links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links.$post(args, options))
}

export async function getWhitelabelLinksDefault(
  args: InferRequestType<typeof client.whitelabel.links.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links.default.$get(args, options))
}

export async function getWhitelabelLinksSubuser(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links.subuser.$get(args, options))
}

export async function deleteWhitelabelLinksSubuser(
  args: InferRequestType<typeof client.whitelabel.links.subuser.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links.subuser.$delete(args, options))
}

export async function getWhitelabelLinksId(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links[':id'].$get(args, options))
}

export async function deleteWhitelabelLinksId(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links[':id'].$delete(args, options))
}

export async function patchWhitelabelLinksId(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links[':id'].$patch(args, options))
}

export async function postWhitelabelLinksIdValidate(
  args: InferRequestType<(typeof client.whitelabel.links)[':id']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links[':id'].validate.$post(args, options))
}

export async function postWhitelabelLinksLinkIdSubuser(
  args: InferRequestType<(typeof client.whitelabel.links)[':link_id']['subuser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whitelabel.links[':link_id'].subuser.$post(args, options))
}
